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
            <div class="exp_bd" v-on:click="selectEmoticon">
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
                index: 1,
                MM_EMOTICON_WEB: '_web',
                RES_IMG_PLACEHOLDER: require('../images/spacer.gif'),
                QQFaceMap: {
                    "微笑": '0',
                    "撇嘴": '1',
                    "色": '2',
                    "发呆": '3',
                    "得意": '4',
                    "流泪": '5',
                    "害羞": '6',
                    "闭嘴": '7',
                    "睡": '8',
                    "大哭": '9',
                    "尴尬": '10',
                    "发怒": '11',
                    "调皮": '12',
                    "呲牙": '13',
                    "惊讶": '14',
                    "难过": '15',
                    "酷": '16',
                    "冷汗": '17',
                    "抓狂": '18',
                    "吐": '19',
                    "偷笑": '20',
                    "愉快": '21',
                    "白眼": '22',
                    "傲慢": '23',
                    "饥饿": '24',
                    "困": '25',
                    "惊恐": '26',
                    "流汗": '27',
                    "憨笑": '28',
                    "悠闲": '29',
                    "奋斗": '30',
                    "咒骂": '31',
                    "疑问": '32',
                    "嘘": '33',
                    "晕": '34',
                    "疯了": '35',
                    "衰": '36',
                    "骷髅": '37',
                    "敲打": '38',
                    "再见": '39',
                    "擦汗": '40',
                    "抠鼻": '41',
                    "鼓掌": '42',
                    "糗大了": '43',
                    "坏笑": '44',
                    "左哼哼": '45',
                    "右哼哼": '46',
                    "哈欠": '47',
                    "鄙视": '48',
                    "委屈": '49',
                    "快哭了": '50',
                    "阴险": '51',
                    "亲亲": '52',
                    "吓": '53',
                    "可怜": '54',
                    "菜刀": '55',
                    "西瓜": '56',
                    "啤酒": '57',
                    "篮球": '58',
                    "乒乓": '59',
                    "咖啡": '60',
                    "饭": '61',
                    "猪头": '62',
                    "玫瑰": '63',
                    "凋谢": '64',
                    "嘴唇": '65',
                    "爱心": '66',
                    "心碎": '67',
                    "蛋糕": '68',
                    "闪电": '69',
                    "炸弹": '70',
                    "刀": '71',
                    "足球": '72',
                    "瓢虫": '73',
                    "便便": '74',
                    "月亮": '75',
                    "太阳": '76',
                    "礼物": '77',
                    "拥抱": '78',
                    "强": '79',
                    "弱": '80',
                    "握手": '81',
                    "胜利": '82',
                    "抱拳": '83',
                    "勾引": '84',
                    "拳头": '85',
                    "差劲": '86',
                    "爱你": '87',
                    "NO": '88',
                    "OK": '89',
                    "爱情": '90',
                    "飞吻": '91',
                    "跳跳": '92',
                    "发抖": '93',
                    "怄火": '94',
                    "转圈": '95',
                    "磕头": '96',
                    "回头": '97',
                    "跳绳": '98',
                    "投降": '99',
                    "激动": '100',
                    "乱舞": '101',
                    "献吻": '102',
                    "左太极": '103',
                    "右太极": '104',
                    "<笑脸>": '1f604',
                    "<开心>": '1f60a',
                    "<大笑>": '1f603',
                    "<热情>": '263a',
                    "<眨眼>": '1f609',
                    "<色>": '1f60d',
                    "<接吻>": '1f618',
                    "<亲吻>": '1f61a',
                    "<脸红>": '1f633',
                    "<露齿笑>": '1f63c',
                    "<满意>": '1f60c',
                    "<戏弄>": '1f61c',
                    "<吐舌>": '1f445',
                    "<无语>": '1f612',
                    "<得意>": '1f60f',
                    "<汗>": '1f613',
                    "<失望>": '1f640',
                    "<低落>": '1f61e',
                    "<呸>": '1f616',
                    "<焦虑>": '1f625',
                    "<担心>": '1f630',
                    "<震惊>": '1f628',
                    "<悔恨>": '1f62b',
                    "<眼泪>": '1f622',
                    "<哭>": '1f62d',
                    "<破涕为笑>": '1f602',
                    "<晕>": '1f632',
                    "<恐惧>": '1f631',
                    "<心烦>": '1f620',
                    "<生气>": '1f63e',
                    "<睡觉>": '1f62a',
                    "<生病>": '1f637',
                    "<恶魔>": '1f47f',
                    "<外星人>": '1f47d',
                    "<心>": '2764',
                    "<心碎>": '1f494',
                    "<丘比特>": '1f498',
                    "<闪烁>": '2728',
                    "<星星>": '1f31f',
                    "<叹号>": '2755',
                    "<问号>": '2754',
                    "<睡着>": '1f4a4',
                    "<水滴>": '1f4a6',
                    "<音乐>": '1f3b5',
                    "<火>": '1f525',
                    "<便便>": '1f4a9',
                    "<强>": '1f44d',
                    "<弱>": '1f44e',
                    "<拳头>": '1f44a',
                    "<胜利>": '270c',
                    "<上>": '1f446',
                    "<下>": '1f447',
                    "<右>": '1f449',
                    "<左>": '1f448',
                    "<第一>": '261d',
                    "<强壮>": '1f4aa',
                    "<吻>": '1f48f',
                    "<热恋>": '1f491',
                    "<男孩>": '1f466',
                    "<女孩>": '1f467',
                    "<女士>": '1f469',
                    "<男士>": '1f468',
                    "<天使>": '1f47c',
                    "<骷髅>": '1f480',
                    "<红唇>": '1f48b',
                    "<太阳>": '2600',
                    "<下雨>": '2614',
                    "<多云>": '2601',
                    "<雪人>": '26c4',
                    "<月亮>": '1f319',
                    "<闪电>": '26a1',
                    "<海浪>": '1f30a',
                    "<猫>": '1f431',
                    "<小狗>": '1f429',
                    "<老鼠>": '1f42d',
                    "<仓鼠>": '1f439',
                    "<兔子>": '1f430',
                    "<狗>": '1f43a',
                    "<青蛙>": '1f438',
                    "<老虎>": '1f42f',
                    "<考拉>": '1f428',
                    "<熊>": '1f43b',
                    "<猪>": '1f437',
                    "<牛>": '1f42e',
                    "<野猪>": '1f417',
                    "<猴子>": '1f435',
                    "<马>": '1f434',
                    "<蛇>": '1f40d',
                    "<鸽子>": '1f426',
                    "<鸡>": '1f414',
                    "<企鹅>": '1f427',
                    "<毛虫>": '1f41b',
                    "<章鱼>": '1f419',
                    "<鱼>": '1f420',
                    "<鲸鱼>": '1f433',
                    "<海豚>": '1f42c',
                    "<玫瑰>": '1f339',
                    "<花>": '1f33a',
                    "<棕榈树>": '1f334',
                    "<仙人掌>": '1f335',
                    "<礼盒>": '1f49d',
                    "<南瓜灯>": '1f383',
                    "<鬼魂>": '1f47b',
                    "<圣诞老人>": '1f385',
                    "<圣诞树>": '1f384',
                    "<礼物>": '1f381',
                    "<铃>": '1f514',
                    "<庆祝>": '1f389',
                    "<气球>": '1f388',
                    "<CD>": '1f4bf',
                    "<相机>": '1f4f7',
                    "<录像机>": '1f3a5',
                    "<电脑>": '1f4bb',
                    "<电视>": '1f4fa',
                    "<电话>": '1f4de',
                    "<解锁>": '1f513',
                    "<锁>": '1f512',
                    "<钥匙>": '1f511',
                    "<成交>": '1f528',
                    "<灯泡>": '1f4a1',
                    "<邮箱>": '1f4eb',
                    "<浴缸>": '1f6c0',
                    "<钱>": '1f4b2',
                    "<炸弹>": '1f4a3',
                    "<手枪>": '1f52b',
                    "<药丸>": '1f48a',
                    "<橄榄球>": '1f3c8',
                    "<篮球>": '1f3c0',
                    "<足球>": '26bd',
                    "<棒球>": '26be',
                    "<高尔夫>": '26f3',
                    "<奖杯>": '1f3c6',
                    "<入侵者>": '1f47e',
                    "<唱歌>": '1f3a4',
                    "<吉他>": '1f3b8',
                    "<比基尼>": '1f459',
                    "<皇冠>": '1f451',
                    "<雨伞>": '1f302',
                    "<手提包>": '1f45c',
                    "<口红>": '1f484',
                    "<戒指>": '1f48d',
                    "<钻石>": '1f48e',
                    "<咖啡>": '2615',
                    "<啤酒>": '1f37a',
                    "<干杯>": '1f37b',
                    "<鸡尾酒>": '1f377',
                    "<汉堡>": '1f354',
                    "<薯条>": '1f35f',
                    "<意面>": '1f35d',
                    "<寿司>": '1f363',
                    "<面条>": '1f35c',
                    "<煎蛋>": '1f373',
                    "<冰激凌>": '1f366',
                    "<蛋糕>": '1f382',
                    "<苹果>": '1f34f',
                    "<飞机>": '2708',
                    "<火箭>": '1f680',
                    "<自行车>": '1f6b2',
                    "<高铁>": '1f684',
                    "<警告>": '26a0',
                    "<旗>": '1f3c1',
                    "<男人>": '1f6b9',
                    "<女人>": '1f6ba',
                    "<O>": '2b55',
                    "<X>": '274e',
                    "<版权>": 'a9',
                    "<注册商标>": 'ae',
                    "<商标>": '2122'
                },
                EmojiCodeMap: {
                    "1f604": '笑脸',
                    "1f60a": '开心' ,
                    "1f603": '大笑' ,
                    "263a": '热情' ,
                    "1f609": '眨眼',
                    "1f60d": '色' ,
                    "1f618": '接吻' ,
                    "1f61a": '亲吻' ,
                    "1f633": '脸红' ,
                    "1f63c": '露齿笑' ,
                    "1f60c": '满意' ,
                    "1f61c": '戏弄',
                    "1f445": '吐舌' ,
                    "1f612": '无语',
                    "1f60f": '得意',
                    "1f613": '汗',
                    "1f640": '失望',
                    "1f61e": '低落',
                    "1f616": '呸',
                    "1f625": '焦虑',
                    "1f630": '担心',
                    "1f628": '震惊',
                    "1f62b": '悔恨',
                    "1f622": '眼泪',
                    "1f62d": '哭',
                    "1f602": '破涕为笑',
                    "1f632": '晕',
                    "1f631": '恐惧',
                    "1f620": '心烦',
                    "1f63e": '生气',
                    "1f62a": '睡觉',
                    "1f637": '生病',
                    "1f47f": '恶魔',
                    "1f47d": '外星人',
                    "2764": '心',
                    "1f494": '心碎',
                    "1f498": '丘比特',
                    "2728": '闪烁',
                    "1f31f": '星星',
                    "2755": '叹号',
                    "2754": '问号',
                    "1f4a4": '睡着',
                    "1f4a6": '水滴',
                    "1f3b5": '音乐',
                    "1f525": '火',
                    "1f4a9": '便便',
                    "1f44d": '强',
                    "1f44e": '弱',
                    "1f44a": '拳头',
                    "270c": '胜利',
                    "1f446": '上',
                    "1f447": '下',
                    "1f449": '右',
                    "1f448": '左',
                    "261d": '第一',
                    "1f4aa": '强壮',
                    "1f48f": '吻',
                    "1f491": '热恋',
                    "1f466": '男孩',
                    "1f467": '女孩',
                    "1f469": '女士',
                    "1f468": '男士',
                    "1f47c": '天使',
                    "1f480": '骷髅',
                    "1f48b": '红唇',
                    "2600": '太阳',
                    "2614": '下雨',
                    "2601": '多云',
                    "26c4": '雪人',
                    "1f319": '月亮',
                    "26a1": '闪电',
                    "1f30a": '海浪',
                    "1f431": '猫',
                    "1f429": '小狗',
                    "1f42d": '老鼠',
                    "1f439": '仓鼠',
                    "1f430": '兔子',
                    "1f43a": '狗',
                    "1f438": '青蛙',
                    "1f42f": '老虎',
                    "1f428": '考拉',
                    "1f43b": '熊',
                    "1f437": '猪',
                    "1f42e": '牛',
                    "1f417": '野猪',
                    "1f435": '猴子',
                    "1f434": '马',
                    "1f40d": '蛇',
                    "1f426": '鸽子',
                    "1f414": '鸡',
                    "1f427": '企鹅',
                    "1f41b": '毛虫',
                    "1f419": '章鱼',
                    "1f420": '鱼',
                    "1f433": '鲸鱼',
                    "1f42c": '海豚',
                    "1f339": '玫瑰',
                    "1f33a": '花',
                    "1f334": '棕榈树',
                    "1f335": '仙人掌',
                    "1f49d": '礼盒',
                    "1f383": '南瓜灯',
                    "1f47b": '鬼魂',
                    "1f385": '圣诞老人',
                    "1f384": '圣诞树',
                    "1f381": '礼物',
                    "1f514": '铃',
                    "1f389": '庆祝',
                    "1f388": '气球',
                    "1f4bf": 'CD',
                    "1f4f7": '相机',
                    "1f3a5": '录像机',
                    "1f4bb": '电脑',
                    "1f4fa": '电视',
                    "1f4de": '电话',
                    "1f513": '解锁',
                    "1f512": '锁',
                    "1f511": '钥匙',
                    "1f528": '成交',
                    "1f4a1": '灯泡',
                    "1f4eb": '邮箱',
                    "1f6c0": '浴缸',
                    "1f4b2": '钱',
                    "1f4a3": '炸弹',
                    "1f52b": '手枪',
                    "1f48a": '药丸',
                    "1f3c8": '橄榄球',
                    "1f3c0": '篮球',
                    "26bd": '足球',
                    "26be": '棒球',
                    "26f3": '高尔夫',
                    "1f3c6": '奖杯',
                    "1f47e": '入侵者',
                    "1f3a4": '唱歌',
                    "1f3b8": '吉他',
                    "1f459": '比基尼',
                    "1f451": '皇冠',
                    "1f302": '雨伞',
                    "1f45c": '手提包',
                    "1f484": '口红',
                    "1f48d": '戒指',
                    "1f48e": '钻石',
                    "2615": '咖啡',
                    "1f37a": '啤酒',
                    "1f37b": '干杯',
                    "1f377": '鸡尾酒',
                    "1f354": '汉堡',
                    "1f35f": '薯条',
                    "1f35d": '意面',
                    "1f363": '寿司',
                    "1f35c": '面条',
                    "1f373": '煎蛋',
                    "1f366": '冰激凌',
                    "1f382": '蛋糕',
                    "1f34f": '苹果',
                    "2708": '飞机',
                    "1f680": '火箭',
                    "1f6b2": '自行车',
                    "1f684": '高铁',
                    "26a0": '警告',
                    "1f3c1": '旗',
                    "1f6b9": '男人',
                    "1f6ba": '女人',
                    "2b55": 'O',
                    "274e": 'X',
                    "a9": '版权',
                    "ae": '注册商标',
                    "2122": '商标'
                }
            }
        },
        methods: {
            selectEmoticon(event) {
               let o = event.target
               if (o.tagName == 'A') {
                   let r = o.innerText || o.textContent
                   let i = o.getAttribute('type')
                   switch (i) {
                       case 'qq':
                           r = "[" + r + "]"
                           r = this.getEmoticonByText(r)
                           //this.insertToEditArea(r)
                           document.getElementById("editArea").innerHTML = document.getElementById("editArea").innerHTML + r
                           break
                       case 'emoji':
                           r = "<" + r + ">"
                           r = this.getEmoticonByText(r)
                           document.getElementById("editArea").innerHTML = document.getElementById("editArea").innerHTML + r
                           break
                   }

               }
            },
            getEmoticonByText(e) {
               let t;
               if (e.indexOf('<') > -1) {
                   console.log(e)
                   t = this.QQFaceMap[e]
                   return this.genEmoticonHTML("emoji emoji" + t, this.EmojiCodeMap[t])
               } else {
                   t = this.QQFaceMap[e.replace(/\[|\]/g, "")]
                   return this.genEmoticonHTML("qqemoji qqemoji" + t, e)
               }
            },
            genEmoticonHTML(e, t) {
                return '<img class="' + e + '" text="' + t + (t.indexOf(this.MM_EMOTICON_WEB) > -1 ? "" : this.MM_EMOTICON_WEB) + '" src="' + this.RES_IMG_PLACEHOLDER + '" />'
            },
            insertToEditArea(e, o) {
                console.log(this.$parent)
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
        margin-right: 2px;
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

    .chat .box_ft .content img {
        vertical-align: middle;
    }

    .qqemoji {
        background: url(../images/qqSmilies31e225.png) top left no-repeat;
        width: 20px;
        height:20px;
        display: inline-block;
        vertical-align: top;
        zoom: 1;
    }

    .qqemoji0 {
        background-position: -2px -2px;
    }

    .qqemoji1 {
        background-position: -27px -2px;
    }

    .qqemoji2 {
        background-position: -52px -2px;
    }

    .qqemoji3 {
        background-position: -77px -2px;
    }

    .qqemoji4 {
        background-position: -102px -2px;
    }

    .qqemoji5 {
        background-position: -127px -2px;
    }

    .qqemoji6 {
        background-position: -152px -2px;
    }

    .qqemoji7 {
        background-position: -177px -2px;
    }

    .qqemoji8 {
        background-position: -202px -2px;
    }

    .qqemoji9 {
        background-position: -227px -2px;
    }

    .qqemoji10 {
        background-position: -252px -2px;
    }

    .qqemoji11 {
        background-position: -277px -2px;
    }

    .qqemoji12 {
        background-position: -302px -2px;
    }

    .qqemoji13 {
        background-position: -327px -2px;
    }

    .qqemoji14 {
        background-position: -352px -2px;
    }

    .qqemoji15 {
        background-position: -2px -27px;
    }

    .qqemoji16 {
        background-position: -27px -27px;
    }

    .qqemoji17 {
        background-position: -52px -27px;
    }

    .qqemoji18 {
        background-position: -77px -27px;
    }

    .qqemoji19 {
        background-position: -102px -27px;
    }

    .qqemoji20 {
        background-position: -127px -27px;
    }

    .qqemoji21 {
        background-position: -152px -27px;
    }

    .qqemoji22 {
        background-position: -177px -27px;
    }

    .qqemoji23 {
        background-position: -202px -27px;
    }

    .qqemoji24 {
        background-position: -227px -27px;
    }

    .qqemoji25 {
        background-position: -252px -27px;
    }

    .qqemoji26 {
        background-position: -277px -27px;
    }

    .qqemoji27 {
        background-position: -302px -27px;
    }

    .qqemoji28 {
        background-position: -327px -27px;
    }

    .qqemoji29 {
        background-position: -352px -27px;
    }

    .qqemoji30 {
        background-position: -2px -52px;
    }

    .qqemoji31 {
        background-position: -27px -52px;
    }

    .qqemoji32 {
        background-position: -52px -52px;
    }

    .qqemoji33 {
        background-position: -77px -52px;
    }

    .qqemoji34 {
        background-position: -102px -52px;
    }

    .qqemoji35 {
        background-position: -127px -52px;
    }

    .qqemoji36 {
        background-position: -152px -52px;
    }

    .qqemoji37 {
        background-position: -177px -52px;
    }

    .qqemoji38 {
        background-position: -202px -52px;
    }

    .qqemoji39 {
        background-position: -227px -52px;
    }

    .qqemoji40 {
        background-position: -252px -52px;
    }

    .qqemoji41 {
        background-position: -277px -52px;
    }

    .qqemoji42 {
        background-position: -302px -52px;
    }

    .qqemoji43 {
        background-position: -327px -52px;
    }

    .qqemoji44 {
        background-position: -352px -52px;
    }

    .qqemoji45 {
        background-position: -2px -77px;
    }

    .qqemoji46 {
        background-position: -27px -77px;
    }

    .qqemoji47 {
        background-position: -52px -77px;
    }

    .qqemoji48 {
        background-position: -77px -77px;
    }

    .qqemoji49 {
        background-position: -102px -77px;
    }

    .qqemoji50 {
        background-position: -127px -77px;
    }

    .qqemoji51 {
        background-position: -152px -77px;
    }

    .qqemoji52 {
        background-position: -177px -77px;
    }

    .qqemoji53 {
        background-position: -202px -77px;
    }

    .qqemoji54 {
        background-position: -227px -77px;
    }

    .qqemoji55 {
        background-position: -252px -77px;
    }

    .qqemoji56 {
        background-position: -277px -77px;
    }

    .qqemoji57 {
        background-position: -302px -77px;
    }

    .qqemoji58 {
        background-position: -327px -77px;
    }

    .qqemoji59 {
        background-position: -352px -77px;
    }

    .qqemoji60 {
        background-position: -2px -102px;
    }

    .qqemoji61 {
        background-position: -27px -102px;
    }

    .qqemoji62 {
        background-position: -52px -102px;
    }

    .qqemoji63 {
        background-position: -77px -102px;
    }

    .qqemoji64 {
        background-position: -102px -102px;
    }

    .qqemoji65 {
        background-position: -127px -102px;
    }

    .qqemoji66 {
        background-position: -152px -102px;
    }

    .qqemoji67 {
        background-position: -177px -102px;
    }

    .qqemoji68 {
        background-position: -202px -102px;
    }

    .qqemoji69 {
        background-position: -227px -102px;
    }

    .qqemoji70 {
        background-position: -252px -102px;
    }

    .qqemoji71 {
        background-position: -277px -102px;
    }

    .qqemoji72 {
        background-position: -302px -102px;
    }

    .qqemoji73 {
        background-position: -327px -102px;
    }

    .qqemoji74 {
        background-position: -352px -102px;
    }

    .qqemoji75 {
        background-position: -2px -127px;
    }

    .qqemoji76 {
        background-position: -27px -127px;
    }

    .qqemoji77 {
        background-position: -52px -127px;
    }

    .qqemoji78 {
        background-position: -77px -127px;
    }

    .qqemoji79 {
        background-position: -102px -127px;
    }

    .qqemoji80 {
        background-position: -127px -127px;
    }

    .qqemoji81 {
        background-position: -152px -127px;
    }

    .qqemoji82 {
        background-position: -177px -127px;
    }

    .qqemoji83 {
        background-position: -202px -127px;
    }

    .qqemoji84 {
        background-position: -227px -127px;
    }

    .qqemoji85 {
        background-position: -252px -127px;
    }

    .qqemoji86 {
        background-position: -277px -127px;
    }

    .qqemoji87 {
        background-position: -302px -127px;
    }

    .qqemoji88 {
        background-position: -327px -127px;
    }

    .qqemoji89 {
        background-position: -352px -127px;
    }

    .qqemoji90 {
        background-position: -2px -152px;
    }

    .qqemoji91 {
        background-position: -27px -152px;
    }

    .qqemoji92 {
        background-position: -52px -152px;
    }

    .qqemoji93 {
        background-position: -77px -152px;
    }

    .qqemoji94 {
        background-position: -102px -152px;
    }

    .qqemoji95 {
        background-position: -127px -152px;
    }

    .qqemoji96 {
        background-position: -152px -152px;
    }

    .qqemoji97 {
        background-position: -177px -152px;
    }

    .qqemoji98 {
        background-position: -202px -152px;
    }

    .qqemoji99 {
        background-position: -227px -152px;
    }

    .qqemoji100 {
        background-position: -252px -152px;
    }

    .qqemoji101 {
        background-position: -277px -152px;
    }

    .qqemoji102 {
        background-position: -302px -152px;
    }

    .qqemoji103 {
        background-position: -327px -152px;
    }

    .qqemoji104 {
        background-position: -352px -152px;
    }

    .emoji {
        background: url(../images/emoji31e225.png) top left no-repeat;
        width: 20px;
        height: 20px;
        display: inline-block;
        vertical-align: top;
        zoom: 1;
    }

    .emoji2600 {
        background-position: 0 -260px;
    }

    .emoji2601 {
        background-position: 0 -20px;
    }

    .emoji2614 {
        background-position: 0 -40px;
    }

    .emoji26c4 {
        background-position: 0 -60px;
    }

    .emoji26a1 {
        background-position: 0 -80px;
    }

    .emoji1f300 {
        background-position: 0 -100px;
    }

    .emoji1f301 {
        background-position: 0 -9200px;
    }

    .emoji1f302 {
        background-position: 0 -120px;
    }

    .emoji1f303 {
        background-position: 0 -920px;
    }

    .emoji1f304 {
        background-position: 0 -160px;
    }

    .emoji1f305 {
        background-position: 0 -180px;
    }

    .emoji1f306 {
        background-position: 0 -200px;
    }

    .emoji1f307 {
        background-position: 0 -220px;
    }

    .emoji1f308 {
        background-position: 0 -240px;
    }

    .emoji2744 {
        background-position: 0 -9200px;
    }

    .emoji26c5 {
        background-position: 0 -260px;
    }

    .emoji1f309 {
        background-position: 0 -920px;
    }

    .emoji1f30a {
        background-position: 0 -900px;
    }

    .emoji1f30b {
        background-position: 0 -9200px;
    }

    .emoji1f30c {
        background-position: 0 -920px;
    }

    .emoji1f30f {
        background-position: 0 -9200px;
    }

    .emoji1f311 {
        background-position: 0 -9200px;
    }

    .emoji1f314 {
        background-position: 0 -360px;
    }

    .emoji1f313 {
        background-position: 0 -360px;
    }

    .emoji1f319 {
        background-position: 0 -360px;
    }

    .emoji1f315 {
        background-position: 0 -9200px;
    }

    .emoji1f31b {
        background-position: 0 -360px;
    }

    .emoji1f31f {
        background-position: 0 -10740px;
    }

    .emoji1f320 {
        background-position: 0 -9200px;
    }

    .emoji1f550 {
        background-position: 0 -380px;
    }

    .emoji1f551 {
        background-position: 0 -400px;
    }

    .emoji1f552 {
        background-position: 0 -420px;
    }

    .emoji1f553 {
        background-position: 0 -440px;
    }

    .emoji1f554 {
        background-position: 0 -460px;
    }

    .emoji1f555 {
        background-position: 0 -480px;
    }

    .emoji1f556 {
        background-position: 0 -500px;
    }

    .emoji1f557 {
        background-position: 0 -520px;
    }

    .emoji1f558 {
        background-position: 0 -540px;
    }

    .emoji1f559 {
        background-position: 0 -620px;
    }

    .emoji1f55a {
        background-position: 0 -580px;
    }

    .emoji1f55b {
        background-position: 0 -600px;
    }

    .emoji231a {
        background-position: 0 -9200px;
    }

    .emoji231b {
        background-position: 0 -9200px;
    }

    .emoji23f0 {
        background-position: 0 -620px;
    }

    .emoji23f3 {
        background-position: 0 -9200px;
    }

    .emoji2648 {
        background-position: 0 -640px;
    }

    .emoji2649 {
        background-position: 0 -660px;
    }

    .emoji264a {
        background-position: 0 -680px;
    }

    .emoji264b {
        background-position: 0 -700px;
    }

    .emoji264c {
        background-position: 0 -720px;
    }

    .emoji264d {
        background-position: 0 -740px;
    }

    .emoji264e {
        background-position: 0 -760px;
    }

    .emoji264f {
        background-position: 0 -780px;
    }

    .emoji2650 {
        background-position: 0 -800px;
    }

    .emoji2651 {
        background-position: 0 -820px;
    }

    .emoji2652 {
        background-position: 0 -840px;
    }

    .emoji2653 {
        background-position: 0 -860px;
    }

    .emoji26ce {
        background-position: 0 -880px;
    }

    .emoji1f340 {
        background-position: 0 -1220px;
    }

    .emoji1f337 {
        background-position: 0 -960px;
    }

    .emoji1f331 {
        background-position: 0 -1220px;
    }

    .emoji1f341 {
        background-position: 0 -1000px;
    }

    .emoji1f338 {
        background-position: 0 -1020px;
    }

    .emoji1f339 {
        background-position: 0 -1040px;
    }

    .emoji1f342 {
        background-position: 0 -1060px;
    }

    .emoji1f343 {
        background-position: 0 -1080px;
    }

    .emoji1f33a {
        background-position: 0 -1100px;
    }

    .emoji1f33b {
        background-position: 0 -1200px;
    }

    .emoji1f334 {
        background-position: 0 -1140px;
    }

    .emoji1f335 {
        background-position: 0 -1160px;
    }

    .emoji1f33e {
        background-position: 0 -1180px;
    }

    .emoji1f33d {
        background-position: 0 -9200px;
    }

    .emoji1f344 {
        background-position: 0 -9200px;
    }

    .emoji1f330 {
        background-position: 0 -9200px;
    }

    .emoji1f33c {
        background-position: 0 -1200px;
    }

    .emoji1f33f {
        background-position: 0 -1220px;
    }

    .emoji1f352 {
        background-position: 0 -9200px;
    }

    .emoji1f34c {
        background-position: 0 -9200px;
    }

    .emoji1f34e {
        background-position: 0 -1360px;
    }

    .emoji1f34a {
        background-position: 0 -1260px;
    }

    .emoji1f353 {
        background-position: 0 -1280px;
    }

    .emoji1f349 {
        background-position: 0 -1300px;
    }

    .emoji1f345 {
        background-position: 0 -1320px;
    }

    .emoji1f346 {
        background-position: 0 -1340px;
    }

    .emoji1f348 {
        background-position: 0 -9200px;
    }

    .emoji1f34d {
        background-position: 0 -9200px;
    }

    .emoji1f347 {
        background-position: 0 -9200px;
    }

    .emoji1f351 {
        background-position: 0 -9200px;
    }

    .emoji1f34f {
        background-position: 0 -1360px;
    }

    .emoji1f440 {
        background-position: 0 -1380px;
    }

    .emoji1f442 {
        background-position: 0 -1400px;
    }

    .emoji1f443 {
        background-position: 0 -1420px;
    }

    .emoji1f444 {
        background-position: 0 -1440px;
    }

    .emoji1f445 {
        background-position: 0 -3000px;
    }

    .emoji1f484 {
        background-position: 0 -1480px;
    }

    .emoji1f485 {
        background-position: 0 -1500px;
    }

    .emoji1f486 {
        background-position: 0 -1520px;
    }

    .emoji1f487 {
        background-position: 0 -1540px;
    }

    .emoji1f488 {
        background-position: 0 -1560px;
    }

    .emoji1f464 {
        background-position: 0 -9200px;
    }

    .emoji1f466 {
        background-position: 0 -1580px;
    }

    .emoji1f467 {
        background-position: 0 -1600px;
    }

    .emoji1f468 {
        background-position: 0 -1620px;
    }

    .emoji1f469 {
        background-position: 0 -1640px;
    }

    .emoji1f46a {
        background-position: 0 -9200px;
    }

    .emoji1f46b {
        background-position: 0 -1660px;
    }

    .emoji1f46e {
        background-position: 0 -1680px;
    }

    .emoji1f46f {
        background-position: 0 -1700px;
    }

    .emoji1f470 {
        background-position: 0 -9200px;
    }

    .emoji1f471 {
        background-position: 0 -1720px;
    }

    .emoji1f472 {
        background-position: 0 -1740px;
    }

    .emoji1f473 {
        background-position: 0 -1760px;
    }

    .emoji1f474 {
        background-position: 0 -1780px;
    }

    .emoji1f475 {
        background-position: 0 -1800px;
    }

    .emoji1f476 {
        background-position: 0 -1820px;
    }

    .emoji1f477 {
        background-position: 0 -1840px;
    }

    .emoji1f478 {
        background-position: 0 -1860px;
    }

    .emoji1f479 {
        background-position: 0 -9200px;
    }

    .emoji1f47a {
        background-position: 0 -9200px;
    }

    .emoji1f47b {
        background-position: 0 -1880px;
    }

    .emoji1f47c {
        background-position: 0 -1900px;
    }

    .emoji1f47d {
        background-position: 0 -1920px;
    }

    .emoji1f47e {
        background-position: 0 -1940px;
    }

    .emoji1f47f {
        background-position: 0 -1960px;
    }

    .emoji1f480 {
        background-position: 0 -1980px;
    }

    .emoji1f481 {
        background-position: 0 -2000px;
    }

    .emoji1f482 {
        background-position: 0 -2020px;
    }

    .emoji1f483 {
        background-position: 0 -2040px;
    }

    .emoji1f40c {
        background-position: 0 -9200px;
    }

    .emoji1f40d {
        background-position: 0 -2620px;
    }

    .emoji1f40e {
        background-position: 0 -6680px;
    }

    .emoji1f414 {
        background-position: 0 -2640px;
    }

    .emoji1f417 {
        background-position: 0 -2660px;
    }

    .emoji1f42b {
        background-position: 0 -2680px;
    }

    .emoji1f418 {
        background-position: 0 -2480px;
    }

    .emoji1f428 {
        background-position: 0 -2500px;
    }

    .emoji1f412 {
        background-position: 0 -2520px;
    }

    .emoji1f411 {
        background-position: 0 -2540px;
    }

    .emoji1f419 {
        background-position: 0 -2340px;
    }

    .emoji1f41a {
        background-position: 0 -2360px;
    }

    .emoji1f41b {
        background-position: 0 -2460px;
    }

    .emoji1f41c {
        background-position: 0 -9200px;
    }

    .emoji1f41d {
        background-position: 0 -9200px;
    }

    .emoji1f41e {
        background-position: 0 -9200px;
    }

    .emoji1f420 {
        background-position: 0 -2420px;
    }

    .emoji1f421 {
        background-position: 0 -7360px;
    }

    .emoji1f422 {
        background-position: 0 -9200px;
    }

    .emoji1f424 {
        background-position: 0 -2140px;
    }

    .emoji1f425 {
        background-position: 0 -2140px;
    }

    .emoji1f426 {
        background-position: 0 -2400px;
    }

    .emoji1f423 {
        background-position: 0 -2140px;
    }

    .emoji1f427 {
        background-position: 0 -2160px;
    }

    .emoji1f429 {
        background-position: 0 -2720px;
    }

    .emoji1f41f {
        background-position: 0 -7360px;
    }

    .emoji1f42c {
        background-position: 0 -2380px;
    }

    .emoji1f42d {
        background-position: 0 -2280px;
    }

    .emoji1f42f {
        background-position: 0 -2240px;
    }

    .emoji1f431 {
        background-position: 0 -2080px;
    }

    .emoji1f433 {
        background-position: 0 -2300px;
    }

    .emoji1f434 {
        background-position: 0 -2200px;
    }

    .emoji1f435 {
        background-position: 0 -2320px;
    }

    .emoji1f436 {
        background-position: 0 -2720px;
    }

    .emoji1f437 {
        background-position: 0 -2780px;
    }

    .emoji1f43b {
        background-position: 0 -2260px;
    }

    .emoji1f439 {
        background-position: 0 -2440px;
    }

    .emoji1f43a {
        background-position: 0 -2560px;
    }

    .emoji1f42e {
        background-position: 0 -2580px;
    }

    .emoji1f430 {
        background-position: 0 -2600px;
    }

    .emoji1f438 {
        background-position: 0 -2700px;
    }

    .emoji1f43e {
        background-position: 0 -6460px;
    }

    .emoji1f432 {
        background-position: 0 -9200px;
    }

    .emoji1f43c {
        background-position: 0 -9200px;
    }

    .emoji1f43d {
        background-position: 0 -2780px;
    }

    .emoji1f620 {
        background-position: 0 -2800px;
    }

    .emoji1f629 {
        background-position: 0 -3860px;
    }

    .emoji1f632 {
        background-position: 0 -2840px;
    }

    .emoji1f61e {
        background-position: 0 -2860px;
    }

    .emoji1f635 {
        background-position: 0 -3540px;
    }

    .emoji1f630 {
        background-position: 0 -2900px;
    }

    .emoji1f612 {
        background-position: 0 -2920px;
    }

    .emoji1f60d {
        background-position: 0 -3660px;
    }

    .emoji1f624 {
        background-position: 0 -3720px;
    }

    .emoji1f61c {
        background-position: 0 -2980px;
    }

    .emoji1f61d {
        background-position: 0 -3000px;
    }

    .emoji1f60b {
        background-position: 0 -3220px;
    }

    .emoji1f618 {
        background-position: 0 -3640px;
    }

    .emoji1f61a {
        background-position: 0 -3060px;
    }

    .emoji1f637 {
        background-position: 0 -3080px;
    }

    .emoji1f633 {
        background-position: 0 -3100px;
    }

    .emoji1f603 {
        background-position: 0 -3580px;
    }

    .emoji1f605 {
        background-position: 0 -3260px;
    }

    .emoji1f606 {
        background-position: 0 -3380px;
    }

    .emoji1f601 {
        background-position: 0 -3720px;
    }

    .emoji1f602 {
        background-position: 0 -3620px;
    }

    .emoji1f60a {
        background-position: 0 -3220px;
    }

    .emoji263a {
        background-position: 0 -3240px;
    }

    .emoji1f604 {
        background-position: 0 -3260px;
    }

    .emoji1f622 {
        background-position: 0 -3680px;
    }

    .emoji1f62d {
        background-position: 0 -3300px;
    }

    .emoji1f628 {
        background-position: 0 -3320px;
    }

    .emoji1f623 {
        background-position: 0 -3540px;
    }

    .emoji1f621 {
        background-position: 0 -3880px;
    }

    .emoji1f60c {
        background-position: 0 -3380px;
    }

    .emoji1f616 {
        background-position: 0 -10520px;
    }

    .emoji1f614 {
        background-position: 0 -3860px;
    }

    .emoji1f631 {
        background-position: 0 -3440px;
    }

    .emoji1f62a {
        background-position: 0 -3460px;
    }

    .emoji1f60f {
        background-position: 0 -3480px;
    }

    .emoji1f613 {
        background-position: 0 -3500px;
    }

    .emoji1f625 {
        background-position: 0 -3520px;
    }

    .emoji1f62b {
        background-position: 0 -3540px;
    }

    .emoji1f609 {
        background-position: 0 -3560px;
    }

    .emoji1f63a {
        background-position: 0 -3580px;
    }

    .emoji1f638 {
        background-position: 0 -3720px;
    }

    .emoji1f639 {
        background-position: 0 -3620px;
    }

    .emoji1f63d {
        background-position: 0 -3640px;
    }

    .emoji1f63b {
        background-position: 0 -3660px;
    }

    .emoji1f63f {
        background-position: 0 -3680px;
    }

    .emoji1f63e {
        background-position: 0 -3880px;
    }

    .emoji1f63c {
        background-position: 0 -3720px;
    }

    .emoji1f640 {
        background-position: 0 -3860px;
    }

    .emoji1f645 {
        background-position: 0 -3760px;
    }

    .emoji1f646 {
        background-position: 0 -3780px;
    }

    .emoji1f647 {
        background-position: 0 -3800px;
    }

    .emoji1f648 {
        background-position: 0 -9200px;
    }

    .emoji1f64a {
        background-position: 0 -9200px;
    }

    .emoji1f649 {
        background-position: 0 -9200px;
    }

    .emoji1f64b {
        background-position: 0 -11240px;
    }

    .emoji1f64c {
        background-position: 0 -3840px;
    }

    .emoji1f64d {
        background-position: 0 -3860px;
    }

    .emoji1f64e {
        background-position: 0 -3880px;
    }

    .emoji1f64f {
        background-position: 0 -3900px;
    }

    .emoji1f3e0 {
        background-position: 0 -3940px;
    }

    .emoji1f3e1 {
        background-position: 0 -3940px;
    }

    .emoji1f3e2 {
        background-position: 0 -3960px;
    }

    .emoji1f3e3 {
        background-position: 0 -3980px;
    }

    .emoji1f3e5 {
        background-position: 0 -4000px;
    }

    .emoji1f3e6 {
        background-position: 0 -4020px;
    }

    .emoji1f3e7 {
        background-position: 0 -4040px;
    }

    .emoji1f3e8 {
        background-position: 0 -4060px;
    }

    .emoji1f3e9 {
        background-position: 0 -4080px;
    }

    .emoji1f3ea {
        background-position: 0 -4100px;
    }

    .emoji1f3eb {
        background-position: 0 -4120px;
    }

    .emoji26ea {
        background-position: 0 -4140px;
    }

    .emoji26f2 {
        background-position: 0 -4160px;
    }

    .emoji1f3ec {
        background-position: 0 -4180px;
    }

    .emoji1f3ef {
        background-position: 0 -4200px;
    }

    .emoji1f3f0 {
        background-position: 0 -4220px;
    }

    .emoji1f3ed {
        background-position: 0 -4240px;
    }

    .emoji2693 {
        background-position: 0 -6920px;
    }

    .emoji1f3ee {
        background-position: 0 -8800px;
    }

    .emoji1f5fb {
        background-position: 0 -4300px;
    }

    .emoji1f5fc {
        background-position: 0 -4320px;
    }

    .emoji1f5fd {
        background-position: 0 -4340px;
    }

    .emoji1f5fe {
        background-position: 0 -9200px;
    }

    .emoji1f5ff {
        background-position: 0 -9200px;
    }

    .emoji1f45e {
        background-position: 0 -4400px;
    }

    .emoji1f45f {
        background-position: 0 -4400px;
    }

    .emoji1f460 {
        background-position: 0 -4420px;
    }

    .emoji1f461 {
        background-position: 0 -4440px;
    }

    .emoji1f462 {
        background-position: 0 -4460px;
    }

    .emoji1f463 {
        background-position: 0 -6460px;
    }

    .emoji1f453 {
        background-position: 0 -9200px;
    }

    .emoji1f455 {
        background-position: 0 -4620px;
    }

    .emoji1f456 {
        background-position: 0 -9200px;
    }

    .emoji1f451 {
        background-position: 0 -4500px;
    }

    .emoji1f454 {
        background-position: 0 -4520px;
    }

    .emoji1f452 {
        background-position: 0 -4540px;
    }

    .emoji1f457 {
        background-position: 0 -4560px;
    }

    .emoji1f458 {
        background-position: 0 -4580px;
    }

    .emoji1f459 {
        background-position: 0 -4600px;
    }

    .emoji1f45a {
        background-position: 0 -4620px;
    }

    .emoji1f45b {
        background-position: 0 -9200px;
    }

    .emoji1f45c {
        background-position: 0 -4960px;
    }

    .emoji1f45d {
        background-position: 0 -9200px;
    }

    .emoji1f4b0 {
        background-position: 0 -4720px;
    }

    .emoji1f4b1 {
        background-position: 0 -4660px;
    }

    .emoji1f4b9 {
        background-position: 0 -6380px;
    }

    .emoji1f4b2 {
        background-position: 0 -4720px;
    }

    .emoji1f4b3 {
        background-position: 0 -9200px;
    }

    .emoji1f4b4 {
        background-position: 0 -9200px;
    }

    .emoji1f4b5 {
        background-position: 0 -4720px;
    }

    .emoji1f4b8 {
        background-position: 0 -9200px;
    }

    .emoji1f1e81f1f3 {
        background-position: 0 -4740px;
    }

    .emoji1f1e91f1ea {
        background-position: 0 -4760px;
    }

    .emoji1f1ea1f1f8 {
        background-position: 0 -4780px;
    }

    .emoji1f1eb1f1f7 {
        background-position: 0 -4800px;
    }

    .emoji1f1ec1f1e7 {
        background-position: 0 -4820px;
    }

    .emoji1f1ee1f1f9 {
        background-position: 0 -4840px;
    }

    .emoji1f1ef1f1f5 {
        background-position: 0 -4860px;
    }

    .emoji1f1f01f1f7 {
        background-position: 0 -4880px;
    }

    .emoji1f1f71f1fa {
        background-position: 0 -4900px;
    }

    .emoji1f1fa1f1f8 {
        background-position: 0 -4920px;
    }

    .emoji1f525 {
        background-position: 0 -5040px;
    }

    .emoji1f526 {
        background-position: 0 -9200px;
    }

    .emoji1f527 {
        background-position: 0 -9200px;
    }

    .emoji1f528 {
        background-position: 0 -4360px;
    }

    .emoji1f529 {
        background-position: 0 -9200px;
    }

    .emoji1f52a {
        background-position: 0 -9200px;
    }

    .emoji1f52b {
        background-position: 0 -5020px;
    }

    .emoji1f52e {
        background-position: 0 -5080px;
    }

    .emoji1f52f {
        background-position: 0 -5080px;
    }

    .emoji1f530 {
        background-position: 0 -9660px;
    }

    .emoji1f531 {
        background-position: 0 -9680px;
    }

    .emoji1f489 {
        background-position: 0 -5300px;
    }

    .emoji1f48a {
        background-position: 0 -5320px;
    }

    .emoji1f170 {
        background-position: 0 -5340px;
    }

    .emoji1f171 {
        background-position: 0 -5360px;
    }

    .emoji1f18e {
        background-position: 0 -5380px;
    }

    .emoji1f17e {
        background-position: 0 -5400px;
    }

    .emoji1f380 {
        background-position: 0 -5420px;
    }

    .emoji1f381 {
        background-position: 0 -6080px;
    }

    .emoji1f382 {
        background-position: 0 -5460px;
    }

    .emoji1f384 {
        background-position: 0 -5480px;
    }

    .emoji1f385 {
        background-position: 0 -5500px;
    }

    .emoji1f38c {
        background-position: 0 -5520px;
    }

    .emoji1f386 {
        background-position: 0 -5540px;
    }

    .emoji1f388 {
        background-position: 0 -5560px;
    }

    .emoji1f389 {
        background-position: 0 -5580px;
    }

    .emoji1f38d {
        background-position: 0 -5600px;
    }

    .emoji1f38e {
        background-position: 0 -5620px;
    }

    .emoji1f393 {
        background-position: 0 -5640px;
    }

    .emoji1f392 {
        background-position: 0 -5660px;
    }

    .emoji1f38f {
        background-position: 0 -5680px;
    }

    .emoji1f387 {
        background-position: 0 -5700px;
    }

    .emoji1f390 {
        background-position: 0 -5720px;
    }

    .emoji1f383 {
        background-position: 0 -5740px;
    }

    .emoji1f38a {
        background-position: 0 -9200px;
    }

    .emoji1f38b {
        background-position: 0 -9200px;
    }

    .emoji1f391 {
        background-position: 0 -5760px;
    }

    .emoji1f4df {
        background-position: 0 -9200px;
    }

    .emoji260e {
        background-position: 0 -5800px;
    }

    .emoji1f4de {
        background-position: 0 -5800px;
    }

    .emoji1f4f1 {
        background-position: 0 -5820px;
    }

    .emoji1f4f2 {
        background-position: 0 -5840px;
    }

    .emoji1f4dd {
        background-position: 0 -6440px;
    }

    .emoji1f4e0 {
        background-position: 0 -5880px;
    }

    .emoji2709 {
        background-position: 0 -11200px;
    }

    .emoji1f4e8 {
        background-position: 0 -11200px;
    }

    .emoji1f4e9 {
        background-position: 0 -11200px;
    }

    .emoji1f4ea {
        background-position: 0 -5980px;
    }

    .emoji1f4eb {
        background-position: 0 -5980px;
    }

    .emoji1f4ee {
        background-position: 0 -6000px;
    }

    .emoji1f4f0 {
        background-position: 0 -9200px;
    }

    .emoji1f4e2 {
        background-position: 0 -6020px;
    }

    .emoji1f4e3 {
        background-position: 0 -6040px;
    }

    .emoji1f4e1 {
        background-position: 0 -6060px;
    }

    .emoji1f4e4 {
        background-position: 0 -9200px;
    }

    .emoji1f4e5 {
        background-position: 0 -9200px;
    }

    .emoji1f4e6 {
        background-position: 0 -6080px;
    }

    .emoji1f4e7 {
        background-position: 0 -11200px;
    }

    .emoji1f520 {
        background-position: 0 -9200px;
    }

    .emoji1f521 {
        background-position: 0 -9200px;
    }

    .emoji1f522 {
        background-position: 0 -9200px;
    }

    .emoji1f523 {
        background-position: 0 -9200px;
    }

    .emoji1f524 {
        background-position: 0 -9200px;
    }

    .emoji2712 {
        background-position: 0 -9200px;
    }

    .emoji1f4ba {
        background-position: 0 -6100px;
    }

    .emoji1f4bb {
        background-position: 0 -6120px;
    }

    .emoji270f {
        background-position: 0 -6440px;
    }

    .emoji1f4ce {
        background-position: 0 -9200px;
    }

    .emoji1f4bc {
        background-position: 0 -6160px;
    }

    .emoji1f4bd {
        background-position: 0 -6200px;
    }

    .emoji1f4be {
        background-position: 0 -6200px;
    }

    .emoji1f4bf {
        background-position: 0 -7800px;
    }

    .emoji1f4c0 {
        background-position: 0 -7820px;
    }

    .emoji2702 {
        background-position: 0 -6220px;
    }

    .emoji1f4cd {
        background-position: 0 -9200px;
    }

    .emoji1f4c3 {
        background-position: 0 -6440px;
    }

    .emoji1f4c4 {
        background-position: 0 -6440px;
    }

    .emoji1f4c5 {
        background-position: 0 -9200px;
    }

    .emoji1f4c1 {
        background-position: 0 -9200px;
    }

    .emoji1f4c2 {
        background-position: 0 -9200px;
    }

    .emoji1f4d3 {
        background-position: 0 -6420px;
    }

    .emoji1f4d6 {
        background-position: 0 -6420px;
    }

    .emoji1f4d4 {
        background-position: 0 -6420px;
    }

    .emoji1f4d5 {
        background-position: 0 -6420px;
    }

    .emoji1f4d7 {
        background-position: 0 -6420px;
    }

    .emoji1f4d8 {
        background-position: 0 -6420px;
    }

    .emoji1f4d9 {
        background-position: 0 -6420px;
    }

    .emoji1f4da {
        background-position: 0 -6420px;
    }

    .emoji1f4db {
        background-position: 0 -9200px;
    }

    .emoji1f4dc {
        background-position: 0 -9200px;
    }

    .emoji1f4cb {
        background-position: 0 -6440px;
    }

    .emoji1f4c6 {
        background-position: 0 -9200px;
    }

    .emoji1f4ca {
        background-position: 0 -6380px;
    }

    .emoji1f4c8 {
        background-position: 0 -6380px;
    }

    .emoji1f4c9 {
        background-position: 0 -9200px;
    }

    .emoji1f4c7 {
        background-position: 0 -6420px;
    }

    .emoji1f4cc {
        background-position: 0 -9200px;
    }

    .emoji1f4d2 {
        background-position: 0 -6420px;
    }

    .emoji1f4cf {
        background-position: 0 -9200px;
    }

    .emoji1f4d0 {
        background-position: 0 -9200px;
    }

    .emoji1f4d1 {
        background-position: 0 -6440px;
    }

    .emoji1f3bd {
        background-position: 0 -9200px;
    }

    .emoji26be {
        background-position: 0 -6480px;
    }

    .emoji26f3 {
        background-position: 0 -6500px;
    }

    .emoji1f3be {
        background-position: 0 -6520px;
    }

    .emoji26bd {
        background-position: 0 -6540px;
    }

    .emoji1f3bf {
        background-position: 0 -6560px;
    }

    .emoji1f3c0 {
        background-position: 0 -6580px;
    }

    .emoji1f3c1 {
        background-position: 0 -6600px;
    }

    .emoji1f3c2 {
        background-position: 0 -9200px;
    }

    .emoji1f3c3 {
        background-position: 0 -6620px;
    }

    .emoji1f3c4 {
        background-position: 0 -6640px;
    }

    .emoji1f3c6 {
        background-position: 0 -6660px;
    }

    .emoji1f3c8 {
        background-position: 0 -6700px;
    }

    .emoji1f3ca {
        background-position: 0 -6720px;
    }

    .emoji1f683 {
        background-position: 0 -6740px;
    }

    .emoji1f687 {
        background-position: 0 -6780px;
    }

    .emoji24c2 {
        background-position: 0 -6780px;
    }

    .emoji1f684 {
        background-position: 0 -6800px;
    }

    .emoji1f685 {
        background-position: 0 -6820px;
    }

    .emoji1f697 {
        background-position: 0 -6840px;
    }

    .emoji1f699 {
        background-position: 0 -6860px;
    }

    .emoji1f68c {
        background-position: 0 -6880px;
    }

    .emoji1f68f {
        background-position: 0 -6900px;
    }

    .emoji1f6a2 {
        background-position: 0 -6920px;
    }

    .emoji2708 {
        background-position: 0 -6940px;
    }

    .emoji26f5 {
        background-position: 0 -6960px;
    }

    .emoji1f689 {
        background-position: 0 -7000px;
    }

    .emoji1f680 {
        background-position: 0 -7020px;
    }

    .emoji1f6a4 {
        background-position: 0 -7040px;
    }

    .emoji1f695 {
        background-position: 0 -7060px;
    }

    .emoji1f69a {
        background-position: 0 -7100px;
    }

    .emoji1f692 {
        background-position: 0 -7120px;
    }

    .emoji1f691 {
        background-position: 0 -7140px;
    }

    .emoji1f693 {
        background-position: 0 -7260px;
    }

    .emoji26fd {
        background-position: 0 -7180px;
    }

    .emoji1f17f {
        background-position: 0 -7200px;
    }

    .emoji1f6a5 {
        background-position: 0 -7220px;
    }

    .emoji1f6a7 {
        background-position: 0 -9720px;
    }

    .emoji1f6a8 {
        background-position: 0 -7260px;
    }

    .emoji2668 {
        background-position: 0 -7280px;
    }

    .emoji26fa {
        background-position: 0 -7300px;
    }

    .emoji1f3a0 {
        background-position: 0 -9200px;
    }

    .emoji1f3a1 {
        background-position: 0 -7320px;
    }

    .emoji1f3a2 {
        background-position: 0 -7340px;
    }

    .emoji1f3a3 {
        background-position: 0 -7360px;
    }

    .emoji1f3a4 {
        background-position: 0 -7380px;
    }

    .emoji1f3a5 {
        background-position: 0 -7400px;
    }

    .emoji1f3a6 {
        background-position: 0 -7420px;
    }

    .emoji1f3a7 {
        background-position: 0 -7440px;
    }

    .emoji1f3a8 {
        background-position: 0 -7460px;
    }

    .emoji1f3a9 {
        background-position: 0 -7540px;
    }

    .emoji1f3aa {
        background-position: 0 -9200px;
    }

    .emoji1f3ab {
        background-position: 0 -7500px;
    }

    .emoji1f3ac {
        background-position: 0 -7520px;
    }

    .emoji1f3ad {
        background-position: 0 -7540px;
    }

    .emoji1f3ae {
        background-position: 0 -9200px;
    }

    .emoji1f004 {
        background-position: 0 -7560px;
    }

    .emoji1f3af {
        background-position: 0 -7580px;
    }

    .emoji1f3b0 {
        background-position: 0 -7600px;
    }

    .emoji1f3b1 {
        background-position: 0 -7620px;
    }

    .emoji1f3b2 {
        background-position: 0 -9200px;
    }

    .emoji1f3b3 {
        background-position: 0 -9200px;
    }

    .emoji1f3b4 {
        background-position: 0 -9200px;
    }

    .emoji1f0cf {
        background-position: 0 -9200px;
    }

    .emoji1f3b5 {
        background-position: 0 -7640px;
    }

    .emoji1f3b6 {
        background-position: 0 -7740px;
    }

    .emoji1f3b7 {
        background-position: 0 -7680px;
    }

    .emoji1f3b8 {
        background-position: 0 -7700px;
    }

    .emoji1f3b9 {
        background-position: 0 -9200px;
    }

    .emoji1f3ba {
        background-position: 0 -7720px;
    }

    .emoji1f3bb {
        background-position: 0 -9200px;
    }

    .emoji1f3bc {
        background-position: 0 -7740px;
    }

    .emoji303d {
        background-position: 0 -7760px;
    }

    .emoji1f4f7 {
        background-position: 0 -4940px;
    }

    .emoji1f4f9 {
        background-position: 0 -7400px;
    }

    .emoji1f4fa {
        background-position: 0 -7780px;
    }

    .emoji1f4fb {
        background-position: 0 -7840px;
    }

    .emoji1f4fc {
        background-position: 0 -7860px;
    }

    .emoji1f48b {
        background-position: 0 -7900px;
    }

    .emoji1f48c {
        background-position: 0 -11200px;
    }

    .emoji1f48d {
        background-position: 0 -7940px;
    }

    .emoji1f48e {
        background-position: 0 -7960px;
    }

    .emoji1f48f {
        background-position: 0 -7980px;
    }

    .emoji1f490 {
        background-position: 0 -8000px;
    }

    .emoji1f491 {
        background-position: 0 -8020px;
    }

    .emoji1f492 {
        background-position: 0 -8040px;
    }

    .emoji1f51e {
        background-position: 0 -9860px;
    }

    .emojia9 {
        background-position: 0 -9900px;
    }

    .emojiae {
        background-position: 0 -9920px;
    }

    .emoji2122 {
        background-position: 0 -9940px;
    }

    .emoji2139 {
        background-position: 0 -9200px;
    }

    .emoji2320e3 {
        background-position: 0 -8060px;
    }

    .emoji3120e3 {
        background-position: 0 -8080px;
    }

    .emoji3220e3 {
        background-position: 0 -8100px;
    }

    .emoji3320e3 {
        background-position: 0 -8120px;
    }

    .emoji3420e3 {
        background-position: 0 -8140px;
    }

    .emoji3520e3 {
        background-position: 0 -8160px;
    }

    .emoji3620e3 {
        background-position: 0 -8180px;
    }

    .emoji3720e3 {
        background-position: 0 -8200px;
    }

    .emoji3820e3 {
        background-position: 0 -8220px;
    }

    .emoji3920e3 {
        background-position: 0 -8240px;
    }

    .emoji3020e3 {
        background-position: 0 -8260px;
    }

    .emoji1f51f {
        background-position: 0 -9200px;
    }

    .emoji1f4f6 {
        background-position: 0 -8280px;
    }

    .emoji1f4f3 {
        background-position: 0 -8300px;
    }

    .emoji1f4f4 {
        background-position: 0 -8320px;
    }

    .emoji1f354 {
        background-position: 0 -8340px;
    }

    .emoji1f359 {
        background-position: 0 -8360px;
    }

    .emoji1f370 {
        background-position: 0 -8380px;
    }

    .emoji1f35c {
        background-position: 0 -8400px;
    }

    .emoji1f35e {
        background-position: 0 -8420px;
    }

    .emoji1f373 {
        background-position: 0 -8440px;
    }

    .emoji1f366 {
        background-position: 0 -8460px;
    }

    .emoji1f35f {
        background-position: 0 -8480px;
    }

    .emoji1f361 {
        background-position: 0 -8500px;
    }

    .emoji1f358 {
        background-position: 0 -8520px;
    }

    .emoji1f35a {
        background-position: 0 -8540px;
    }

    .emoji1f35d {
        background-position: 0 -8560px;
    }

    .emoji1f35b {
        background-position: 0 -8580px;
    }

    .emoji1f362 {
        background-position: 0 -8600px;
    }

    .emoji1f363 {
        background-position: 0 -8620px;
    }

    .emoji1f371 {
        background-position: 0 -8640px;
    }

    .emoji1f372 {
        background-position: 0 -8660px;
    }

    .emoji1f367 {
        background-position: 0 -8680px;
    }

    .emoji1f356 {
        background-position: 0 -9200px;
    }

    .emoji1f365 {
        background-position: 0 -9200px;
    }

    .emoji1f360 {
        background-position: 0 -9200px;
    }

    .emoji1f355 {
        background-position: 0 -9200px;
    }

    .emoji1f357 {
        background-position: 0 -9200px;
    }

    .emoji1f368 {
        background-position: 0 -9200px;
    }

    .emoji1f369 {
        background-position: 0 -9200px;
    }

    .emoji1f36a {
        background-position: 0 -9200px;
    }

    .emoji1f36b {
        background-position: 0 -9200px;
    }

    .emoji1f36c {
        background-position: 0 -9200px;
    }

    .emoji1f36d {
        background-position: 0 -9200px;
    }

    .emoji1f36e {
        background-position: 0 -9200px;
    }

    .emoji1f36f {
        background-position: 0 -9200px;
    }

    .emoji1f364 {
        background-position: 0 -9200px;
    }

    .emoji1f374 {
        background-position: 0 -8700px;
    }

    .emoji2615 {
        background-position: 0 -8720px;
    }

    .emoji1f378 {
        background-position: 0 -8860px;
    }

    .emoji1f37a {
        background-position: 0 -8760px;
    }

    .emoji1f375 {
        background-position: 0 -8780px;
    }

    .emoji1f376 {
        background-position: 0 -8800px;
    }

    .emoji1f377 {
        background-position: 0 -8860px;
    }

    .emoji1f37b {
        background-position: 0 -8840px;
    }

    .emoji1f379 {
        background-position: 0 -8860px;
    }

    .emoji2197 {
        background-position: 0 -8960px;
    }

    .emoji2198 {
        background-position: 0 -8980px;
    }

    .emoji2196 {
        background-position: 0 -8920px;
    }

    .emoji2199 {
        background-position: 0 -8940px;
    }

    .emoji2934 {
        background-position: 0 -8960px;
    }

    .emoji2935 {
        background-position: 0 -8980px;
    }

    .emoji2194 {
        background-position: 0 -9200px;
    }

    .emoji2195 {
        background-position: 0 -9200px;
    }

    .emoji2b06 {
        background-position: 0 -9000px;
    }

    .emoji2b07 {
        background-position: 0 -9020px;
    }

    .emoji27a1 {
        background-position: 0 -9040px;
    }

    .emoji2b05 {
        background-position: 0 -11180px;
    }

    .emoji25b6 {
        background-position: 0 -9080px;
    }

    .emoji25c0 {
        background-position: 0 -9100px;
    }

    .emoji23e9 {
        background-position: 0 -9120px;
    }

    .emoji23ea {
        background-position: 0 -9140px;
    }

    .emoji23eb {
        background-position: 0 -9200px;
    }

    .emoji23ec {
        background-position: 0 -9200px;
    }

    .emoji1f53a {
        background-position: 0 -9200px;
    }

    .emoji1f53b {
        background-position: 0 -9200px;
    }

    .emoji1f53c {
        background-position: 0 -9200px;
    }

    .emoji1f53d {
        background-position: 0 -9200px;
    }

    .emoji2b55 {
        background-position: 0 -9800px;
    }

    .emoji274c {
        background-position: 0 -10340px;
    }

    .emoji274e {
        background-position: 0 -10340px;
    }

    .emoji2757 {
        background-position: 0 -9160px;
    }

    .emoji2049 {
        background-position: 0 -9200px;
    }

    .emoji203c {
        background-position: 0 -9200px;
    }

    .emoji2753 {
        background-position: 0 -9180px;
    }

    .emoji2754 {
        background-position: 0 -9200px;
    }

    .emoji2755 {
        background-position: 0 -9220px;
    }

    .emoji3030 {
        background-position: 0 -9200px;
    }

    .emoji27b0 {
        background-position: 0 -9200px;
    }

    .emoji27bf {
        background-position: 0 -9200px;
    }

    .emoji2764 {
        background-position: 0 -9240px;
    }

    .emoji1f493 {
        background-position: 0 -9480px;
    }

    .emoji1f494 {
        background-position: 0 -9280px;
    }

    .emoji1f495 {
        background-position: 0 -9480px;
    }

    .emoji1f496 {
        background-position: 0 -9480px;
    }

    .emoji1f497 {
        background-position: 0 -9340px;
    }

    .emoji1f498 {
        background-position: 0 -9360px;
    }

    .emoji1f499 {
        background-position: 0 -9380px;
    }

    .emoji1f49a {
        background-position: 0 -9400px;
    }

    .emoji1f49b {
        background-position: 0 -9420px;
    }

    .emoji1f49c {
        background-position: 0 -9440px;
    }

    .emoji1f49d {
        background-position: 0 -9460px;
    }

    .emoji1f49e {
        background-position: 0 -9480px;
    }

    .emoji1f49f {
        background-position: 0 -9500px;
    }

    .emoji2665 {
        background-position: 0 -9520px;
    }

    .emoji2660 {
        background-position: 0 -9540px;
    }

    .emoji2666 {
        background-position: 0 -9560px;
    }

    .emoji2663 {
        background-position: 0 -9580px;
    }

    .emoji1f6ac {
        background-position: 0 -9600px;
    }

    .emoji1f6ad {
        background-position: 0 -9620px;
    }

    .emoji267f {
        background-position: 0 -9640px;
    }

    .emoji1f6a9 {
        background-position: 0 -9200px;
    }

    .emoji26a0 {
        background-position: 0 -9700px;
    }

    .emoji26d4 {
        background-position: 0 -9720px;
    }

    .emoji267b {
        background-position: 0 -9200px;
    }

    .emoji1f6b2 {
        background-position: 0 -6980px;
    }

    .emoji1f6b6 {
        background-position: 0 -7080px;
    }

    .emoji1f6b9 {
        background-position: 0 -9740px;
    }

    .emoji1f6ba {
        background-position: 0 -9760px;
    }

    .emoji1f6c0 {
        background-position: 0 -5220px;
    }

    .emoji1f6bb {
        background-position: 0 -5240px;
    }

    .emoji1f6bd {
        background-position: 0 -5260px;
    }

    .emoji1f6be {
        background-position: 0 -5280px;
    }

    .emoji1f6bc {
        background-position: 0 -9780px;
    }

    .emoji1f6aa {
        background-position: 0 -9200px;
    }

    .emoji1f6ab {
        background-position: 0 -9200px;
    }

    .emoji2714 {
        background-position: 0 -9200px;
    }

    .emoji1f191 {
        background-position: 0 -9200px;
    }

    .emoji1f192 {
        background-position: 0 -10020px;
    }

    .emoji1f193 {
        background-position: 0 -9200px;
    }

    .emoji1f194 {
        background-position: 0 -11020px;
    }

    .emoji1f195 {
        background-position: 0 -9980px;
    }

    .emoji1f196 {
        background-position: 0 -9200px;
    }

    .emoji1f197 {
        background-position: 0 -9880px;
    }

    .emoji1f198 {
        background-position: 0 -9200px;
    }

    .emoji1f199 {
        background-position: 0 -10000px;
    }

    .emoji1f19a {
        background-position: 0 -9960px;
    }

    .emoji1f201 {
        background-position: 0 -10060px;
    }

    .emoji1f202 {
        background-position: 0 -10080px;
    }

    .emoji1f232 {
        background-position: 0 -9200px;
    }

    .emoji1f233 {
        background-position: 0 -10100px;
    }

    .emoji1f234 {
        background-position: 0 -9200px;
    }

    .emoji1f235 {
        background-position: 0 -10120px;
    }

    .emoji1f236 {
        background-position: 0 -10140px;
    }

    .emoji1f21a {
        background-position: 0 -10160px;
    }

    .emoji1f237 {
        background-position: 0 -10180px;
    }

    .emoji1f238 {
        background-position: 0 -10200px;
    }

    .emoji1f239 {
        background-position: 0 -10220px;
    }

    .emoji1f22f {
        background-position: 0 -10240px;
    }

    .emoji1f23a {
        background-position: 0 -10260px;
    }

    .emoji3299 {
        background-position: 0 -10280px;
    }

    .emoji3297 {
        background-position: 0 -10300px;
    }

    .emoji1f250 {
        background-position: 0 -10320px;
    }

    .emoji1f251 {
        background-position: 0 -9200px;
    }

    .emoji2795 {
        background-position: 0 -9200px;
    }

    .emoji2796 {
        background-position: 0 -9200px;
    }

    .emoji2716 {
        background-position: 0 -10340px;
    }

    .emoji2797 {
        background-position: 0 -9200px;
    }

    .emoji1f4a0 {
        background-position: 0 -9200px;
    }

    .emoji1f4a1 {
        background-position: 0 -10360px;
    }

    .emoji1f4a2 {
        background-position: 0 -10380px;
    }

    .emoji1f4a3 {
        background-position: 0 -10400px;
    }

    .emoji1f4a4 {
        background-position: 0 -10420px;
    }

    .emoji1f4a5 {
        background-position: 0 -9200px;
    }

    .emoji1f4a6 {
        background-position: 0 -10460px;
    }

    .emoji1f4a7 {
        background-position: 0 -10460px;
    }

    .emoji1f4a8 {
        background-position: 0 -10480px;
    }

    .emoji1f4a9 {
        background-position: 0 -5000px;
    }

    .emoji1f4aa {
        background-position: 0 -10500px;
    }

    .emoji1f4ab {
        background-position: 0 -10520px;
    }

    .emoji1f4ac {
        background-position: 0 -9200px;
    }

    .emoji2728 {
        background-position: 0 -11000px;
    }

    .emoji2734 {
        background-position: 0 -10560px;
    }

    .emoji2733 {
        background-position: 0 -10580px;
    }

    .emoji26aa {
        background-position: 0 -10640px;
    }

    .emoji26ab {
        background-position: 0 -10640px;
    }

    .emoji1f534 {
        background-position: 0 -10640px;
    }

    .emoji1f535 {
        background-position: 0 -10900px;
    }

    .emoji1f532 {
        background-position: 0 -10900px;
    }

    .emoji1f533 {
        background-position: 0 -10980px;
    }

    .emoji2b50 {
        background-position: 0 -10720px;
    }

    .emoji2b1c {
        background-position: 0 -10980px;
    }

    .emoji2b1b {
        background-position: 0 -10900px;
    }

    .emoji25ab {
        background-position: 0 -10980px;
    }

    .emoji25aa {
        background-position: 0 -10900px;
    }

    .emoji25fd {
        background-position: 0 -10980px;
    }

    .emoji25fe {
        background-position: 0 -10900px;
    }

    .emoji25fb {
        background-position: 0 -10980px;
    }

    .emoji25fc {
        background-position: 0 -10900px;
    }

    .emoji1f536 {
        background-position: 0 -10980px;
    }

    .emoji1f537 {
        background-position: 0 -10980px;
    }

    .emoji1f538 {
        background-position: 0 -10980px;
    }

    .emoji1f539 {
        background-position: 0 -10980px;
    }

    .emoji2747 {
        background-position: 0 -11000px;
    }

    .emoji1f4ae {
        background-position: 0 -9200px;
    }

    .emoji1f4af {
        background-position: 0 -9200px;
    }

    .emoji21a9 {
        background-position: 0 -9200px;
    }

    .emoji21aa {
        background-position: 0 -9200px;
    }

    .emoji1f503 {
        background-position: 0 -9200px;
    }

    .emoji1f50a {
        background-position: 0 -7880px;
    }

    .emoji1f50b {
        background-position: 0 -9200px;
    }

    .emoji1f50c {
        background-position: 0 -9200px;
    }

    .emoji1f50d {
        background-position: 0 -11060px;
    }

    .emoji1f50e {
        background-position: 0 -11060px;
    }

    .emoji1f512 {
        background-position: 0 -11140px;
    }

    .emoji1f513 {
        background-position: 0 -11100px;
    }

    .emoji1f50f {
        background-position: 0 -11140px;
    }

    .emoji1f510 {
        background-position: 0 -11140px;
    }

    .emoji1f511 {
        background-position: 0 -11160px;
    }

    .emoji1f514 {
        background-position: 0 -4980px;
    }

    .emoji2611 {
        background-position: 0 -9200px;
    }

    .emoji1f518 {
        background-position: 0 -9200px;
    }

    .emoji1f516 {
        background-position: 0 -9200px;
    }

    .emoji1f517 {
        background-position: 0 -9200px;
    }

    .emoji1f519 {
        background-position: 0 -11180px;
    }

    .emoji1f51a {
        background-position: 0 -9200px;
    }

    .emoji1f51b {
        background-position: 0 -9200px;
    }

    .emoji1f51c {
        background-position: 0 -9200px;
    }

    .emoji1f51d {
        background-position: 0 -10040px;
    }

    .emoji2003 {
        background-position: 0 -9200px;
    }

    .emoji2002 {
        background-position: 0 -9200px;
    }

    .emoji2005 {
        background-position: 0 -9200px;
    }

    .emoji2705 {
        background-position: 0 -9200px;
    }

    .emoji270a {
        background-position: 0 -11220px;
    }

    .emoji270b {
        background-position: 0 -11240px;
    }

    .emoji270c {
        background-position: 0 -11260px;
    }

    .emoji1f44a {
        background-position: 0 -11280px;
    }

    .emoji1f44d {
        background-position: 0 -11300px;
    }

    .emoji261d {
        background-position: 0 -11320px
    }

    .emoji1f446 {
        background-position: 0 -11340px;
    }

    .emoji1f447 {
        background-position: 0 -11360px;
    }

    .emoji1f448 {
        background-position: 0 -11380px;
    }

    .emoji1f449 {
        background-position: 0 -11400px;
    }

    .emoji1f44b {
        background-position: 0 -11420px;
    }

    .emoji1f44f {
        background-position: 0 -11440px;
    }

    .emoji1f44c {
        background-position: 0 -11460px;
    }

    .emoji1f44e {
        background-position: 0 -11480px;
    }

    .emoji1f450 {
        background-position: 0 -11500px;
    }

</style>