import SectionRoot from './Section.svelte';
import Content from './SectionContent.svelte';
import Background from './SectionBackground.svelte';
import Border from './SectionBorder.svelte';

type SectionComponent = typeof SectionRoot & {
	Content: typeof Content;
	Background: typeof Background;
	Border: typeof Border;
};

const Section: SectionComponent = Object.assign(SectionRoot, {
	Content,
	Background,
	Border
});

export default Section;

// export { SectionRoot as Section, Content as SectionContent, Background as SectionBackground };
