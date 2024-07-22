const copyModeData = [
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': setw -g mode-keys vi'
			}
		],
		comment: '使用vi键位',
		keywords: 'setw -g mode-keys vi 使用vi键位'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', '[']
			}
		],
		comment: '进入复制模式',
		keywords: '进入复制模式'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', 'PgUp']
			}
		],
		comment: '向上翻页，进入复制模式（下面的命令皆是复制模式下）',
		keywords: '向上翻页，进入复制模式'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['q']
			}
		],
		comment: '退出复制模式',
		keywords: '退出复制模式'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['g']
			}
		],
		comment: '跳至第一行',
		keywords: '跳至第一行'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['G']
			}
		],
		comment: '跳至最后一行',
		keywords: '跳至最后一行'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['↑']
			}
		],
		comment: '向上滚动',
		keywords: '向上滚动'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['↓']
			}
		],
		comment: '向下滚动',
		keywords: '向↓滚动'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['h']
			}
		],
		comment: '光标向左移动',
		keywords: '光标向左移动'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['j']
			}
		],
		comment: '光标向下移动',
		keywords: '光标向下移动'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['k']
			}
		],
		comment: '光标向上移动',
		keywords: '光标向上移动'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['l']
			}
		],
		comment: '光标向右移动',
		keywords: '光标向右移动'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['w']
			}
		],
		comment: '光标向后跳过一个单词',
		keywords: '光标向后跳过一个单词'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['b']
			}
		],
		comment: '光标向前跳过一个单词',
		keywords: '光标向前跳过一个单词'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['/']
			}
		],
		comment: '搜索光标之后的内容',
		keywords: '搜索光标之后的内容'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['?']
			}
		],
		comment: '搜索光标之前的内容',
		keywords: '搜索光标之前的内容'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['n']
			}
		],
		comment: '（搜索）查看下一处',
		keywords: '（搜索）查看下一处'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['N']
			}
		],
		comment: '（搜索）查看上一处',
		keywords: '（搜索）查看上一处'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Spacebar']
			}
		],
		comment: '开始选择',
		keywords: '开始选择'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Esc']
			}
		],
		comment: '清除选择',
		keywords: '清除选择'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Enter']
			}
		],
		comment: '复制选择',
		keywords: '复制选择'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'v']
			}

		],
		comment: '切换矩形复制模式(rectangle toggle)和普通复制模式',
		keywords: 'rectangle toggle 切换矩形复制模式和普通复制模式'
	},
	{
		command: [
			{
				type: 'tmuxKey',
				key: ['Ctrl', '+', 'b', ' ', ']']
			}
		],
		comment: '粘贴buffer_0中的内容',
		keywords: '粘贴buffer_0中的内容'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': show-buffer'
			}
		],
		comment: '显示buffer_0的内容',
		keywords: 'show-buffer 显示buffer_0的内容'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': capture-pane'
			}
		],
		comment: '复制当前Pane的所有内容至buffer',
		keywords: 'capture-pane 复制当前Pane的所有内容至buffer'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': list-buffers'
			}
		],
		comment: '列出所有buffer',
		keywords: 'list-buffers 列出所有buffer'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': choose-buffer'
			}
		],
		comment: '列出所有buffer并选择进行粘贴',
		keywords: 'choose-buffer 列出所有buffer并选择进行粘贴'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': save-buffer buf.txt'
			}
		],
		comment: '保存buffer内容至buf.txt',
		keywords: 'save-buffer buf.txt 保存buffer内容至buf.txt'
	},
	{
		command: [
			{
				type: 'tmuxInnerCommand',
				text: ': delete-buffer -b 1'
			}
		],
		comment: '删除buffer_1',
		keywords: 'delete-buffer -b 1 删除buffer_1'
	}
];

export { copyModeData };
