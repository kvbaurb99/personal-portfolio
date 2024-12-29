import { Clock, Building2, Briefcase } from "lucide-react";
import { H2, Section } from "@/styles/main";
import { experiences } from "./data/experiences";
import {
  CardHeader,
  CompanyName,
  ContentCard,
  Description,
  ExperienceItem,
  IconWrapper,
  Period,
  Position,
  TechStack,
  TechTag,
  TimelineContainer,
  TimelineDot,
  VerticalLine,
} from "./style/experience";

const ExperienceTimeline = () => {
  return (
    <Section $type="about" id="exp">
      <div>
        <H2>Doświadczenie zawodowe</H2>
        <TimelineContainer>
          <VerticalLine />
          {experiences.map((exp, index) => (
            <ExperienceItem key={index}>
              <TimelineDot>
                <Building2 className="w-4 h-4 text-white" />
              </TimelineDot>
              <ContentCard>
                <CardHeader>
                  <CompanyName>{exp.company}</CompanyName>
                  <Period>
                    <IconWrapper>
                      <Clock className="w-4 h-4" />
                    </IconWrapper>
                    <span>{exp.period}</span>
                  </Period>
                </CardHeader>

                <Position>
                  <IconWrapper>
                    <Briefcase className="w-4 h-4" />
                  </IconWrapper>
                  <span>{exp.position}</span>
                </Position>
                <Description>{exp.description}</Description>
                <TechStack>
                  {exp.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ContentCard>
            </ExperienceItem>
          ))}
        </TimelineContainer>
      </div>
    </Section>
  );
};

export default ExperienceTimeline;
