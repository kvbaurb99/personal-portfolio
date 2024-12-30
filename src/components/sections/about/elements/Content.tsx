import { AboutOverview, AboutTitle } from "../styles/about";

type Props = {
  aboutData: {
    title: string;
    overview: string;
  };
};

export default function Content({ aboutData }: Props) {
  return (
    <div>
      <AboutTitle>{aboutData.title}</AboutTitle>
      <AboutOverview dangerouslySetInnerHTML={{ __html: aboutData.overview }} />
    </div>
  );
}
