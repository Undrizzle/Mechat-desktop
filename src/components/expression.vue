<template>
    <div id="mmpop_emoji_panel" class="mmpop" tabindex="-1" v-bind:style="{ top: '-272px', left: '15px' }">
        <div class="expression">
            <ul class="exp_hd">
                <li class="exp_hd_item" v-bind:class="{active: index == 1}" v-on:click="index = 1">
                    <a href="javascript:;">QQ表情</a>
                </li>
                <li class="exp_hd_item" v-bind:class="{active: index == 2}" v-on:click="index = 2">
                    <a href="javascript:;">符号表情</a>
                </li>
                <li class="exp_hd_item" v-bind:class="{active: index == 3}" v-on:click="index = 3">
                    <a href="javascript:;">动画表情</a>
                </li>
            </ul>
            <div class="exp_bd">
                <div class="exp_cont" v-bind:class="{active: index == 1}">
                    <div class="qq_face">
                        <a title="微笑" type="qq" class="face qqface0">微笑</a>
                        <a title="撇嘴" type="qq" class="face qqface1">撇嘴</a>
                        <a title="色" type="qq" class="face qqface2">色</a>
                        <a title="发呆" type="qq" class="face qqface3">发呆</a>
                        <a title="得意" type="qq" class="face qqface4">得意</a>
                        <a title="流泪" type="qq" class="face qqface5">流泪</a>
                        <a title="害羞" type="qq" class="face qqface6">害羞</a>
                        <a title="闭嘴" type="qq" class="face qqface7">闭嘴</a>
                        <a title="睡" type="qq" class="face qqface8">睡</a>
                        <a title="大哭" type="qq" class="face qqface9">大哭</a>
                        <a title="尴尬" type="qq" class="face qqface10">尴尬</a>
                        <a title="发怒" type="qq" class="face qqface11">发怒</a>
                        <a title="调皮" type="qq" class="face qqface12">调皮</a>
                        <a title="呲牙" type="qq" class="face qqface13">呲牙</a>
                        <a title="惊讶" type="qq" class="face qqface14">惊讶</a>
                        <a title="难过" type="qq" class="face qqface15">难过</a>
                        <a title="酷" type="qq" class="face qqface16">酷</a>
                        <a title="冷汗" type="qq" class="face qqface17">冷汗</a>
                        <a title="抓狂" type="qq" class="face qqface18">抓狂</a>
                        <a title="吐" type="qq" class="face qqface19">吐</a>
                        <a title="偷笑" type="qq" class="face qqface20">偷笑</a>
                        <a title="愉快" type="qq" class="face qqface21">愉快</a>
                        <a title="白眼" type="qq" class="face qqface22">白眼</a>
                        <a title="傲慢" type="qq" class="face qqface23">傲慢</a>
                        <a title="饥饿" type="qq" class="face qqface24">饥饿</a>
                        <a title="困" type="qq" class="face qqface25">困</a>
                        <a title="惊恐" type="qq" class="face qqface26">惊恐</a>
                        <a title="流汗" type="qq" class="face qqface27">流汗</a>
                        <a title="憨笑" type="qq" class="face qqface28">憨笑</a>
                        <a title="悠闲" type="qq" class="face qqface29">悠闲</a>
                        <a title="奋斗" type="qq" class="face qqface30">奋斗</a>
                        <a title="咒骂" type="qq" class="face qqface31">咒骂</a>
                        <a title="疑问" type="qq" class="face qqface32">疑问</a>
                        <a title="嘘" type="qq" class="face qqface33">嘘</a>
                        <a title="晕" type="qq" class="face qqface34">晕</a>
                        <a title="疯了" type="qq" class="face qqface35">疯了</a>
                        <a title="衰" type="qq" class="face qqface36">衰</a>
                        <a title="骷髅" type="qq" class="face qqface37">骷髅</a>
                        <a title="敲打" type="qq" class="face qqface38">敲打</a>
                        <a title="再见" type="qq" class="face qqface39">再见</a>
                        <a title="擦汗" type="qq" class="face qqface40">擦汗</a>
                        <a title="抠鼻" type="qq" class="face qqface41">抠鼻</a>
                        <a title="鼓掌" type="qq" class="face qqface42">鼓掌</a>
                        <a title="糗大了" type="qq" class="face qqface43">糗大了</a>
                        <a title="坏笑" type="qq" class="face qqface44">坏笑</a>
                        <a title="左哼哼" type="qq" class="face qqface45">左哼哼</a>
                        <a title="右哼哼" type="qq" class="face qqface46">右哼哼</a>
                        <a title="哈欠" type="qq" class="face qqface47">哈欠</a>
                        <a title="鄙视" type="qq" class="face qqface48">鄙视</a>
                        <a title="委屈" type="qq" class="face qqface49">委屈</a>
                        <a title="快哭了" type="qq" class="face qqface50">快哭了</a>
                        <a title="阴险" type="qq" class="face qqface51">阴险</a>
                        <a title="亲亲" type="qq" class="face qqface52">亲亲</a>
                        <a title="吓" type="qq" class="face qqface53">吓</a>
                        <a title="可怜" type="qq" class="face qqface54">可怜</a>
                        <a title="菜刀" type="qq" class="face qqface55">菜刀</a>
                        <a title="西瓜" type="qq" class="face qqface56">西瓜</a>
                        <a title="啤酒" type="qq" class="face qqface57">啤酒</a>
                        <a title="篮球" type="qq" class="face qqface58">篮球</a>
                        <a title="乒乓" type="qq" class="face qqface59">乒乓</a>
                        <a title="咖啡" type="qq" class="face qqface60">咖啡</a>
                        <a title="饭" type="qq" class="face qqface61">饭</a>
                        <a title="猪头" type="qq" class="face qqface62">猪头</a>
                        <a title="玫瑰" type="qq" class="face qqface63">玫瑰</a>
                        <a title="凋谢" type="qq" class="face qqface64">凋谢</a>
                        <a title="嘴唇" type="qq" class="face qqface65">嘴唇</a>
                        <a title="爱心" type="qq" class="face qqface66">爱心</a>
                        <a title="心碎" type="qq" class="face qqface67">心碎</a>
                        <a title="蛋糕" type="qq" class="face qqface68">蛋糕</a>
                        <a title="闪电" type="qq" class="face qqface69">闪电</a>
                        <a title="炸弹" type="qq" class="face qqface70">炸弹</a>
                        <a title="刀" type="qq" class="face qqface71">刀</a>
                        <a title="足球" type="qq" class="face qqface72">足球</a>
                        <a title="瓢虫" type="qq" class="face qqface73">瓢虫</a>
                        <a title="便便" type="qq" class="face qqface74">便便</a>
                        <a title="月亮" type="qq" class="face qqface75">月亮</a>
                        <a title="太阳" type="qq" class="face qqface76">太阳</a>
                        <a title="礼物" type="qq" class="face qqface77">礼物</a>
                        <a title="拥抱" type="qq" class="face qqface78">拥抱</a>
                        <a title="强" type="qq" class="face qqface79">强</a>
                        <a title="弱" type="qq" class="face qqface80">弱</a>
                        <a title="握手" type="qq" class="face qqface81">握手</a>
                        <a title="胜利" type="qq" class="face qqface82">胜利</a>
                        <a title="抱拳" type="qq" class="face qqface83">抱拳</a>
                        <a title="勾引" type="qq" class="face qqface84">勾引</a>
                        <a title="拳头" type="qq" class="face qqface85">拳头</a>
                        <a title="差劲" type="qq" class="face qqface86">差劲</a>
                        <a title="爱你" type="qq" class="face qqface87">爱你</a>
                        <a title="NO" type="qq" class="face qqface88">NO</a>
                        <a title="OK" type="qq" class="face qqface89">OK</a>
                        <a title="爱情" type="qq" class="face qqface90">爱情</a>
                        <a title="飞吻" type="qq" class="face qqface91">飞吻</a>
                        <a title="跳跳" type="qq" class="face qqface92">跳跳</a>
                        <a title="发抖" type="qq" class="face qqface93">发抖</a>
                        <a title="怄火" type="qq" class="face qqface94">怄火</a>
                        <a title="转圈" type="qq" class="face qqface95">转圈</a>
                        <a title="磕头" type="qq" class="face qqface96">磕头</a>
                        <a title="回头" type="qq" class="face qqface97">回头</a>
                        <a title="跳绳" type="qq" class="face qqface98">跳绳</a>
                        <a title="投降" type="qq" class="face qqface99">投降</a>
                        <a title="激动" type="qq" class="face qqface100">激动</a>
                        <a title="乱舞" type="qq" class="face qqface101">乱舞</a>
                        <a title="献吻" type="qq" class="face qqface102">献吻</a>
                        <a title="左太极" type="qq" class="face qqface103">左太极</a>
                        <a title="右太极" type="qq" class="face qqface104">右太极</a>
                    </div>
                </div>
                <div class="exp_cont" v-bind:class="{active: index == 2}">
                    <div class="emoji_face">
                        <a title="笑脸" type="emoji" class="face emoji0">笑脸</a>
                        <a title="开心" type="emoji" class="face emoji1">开心</a>
                        <a title="大笑" type="emoji" class="face emoji2">大笑</a>
                        <a title="热情" type="emoji" class="face emoji3">热情</a>
                        <a title="眨眼" type="emoji" class="face emoji4">眨眼</a>
                        <a title="色" type="emoji" class="face emoji5">色</a>
                        <a title="接吻" type="emoji" class="face emoji6">接吻</a>
                        <a title="亲吻" type="emoji" class="face emoji7">亲吻</a>
                        <a title="脸红" type="emoji" class="face emoji8">脸红</a>
                        <a title="露齿笑" type="emoji" class="face emoji9">露齿笑</a>
                        <a title="满意" type="emoji" class="face emoji10">满意</a>
                        <a title="戏弄" type="emoji" class="face emoji11">戏弄</a>
                        <a title="吐舌" type="emoji" class="face emoji12">吐舌</a>
                        <a title="无语" type="emoji" class="face emoji13">无语</a>
                        <a title="得意" type="emoji" class="face emoji14">得意</a>
                        <a title="汗" type="emoji" class="face emoji15">汗</a>
                        <a title="失望" type="emoji" class="face emoji16">失望</a>
                        <a title="低落" type="emoji" class="face emoji17">低落</a>
                        <a title="呸" type="emoji" class="face emoji18">呸</a>
                        <a title="焦虑" type="emoji" class="face emoji19">焦虑</a>
                        <a title="担心" type="emoji" class="face emoji20">担心</a>
                        <a title="震惊" type="emoji" class="face emoji21">震惊</a>
                        <a title="悔恨" type="emoji" class="face emoji22">悔恨</a>
                        <a title="眼泪" type="emoji" class="face emoji23">眼泪</a>
                        <a title="哭" type="emoji" class="face emoji24">哭</a>
                        <a title="破涕为笑" type="emoji" class="face emoji25">破涕为笑</a>
                        <a title="晕" type="emoji" class="face emoji26">晕</a>
                        <a title="恐惧" type="emoji" class="face emoji27">恐惧</a>
                        <a title="心烦" type="emoji" class="face emoji28">心烦</a>
                        <a title="生气" type="emoji" class="face emoji29">生气</a>
                        <a title="睡觉" type="emoji" class="face emoji30">睡觉</a>
                        <a title="生病" type="emoji" class="face emoji31">生病</a>
                        <a title="恶魔" type="emoji" class="face emoji32">恶魔</a>
                        <a title="外星人" type="emoji" class="face emoji33">外星人</a>
                        <a title="心" type="emoji" class="face emoji34">心</a>
                        <a title="心碎" type="emoji" class="face emoji35">心碎</a>
                        <a title="丘比特" type="emoji" class="face emoji36">丘比特</a>
                        <a title="闪烁" type="emoji" class="face emoji37">闪烁</a>
                        <a title="星星" type="emoji" class="face emoji38">星星</a>
                        <a title="叹号" type="emoji" class="face emoji39">叹号</a>
                        <a title="问号" type="emoji" class="face emoji40">问号</a>
                        <a title="睡着" type="emoji" class="face emoji41">睡着</a>
                        <a title="水滴" type="emoji" class="face emoji42">水滴</a>
                        <a title="音乐" type="emoji" class="face emoji43">音乐</a>
                        <a title="火" type="emoji" class="face emoji44">火</a>
                        <a title="便便" type="emoji" class="face emoji45">便便</a>
                        <a title="强" type="emoji" class="face emoji46">强</a>
                        <a title="弱" type="emoji" class="face emoji47">弱</a>
                        <a title="拳头" type="emoji" class="face emoji48">拳头</a>
                        <a title="胜利" type="emoji" class="face emoji49">胜利</a>
                        <a title="上" type="emoji" class="face emoji50">上</a>
                        <a title="下" type="emoji" class="face emoji51">下</a>
                        <a title="右" type="emoji" class="face emoji52">右</a>
                        <a title="左" type="emoji" class="face emoji53">左</a>
                        <a title="第一" type="emoji" class="face emoji54">第一</a>
                        <a title="强壮" type="emoji" class="face emoji55">强壮</a>
                        <a title="吻" type="emoji" class="face emoji56">吻</a>
                        <a title="热恋" type="emoji" class="face emoji57">热恋</a>
                        <a title="男孩" type="emoji" class="face emoji58">男孩</a>
                        <a title="女孩" type="emoji" class="face emoji59">女孩</a>
                        <a title="女士" type="emoji" class="face emoji60">女士</a>
                        <a title="男士" type="emoji" class="face emoji61">男士</a>
                        <a title="天使" type="emoji" class="face emoji62">天使</a>
                        <a title="骷髅" type="emoji" class="face emoji63">骷髅</a>
                        <a title="红唇" type="emoji" class="face emoji64">红唇</a>
                        <a title="太阳" type="emoji" class="face emoji65">太阳</a>
                        <a title="下雨" type="emoji" class="face emoji66">下雨</a>
                        <a title="多云" type="emoji" class="face emoji67">多云</a>
                        <a title="雪人" type="emoji" class="face emoji68">雪人</a>
                        <a title="月亮" type="emoji" class="face emoji69">月亮</a>
                        <a title="闪电" type="emoji" class="face emoji70">闪电</a>
                        <a title="海浪" type="emoji" class="face emoji71">海浪</a>
                        <a title="猫" type="emoji" class="face emoji72">猫</a>
                        <a title="小狗" type="emoji" class="face emoji73">小狗</a>
                        <a title="老鼠" type="emoji" class="face emoji74">老鼠</a>
                        <a title="仓鼠" type="emoji" class="face emoji75">仓鼠</a>
                        <a title="兔子" type="emoji" class="face emoji76">兔子</a>
                        <a title="狗" type="emoji" class="face emoji77">狗</a>
                        <a title="青蛙" type="emoji" class="face emoji78">青蛙</a>
                        <a title="老虎" type="emoji" class="face emoji79">老虎</a>
                        <a title="考拉" type="emoji" class="face emoji80">考拉</a>
                        <a title="熊" type="emoji" class="face emoji81">熊</a>
                        <a title="猪" type="emoji" class="face emoji82">猪</a>
                        <a title="牛" type="emoji" class="face emoji83">牛</a>
                        <a title="野猪" type="emoji" class="face emoji84">野猪</a>
                        <a title="猴子" type="emoji" class="face emoji85">猴子</a>
                        <a title="马" type="emoji" class="face emoji86">马</a>
                        <a title="蛇" type="emoji" class="face emoji87">蛇</a>
                        <a title="鸽子" type="emoji" class="face emoji88">鸽子</a>
                        <a title="鸡" type="emoji" class="face emoji89">鸡</a>
                        <a title="企鹅" type="emoji" class="face emoji90">企鹅</a>
                        <a title="毛虫" type="emoji" class="face emoji91">毛虫</a>
                        <a title="章鱼" type="emoji" class="face emoji92">章鱼</a>
                        <a title="鱼" type="emoji" class="face emoji93">鱼</a>
                        <a title="鲸鱼" type="emoji" class="face emoji94">鲸鱼</a>
                        <a title="海豚" type="emoji" class="face emoji95">海豚</a>
                        <a title="玫瑰" type="emoji" class="face emoji96">玫瑰</a>
                        <a title="花" type="emoji" class="face emoji97">花</a>
                        <a title="棕榈树" type="emoji" class="face emoji98">棕榈树</a>
                        <a title="仙人掌" type="emoji" class="face emoji99">仙人掌</a>
                        <a title="礼盒" type="emoji" class="face emoji100">礼盒</a>
                        <a title="南瓜灯" type="emoji" class="face emoji101">南瓜灯</a>
                        <a title="鬼魂" type="emoji" class="face emoji102">鬼魂</a>
                        <a title="圣诞老人" type="emoji" class="face emoji103">圣诞老人</a>
                        <a title="圣诞树" type="emoji" class="face emoji104">圣诞树</a>
                        <a title="礼物" type="emoji" class="face emoji105">礼物</a>
                        <a title="铃" type="emoji" class="face emoji106">铃</a>
                        <a title="庆祝" type="emoji" class="face emoji107">庆祝</a>
                        <a title="气球" type="emoji" class="face emoji108">气球</a>
                        <a title="CD" type="emoji" class="face emoji109">CD</a>
                        <a title="相机" type="emoji" class="face emoji110">相机</a>
                        <a title="录像机" type="emoji" class="face emoji111">录像机</a>
                        <a title="电脑" type="emoji" class="face emoji112">电脑</a>
                        <a title="电视" type="emoji" class="face emoji113">电视</a>
                        <a title="电话" type="emoji" class="face emoji114">电话</a>
                        <a title="解锁" type="emoji" class="face emoji115">解锁</a>
                        <a title="锁" type="emoji" class="face emoji116">锁</a>
                        <a title="钥匙" type="emoji" class="face emoji117">钥匙</a>
                        <a title="成交" type="emoji" class="face emoji118">成交</a>
                        <a title="灯泡" type="emoji" class="face emoji119">灯泡</a>
                        <a title="邮箱" type="emoji" class="face emoji120">邮箱</a>
                        <a title="浴缸" type="emoji" class="face emoji121">浴缸</a>
                        <a title="钱" type="emoji" class="face emoji122">钱</a>
                        <a title="炸弹" type="emoji" class="face emoji123">炸弹</a>
                        <a title="手枪" type="emoji" class="face emoji124">手枪</a>
                        <a title="药丸" type="emoji" class="face emoji125">药丸</a>
                        <a title="橄榄球" type="emoji" class="face emoji126">橄榄球</a>
                        <a title="篮球" type="emoji" class="face emoji127">篮球</a>
                        <a title="足球" type="emoji" class="face emoji128">足球</a>
                        <a title="棒球" type="emoji" class="face emoji129">棒球</a>
                        <a title="高尔夫" type="emoji" class="face emoji130">高尔夫</a>
                        <a title="奖杯" type="emoji" class="face emoji131">奖杯</a>
                        <a title="入侵者" type="emoji" class="face emoji132">入侵者</a>
                        <a title="唱歌" type="emoji" class="face emoji133">唱歌</a>
                        <a title="吉他" type="emoji" class="face emoji134">吉他</a>
                        <a title="比基尼" type="emoji" class="face emoji135">比基尼</a>
                        <a title="皇冠" type="emoji" class="face emoji136">皇冠</a>
                        <a title="雨伞" type="emoji" class="face emoji137">雨伞</a>
                        <a title="手提包" type="emoji" class="face emoji138">手提包</a>
                        <a title="口红" type="emoji" class="face emoji139">口红</a>
                        <a title="戒指" type="emoji" class="face emoji140">戒指</a>
                        <a title="钻石" type="emoji" class="face emoji141">钻石</a>
                        <a title="咖啡" type="emoji" class="face emoji142">咖啡</a>
                        <a title="啤酒" type="emoji" class="face emoji143">啤酒</a>
                        <a title="干杯" type="emoji" class="face emoji144">干杯</a>
                        <a title="鸡尾酒" type="emoji" class="face emoji145">鸡尾酒</a>
                        <a title="汉堡" type="emoji" class="face emoji146">汉堡</a>
                        <a title="薯条" type="emoji" class="face emoji147">薯条</a>
                        <a title="意面" type="emoji" class="face emoji148">意面</a>
                        <a title="寿司" type="emoji" class="face emoji149">寿司</a>
                        <a title="面条" type="emoji" class="face emoji150">面条</a>
                        <a title="煎蛋" type="emoji" class="face emoji151">煎蛋</a>
                        <a title="冰激凌" type="emoji" class="face emoji152">冰激凌</a>
                        <a title="蛋糕" type="emoji" class="face emoji153">蛋糕</a>
                        <a title="苹果" type="emoji" class="face emoji154">苹果</a>
                        <a title="飞机" type="emoji" class="face emoji155">飞机</a>
                        <a title="火箭" type="emoji" class="face emoji156">火箭</a>
                        <a title="自行车" type="emoji" class="face emoji157">自行车</a>
                        <a title="高铁" type="emoji" class="face emoji158">高铁</a>
                        <a title="警告" type="emoji" class="face emoji159">警告</a>
                        <a title="旗" type="emoji" class="face emoji160">旗</a>
                        <a title="男人" type="emoji" class="face emoji161">男人</a>
                        <a title="女人" type="emoji" class="face emoji162">女人</a>
                        <a title="O" type="emoji" class="face emoji163">O</a>
                        <a title="X" type="emoji" class="face emoji164">X</a>
                        <a title="版权" type="emoji" class="face emoji165">版权</a>
                        <a title="注册商标" type="emoji" class="face emoji166">注册商标</a>
                        <a title="商标" type="emoji" class="face emoji167">商标</a>
                  </div>
              </div>
                <div class="exp_cont" v-bind:class="{active: index == 3}">
                    <div class="tuzki_face">
                        <a v-for="(item, index) of TuzkiList" class="face" v-bind:class="[item.content.replace('icon_', 'tuzki').replace('.gif', ''), (index+1)%5 == 0 ? 'no_ext': '']">{{ item.content }}</a>
                    </div>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'expression',
        data() {
            return {
                TuzkiList: [
                    {content: 'icon_001.gif' },
                    {content: 'icon_002.gif' },
                    {content: 'icon_006.gif' },
                    {content: 'icon_007.gif' },
                    {content: 'icon_009.gif' },
                    {content: 'icon_010.gif' },
                    {content: 'icon_012.gif' },
                    {content: 'icon_013.gif' },
                    {content: 'icon_018.gif' },
                    {content: 'icon_019.gif' },
                    {content: 'icon_020.gif' },
                    {content: 'icon_021.gif' },
                    {content: 'icon_022.gif' },
                    {content: 'icon_027.gif' },
                    {content: 'icon_028.gif' },
                    {content: 'icon_029.gif' },
                    {content: 'icon_030.gif' },
                    {content: 'icon_033.gif' },
                    {content: 'icon_035.gif' },
                    {content: 'icon_040.gif' }
                ],
                index: 1
            }
        }
    }
</script>

<style>
    .expression {
        border: 1px solid #dedede;
    }

    .expression:before {
        content: '';
        position: absolute;
        left: 16px;
        top: 100%;
        margin-left: -7px;
        border: 7px solid transparent;
        border-top-color: #cfcfcf;
    }

    .expression:after {
        content: '';
        position: absolute;
        left: 16px;
        top: 100%;
        margin-left: -7px;
        margin-top: -1px;
        border: 7px solid transparent;
        border-top-color: #fff;
    }

    .exp_hd {
        padding: 8px 20px 0;
        overflow: hidden;
        background-color: #f2f2f2;
    }

    .exp_hd_item {
        float: left;
    }

    .exp_hd_item.active {
        background-color: #fff;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .exp_hd_item a {
        display: block;
        text-decoration: none;
        color: #333;
        padding: 5px 20px;
        font-size: 14px;
    }

    .exp_bd {
        overflow: auto;
        background-color: #fff;
        height: 232px;
    }

    .exp_cont {
        display: none;
        overflow: hidden;
        margin: 15px 20px;
    }

    .exp_cont.active {
        display: block;
    }

    .qq_face {
        overflow: hidden;
        width: 435px;
        height: 202px;
        margin-right: -1px;
    }

    .qq_face a {
        float: left;
        width: 28px;
        height: 28px;
        font-size: 0;
        text-indent: -999em;
        border-bottom: 1px solid #F0F0F0;
        border-right: 1px solid #F0F0F0;
        cursor: pointer;
        background: url(../images/qqfacePanel31e225.png) no-repeat;
    }

    .qq_face .qqface0 {
        background-position: 0 0;
    }

    .qq_face .qqface1 {
        background-position: -29px 0;
    }

    .qq_face .qqface2 {
        background-position: -58px 0;
    }

    .qq_face .qqface3 {
        background-position: -87px 0;
    }

    .qq_face .qqface4 {
        background-position: -116px 0;
    }

    .qq_face .qqface5 {
        background-position: -145px 0;
    }

    .qq_face .qqface6 {
        background-position: -174px 0;
    }

    .qq_face .qqface7 {
        background-position: -203px 0;
    }

    .qq_face .qqface8 {
        background-position: -232px 0;
    }

    .qq_face .qqface9 {
        background-position: -261px 0;
    }

    .qq_face .qqface10 {
        background-position: -290px 0;
    }

    .qq_face .qqface11 {
        background-position: -319px 0;
    }

    .qq_face .qqface12 {
        background-position: -348px 0;
    }

    .qq_face .qqface13 {
        background-position: -377px 0;
    }

    .qq_face .qqface14 {
        background-position: -406px 0;
    }

    .qq_face .qqface15 {
        background-position: 0 -29px;
    }

    .qq_face .qqface16 {
        background-position: -29px -29px;
    }

    .qq_face .qqface17 {
        background-position: -58px -29px;
    }

    .qq_face .qqface18 {
        background-position: -87px -29px;
    }

    .qq_face .qqface19 {
        background-position: -116px -29px;
    }

    .qq_face .qqface20 {
        background-position: -145px -29px;
    }

    .qq_face .qqface21 {
        background-position: -174px -29px;
    }

    .qq_face .qqface22 {
        background-position: -203px -29px;
    }

    .qq_face .qqface23 {
        background-position: -232px -29px;
    }

    .qq_face .qqface24 {
        background-position: -261px -29px;
    }

    .qq_face .qqface25 {
        background-position: -290px -29px;
    }

    .qq_face .qqface26 {
        background-position: -319px -29px;
    }

    .qq_face .qqface27 {
        background-position: -348px -29px;
    }

    .qq_face .qqface28 {
        background-position: -377px -29px;
    }

    .qq_face .qqface29 {
        background-position: -406px -29px;
    }

    .qq_face .qqface30 {
        background-position: 0 -58px;
    }

    .qq_face .qqface31 {
        background-position: -29px -58px;
    }

    .qq_face .qqface32 {
        background-position: -58px -58px;
    }

    .qq_face .qqface33 {
        background-position: -87px -58px;
    }

    .qq_face .qqface34 {
        background-position: -116px -58px;
    }

    .qq_face .qqface35 {
        background-position: -145px -58px;
    }

    .qq_face .qqface36 {
        background-position: -174px -58px;
    }

    .qq_face .qqface37 {
        background-position: -203px -58px;
    }

    .qq_face .qqface38 {
        background-position: -232px -58px;
    }

    .qq_face .qqface39 {
        background-position: -261px -58px;
    }

    .qq_face .qqface40 {
        background-position: -290px -58px;
    }

    .qq_face .qqface41 {
        background-position: -319px -58px;
    }

    .qq_face .qqface42 {
        background-position: -348px -58px;
    }

    .qq_face .qqface43 {
        background-position: -377px -58px;
    }

    .qq_face .qqface44 {
        background-position: -406px -58px;
    }

    .qq_face .qqface45 {
        background-position: 0 -87px;
    }

    .qq_face .qqface46 {
        background-position: -29px -87px;
    }

    .qq_face .qqface47 {
        background-position: -58px -87px;
    }

    .qq_face .qqface48 {
        background-position: -87px -87px;
    }

    .qq_face .qqface49 {
        background-position: -116px -87px;
    }

    .qq_face .qqface50 {
        background-position: -145px -87px;
    }

    .qq_face .qqface51 {
        background-position: -174px -87px;
    }

    .qq_face .qqface52 {
        background-position: -203px -87px;
    }

    .qq_face .qqface53 {
        background-position: -232px -87px;
    }

    .qq_face .qqface54 {
        background-position: -261px -87px;
    }

    .qq_face .qqface55 {
        background-position: -290px -87px;
    }

    .qq_face .qqface56 {
        background-position: -319px -87px;
    }

    .qq_face .qqface57 {
        background-position: -348px -87px;
    }

    .qq_face .qqface58 {
        background-position: -377px -87px;
    }

    .qq_face .qqface59 {
        background-position: -406px -87px;
    }

    .qq_face .qqface60 {
        background-position: 0 -116px;
    }

    .qq_face .qqface61 {
        background-position: -29px -116px;
    }

    .qq_face .qqface62 {
        background-position: -58px -116px;
    }

    .qq_face .qqface63 {
        background-position: -87px -116px;
    }

    .qq_face .qqface64 {
        background-position: -116px -116px;
    }

    .qq_face .qqface65 {
        background-position: -145px -116px;
    }

    .qq_face .qqface66 {
        background-position: -174px -116px;
    }

    .qq_face .qqface67 {
        background-position: -203px -116px;
    }

    .qq_face .qqface68 {
        background-position: -232px -116px;
    }

    .qq_face .qqface69 {
        background-position: -261px -116px;
    }

    .qq_face .qqface70 {
        background-position: -290px -116px;
    }

    .qq_face .qqface71 {
        background-position: -319px -116px;
    }

    .qq_face .qqface72 {
        background-position: -348px -116px;
    }

    .qq_face .qqface73 {
        background-position: -377px -116px;
    }

    .qq_face .qqface74 {
        background-position: -406px -116px;
    }

    .qq_face .qqface75 {
        background-position: 0 -145px;
    }

    .qq_face .qqface76 {
        background-position: -29px -145px;
    }

    .qq_face .qqface77 {
        background-position: -58px -145px;
    }

    .qq_face .qqface78 {
        background-position: -87px -145px;
    }

    .qq_face .qqface79 {
        background-position: -116px -145px;
    }

    .qq_face .qqface80 {
        background-position: -145px -145px;
    }

    .qq_face .qqface81 {
        background-position: -174px -145px;
    }

    .qq_face .qqface82 {
        background-position: -203px -145px;
    }

    .qq_face .qqface83 {
        background-position: -232px -145px;
    }

    .qq_face .qqface84 {
        background-position: -261px -145px;
    }

    .qq_face .qqface85 {
        background-position: -290px -145px;
    }

    .qq_face .qqface86 {
        background-position: -319px -145px;
    }

    .qq_face .qqface87 {
        background-position: -348px -145px;
    }

    .qq_face .qqface88 {
        background-position: -377px -145px;
    }

    .qq_face .qqface89 {
        background-position: -406px -145px;
    }

    .qq_face .qqface90 {
        background-position: 0 -174px;
    }

    .qq_face .qqface91 {
        background-position: -29px -174px;
    }

    .qq_face .qqface92 {
        background-position: -58px -174px;
    }

    .qq_face .qqface93 {
        background-position: -87px -174px;
    }

    .qq_face .qqface94 {
        background-position: -116px -174px;
    }

    .qq_face .qqface95 {
        background-position: -145px -174px;
    }

    .qq_face .qqface96 {
        background-position: -174px -174px;
    }

    .qq_face .qqface97 {
        background-position: -203px -174px;
    }

    .qq_face .qqface98 {
        background-position: -232px -174px;
    }

    .qq_face .qqface99 {
        background-position: -261px -174px;
    }

    .qq_face .qqface100 {
        background-position: -290px -174px;
    }

    .qq_face .qqface101 {
        background-position: -319px -174px;
    }

    .qq_face .qqface102 {
        background-position: -348px -174px;
    }

    .qq_face .qqface103 {
        background-position: -377px -174px;
    }

    .qq_face .qqface104 {
        background-position: -406px -174px;
    }

    .emoji_face {
        overflow: hidden;
        width: 435px;
        height: 360px;
        margin-right: -1px;
    }

    .emoji_face a {
        float: left;
        width: 28px;
        height: 28px;
        font-size: 0;
        text-indent: -999em;
        border-bottom: 1px solid #f0f0f0;
        border-right: 1px solid #f0f0f0;
        cursor: pointer;
        background: url(../images/emojiPanel31e225.png) no-repeat;
    }

    .emoji_face .emoji0 {
        background-position: 0 1px;
    }

    .emoji_face .emoji1 {
        background-position: -29px 1px;
    }

    .emoji_face .emoji2 {
        background-position: -58px 1px;
    }

    .emoji_face .emoji3 {
        background-position: -87px 1px;
    }

    .emoji_face .emoji4 {
        background-position: -116px 1px;
    }

    .emoji_face .emoji5 {
        background-position: -145px 1px;
    }

    .emoji_face .emoji6 {
        background-position: -174px 1px;
    }

    .emoji_face .emoji7 {
        background-position: -203px 1px;
    }

    .emoji_face .emoji8 {
        background-position: -232px 1px;
    }

    .emoji_face .emoji9 {
        background-position: -261px 1px;
    }

    .emoji_face .emoji10 {
        background-position: -290px 1px;
    }

    .emoji_face .emoji11 {
        background-position: -319px 1px;
    }

    .emoji_face .emoji12 {
        background-position: -348px 1px;
    }

    .emoji_face .emoji13 {
        background-position: -377px 1px;
    }

    .emoji_face .emoji14 {
        background-position: -406px 1px;
    }

    .emoji_face .emoji15 {
        background-position: 0 -28px;
    }

    .emoji_face .emoji16 {
        background-position: -29px -28px;
    }

    .emoji_face .emoji17 {
        background-position: -58px -28px;
    }

    .emoji_face .emoji18 {
        background-position: -87px -28px;
    }

    .emoji_face .emoji19 {
        background-position: -116px -28px;
    }

    .emoji_face .emoji20 {
        background-position: -145px -28px;
    }

    .emoji_face .emoji21 {
        background-position: -174px -28px;
    }

    .emoji_face .emoji22 {
        background-position: -203px -28px;
    }

    .emoji_face .emoji23 {
        background-position: -232px -28px;
    }

    .emoji_face .emoji24 {
        background-position: -261px -28px;
    }

    .emoji_face .emoji25 {
        background-position: -290px -28px;
    }

    .emoji_face .emoji26 {
        background-position: -319px -28px;
    }

    .emoji_face .emoji27 {
        background-position: -348px -28px;
    }

    .emoji_face .emoji28 {
        background-position: -377px -28px;
    }

    .emoji_face .emoji29 {
        background-position: -406px -28px;
    }

    .emoji_face .emoji30 {
        background-position: 0 -57px;
    }

    .emoji_face .emoji31 {
        background-position: -29px -57px;
    }

    .emoji_face .emoji32 {
        background-position: -58px -57px;
    }

    .emoji_face .emoji33 {
        background-position: -87px -57px;
    }

    .emoji_face .emoji34 {
        background-position: -116px -57px;
    }

    .emoji_face .emoji35 {
        background-position: -145px -57px;
    }

    .emoji_face .emoji36 {
        background-position: -174px -57px;
    }

    .emoji_face .emoji37 {
        background-position: -203px -57px;
    }

    .emoji_face .emoji38 {
        background-position: -232px -57px;
    }

    .emoji_face .emoji39 {
        background-position: -261px -57px;
    }

    .emoji_face .emoji40 {
        background-position: -290px -57px;
    }

    .emoji_face .emoji41 {
        background-position: -319px -57px;
    }

    .emoji_face .emoji42 {
        background-position: -348px -57px;
    }

    .emoji_face .emoji43 {
        background-position: -377px -57px;
    }

    .emoji_face .emoji44 {
        background-position: -406px -57px;
    }

    .emoji_face .emoji45 {
        background-position: 0 -86px;
    }

    .emoji_face .emoji46 {
        background-position: -29px -86px;
    }

    .emoji_face .emoji47 {
        background-position: -58px -86px;
    }

    .emoji_face .emoji48 {
        background-position: -87px -86px;
    }

    .emoji_face .emoji49 {
        background-position: -116px -86px;
    }

    .emoji_face .emoji50 {
        background-position: -145px -86px;
    }

    .emoji_face .emoji51 {
        background-position: -174px -86px;
    }

    .emoji_face .emoji52 {
        background-position: -203px -86px;
    }

    .emoji_face .emoji53 {
        background-position: -232px -86px;
    }

    .emoji_face .emoji54 {
        background-position: -261px -86px;
    }

    .emoji_face .emoji55 {
        background-position: -290px -86px;
    }

    .emoji_face .emoji56 {
        background-position: -319px -86px;
    }

    .emoji_face .emoji57 {
        background-position: -348px -86px;
    }

    .emoji_face .emoji58 {
        background-position: -377px -86px;
    }

    .emoji_face .emoji59 {
        background-position: -406px -86px;
    }

    .emoji_face .emoji60 {
        background-position: 0 -115px;
    }

    .emoji_face .emoji61 {
        background-position: -29px -115px;
    }

    .emoji_face .emoji62 {
        background-position: -58px -115px;
    }

    .emoji_face .emoji63 {
        background-position: -87px -115px;
    }

    .emoji_face .emoji64 {
        background-position: -116px -115px;
    }

    .emoji_face .emoji65 {
        background-position: -145px -115px;
    }

    .emoji_face .emoji66 {
        background-position: -174px -115px;
    }

    .emoji_face .emoji67 {
        background-position: -203px -115px;
    }

    .emoji_face .emoji68 {
        background-position: -232px -115px;
    }

    .emoji_face .emoji69 {
        background-position: -261px -115px;
    }

    .emoji_face .emoji70 {
        background-position: -290px -115px;
    }

    .emoji_face .emoji71 {
        background-position: -319px -115px;
    }

    .emoji_face .emoji72 {
        background-position: -348px -115px;
    }

    .emoji_face .emoji73 {
        background-position: -377px -115px;
    }

    .emoji_face .emoji74 {
        background-position: -406px -115px;
    }

    .emoji_face .emoji75 {
        background-position: 0 -144px;
    }

    .emoji_face .emoji76 {
        background-position: -29px -144px;
    }

    .emoji_face .emoji77 {
        background-position: -58px -144px;
    }

    .emoji_face .emoji78 {
        background-position: -87px -144px;
    }

    .emoji_face .emoji79 {
        background-position: -116px -144px;
    }

    .emoji_face .emoji80 {
        background-position: -145px -144px;
    }

    .emoji_face .emoji81 {
        background-position: -174px -144px;
    }

    .emoji_face .emoji82 {
        background-position: -203px -144px;
    }

    .emoji_face .emoji83 {
        background-position: -232px -144px;
    }

    .emoji_face .emoji84 {
        background-position: -261px -144px;
    }

    .emoji_face .emoji85 {
        background-position: -290px -144px;
    }

    .emoji_face .emoji86 {
        background-position: -319px -144px;
    }

    .emoji_face .emoji87 {
        background-position: -348px -144px;
    }

    .emoji_face .emoji88 {
        background-position: -377px -144px;
    }

    .emoji_face .emoji89 {
        background-position: -406px -144px;
    }

    .emoji_face .emoji90 {
        background-position: 0 -173px;
    }

    .emoji_face .emoji91 {
        background-position: -29px -173px;
    }

    .emoji_face .emoji92 {
        background-position: -58px -173px;
    }

    .emoji_face .emoji93 {
        background-position: -87px -173px;
    }

    .emoji_face .emoji94 {
        background-position: -116px -173px;
    }

    .emoji_face .emoji95 {
        background-position: -145px -173px;
    }

    .emoji_face .emoji96 {
        background-position: -174px -173px;
    }

    .emoji_face .emoji97 {
        background-position: -203px -173px;
    }

    .emoji_face .emoji98 {
        background-position: -232px -173px;
    }

    .emoji_face .emoji99 {
        background-position: -261px -173px;
    }

    .emoji_face .emoji100 {
        background-position: -290px -173px;
    }

    .emoji_face .emoji101 {
        background-position: -319px -173px;
    }

    .emoji_face .emoji102 {
        background-position: -348px -173px;
    }

    .emoji_face .emoji103 {
        background-position: -377px -173px;
    }

    .emoji_face .emoji104 {
        background-position: -406px -173px;
    }

    .emoji_face .emoji105 {
        background-position: 0 -202px;
    }

    .emoji_face .emoji106 {
        background-position: -29px -202px;
    }

    .emoji_face .emoji107 {
        background-position: -58px -202px;
    }

    .emoji_face .emoji108 {
        background-position: -87px -202px;
    }

    .emoji_face .emoji109 {
        background-position: -116px -202px;
    }

    .emoji_face .emoji110 {
        background-position: -145px -202px;
    }

    .emoji_face .emoji111 {
        background-position: -174px -202px;
    }

    .emoji_face .emoji112 {
        background-position: -203px -202px;
    }

    .emoji_face .emoji113 {
        background-position: -232px -202px;
    }

    .emoji_face .emoji114 {
        background-position: -261px -202px;
    }

    .emoji_face .emoji115 {
        background-position: -290px -202px;
    }

    .emoji_face .emoji116 {
        background-position: -319px -202px;
    }

    .emoji_face .emoji117 {
        background-position: -348px -202px;
    }

    .emoji_face .emoji118 {
        background-position: -377px -202px;
    }

    .emoji_face .emoji119 {
        background-position: -406px -202px;
    }

    .emoji_face .emoji120 {
        background-position: 0 -231px;
    }

    .emoji_face .emoji121 {
        background-position: -29px -231px;
    }

    .emoji_face .emoji122 {
        background-position: -58px -231px;
    }

    .emoji_face .emoji123 {
        background-position: -87px -231px;
    }

    .emoji_face .emoji124 {
        background-position: -116px -231px;
    }

    .emoji_face .emoji125 {
        background-position: -145px -231px;
    }

    .emoji_face .emoji126 {
        background-position: -174px -231px;
    }

    .emoji_face .emoji127 {
        background-position: -203px -231px;
    }

    .emoji_face .emoji128 {
        background-position: -232px -231px;
    }

    .emoji_face .emoji129 {
        background-position: -261px -231px;
    }

    .emoji_face .emoji130 {
        background-position: -290px -231px;
    }

    .emoji_face .emoji131 {
        background-position: -319px -231px;
    }

    .emoji_face .emoji132 {
        background-position: -348px -231px;
    }

    .emoji_face .emoji133 {
        background-position: -377px -231px;
    }

    .emoji_face .emoji134 {
        background-position: -406px -231px;
    }

    .emoji_face .emoji135 {
        background-position: 0 -260px;
    }

    .emoji_face .emoji136 {
        background-position: -29px -260px;
    }

    .emoji_face .emoji137 {
        background-position: -58px -260px;
    }

    .emoji_face .emoji138 {
        background-position: -87px -260px;
    }

    .emoji_face .emoji139 {
        background-position: -116px -260px;
    }

    .emoji_face .emoji140 {
        background-position: -145px -260px;
    }

    .emoji_face .emoji141 {
        background-position: -174px -260px;
    }

    .emoji_face .emoji142 {
        background-position: -203px -260px;
    }

    .emoji_face .emoji143 {
        background-position: -232px -260px;
    }

    .emoji_face .emoji144 {
        background-position: -261px -260px;
    }

    .emoji_face .emoji145 {
        background-position: -290px -260px;
    }

    .emoji_face .emoji146 {
        background-position: -319px -260px;
    }

    .emoji_face .emoji147 {
        background-position: -348px -260px;
    }

    .emoji_face .emoji148 {
        background-position: -377px -260px;
    }

    .emoji_face .emoji149 {
        background-position: -406px -260px;
    }

    .emoji_face .emoji150 {
        background-position: 0 -289px;
    }

    .emoji_face .emoji151 {
        background-position: -29px -289px;
    }

    .emoji_face .emoji152 {
        background-position: -58px -289px;
    }

    .emoji_face .emoji153 {
        background-position: -87px -289px;
    }

    .emoji_face .emoji154 {
        background-position: -116px -289px;
    }

    .emoji_face .emoji155 {
        background-position: -145px -289px;
    }

    .emoji_face .emoji156 {
        background-position: -174px -289px;
    }

    .emoji_face .emoji157 {
        background-position: -203px -289px;
    }

    .emoji_face .emoji158 {
        background-position: -232px -289px;
    }

    .emoji_face .emoji159 {
        background-position: -261px -289px;
    }

    .emoji_face .emoji160 {
        background-position: -290px -289px;
    }

    .emoji_face .emoji161 {
        background-position: -319px -289px;
    }

    .emoji_face .emoji162 {
        background-position: -348px -289px;
    }

    .emoji_face .emoji163 {
        background-position: -377px -289px;
    }

    .emoji_face .emoji164 {
        background-position: -406px -289px;
    }

    .emoji_face .emoji165 {
        background-position: 0 -318px;
    }

    .emoji_face .emoji166 {
        background-position: -29px -318px;
    }

    .emoji_face .emoji167 {
        background-position: -58px -318px;
    }

    .tuzki_face {
        overflow: hidden;
        width: 440px;
        height: 440px;
        background: url(../images/tusiji_expression31e225.png) no-repeat;
    }

    .tuzki_face .face.no_ext {
        margin-right: 0;
    }

    .tuzki_face .face {
        float: left;
        width: 76px;
        height: 76px;
        font-size: 0;
        margin-right: 15px;
        margin-bottom: 15px;
        text-indent: -999em;
        cursor: pointer;
    }

    .tuzki001:hover {
        background: url(../images/Tuzki/icon_00131e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki002:hover {
        background: url(../images/Tuzki/icon_00231e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki006:hover {
        background: url(../images/Tuzki/icon_00631e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki007:hover {
        background: url(../images/Tuzki/icon_00731e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki009:hover {
        background: url(../images/Tuzki/icon_00931e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki010:hover {
        background: url(../images/Tuzki/icon_01031e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki012:hover {
        background: url(../images/Tuzki/icon_01231e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki013:hover {
        background: url(../images/Tuzki/icon_01331e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki018:hover {
        background: url(../images/Tuzki/icon_01831e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki019:hover {
        background: url(../images/Tuzki/icon_01931e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki020:hover {
        background: url(../images/Tuzki/icon_02031e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki021:hover {
        background: url(../images/Tuzki/icon_02131e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki022:hover {
        background: url(../images/Tuzki/icon_02231e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki023:hover {
        background: url(../images/Tuzki/icon_02331e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki024:hover {
        background: url(../images/Tuzki/icon_02431e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki027:hover {
        background: url(../images/Tuzki/icon_02731e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki028:hover {
        background: url(../images/Tuzki/icon_02831e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki029:hover {
        background: url(../images/Tuzki/icon_02931e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki030:hover {
        background: url(../images/Tuzki/icon_03031e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki033:hover {
        background: url(../images/Tuzki/icon_03331e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki035:hover {
        background: url(../images/Tuzki/icon_03531e225.gif) no-repeat 13px 16px #e9ecef;
    }

    .tuzki040:hover {
        background: url(../images/Tuzki/icon_04031e225.gif) no-repeat 13px 16px #e9ecef;
    }
</style>