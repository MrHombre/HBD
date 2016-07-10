var w = c.width = window.innerWidth,
		h = c.height = window.innerHeight,
		ctx = c.getContext( '2d' ),
		
		hw = w / 2, // half-width
		hh = h / 2,
		
		opts = {
			strings: [ 'HAPPY, BIRTHDAY!' ],
			charSize: 30;
			charSpacing: 35;
			lineHeight: 40,

			cx: w / 2,
			cy: h / 2,

			fireworkPrevPoints: 10,
			fireworkBaseLineWidth: 5,
			fireworkAddedLineWidth: 8,
			fireworkSpawnTime: 200,
			fireworkBaseReachTime: 30,
			fireworkAddedReachTime: 30,
			fireworkCircleBaseSize: 20,
			fireworkCircleAddedSize: 10,
			fireworkCircleBaseTime: 30,
			fireworkCircleAddedTime: 30,
			fireworkCircleFadeBaseTime: 10,
			fireworkCircleFadeAddedTime: 5,
			fireworkBaseShards: 5,
			fireworkAddedShards: 5,
			fireworkShardPrevPoints: 3,
			fireworkShardBaseVel: 4,
			fireworkShardAddedVel: 2,
			fireworkShardBaseSize: 3,
			fireworkShardAddedSize: 3,
			gravity: .1,
			upFlow: -.1,
			letterContemplatingWaitTime: 360,
			balloonSpawnTime: 20,
			balloonBaseInflateTime: 10,
			balloonAddedInflateTime: 10,
			balloonBaseSize: 20,
			balloonAddedSize: 20,
			balloonBaseVel: .4,
			balloonAddedVel: .4,
			balloonBaseRadian: -( Math.PI / 2 - .5 ),
			balloonAddedRadian: -1,
		},
		calc = {
			totalWidth: opts.charSpacing * Math.max(opts.string[0].length, opts.strings[1].length)
		},

		Tau = Math.PI * 2,
		TauQuarter = Tau / 4,

		letters = [];

ctx.font = opts.charSize + 'px Verdana';

function Letter(char, x, y){
	this.char = char;
	this.x = x;
	this.y = y;

	this.dx = -ctx.measureText( char ).width / 2;
	this.dy = +ctx.charSize / 2;

	this.fireworkDy = this.y - hh;
}