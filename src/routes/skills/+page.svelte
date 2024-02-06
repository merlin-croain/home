<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import { base } from '$app/paths';
	import { SKILLS } from '$lib/params';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import type { Skill } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';
	import { getAssetURL } from '$lib/data/assets';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { Category } from '$lib/types';

	const { items, title } = SKILLS;
	const category = Object.values(Category);

	let result: Array<Skill> = items;

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (isBlank(query)) {
			result = items;
		}

		result = items.filter((it) => it.name.toLowerCase().includes(query));
	};
</script>

<SearchPage {title} on:search={onSearch}>
	{#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		{#each category as cat}
		<div>
			<h1>{cat}</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10 pb-8">
				{#each result as skill (skill.slug)}
					{#if skill.category === cat}
						<Card
							classes={['decoration-none']}
							tiltDegree={1}
							bgImg={getAssetURL(skill.logo)}
							color={skill.color}
						>
							<p class="text-[var(--tertiary-text)]">{skill.name}</p>
						</Card>
					{/if}
				{/each}
			</div>
		</div>
		{/each}
	{/if}
</SearchPage>
