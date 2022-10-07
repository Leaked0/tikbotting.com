/*For X-SMTH*/
rotate_left = (_0x2dc922, _0x3165e3) => {
	let _0x50346c = _0x3165e3 % 32
	return (
		((_0x2dc922 << _0x50346c) & 4294967295) |
		((_0x2dc922 & 4294967295) >> (32 - _0x50346c))
	)
}
FF_j = (_0x10a9dd, _0x301736, _0x5a8e34, _0x2f0a17) => {
	let _0x2a41f4
	if (0 <= _0x2f0a17 && _0x2f0a17 < 16) {
		_0x2a41f4 = _0x10a9dd ^ _0x301736 ^ _0x5a8e34
	}
	else {
		if (16 <= _0x2f0a17 && _0x2f0a17 < 64) {
			_0x2a41f4 =
				(_0x10a9dd & _0x301736) |
				(_0x10a9dd & _0x5a8e34) |
				(_0x301736 & _0x5a8e34)
		}
	}
	return _0x2a41f4
}
GG_j = (_0x5d5a4b, _0x14f80b, _0x5a9b84, _0x144161) => {
	let _0x3ccaec
	if (0 <= _0x144161 && _0x144161 < 16) {
		_0x3ccaec = _0x5d5a4b ^ _0x14f80b ^ _0x5a9b84
	}
	else {
		if (16 <= _0x144161 && _0x144161 < 64) {
			_0x3ccaec = (_0x5d5a4b & _0x14f80b) | (~_0x5d5a4b & _0x5a9b84)
		}
	}
	return _0x3ccaec
}
P_0 = (_0x25cca0) => {
	return _0x25cca0 ^ rotate_left(_0x25cca0, 9) ^ rotate_left(_0x25cca0, 17)
}
P_1 = (_0x12e1ee) => {
	return _0x12e1ee ^ rotate_left(_0x12e1ee, 15) ^ rotate_left(_0x12e1ee, 23)
}
CF = (_0x28c376, _0x894cea, _0x24b470) => {
	let _0x363a5b = []
	for (let _0x1e5303 = 0; _0x1e5303 < 16; _0x1e5303++) {
		let _0x132891 = 16777216,
			_0xbe9bdd = 0
		for (
			let _0x17d860 = 0; _0x17d860 < (_0x1e5303 * 4, (_0x1e5303 + 1) * 4); _0x17d860++
		) {
			;
			(_0xbe9bdd = _0xbe9bdd + _0x894cea[_0x17d860] * _0x132891),
			(_0x132891 = parseInt(_0x132891 / 256))
		}
		_0x363a5b.push(_0xbe9bdd)
	}
	for (let _0x22576a = 16; _0x22576a < 68; _0x22576a++) {
		_0x363a5b.push(0)
		_0x363a5b[_0x22576a] =
			P_1(
				_0x363a5b[_0x22576a - 16] ^
				_0x363a5b[_0x22576a - 9] ^
				rotate_left(_0x363a5b[_0x22576a - 3], 15)
			) ^
			rotate_left(_0x363a5b[_0x22576a - 13], 7) ^
			_0x363a5b[_0x22576a - 6]
	}
	let _0x367013 = []
	for (let _0x1156ba = 0; _0x1156ba < 64; _0x1156ba++) {
		_0x367013.push(0),
			(_0x367013[_0x1156ba] = _0x363a5b[_0x1156ba] ^ _0x363a5b[_0x1156ba + 4]),
			(str1 = '%08x' % _0x367013[_0x1156ba])
	}
	let _0x5f5aa2,
		_0x362607,
		_0x4b78e9,
		_0xabd885,
		_0x3e6236,
		_0x177df8,
		_0x4730c3,
		_0x45adfb = _0x28c376
	for (let _0x2c7069 = 0; _0x2c7069 < 64; _0x2c7069++) {
		let _0xcd89da = rotate_left(
				(rotate_left(_0x5f5aa2, 12) +
					_0x3e6236 +
					rotate_left(_0x24b470[_0x2c7069], _0x2c7069)) &
				4294967295,
				7
			),
			_0x218e4c = _0xcd89da ^ rotate_left(_0x5f5aa2, 12),
			_0x95daaa =
			(FF_j(_0x5f5aa2, _0x362607, _0x4b78e9, _0x2c7069) +
				_0xabd885 +
				_0x218e4c +
				_0x367013[_0x2c7069]) &
			4294967295,
			_0x302f01 =
			(GG_j(_0x3e6236, _0x177df8, _0x4730c3, _0x2c7069) +
				_0x45adfb +
				_0xcd89da +
				_0x363a5b[_0x2c7069]) &
			4294967295
		_0xabd885 = _0x4b78e9
		_0x4b78e9 = rotate_left(_0x362607, 9)
		_0x362607 = _0x5f5aa2
		_0x5f5aa2 = _0x95daaa
		_0x45adfb = _0x4730c3
		_0x4730c3 = rotate_left(_0x177df8, 19)
		_0x177df8 = _0x3e6236
		_0x3e6236 = P_0(_0x302f01)
		_0x5f5aa2 = _0x5f5aa2 & 4294967295
		_0x362607 = _0x362607 & 4294967295
		_0x4b78e9 = _0x4b78e9 & 4294967295
		_0xabd885 = _0xabd885 & 4294967295
		_0x3e6236 = _0x3e6236 & 4294967295
		_0x177df8 = _0x177df8 & 4294967295
		_0x4730c3 = _0x4730c3 & 4294967295
		_0x45adfb = _0x45adfb & 4294967295
	}
	let _0x31f172 = []
	_0x31f172.push(_0x5f5aa2 ^ _0x28c376[0])
	_0x31f172.push(_0x362607 ^ _0x28c376[1])
	_0x31f172.push(_0x4b78e9 ^ _0x28c376[2])
	_0x31f172.push(_0xabd885 ^ _0x28c376[3])
	_0x31f172.push(_0x3e6236 ^ _0x28c376[4])
	_0x31f172.push(_0x177df8 ^ _0x28c376[5])
	return (
		_0x31f172.push(_0x4730c3 ^ _0x28c376[6]),
		_0x31f172.push(_0x45adfb ^ _0x28c376[7]),
		_0x31f172
	)
}
sm3_hash = (_0x1f8cb, _0x33c396) => {
	let _0x5ac836 = _0x1f8cb,
		_0x34f2b8 = _0x33c396
	_0x34f2b8 = parseInt(_0x34f2b8.replace(' ', ''), 16)
	let _0x332ff6 = []
	for (let _0x160bc3 = 0; _0x160bc3 < 8; _0x160bc3++) {
		_0x332ff6.push(0)
		_0x332ff6[_0x160bc3] = (_0x34f2b8 >> ((7 - _0x160bc3) * 32)) & 4294967295
	}
	_0x34f2b8 = _0x332ff6
	T_j = []
	let _0x42a232 = []
	for (let _0x2f8c41 = 0; _0x2f8c41 < 16; _0x2f8c41++) {
		T_j.push(0)
		T_j[_0x2f8c41] = 2043430169
	}
	for (let _0x357a0c = 0; _0x357a0c < 16; _0x357a0c++) {
		T_j.push(0), (T_j[_0x357a0c] = 2055708042)
	}
	const _0x2cb85b = _0x5ac836.length
	let _0x2dfad2 = _0x2cb85b % 64
	_0x42a232.push(128)
	_0x2dfad2++
	const _0x1cbec5 = 56
	if (_0x2dfad2 > _0x1cbec5) {
		_0x1cbec5 = _0x1cbec5 + 64
	}
	for (let _0x5cfe02 = _0x2cb85b % 64; _0x5cfe02 < _0x1cbec5; _0x5cfe02++) {
		_0x42a232.push(0)
	}
	let _0x1d460d = _0x2cb85b * 8,
		_0x181ab5 = [_0x1d460d % 256]
	for (let _0x43d6b8 = 0; _0x43d6b8 < 7; _0x43d6b8++) {
		;
		(_0x1d460d = parseInt(_0x1d460d / 256)), _0x181ab5.push(_0x1d460d % 256)
	}
	for (let _0x3457d4 = 0; _0x3457d4 < 8; _0x3457d4++) {
		_0x42a232.push(_0x181ab5[7 - _0x3457d4])
	}
	const _0x2bc6fc = Math.round(_0x42a232.length / 64)
	let _0x65e666 = []
	for (let _0x33ac77 = 0; _0x33ac77 < _0x2bc6fc; _0x33ac77++) {
		_0x65e666.push(
			_0x42a232.toString().substring(_0x33ac77 * 64, (_0x33ac77 + 1) * 64)
		)
	}
	let _0x2d2b2b = []
	_0x2d2b2b.push(_0x34f2b8)
	for (let _0x235558 = 0; _0x235558 < _0x2bc6fc; _0x235558++) {
		_0x2d2b2b.push(CF(_0x2d2b2b[_0x235558], _0x65e666[_0x235558], T_j))
	}
	y = _0x2d2b2b[1]
	let _0x10cfda = []
	for (let _0x1ad068 of y) {
		_0x10cfda.push(parseInt(_0x1ad068).toString(16).replace('-', ''))
	}
	return _0x10cfda.toString()
}
hex_592 = (_0x39ff27) => {
	return _0x39ff27.split('').reverse().join('')
}
x = (_0x2d9d89, _0x415437 = 5) => {
	let _0x56b451 = []
	for (let _0xa7d085 of [_0x2d9d89]) {
		_0x56b451.push(
			parseInt(_0xa7d085 ^ _0x415437)
			.toString(16)
			.slice(2)
		)
	}
	return _0x56b451.toString().replace(',', '')
}
e = (_0x1a09ec) => {
	let _0x254eaa = []
	for (
		let _0x43a6dd = 0; _0x43a6dd < _0x1a09ec.length; _0x43a6dd = _0x43a6dd + 57
	) {
		_0x254eaa.push(btoa(_0x1a09ec.toString().substring(_0x43a6dd, 57)))
	}
	return _0x254eaa.toString()
}
/*For X-SMTH*/

sign = (aweme_id, mathFloorDateTSDividePer1000) => {
	const mathFloorDateTSDividePer1000_toString = mathFloorDateTSDividePer1000.toString(16), x_gorgon =	'0411' + sm3_hash(aweme_id, mathFloorDateTSDividePer1000_toString).toString(16).replace(/,/g, '')
	console.log(mathFloorDateTSDividePer1000_toString)
	console.log(x_gorgon)
	console.log(aweme_id)
	const x_argus = e(hex_592(e(x(aweme_id, (key = parseInt(mathFloorDateTSDividePer1000))).toString())).replace('=', '')).replace('=', '').trim()
	const x__ladon = e(hex_592(e(mathFloorDateTSDividePer1000.toString())).replace('=', '')).replace('=', '').trim()
	return {
		'x-gorgon': x_gorgon,
		'x-khronos': mathFloorDateTSDividePer1000.toString(),
		'x-argus': x_argus,
		'x-ladon': x__ladon,
		'x-klython': mathFloorDateTSDividePer1000_toString,
	}
}
extract_id = (link) => {
	try {
		return /(\d{18,19})/g.exec(link)[0]
	}
	catch {
		return ''
	}
}
get_captcha_token = () => {
	const html = document.documentElement.innerHTML
	return /data-hcaptcha-response="(.*)" style="width: /g.exec(html)[1]
}
test = () => {
	console.log(get_captcha_token())
}
fuckoff = () => {
	var tiktokLink = document.getElementById('tiktok_link')
	let formData = new FormData()
	aweme_id = extract_id(tiktokLink.value)
	if (aweme_id.length > 0) {
		formData.append('link', aweme_id)
		captcha_token = get_captcha_token()
		if (captcha_token.length < 10) {
			alert('complete captcha')
			return
		}
		formData.append('captcha_token', captcha_token)
		const theHeaders = {}
		theHeaders['Access-Control-Allow-Origin'] = '*'
		fetch('/fuckoff', {
				method: 'POST',
				body: formData,
				headers: {
					...sign(aweme_id, Math.floor(Date.now() / 1000)),
					...theHeaders,
				},
			})
			.then((res) => {
				if (res.status >= 200 && res.status < 300) {
					return res.json()
				}
				else {
					throw new Error()
				}
			})
			.then((res) => {
				console.log(res)
				if (res.status == 'ok') {
					alert('sent views !!!')
				}
				else {
					if (res.timeout > 0) {
						alert('wait ' + res.timeout + ' seconds')
					}
				}
				location.reload()
			})
	}
	else {
		alert('Invalid TikTok Link')
	}
}
