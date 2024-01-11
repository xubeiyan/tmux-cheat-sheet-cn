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
		comment: '删除/停止以mysession为名称的Session',
		keywords: 'tmux kill-ses kill-session -t mysession 删除/停止以mysession为名称的Session'
	},
	{
		command: [
			{
				type: 'tmuxCommand',
				text: '$ tmux kill-session -a'
			}
		],
		comment: '删除/停止除当前Session之外所有Session',
		keywords: 'tmux kill-session -a  删除/停止除当前Session之外所有Session'
	},
	{
		command: [
			{
				type: 'tmuxCommand',
				text: '$ tmux kill-session -a -t mysession'
			}
		],
		comment: '删除/停止除mysession之外所有Session',
		keywords: 'tmux kill-session -a -t mysession 删除/停止除mysession之外所有Session'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '$']
			}
		],
		comment: '重命名Session',
		keywords: '重命名Session'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'd']
			}
		],
		comment: '挂起当前Session',
		keywords: '挂起当前Session'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': attach -d'
			}
		],
		comment: '挂起其余的Session（最大化当前的Window）',
		keywords: 'attach -d 挂起其余的Session（最大化当前的Window）'
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
		comment: '查看Session列表',
		keywords: 'tmux ls list-sessions 查看Session列表'
	},
	{
		command: [
			{
				type: 'tmuxCommand',
				text: '$ tmux a'
			},
			{
				type: 'tmuxCommand',
				text: '$ tmux at'
			},
			{
				type: 'tmuxCommand',
				text: '$ tmux attach'
			},
			{
				type: 'tmuxCommand',
				text: '$ tmux attach-session'
			}
		],
		comment: '启用最后挂起的Session',
		keywords: 'tmux a at attach attach-session 启用最后挂起的Session'
	},
	{
		command: [
			{
				type: 'tmuxCommand',
				text: '$ tmux a -t mysession'
			},
			{
				type: 'tmuxCommand',
				text: '$ tmux at -t mysession'
			},
			{
				type: 'tmuxCommand',
				text: '$ tmux attach -t mysession'
			},
			{
				type: 'tmuxCommand',
				text: '$ tmux attach-session -t mysession'
			}
		],
		comment: '启用名为mysession的Session',
		keywords: 'tmux a at attach attach-session -t mysession 启用名为mysession的Session'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'w']
			}
		],
		comment: '查看Session和Window列表',
		keywords: '查看Session和Window列表'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '(']
			}
		],
		comment: '跳至前一个Session',
		keywords: '跳至前一个Session'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', ')']
			}
		],
		comment: '跳至后一个Session',
		keywords: '跳至后一个Session'
	}
];

export { sessions };
