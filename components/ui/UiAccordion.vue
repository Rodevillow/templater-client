<template>
	<div v-for="(item, index) in slides" :key="index" ref="slide">
		<header
			ref="header"
			class="header"
			:class="{ active: active === index }"
			@click="toggle(index)">
			{{ item.title }}
		</header>
		<div class="panel" :class="{ active: active === index }" ref="panel">
			{{ item.description }}
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slides: [
				{
					title: 'Lorem ipsum 3',
					description:
						'pharetra vel turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus',
				},
				{
					title: 'Lorem ipsum 1',
					description:
						'mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis',
				},
				{
					title: 'Lorem Lorem 2',
					description:
						'id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id diam vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue',
				},
			],
		}
	},
	methods: {
		closeAll() {
			this.$refs.panel.forEach(panel => {
				panel.style.height = null
			})
		},

		activeSlide() {
			this.$refs.header.forEach(header => {
				header.style.opacity = 1
			})
		},

		toggle(idx) {
			this.closeAll()
			this.activeSlide()

			if (this.active === idx) {
				this.active = null
			} else {
				this.active = idx
				const panel = this.$refs.panel[idx]
				const header = this.$refs.header[idx]

				if (header) {
					header.classList.add('active')
					header.style.opacity = 0.5
				}

				if (panel) {
					panel.classList.add('active')
					panel.style.height = panel.scrollHeight + 'px'
				}
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.header {
	color: var(--color-dark);
	background-color: var(--color-default);
	cursor: pointer;
	transition: 0.3s;

	height: 70px;

	padding: calc(var(--spacer) * 2);

	display: flex;
	justify-content: center;
	flex-direction: column;

	&:hover {
		transition: 0.3s;
		opacity: 0.5;
	}

	&.active {
		opacity: 0.5;
	}

	margin-bottom: 10px;
}
.panel {
	height: 0;
	overflow: hidden;

	margin-bottom: 10px;

	transition:
		height linear 0.3s 0.2s,
		opacity linear 0.2s 0s;

	&.active {
		transition:
			height linear 0.3s,
			opacity linear 0.2s 0.3s;

		padding: 0px 15px 0px 15px;
	}
}
</style>
