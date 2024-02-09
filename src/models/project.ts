export default interface Project {
  title: string;
  image: string;
  description: string;
  skills: string[];
  moreInfo: MoreInfo;
}

interface MoreInfo {
  about: Section[];
  techInfo: string[];
  gallery: string[];
  githubLink: string;
  video: string;
}

interface Section {
  subtitle: string;
  content: string[];
  images: string[];
  captions: string[];
}
