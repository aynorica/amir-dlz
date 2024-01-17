import { DefaultBoxModel } from "../../models/boxes/default-box.model";
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBox() {
	const [init, setInit] = useState(false);
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);
	return (
		<div className="w-full relative">
			<div id="tsparticles" className=" w-full absolute -z-10 top-0">
				{init && (
					<Particles
						style={{
							backgroundColor: "#323031",
							backgroundImage: 'url("")',
							backgroundRepeat: "no-repeat",
						}}
						options={particleOptions}
					/>
				)}
			</div>
		</div>
	);
}

const particleOptions: any = {
	fpsLimit: 120,
	interactivity: {
		events: {
			onHover: {
				enable: true,
				mode: "bubble",
			},
		},
		modes: {
			bubble: {
				distance: 40,
				duration: 2,
				opacity: 8,
				size: 6,
				speed: 3,
			},
		},
	},
	particles: {
		color: {
			value: "#ff0000",
			animation: {
				enable: true,
				speed: 20,
				sync: true,
			},
		},
		links: {
			blink: false,
			color: "random",
			consent: false,
			distance: 30,
			enable: true,
			opacity: 0.3,
			width: 0.5,
		},
		move: {
			enable: true,
			outModes: "bounce",
			speed: { min: 0.5, max: 1 },
		},
		number: {
			value: 800,
		},
		opacity: {
			animation: {
				enable: true,
				speed: 2,
				sync: false,
			},
			random: false,
			value: { min: 0.05, max: 1 },
		},
		shape: {
			type: "circle",
		},
		size: {
			animation: {
				enable: false,
				speed: 40,
				sync: false,
			},
			random: true,
			value: { min: 0.1, max: 1 },
		},
	},
	polygon: {
		draw: {
			enable: true,
			stroke: {
				color: "#fff",
				width: 0.3,
				opacity: 0.2,
			},
		},
		move: {
			radius: 10,
		},
		inline: {
			arrangement: "equidistant",
		},
		scale: 5,
		type: "inline",
		url: "https://particles.js.org/images/smalldeer.svg",
	},
};
