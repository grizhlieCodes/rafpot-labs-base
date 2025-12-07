<script lang="ts">
	import { Button } from 'bits-ui';
	import { type ButtonProps } from '$lib/components/ui/types';

	let {
		children,
		href,
		disabled = null,
		class: className = null,
		variant = 'primary',
		size = 'default',
		...restProps
	} = <ButtonProps>$props();
</script>

<Button.Root {href} {disabled} class="button {variant} {size} {className}" {...restProps}>
	{@render children?.()}
</Button.Root>
