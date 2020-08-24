# API 文档

<infobox>
<p class="title">施工中</p>
<p>本页面的内容正在施工中，请以最终版为准！</p>
</infobox>

这里介绍的是由 InPageEdit 提供的函数或变量。

当介绍函数时，`<param>`代表必选，`[param]`代表可选，`|`代表或者。

## `window.InPageEdit`

```javascript
window.InPageEdit = InPageEdit;
```

## `InPageEdit.about()`

……

## `InPageEdit.api`

<status status="error">锁定</status>

保留了有关 InPageEdit 的一些接口，例如

- Type: {Object}
- Return:
  - `aboutUrl` 关于&帮助的 URL
  - `analysis` 统计信息的数据上报接口
  - `analysisUrl` 统计信息展示页面的 URL
  - `updatelogsUrl` 更新日志的 URL

## `InPageEdit.articleLink([element])`

……

## `InPageEdit.findAndReplace(<element>)`

……

## `InPageEdit.preference`

### `InPageEdit.preference.default`

保存预设的参数设置

- Type: [Array]
- Return:

```json
{
  "doNotCollectMyInfo": false,
  "doNotShowLocalWarn": false,
  "editMinor": false,
  "editSummary": _msg("preference-summary-default"),
  "lockToolBox": false,
  "redLinkQuickEdit": true,
  "outSideClose": true,
  "watchList": Boolean(mw.user.options.get("watchdefault"))
}
```

### `InPageEdit.preference.get([setting])`

获取参数设置的值

- `setting`{String}
  - Default: `""`
  - 需要获取的参数设置的键

### `InPageEdit.preference.set(<settingKey>[, settingValue])`

<infobox type="info">不推荐使用此函数保存个人设置</infobox>

保存参数设置的值

- `settingKey` {Object|String}
  - 要保存的参数设置键值对或键
- `settingValue` {Any}
  - 要保存的参数的值
  - 当`settingKey`为 String 时必填

## `InPageEdit.progress(<text>)`

……

## `InPageEdit.quickDelete([page])`

打开快速删除的对话框

- `page` {String}
  - Default: `mw.config.get('wgPageName')`
  - 要删除的页面名

## `InPageEdit.quickDiff(<param>)`

通过参数展示快速差异模态框

- `param` {Object}
  - MediaWiki diff API 标准参数

## `InPageEdit.quickEdit([options])`

按照设定参数打开快速编辑的模态框

- `options` {Object|String}

  - 不配置或者传入空值，以当前浏览的页面为目标页面
  - 传入字符串时，将字符串视为目标页面名
  - 传入 JSON 对象时，将会尝试与默认配置项进行合并后执行后续操作

- 可供配置的 JSON 参数：
  - `options.page` {String} 页面名称，不能与`pageId`同时使用（预设为当前页面名）
  - `options.pageId` {Number} 页面 ID，不能与`page`同时使用
  - `options.revision` {Number} 若配置，将以提供的 revision 编号查找页面信息，可能忽略页面配置（预设为当前页面的版本 ID）
  - `options.section` {Number|"new"} 若配置，编辑段落，段落为大于 0 且小于页面段落数的数字或者"new"（预设为null，编辑全文）
  - `options.editMinor` {Boolean} 若配置，取代小编辑的勾选状态
  - `options.editSummary` 若配置，取代编辑摘要的内容
  - `options.reload` {Boolean} 若配置，取代保存后刷新页面的勾选状态
  - 其余参数均不建议修改，否则可能导致故障

## `InPageEdit.quickPreview()`

……

## `InPageEdit.quickRedirect()`

……

## `InPageEdit.quickRename()`

……

## `InPageEdit.specialNotice()`

……

## `InPageEdit.version`

<status status="error">锁定</status>

- Type: "String"
- Return: 当前使用的 InPageEdit 版本号

## `InPageEdit.versionInfo()`

……

## `_msg(<...args>)`

<status status="warning">内部</status>

通过键获取 i18n 字符串

- `args` {String}
  - 第一个为必选，作为 i18n 信息的键
  - 从第二个开始的参数将替换字符串中的占位符（例如`$1`）
