<script module lang="ts">
	export const borderStyles: {
		shared: string;
		leftBorder: string;
		rightBorder: string;
	} = {
		shared: 'hidden xs:block w-px h-full row-start-1 bg-surface-5 dark:bg-surface-13 transition-colors duration-(--duration-global-cols)',
		leftBorder: 'col-start-2 justify-self-start',
		rightBorder: '-col-end-2  justify-self-end'
	};
</script>

<span class="{borderStyles.shared} {borderStyles.leftBorder}"></span>
<span class="{borderStyles.shared} {borderStyles.rightBorder}"></span>
