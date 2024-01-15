const miscData = [
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', ':']
			}
		],
		comment: '进入命令模式',
		keywords: '进入命令模式'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': set -g OPTION'
			}
		],
		comment: '为所有的Session设置OPTION',
		keywords: 'set -g OPTION 为所有的Session设置OPTION'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': setw -g OPTION'
			}
		],
		comment: '为所有的Window设置OPTION',
		keywords: 'setw -g OPTION 为所有的Window设置OPTION'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': set mouse on'
			}
		],
		comment: '启用鼠标模式',
		keywords: 'set mouse on 启用鼠标模式'
	}
];

export { miscData };
