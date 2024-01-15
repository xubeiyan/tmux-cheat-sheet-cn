const helpData = [
	{
		command: [
			{
				type: 'tmuxCommand',
				text: '$ tmux list-keys'
			},
			{
				type: 'tmuxInnerCommand',
				text: ': list-keys'
			},
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '?']
			}
		],
		comment: '显示所有的绑定键位（快捷键）',
		keywords: 'tmux list-keys 显示所有的绑定键位（快捷键）'
	},
	{
		command: [
			{
				type: 'tmuxCommand',
				text: '$ tmux info'
			}
		],
		comment: '显示所有的Session，Window，Pane等',
		keywords: '显示所有的Session，Window，Pane等'
	}
];

export { helpData };
