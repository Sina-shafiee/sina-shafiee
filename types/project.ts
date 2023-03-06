export type Project = {
  image: {
    img_id: string;
    img_url: string;
  };
  title: string;
  technologies: string[];
  _id: string;
};

export type StrippedProject = {
  img: string;
  title: string;
  id: string;
};

export type SingleProjectType = {
  image: {
    img_id: string;
    img_url: string;
  };
  links: {
    github: string;
    website: string;
  };
  title: string;
  desc: string;
  _id: string;
};
