const signoffs = [
	`<a href="https://github.com/merlinmann/wisdom/blob/master/wisdom.md">Looking for the chimneys.</a>`,
	`<a href="https://nerdfighteria.info/v/307598550/">Memento mori</a>&nbsp;😊`,
	`<a href="https://overcast.fm/+BmEPOwtek">Keep moving <em>and</em> get out of the way.</a>`,
	`<a href="https://youtu.be/FyQi79aYfxU?t=73">Don’t forget to be awesome!</a>&nbsp;🎃🐧`,
	`<span title="Any ideas? Please contact me!">Still brainstorming a name-specific sign-off,<br />—Jasper</span>`,
	`Awaiting the next episode of <a href="https://www.relay.fm/bonanza">BONANZA</a>.&nbsp;🛟`,
	`Curating pixels since 2018.`,
	`Farm-to-table pixels since 2018.`,
	`Half the battle is giving a shit.`,
	`Hand-coded in downtown Auckland, New Zealand.`,
	`Mourning the death of <a href="https://vimeo.com/groups/159435/videos/54553882">Mailbox</a> to this day. 😔`,
	`No generative AI’s were harmed in the making of this website.`,
	`Nothing half-arsed here.`,
	`Opinionated design for opinionated people.`,
	`Still figuring this shit out.`,
	`Thanks for dropping by!`,
	`The truth resists simplicity.`,
	`With 🤍 from big-little Tāmaki Makaurau Auckland.`,
	`You don’t have to be a prodigy to be unique. (<a href="https://songwhip.com/cavetown/talk-to-me">Cavetown,&nbsp;2019</a>)`,
]

document.getElementById('signoff').innerHTML = signoffs[Math.floor(Math.random() * signoffs.length)]
