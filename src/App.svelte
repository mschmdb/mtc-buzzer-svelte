<script>
	import { quintOut } from 'svelte/easing'
	import { fade, draw, fly } from 'svelte/transition'
	import { readable, writable } from 'svelte/store'
	import { onMount } from 'svelte'
	import { inner, outer } from './shape.js'
	import test from './test'
	import { expand } from './custom-transitions.js'
  


	
	// In milliseconds
const timer = 4 * 1000;

  console.log(timer)
  
	let start
	
	function starttimer() {
		start = new Date().getTime()
    console.log('timer in starttimer', timer)
	}; 

	$: time = $mstime - start
	$: toWait = timer - time > 0 ? timer - time : 0
	$: progress = 1 - (toWait / timer)
	$: minutes = Math.floor(toWait / (60 * 1000))
	$: seconds = Math.floor((toWait - (minutes * 60 * 1000)) / 1000)
	
	const mstime = readable(new Date().getTime(), set => {
		let animationFrame
		const next = () => {
			set(new Date().getTime())
			animationFrame = requestAnimationFrame(next)
		}
		if (window.requestAnimationFrame) {
			next()
			return () => cancelAnimationFrame(animationFrame)
		}
	})

  
</script>



  
<style>
	:global(body) {
    color: #333;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }
	
  .app {
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    height: 100vh;
    width: 100%;
    padding: 0;
  }
	
  svg {
		width: 100%;
		height: 100%;
		opacity: 0.2;
   
	}
	
	path {
		fill: white;
		opacity: 1;
	}
	
	.timer-value {
    position: absolute;
    display: flex;
    /* mix-blend-mode: difference; */
    color: #999;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* line-height: 54px; */
    font-size: 194px;
    height: 100vh;
    width: 100vw;
  }
	
  .timer-value small {
    font-size: 80vw;
    font-weight: 800;
  }
	
	.centered {
		font-size: 50vw;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		font-family: 'helvetica';
		/* letter-spacing: 0.12em; */
		color: green;
		font-weight: 800;
	}

	.centered span {
		will-change: filter;
	}
</style>

<!-- Listen for Key down to start timer -->

<svelte:window on:keydown={starttimer}/>


<div class="app">
  <svg align="center" width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -10 225 105">
		{#if !toWait}
   
    <path
    in:expand="{{duration: 400, delay: 1000, easing: quintOut}}"
    style="stroke:green; stroke-width:20"
    d={outer}
  />
		{/if}
		<path
			use:test={progress}
			style="stroke:#890c58;  stroke-width: 1.5"
			d={inner}
		/>
	</svg>

	{#if toWait}
		<div out:fly={{y: -20, duration: 1000}} class="timer-value">
			
			<span style="font-weight:800; color:red">{seconds}s</span>
		</div>
	{:else}
		<div class="centered">
			{#each 'GO' as char, i}
				<span
					in:fade="{{delay: 1000 + i * 150, duration: 800}}"
				>{char}</span>
       
			{/each}
		</div>
   
	{/if}
</div>
