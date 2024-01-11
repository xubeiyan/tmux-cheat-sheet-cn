const windowData = [
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'c']
			}
		],
		comment: '在当前Session中创建新的Window',
		keywords: '在当前Session中创建新的Window'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', ',']
			}
		],
		comment: '重命名当前Window',
		keywords: '重命名当前Window'
	}
];

export { windowData };
