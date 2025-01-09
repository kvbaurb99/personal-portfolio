import { H2, Section } from "@/styles/main";
import { articles } from "@/data/blog/articles/articles";
import { Link } from "@/lib/i18n";
import {
  ArticleContainer,
  ArticleOverview,
  ArticleTitle,
  GridContainer,
  ReadButton,
  StyledImage,
} from "./styles/blog";

export default function BlogSection() {
  return (
    <Section id="blog">
      <H2>Najnowsze artykuły na blogu</H2>
      <GridContainer>
        {articles.map((article, index) => (
          <ArticleContainer key={index}>
            <Link href={`/blog/${article.slug}`}>
              <StyledImage
                width={360}
                height={360}
                src={article.image}
                alt={article.title}
              />
            </Link>
            <Link href={`/blog/${article.slug}`}>
              <ArticleTitle>{article.title}</ArticleTitle>
            </Link>
            <ArticleOverview>{article.overview}</ArticleOverview>
            <Link href={`/blog/${article.slug}`}>
              <ReadButton>Czytaj artykuł</ReadButton>
            </Link>
          </ArticleContainer>
        ))}
      </GridContainer>
    </Section>
  );
}
