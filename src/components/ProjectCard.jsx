import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectCard = ({ image: { img_url }, title, technologies, _id }) => {
  return (
    <Card>
      <CardImage src={img_url} />
      <CardBody>
        <Link to={`/projects/${_id}`}>
          <h4>{title}</h4>
        </Link>
        <div>
          {technologies.map((t, i) => {
            return <p key={i}>{t}</p>;
          })}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.article`
  background-color: ${({ theme: { colors } }) => colors.sideBarBg};
  height: 310px;
  min-width: 300px;
  flex: 1;
  border-radius: 4px;
  overflow: hidden;
`;

const CardImage = styled.img`
  object-fit: cover;
  max-height: 200px;
  width: 100%;
`;

const CardBody = styled.div`
  padding: 1rem;

  & > a > h4 {
    text-transform: capitalize;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    gap: 0.6rem;

    & > p {
      padding: 0.4rem;
      border-radius: 4px;
      background-color: ${({ theme: { colors } }) => colors.bodyBg};
      font-size: 0.8em;
      text-transform: capitalize;
    }
  }
`;
