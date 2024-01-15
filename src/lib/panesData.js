const panesData = [
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', ';']
			}
		],
		comment: '切换到上一个活动Pane',
		keywords: '切换到上一个活动Pane'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': split-window -h'
			},
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '%']
			}
		],
		comment: '将当前Pane用竖直线切割为两个Pane',
		keywords: 'split-window -h 将当前Pane用竖直线切割为两个Pane'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': split-window -v'
			},
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '"']
			}
		],
		comment: '将当前Pane用水平线切割为两个Pane',
		keywords: 'split-window -v 将当前Pane用水平线切割为两个Pane'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': join-pane -s 2 -t 1'
			}
		],
		comment: '将两个Window合成一个Window的两个Pane（例子中是将Window2合并至Window1）',
		keywords: 'join-pane -s 2 -t 1 将两个Window合成一个Window的两个Pane'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': join-pane -s 2.1 -t 1.0'
			}
		],
		comment:
			'将某个Window的Pane移动到另一个Window中（例子中是将Window2中的Pane1移动到Window1中的Panel0处）',
		keywords: 'join-pane -s 2.1 -t 1.0 将某个Window的Pane移动到另一个Window中'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '{']
			}
		],
		comment: '将当前Pane前移',
		keywords: '将当前Pane前移'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '}']
			}
		],
		comment: '将当前Pane后移',
		keywords: '将当前Pane后移'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '↑']
			},
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '↓']
			},
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '←']
			},
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '→']
			}
		],
		comment: '根据方向按键切换活动Pane',
		keywords: '根据方向按键切换活动Pane'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': setw synchronize-panes'
			}
		],
		comment: '开启/关闭同步Pane模式（命令同时发送到所有Pane）',
		keywords: 'setw synchronize-panes 开启/关闭同步Pane模式（命令同时发送到所有Pane）'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'Spacebar']
			}
		],
		comment: '切换Pane的排布方式',
		keywords: '切换Pane的排布方式'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'o']
			}
		],
		comment: '跳转到下一个Pane',
		keywords: '跳转到下一个Pane'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'q']
			}
		],
		comment: '显示Pane编号',
		keywords: '显示Pane编号'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'q', ' ', '0', '...', '9']
			}
		],
		comment: '切换到指定编号的Pane',
		keywords: '切换到指定编号的Pane'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'z']
			}
		],
		comment: '扩大/还原当前Pane',
		keywords: '扩大/还原当前Pane'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '!']
			}
		],
		comment: '将当前Pane转化为Window',
		keywords: '将当前Pane转化为Window'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'Alt', '+', '↑']
			},
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'Alt', '+', '↓']
			}
		],
		comment: '调节当前Pane的高度',
		keywords: '调节当前Pane的高度'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'x']
			},
		],
		comment: '关闭当前Pane',
		keywords: '关闭当前Pane'
	}
];

export { panesData };
