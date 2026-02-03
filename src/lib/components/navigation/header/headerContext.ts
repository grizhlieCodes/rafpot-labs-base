import { createContext } from "svelte";
import type { HeaderStoreBuilderInterface } from "./headerStore.svelte";

export const [getHeaderContext, setHeaderContext] = createContext<HeaderStoreBuilderInterface>();