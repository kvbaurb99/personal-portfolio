import { AboutOverview, AboutTitle, AboutTitleReverse } from "../styles/about";

type Props = {
  reverse?: boolean;
  aboutData: {
    title: string;
    overview: string;
  };
};

export default function Content({ aboutData, reverse }: Props) {
  return (
    <div>
      {reverse ? (
        <AboutTitleReverse>{aboutData.title}</AboutTitleReverse>
      ) : (
        <AboutTitle>{aboutData.title}</AboutTitle>
      )}
      <AboutOverview dangerouslySetInnerHTML={{ __html: aboutData.overview }} />
    </div>
  );
}
