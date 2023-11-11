<template>
	<div class="docs">
		<div class="docs__side-navigator">
			<TheSideNavigator />
		</div>

		<div class="docs__content">
			<UiTextH1 class="docs__content_title">Templater UI</UiTextH1>

			<DocsBlock
				class="docs__content_block"
				title="Typography"
				id="typography">
				<template #default>
					<DocsTypography id="docs-typography" />
				</template>
				<template #codeExample>
					<TheCodeExampler :codeExample="codeExampleTypography" />
				</template>
			</DocsBlock>

			<DocsBlock class="docs__content_block" title="Buttons" id="buttons">
				<template #default>
					<DocsButtons id="docs-buttons" />
				</template>
				<template #codeExample>
					<TheCodeExampler :code-example="codeExampleButtons" />
				</template>
			</DocsBlock>

			<DocsBlock
				class="docs__content_block"
				title="Buttons group"
				id="buttons-group">
				<template #default>
					<DocsButtonsGroup id="docs-buttons-group" />
				</template>
				<template #codeExample>
					<TheCodeExampler :code-example="codeExampleButtonsGroup" />
				</template>
			</DocsBlock>

			<DocsBlock class="docs__content_block" title="Inputs" id="inputs">
				<template #default>
					<DocsInputs id="docs-inputs" />
				</template>
				<template #codeExample>
					<TheCodeExampler :code-example="codeExampleInputs" />
				</template>
			</DocsBlock>

			<DocsBlock class="docs__content_block" title="Alerts" id="alerts">
				<template #default>
					<DocsAlerts id="docs-alerts" />
				</template>
				<template #codeExample>
					<TheCodeExampler :code-example="codeExampleAlerts" />
				</template>
			</DocsBlock>

			<DocsBlock class="docs__content_block" title="Badges" id="badges">
				<template #default>
					<DocsBadges id="docs-badges" />
				</template>
				<template #codeExample>
					<TheCodeExampler :code-example="codeExampleBadges" />
				</template>
			</DocsBlock>

			<DocsBlock
				class="docs__content_block"
				title="Breadcrumbs"
				id="breadcrumbs">
				<template #default>
					<DocsBreadcrumbs id="docs-breadcrumbs" />
				</template>
				<template #codeExample>
					<TheCodeExampler :code-example="codeExampleBreadcrumbs" />
				</template>
			</DocsBlock>

			<DocsBlock class="docs__content_block" title="Card" id="card">
				<template #default>
					<DocsCard id="docs-card" />
				</template>
				<template #codeExample>
					<TheCodeExampler :code-example="codeExampleCard" />
				</template>
			</DocsBlock>
		</div>
	</div>
</template>

<script lang="ts" setup>
import DocsAlerts from '~/pages/docs/sections/DocsAlerts.vue'
import DocsBadges from '~/pages/docs/sections/DocsBadges.vue'
import DocsBlock from '~/pages/docs/components/DocsBlock.vue'
import DocsButtons from '~/pages/docs/sections/DocsButtons.vue'
import DocsButtonsGroup from './sections/DocsButtonsGroup.vue'
import DocsBreadcrumbs from '~/pages/docs/sections/DocsBreadcrumbs.vue'
import DocsInputs from '~/pages/docs/sections/DocsInputs.vue'
import DocsTypography from '~/pages/docs/sections/DocsTypography.vue'

import DocsCard from '~/pages/docs/sections/DocsCard.vue'

import TheSideNavigator from '~/components/block/TheSideNavigator.vue'
import TheCodeExampler from '~/components/block/TheCodeExampler.vue'

import codeExampleTypography from '~/pages/docs/composables/DocsTypography'
import codeExampleButtons from '~/pages/docs/composables/DocsButtons'
import codeExampleButtonsGroup from '~/pages/docs/composables/DocsButtonsGroup'
import codeExampleInputs from '~/pages/docs/composables/DocsInputs'
import codeExampleAlerts from '~/pages/docs/composables/DocsAlerts'
import codeExampleBadges from '~/pages/docs/composables/DocsBadges'
import codeExampleBreadcrumbs from '~/pages/docs/composables/DocsBreadcrumbs'
import codeExampleCard from '~/pages/docs/composables/DocsCard'
</script>

<style lang="scss" scoped>
.docs {
	display: flex;

	&__side-navigator {
		width: 200px;
	}

	&__content {
		max-width: calc(1000px - 200px);
		width: 100%;
		padding: 40px 0 40px 40px;

		&_title {
			margin-bottom: 40px;
			text-align: center;
		}

		&_block {
			margin-top: 20px;

			&:first-child {
				margin-bottom: 0;
			}
		}
	}
}
</style>
