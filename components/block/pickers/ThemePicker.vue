<template>
	<div
		class="theme-picker"
		:class="{ 'active': isOpen }"
		@click="isOpen = !isOpen"
	>
		<span>Theme default:</span>
		<UiIconEyedropper />

		<div
			class="theme-picker__list"
			v-if="isOpen"
			@click.stop
		>
			<div
				v-for="themeData in themesData"
				class="theme-picker__item"
				:style="{
					'background-color': themeData.colors.background,
					'border-color': themeData.colors.text
				}"
				@click.stop="handleThemeChoice('light')"
				:key="themeData.name"
			>
				<UiIconSun :style="{
					'fill': themeData.colors.text
				}" />
				<span
					class="theme-name"
					:style="{
						'color': themeData.colors.text
					}"
				>{{ themeData.name }}</span>
				<div class="theme-picker__item-colors">
					<span
						v-for="color in themeData.colors"
						:style="{
							'background-color': color
						}"
						:key="color"
					></span>
				</div>
			</div>

			<!-- --- --- --- --- --- --- --- --- --- --- --- --- --- -->
			<!--			<div-->
			<!--				class="theme-picker__item"-->
			<!--				@click.stop="handleThemeChoice('light')"-->
			<!--			>-->
			<!--				<UiIconSun />-->
			<!--				<span class="theme-name">Light</span>-->
			<!--				<div class="theme-picker__item-colors">-->
			<!--					<span style="background-color: white;"></span>-->
			<!--					<span style="background-color: red;"></span>-->
			<!--					<span style="background-color: black;"></span>-->
			<!--				</div>-->
			<!--			</div>-->

			<!--			<div-->
			<!--				class="theme-picker__item"-->
			<!--				@click.stop="handleThemeChoice('dark')"-->
			<!--			>-->
			<!--				<UiIconMoonStart />-->
			<!--				<span class="theme-name">Dark</span>-->
			<!--				<div class="theme-picker__item-colors">-->
			<!--					<span style="background-color: blue;"></span>-->
			<!--					<span style="background-color: orange;"></span>-->
			<!--					<span style="background-color: brown;"></span>-->
			<!--				</div>-->
			<!--			</div>-->

			<!--			<div-->
			<!--				class="theme-picker__item"-->
			<!--				@click.stop="handleThemeChoice('dark')"-->
			<!--			>-->
			<!--				<UiIconMoonStart />-->
			<!--				<span class="theme-name">Night</span>-->
			<!--				<div class="theme-picker__item-colors">-->
			<!--					<span style="background-color: blue;"></span>-->
			<!--					<span style="background-color: orange;"></span>-->
			<!--					<span style="background-color: brown;"></span>-->
			<!--				</div>-->
			<!--			</div>-->

			<!-- --- --- --- --- --- --- --- --- --- --- --- --- --- -->

		</div>
	</div>
</template>

<script lang="ts" setup>
import UiIconEyedropper from "~/components/ui/UiIconEyedropper.vue"

const isOpen = ref(false)

const themesData = reactive([
	{
		name: "Dark",
		colors: {
			background: "black",
			text: "white",
			success: "green",
		},
	},
	{
		name: "Light",
		colors: {
			background: "white",
			text: "black",
			success: "green",
		},
	},
	{
		name: "Bright",
		colors: {
			background: "blue",
			text: "red",
			success: "orange",
		},
	},
	{
		name: "Rain",
		colors: {
			background: "brown",
			text: "red",
			success: "orange",
		},
	},
])

const handleThemeChoice = (themeName: string) => {
	console.log("handleThemeChoice", themeName)
}
</script>

<style lang="scss" scoped>
.theme-picker {
	display: flex;
	margin-right: 0;
	padding: 15px;
	border-radius: 5px;
	color: var(--color-dark);
	cursor: pointer;
	position: relative;

	&:hover {
		background-color: #f7f6f6;
	}

	&.active {
		background-color: #f7f6f6;
	}

	span {
		margin-right: 10px;
	}

	&__list {
		position: absolute;
		box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.75);
		background-color: var(--color-light);
		border-radius: 10px;
		top: 60px;
		right: 0;
		width: 200px;
		border: 1px solid #8b9ca4;
		padding: 10px;
		transition: .3s;

		&.hidden {
			display: none;
		}
	}

	&__item {
		padding: 10px;
		background-color: #f3f2f2;
		margin-bottom: 5px;
		display: flex;
		align-items: center;
		border-radius: 8px;
		border: 1px solid #8b9ca4;
		transition: .3s;

		.theme-name {
			padding-left: 10px;
			width: 100%;
		}

		&:hover {
			//background-color: #c4bfbf;
			opacity: .8;
			transition: .3s;
		}

		&:last-child {
			margin-bottom: 0;
		}

		&-colors {
			display: flex;

			span {
				display: block;
				border: 1px solid #8f9fa6;
				margin-right: 5px;
				border-radius: 5px;
				width: 12px;
				height: 30px;

				&:last-child {
					margin-right: 0;
				}
			}
		}
	}
}
</style>