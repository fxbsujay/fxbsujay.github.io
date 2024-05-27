import{_ as s,c as i,o as a,a2 as l,aq as n,ar as t,as as h}from"./chunks/framework.GtFE_vXC.js";const u=JSON.parse('{"title":"事件循环","description":"","frontmatter":{},"headers":[],"relativePath":"blog/eventLoop.md","filePath":"blog/eventLoop.md","lastUpdated":1700552157000}'),p={name:"blog/eventLoop.md"},k=l('<h1 id="事件循环" tabindex="-1">事件循环 <a class="header-anchor" href="#事件循环" aria-label="Permalink to &quot;事件循环&quot;">​</a></h1><p>游览器进程主要有:</p><ul><li>游览器进程： 主要负责界面显示，子进程管理等。游览器进程内部会启动多个线程处理不同的任务</li><li>网络进程： 负责加载网络资源，网络进程内部会启动多个线程来处理不同的网络任务</li><li>渲染进程： 渲染进程启动后会启动一个渲染主进程，主进程负责执行 HMTL、CSS、JS 代码</li></ul><h2 id="渲染主线程如何工作的" tabindex="-1">渲染主线程如何工作的? <a class="header-anchor" href="#渲染主线程如何工作的" aria-label="Permalink to &quot;渲染主线程如何工作的?&quot;">​</a></h2><p>渲染线程是游览器中最繁忙的线程,需要它处理的任务包括但不限于:</p><ul><li>解析 HTML</li><li>解析 CSS</li><li>计算样式</li><li>布局</li><li>处理图层</li><li>每秒把页面画 60 次</li><li>执行全局 JS 代码</li><li>执行定时器的回调函数</li><li>.....</li></ul><blockquote><p>游览器采用排队的方式来执行这些任务,可以让每一个任务依次执行，持续的进行下去，整个过程被称之为事件循环</p></blockquote><p><img src="'+n+'" alt="image.png"></p><ul><li>在最开始的时候，渲染主线程会进入一个无限循环</li><li>每一次循环会检查消息队列中是否有任务存在，如果有，就取出第一个任务执行，执行完一个后进入下一次循环，如果没有，则进入休眠状态</li><li>其他所有线程(包括其他进程的线程)可以随时向消息队列添加任务，新任务会加到消息队列的末尾，在添加新任务时，如果主线程是休眠状态，则会将其唤醒以继续循环拿取任务</li></ul><h2 id="何为异步" tabindex="-1">何为异步? <a class="header-anchor" href="#何为异步" aria-label="Permalink to &quot;何为异步?&quot;">​</a></h2><p>代码在执行过程中，会遇到一些无法立即处理的任务，比如</p><ul><li>计时完成后需要执行的任务 -- <code>setTimeout</code> 、 <code>setInterval</code></li><li>网络通信完成后需要执行的任务 - <code>XHR</code> 、 <code>Fetch</code></li><li>用户操作后需要执行的任务 -- <code>addEventListener</code></li></ul><p>如果让渲染主线程等待这些任务的时机达到，就会导致主线程长期处于下阻塞，的状态，从而导致浏览器卡死</p><p><img src="'+t+'" alt="image.png"></p><p><strong>渲染主线程承担着极其重要的工作，无论如何都不能堵塞！</strong></p><p>因此，游览器选择异步来解决这个问题</p><p><img src="'+h+`" alt="image.png"></p><p>JS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。</p><p>如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。</p><p>所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的末尾排队，等待主线程调度执行。“在这种异步模式下，浏览器永不阻塞，从而最大限度的保证了单线程的流畅运行。</p><h2 id="js-为何会阻碍渲染" tabindex="-1">JS 为何会阻碍渲染？ <a class="header-anchor" href="#js-为何会阻碍渲染" aria-label="Permalink to &quot;JS 为何会阻碍渲染？&quot;">​</a></h2><p>先看代码</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello World&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;change&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> h1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> btn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;button&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 死循环指定时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">duration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> start </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> start </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> duration){}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    btn.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        h1.textContent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;你好 世界&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,23),e=[k];function E(r,d,g,o,c,y){return a(),i("div",null,e)}const _=s(p,[["render",E]]);export{u as __pageData,_ as default};
