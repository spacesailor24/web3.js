export const isHexStrict = (value: unknown) =>
	typeof value === 'string' && /^((-)?0x[0-9a-f]+|(0x))$/i.test(value);
