import SectionRoot from './Section.svelte'
import Content from './SectionContent.svelte'
import Background from './SectionBackground.svelte'

type SectionComponent = typeof SectionRoot & {
  Content: typeof Content;
  Background: typeof Background;
}

const Section: SectionComponent = Object.assign(SectionRoot, {
  Content,
  Background
})

export default Section;

// export { SectionRoot as Section, Content as SectionContent, Background as SectionBackground };
