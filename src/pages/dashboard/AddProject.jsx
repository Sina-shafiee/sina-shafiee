import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { Button } from '../../components/styled/Button.styled';
import { useAddProjectMutation } from '../../store/project/projectApi';

const AddProject = () => {
  const [technologies, setTechnologies] = useState([]);
  const [tags, setTags] = useState([]);
  const [imagePath, setImagePath] = useState('');
  const token = useSelector((state) => state.user.user.token);
  const [sendData, result] = useAddProjectMutation();

  const [formData, setFormData] = useState({
    title: '',
    bio: '',
    desc: '',
    technology: '',
    isCompleted: '',
    tag: ''
  });

  const [links, setLinks] = useState({
    github: '',
    website: ''
  });

  const { title, bio, desc, technology, isCompleted, tag } = formData;
  const { github, website } = links;

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLinkChange = (e) => {
    setLinks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // converting image to data url
  const handleImageSelect = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImagePath(reader.result);
    };
  };

  const handleTagDelete = (id) => {
    setTags((prev) => {
      return prev.filter((t) => t.id !== id);
    });
  };

  const handleTechDelete = (id) => {
    setTechnologies((prev) => {
      return prev.filter((t) => t.id !== id);
    });
  };

  useEffect(() => {
    // handling enter on technology and tag inputs
    const handleEnter = (e) => {
      e.stopPropagation();
      if (e.key === 'Enter' && e.target.name === 'tag') {
        setTags((prev) => [
          ...prev,
          {
            data: e.target.value,
            id: crypto.randomUUID()
          }
        ]);
        e.stopPropagation();
        setFormData((prev) => ({ ...prev, tag: '' }));
      } else if (e.key === 'Enter' && e.target.name === 'technology') {
        setTechnologies((prev) => [
          ...prev,
          {
            data: e.target.value,
            id: crypto.randomUUID()
          }
        ]);
        setFormData((prev) => ({ ...prev, technology: '' }));
      }
    };

    document.body.addEventListener('keydown', handleEnter);

    return () => {
      document.body.removeEventListener('keydown', handleEnter);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && bio && desc && imagePath && isCompleted && github && website) {
      const formattedTechnologies = technologies.map((tech) => tech.data);
      const formattedTags = tags.length ? tags.map((tech) => tech.data) : [];
      const formattedIsCompleted = isCompleted === 'false' ? false : true;
      const formattedLinks = { github, website };

      const data = {
        title,
        bio,
        desc,
        technologies: formattedTechnologies,
        tags: formattedTags,
        isCompleted: formattedIsCompleted,
        imageBlob: imagePath,
        links: formattedLinks
      };
      sendData({ data, token });
    }
  };

  useEffect(() => {
    if (result.data && result.isSuccess) {
      console.log(result);

      toast.success('project added');
    }
  }, [result]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Add new project</h2>
      <InputControl>
        <label htmlFor='title'>Project title</label>
        <input
          type='text'
          onChange={handleInputChange}
          value={title}
          name='title'
          id='title'
          placeholder='Project title'
        />
      </InputControl>
      <InputControl>
        <label htmlFor='bio'>Project bio</label>
        <textarea
          onChange={handleInputChange}
          value={bio}
          type='text'
          name='bio'
          id='bio'
          placeholder='Project bio'
        ></textarea>
      </InputControl>
      <InputControl>
        <label htmlFor='desc'>Project description</label>
        <textarea
          onChange={handleInputChange}
          value={desc}
          type='text'
          name='desc'
          id='desc'
          placeholder='Project desc'
        ></textarea>
      </InputControl>
      <InputControl>
        <label htmlFor='technology'>Project technologies</label>
        <div>
          {technologies.length
            ? technologies.map((tech) => (
                <p onClick={() => handleTechDelete(tech.id)} key={tech.id}>
                  {tech.data}
                </p>
              ))
            : null}
          <input
            type='text'
            name='technology'
            onChange={handleInputChange}
            value={technology}
            id='technology'
            placeholder='project technologies'
          />
        </div>
      </InputControl>

      <InputControl>
        <label htmlFor='tag'>Add tags</label>
        <div>
          {tags.length
            ? tags.map((tag) => (
                <p onClick={() => handleTagDelete(tag.id)} key={tag.id}>
                  {tag.data}
                </p>
              ))
            : null}
          <input
            placeholder='tags'
            onChange={handleInputChange}
            value={tag}
            type='text'
            name='tag'
            id='tag'
          />
        </div>
      </InputControl>

      <InputControl>
        <label htmlFor=''>Github repo link</label>
        <input
          type='text'
          onChange={handleLinkChange}
          name='github'
          id='github'
          value={github}
        />
      </InputControl>
      <InputControl>
        <label htmlFor=''>Website link</label>
        <input
          type='text'
          onChange={handleLinkChange}
          value={website}
          name='website'
          id='website'
        />
      </InputControl>
      <InputControl>
        <label htmlFor='isCompleted'>Completed ?</label>
        <select
          onChange={handleInputChange}
          value={isCompleted}
          name='isCompleted'
          id='isCompleted'
        >
          <option value={''}>select</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </InputControl>
      <InputControl>
        <input
          type='file'
          accept='image/png, image/jpeg, image/png'
          onChange={handleImageSelect}
          name='file'
          id='file'
        />
      </InputControl>
      <Button secondary type='submit'>
        Send
      </Button>
    </StyledForm>
  );
};

export default AddProject;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 2rem auto;
  width: 90%;
  min-width: 100px;
  padding: 0.5rem;
`;

export const InputControl = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & input {
    padding: 0.8rem;
    border-radius: 4px;
    font-size: 0.9em;
    border: 1px solid black;
  }

  & div {
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    padding: 0.7rem;
    background-color: #fefefe;

    & p {
      background-color: #eeeeee;
      padding: 0.1rem 0.4rem;
      border-radius: 2px;
      color: black;
    }
  }

  & > div > input {
    border: none;
    outline: unset;
    padding: 0;
    flex-grow: 1;
  }

  & select {
    padding: 0.2rem;
    display: inline-block;
    max-width: 50%;
  }

  & input[type='file'] {
    border-radius: 4px;
    border: 1px solid black;
    background-color: #fefefe;
    color: #010101;
  }

  & textarea {
    resize: vertical;
    border-radius: 4px;
    padding: 0.8rem;
    min-height: 100px;
  }
  & textarea[name='bio'] {
    min-height: 50px;
  }
`;
