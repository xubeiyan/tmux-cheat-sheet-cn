// place files you want to import through the `$lib` alias in this folder.
const commandType = [
	{
		title: 'Sessions',
		content: [
			{
				type: 'tmuxCommand',
				text: '$ tmux'
			},
			{
				type: 'tmuxCommand',
				text: '$ tmux new'
			},
			{
				type: 'tmuxCommand',
				text: '$ tmux new-session'
			},
			{
				type: 'tmuxInnerCommand',
				text: ': new'
			},
			{
				type: 'comment',
				text: '开启新的Session'
			},
			{
				type: 'tmuxCommand',
				text: '$ tmux ls'
			},
			{
				type: 'tmuxCommand',
				text: '$ tmux list-sessions'
			},
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 's']
			},
			{
				type: 'comment',
				text: '显示所有的Session'
			}
		]
	}
];

export { commandType };
