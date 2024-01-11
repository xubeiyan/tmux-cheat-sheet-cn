const sessions = [
	{
		command: [
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
			}
		],
		comment: '开启新的Session',
		keywords: 'tmux new new-session 开启新的Session'
	},
	{
		command: [
			{
				type: 'tmuxCommand',
				text: '$ tmux new -s mysession'
			},
			{
				type: 'tmuxInnerCommand',
				text: ': new -s mysession'
			}
		],
		comment: '以mysession为名称开启新的Session',
		keywords: 'tmux new new-session -s 以mysession为名称开启新的Session'
	},
	{
		command: [
			{
				type: 'tmuxCommand',
				text: '$ tmux kill-ses -t mysession'
			},
			{
				type: 'tmuxCommand',
				text: '$ tmux kill-session -t mysession'
			}
		],
		comment: '以mysession为名称开启新的Session',
		keywords: 'tmux new new-session -s 以mysession为名称开启新的Session'
	},
	{
		command: [
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
			}
		],
		comment: '显示所有的Session',
		keywords: 'tmux ls list-sessions 显示所有的Session'
	}
];

export { sessions };
