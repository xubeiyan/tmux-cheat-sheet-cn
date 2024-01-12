const windowData = [
	{
		command: [
			{
				type: 'tmuxCommand',
				text: 'tmux new -s mysession -n mywindow'
			}
		],
		comment: '以mysession为会话名，mywindow为窗口名开启新的Session',
		keywords:
			'tmux new -s mysession -n mywindow 以mysession为会话名，mywindow为窗口名开启新的Session'
	},
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
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '&']
			}
		],
		comment: '关闭当前Window',
		keywords: '关闭当前Window'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'p']
			}
		],
		comment: '切换到前一个(previous)Window',
		keywords: '切换到前一个Window'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'n']
			}
		],
		comment: '切换到下一个(next)Window',
		keywords: '切换到下一个Window'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '0', '...', '9']
			}
		],
		comment: '根据数字切换到对应Window',
		keywords: '根据数字切换到对应Window'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'l']
			}
		],
		comment: '切换到上一个激活的Window',
		keywords: '切换到上一个激活的Window'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': swap-window -s 2 -t 1'
			}
		],
		comment: '交换编号为2和编号为1的Window的位置',
		keywords: 'swap-window -s 2 -t 1 交换编号为2和编号为1的Window的位置'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': swap-window -t -1'
			}
		],
		comment: '将当前Window向前移动一个位置',
		keywords: 'swap-window -t -1 将当前Window向前移动一个位置'
	}
];

export { windowData };
