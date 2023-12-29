import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Surgery: where precision meets hope.",
    paragraph:
      "In the intricate world of surgery, precision is not just a skill but a lifeline, weaving together the delicate threads of hope and healing. Each surgical procedure represents a unique journey, where the hands of skilled professionals navigate the complexities of the human body with unwavering determination. Behind every incision lies a healthier future.",
    image: "/images/blog/surgery.jpg",
    author: {
      name: "Prashant Joshi",
      image: "/images/blog/author-01.png",
      designation: "Surgeon",
    },
    tags: ["Surgery"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "What is Anxiety and how to get rid of it?",
    paragraph:
      "Anxiety is a natural response to stress but can become problematic when excessive. To alleviate anxiety, try identifying triggers, practicing relaxation techniques, engaging in regular exercise, maintaining a healthy lifestyle, considering therapy, seeking social support, and, if necessary, consulting a healthcare professional for medication or further guidance.",
    image: "/images/blog/anxiety.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Psychiatrist",
    },
    tags: ["Anxiety"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Alzheimer's: where memories fade, resilience prevails.",
    paragraph:
      "In the realm of Alzheimer's, the fading echoes of memories are met with an unyielding spirit of resilience. Each moment may slip away, but within the struggle, there emerges a tenacity to embrace the present and champion the pursuit of breakthroughs. In the face of uncertainty those directly affected join hands,for a future where memories are not lost but preserved.",
    image: "/images/blog/alzhemier disease.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Psychologist",
    },
    tags: ["Alzhemier Disease"],
    publishDate: "2024",
  },
];
export default blogData;
