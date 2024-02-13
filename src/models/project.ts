export default interface Project {
  title: string;
  image: string;
  description: string;
  skills: string[];
  moreInfo: MoreInfo;
}

interface MoreInfo {
  about: Section[];
  techInfo: Section[];
  gallery: string[];
  githubLink: string;
  video: string;
}

interface Section {
  subtitle: string;
  content: ContentItem[];
}

interface ContentItem {
  p: string;
  img: string[];
  cap: string[];
}
