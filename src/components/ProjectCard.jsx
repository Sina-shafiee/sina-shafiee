import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectCard = ({
  image: { img_url },
  title,
  technologies,
  _id,
  index
}) => {
  return (
    <Card
      as={motion.div}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      layout
    >
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
  height: 320px;
  flex: 1 0 300px;
  border-radius: 4px;
  overflow: hidden;
  max-width: 450px;
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
