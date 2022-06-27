import React from "react";
import styled, { css } from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { COLORS, QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList opinions>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media ${QUERIES.tabletAndUp} {
    gap: 0;
    display: grid;
    grid-template-columns: 1fr 260px;
    grid-template-rows: auto 152px auto auto;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-row-gap: 24px;
  }
  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 500px 1.5fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  margin-bottom: 48px;
  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: 1px solid #ccc;
    margin-bottom: 0px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.tabletAndUp} {
    padding-left: 16px;
  }
  @media ${QUERIES.desktopAndUp} {
    padding-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  > *:not(:last-child) {
    border-bottom: 1px solid ${COLORS.gray[300]};
    margin-bottom: 12px;
    padding-bottom: 12px;
  }
  ${(props) =>
    props.opinions &&
    css`
      @media ${QUERIES.tabletOnly} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        > *:not(:last-child) {
          border-bottom: none;
          margin: 0;
          padding: 0;
        }
      }
    `}
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.desktopAndUp} {
    border-left: 1px solid #ccc;
    padding-left: 16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.desktopAndUp} {
    margin-left: 16px;
    padding-top: 16px;
    border-top: 1px solid #ccc;
  }
`;

export default MainStoryGrid;
