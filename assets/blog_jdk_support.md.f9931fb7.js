import{_ as a,o as s,c as n,Q as o}from"./chunks/framework.4cf23e62.js";const u=JSON.parse('{"title":"JDK 17 新特性一览","description":"对Java JDK 17 新特性的概述","frontmatter":{"description":"对Java JDK 17 新特性的概述"},"headers":[],"relativePath":"blog/jdk_support.md","filePath":"blog/jdk_support.md","lastUpdated":1683911812000}'),l={name:"blog/jdk_support.md"},t=o(`<h1 id="jdk-17-新特性一览" tabindex="-1">JDK 17 新特性一览 <a class="header-anchor" href="#jdk-17-新特性一览" aria-label="Permalink to &quot;JDK 17 新特性一览&quot;">​</a></h1><h2 id="语言特性" tabindex="-1">语言特性 <a class="header-anchor" href="#语言特性" aria-label="Permalink to &quot;语言特性&quot;">​</a></h2><p><a href="https://www.oracle.com/java/technologies/javase/17-relnotes.html" target="_blank" rel="noreferrer">JDK 17</a> 引入的 API，通过有效调用外部函数（即 JVM 之外的代码），以及安全地访问外部内存（JVM 之外的内存），这些 API 可以调用本地库和处理本地数据，与 Java 运行环境之外的代码和数据进行交互 这个版本提供了 14 个增强功能，另外在性能、稳定性和安全性上面也得到了大量的提升，以及还有一些孵化和预览特性，有了这些新变化，Java 会进一步提高开发人员的生产力</p><table><thead><tr><th>id</th><th>特性</th><th>说明</th></tr></thead><tbody><tr><td>1</td><td>306:Restore Always-Strict Floating-Point Semantics</td><td>恢复始终执行严格模式的浮点定义</td></tr><tr><td>2</td><td>356:Enhanced Pseudo-Random Number Generators</td><td>增强型伪随机数生成器</td></tr><tr><td>3</td><td>382:New macOS Rendering Pipeline</td><td>新的 macOS 渲染管道</td></tr><tr><td>4</td><td>391:macOS/AArch64 Port</td><td>macOS AArch64 端口</td></tr><tr><td>5</td><td>398:Deprecate the Applet API for Removal</td><td>弃用 Applet API</td></tr><tr><td>6</td><td>403:Strongly Encapsulate JDK Internals</td><td>JDK 内部强封装</td></tr><tr><td>7</td><td>406:Pattern Matching for switch (Preview)</td><td>为 switch 支持模式匹配</td></tr><tr><td>8</td><td>407:Remove RMI Activation</td><td>移除 RMI 激活</td></tr><tr><td>9</td><td>409:Sealed Classes</td><td>密封类</td></tr><tr><td>10</td><td>410:Remove the Experimental AOT and JIT Compiler</td><td>移除实验性的 AOT 和 JIT 编译器</td></tr><tr><td>11</td><td>411:Deprecate the Security Manager for Removal</td><td>弃用安全管理器</td></tr><tr><td>12</td><td>412:Foreign Function &amp; Memory API (Incubator)</td><td>外部函数和内存 API（孵化中）</td></tr><tr><td>13</td><td>414:Vector API (Second Incubator)</td><td>矢量 API（二次孵化中）</td></tr><tr><td>14</td><td>415:Context-Specific Deserialization Filters</td><td>上下文特定反序列化过滤器</td></tr></tbody></table><h4 id="jep-406-为-switch-支持模式匹配" tabindex="-1">JEP 406：为 switch 支持模式匹配 <a class="header-anchor" href="#jep-406-为-switch-支持模式匹配" aria-label="Permalink to &quot;JEP 406：为 switch 支持模式匹配&quot;">​</a></h4><p>老版</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki slack-ochin"><code><span class="line"><span style="color:#DA5221;">static</span><span style="color:#002339;"> </span><span style="color:#0991B6;">String</span><span style="color:#002339;"> </span><span style="color:#7EB233;">formatter</span><span style="color:#002339;">(</span><span style="color:#0991B6;">Object</span><span style="color:#002339;"> o) {</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#0991B6;">String</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">formatted</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#A44185;">&quot;unknown&quot;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#7B30D0;">if</span><span style="color:#002339;"> (o </span><span style="color:#7B30D0;">instanceof</span><span style="color:#002339;"> </span><span style="color:#0991B6;">Integer</span><span style="color:#002339;"> i) {</span></span>
<span class="line"><span style="color:#002339;">        formatted </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">String</span><span style="color:#002339;">.</span><span style="color:#7EB233;">format</span><span style="color:#002339;">(</span><span style="color:#A44185;">&quot;int %d&quot;</span><span style="color:#002339;">, i);</span></span>
<span class="line"><span style="color:#002339;">    } </span><span style="color:#7B30D0;">else</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">if</span><span style="color:#002339;"> (o </span><span style="color:#7B30D0;">instanceof</span><span style="color:#002339;"> </span><span style="color:#0991B6;">Long</span><span style="color:#002339;"> l) {</span></span>
<span class="line"><span style="color:#002339;">        formatted </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">String</span><span style="color:#002339;">.</span><span style="color:#7EB233;">format</span><span style="color:#002339;">(</span><span style="color:#A44185;">&quot;long %d&quot;</span><span style="color:#002339;">, l);</span></span>
<span class="line"><span style="color:#002339;">    } </span><span style="color:#7B30D0;">else</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">if</span><span style="color:#002339;"> (o </span><span style="color:#7B30D0;">instanceof</span><span style="color:#002339;"> </span><span style="color:#0991B6;">Double</span><span style="color:#002339;"> d) {</span></span>
<span class="line"><span style="color:#002339;">        formatted </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">String</span><span style="color:#002339;">.</span><span style="color:#7EB233;">format</span><span style="color:#002339;">(</span><span style="color:#A44185;">&quot;double %f&quot;</span><span style="color:#002339;">, d);</span></span>
<span class="line"><span style="color:#002339;">    } </span><span style="color:#7B30D0;">else</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">if</span><span style="color:#002339;"> (o </span><span style="color:#7B30D0;">instanceof</span><span style="color:#002339;"> </span><span style="color:#0991B6;">String</span><span style="color:#002339;"> s) {</span></span>
<span class="line"><span style="color:#002339;">        formatted </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">String</span><span style="color:#002339;">.</span><span style="color:#7EB233;">format</span><span style="color:#002339;">(</span><span style="color:#A44185;">&quot;String %s&quot;</span><span style="color:#002339;">, s);</span></span>
<span class="line"><span style="color:#002339;">    }</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> formatted;</span></span>
<span class="line"><span style="color:#002339;">}</span></span></code></pre></div><p>新版</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki slack-ochin"><code><span class="line"><span style="color:#DA5221;">static</span><span style="color:#002339;"> </span><span style="color:#0991B6;">String</span><span style="color:#002339;"> </span><span style="color:#7EB233;">formatterPatternSwitch</span><span style="color:#002339;">(</span><span style="color:#0991B6;">Object</span><span style="color:#002339;"> o) {</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">switch</span><span style="color:#002339;"> (o) {</span></span>
<span class="line"><span style="color:#002339;">        </span><span style="color:#7B30D0;">case</span><span style="color:#002339;"> </span><span style="color:#0991B6;">Integer</span><span style="color:#002339;"> i </span><span style="color:#0991B6;">-&gt;</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">String</span><span style="color:#002339;">.</span><span style="color:#7EB233;">format</span><span style="color:#002339;">(</span><span style="color:#A44185;">&quot;int %d&quot;</span><span style="color:#002339;">, i);</span></span>
<span class="line"><span style="color:#002339;">        </span><span style="color:#7B30D0;">case</span><span style="color:#002339;"> </span><span style="color:#0991B6;">Long</span><span style="color:#002339;"> l    </span><span style="color:#0991B6;">-&gt;</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">String</span><span style="color:#002339;">.</span><span style="color:#7EB233;">format</span><span style="color:#002339;">(</span><span style="color:#A44185;">&quot;long %d&quot;</span><span style="color:#002339;">, l);</span></span>
<span class="line"><span style="color:#002339;">        </span><span style="color:#7B30D0;">case</span><span style="color:#002339;"> </span><span style="color:#0991B6;">Double</span><span style="color:#002339;"> d  </span><span style="color:#0991B6;">-&gt;</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">String</span><span style="color:#002339;">.</span><span style="color:#7EB233;">format</span><span style="color:#002339;">(</span><span style="color:#A44185;">&quot;double %f&quot;</span><span style="color:#002339;">, d);</span></span>
<span class="line"><span style="color:#002339;">        </span><span style="color:#7B30D0;">case</span><span style="color:#002339;"> </span><span style="color:#0991B6;">String</span><span style="color:#002339;"> s  </span><span style="color:#0991B6;">-&gt;</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">String</span><span style="color:#002339;">.</span><span style="color:#7EB233;">format</span><span style="color:#002339;">(</span><span style="color:#A44185;">&quot;String %s&quot;</span><span style="color:#002339;">, s);</span></span>
<span class="line"><span style="color:#002339;">        </span><span style="color:#7B30D0;">default</span><span style="color:#002339;">        </span><span style="color:#0991B6;">-&gt;</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">o</span><span style="color:#002339;">.</span><span style="color:#7EB233;">toString</span><span style="color:#002339;">();</span></span>
<span class="line"><span style="color:#002339;">    };</span></span>
<span class="line"><span style="color:#002339;">}</span></span></code></pre></div><hr><h3 id="jep-409-密封类" tabindex="-1">JEP 409：密封类 <a class="header-anchor" href="#jep-409-密封类" aria-label="Permalink to &quot;JEP 409：密封类&quot;">​</a></h3><p>密封类，这个特性在 <a href="https://www.oracle.com/java/technologies/javase/15-relnotes.html" target="_blank" rel="noreferrer">JDK 15</a> 中首次成为预览特性，在 JDK 16 中进行二次预览，在 JDK 17 这个版本中终于正式转正了。 密封类可以用来增强 Java 编程语言，防止其他类或接口扩展或实现它们 类 Student 被<code>sealed</code>修饰，说明它是一个密封类，并且只允许指定的 3 个子类继承</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki slack-ochin"><code><span class="line"><span style="color:#DA5221;">public</span><span style="color:#002339;"> </span><span style="color:#DA5221;">abstract</span><span style="color:#002339;"> </span><span style="color:#DA5221;">sealed</span><span style="color:#002339;"> </span><span style="color:#DA5221;">class</span><span style="color:#002339;"> </span><span style="color:#0444AC;">Student</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#DA5221;">permits</span><span style="color:#002339;"> </span><span style="color:#B02767;">ZhangSan</span><span style="color:#002339;">, </span><span style="color:#B02767;">LiSi</span><span style="color:#002339;">, </span><span style="color:#B02767;">ZhaoLiu</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">    ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#002339;">}</span></span></code></pre></div><hr><h3 id="jep-412-外部函数和内存-api-孵化中" tabindex="-1">JEP 412: 外部函数和内存 API（孵化中） <a class="header-anchor" href="#jep-412-外部函数和内存-api-孵化中" aria-label="Permalink to &quot;JEP 412: 外部函数和内存 API（孵化中）&quot;">​</a></h3><p>改进了 <a href="https://www.oracle.com/java/technologies/javase/14-relnotes.html" target="_blank" rel="noreferrer">JDK 14</a> 和 <a href="https://www.oracle.com/java/technologies/javase/14-relnotes.html" target="_blank" rel="noreferrer">JDK 15</a> 引入的 API，通过有效调用外部函数（即 JVM 之外的代码），以及安全地访问外部内存（JVM 之外的内存），这些 API 可以调用本地库和处理本地数据，与 Java 运行环境之外的代码和数据进行交互</p><h3 id="jep-414-矢量-api-二次孵化中" tabindex="-1">JEP 414: 矢量 API（二次孵化中） <a class="header-anchor" href="#jep-414-矢量-api-二次孵化中" aria-label="Permalink to &quot;JEP 414: 矢量 API（二次孵化中）&quot;">​</a></h3><p>Vector API 这是一个新的初始迭代孵化器模块，模块包：<code>jdk.incubator.vector</code>，用于表示在运行时可靠地编译到支持的 CPU 架构上的最佳矢量硬件指令的矢量计算，矢量运算可以提供优于等效标量计算的性能，并且在机器学习、人工智能和密码学等领域非常普遍 本次增强的 API 允许以一种在运行时，可靠地编译为支持的 CPU 架构上的最佳向量指令的方式表达向量计算</p><hr><h2 id="核心增强" tabindex="-1">核心增强 <a class="header-anchor" href="#核心增强" aria-label="Permalink to &quot;核心增强&quot;">​</a></h2><h3 id="jep-306-恢复始终执行严格模式的浮点定义" tabindex="-1">JEP 306：恢复始终执行严格模式的浮点定义 <a class="header-anchor" href="#jep-306-恢复始终执行严格模式的浮点定义" aria-label="Permalink to &quot;JEP 306：恢复始终执行严格模式的浮点定义&quot;">​</a></h3><p>Java 最初只有严格的浮点语义，但从 JDK 1.2 开始，为了适应当时硬件架构的限制，默认情况下允许这些严格语义中的细微变化，而现在这些都没有必要了，已被 JEP 306 删除</p><hr><h3 id="jep-356-增强型伪随机数发生器" tabindex="-1">JEP 356：增强型伪随机数发生器 <a class="header-anchor" href="#jep-356-增强型伪随机数发生器" aria-label="Permalink to &quot;JEP 356：增强型伪随机数发生器&quot;">​</a></h3><p>增加了伪随机数相关的类和接口来让开发者使用stream流进行操作</p><ul><li>RandomGenerator</li><li>RandomGeneratorFactory</li></ul><p>之前的 java.util.Random 和 java.util.concurrent.ThreadLocalRandom 都是 RandomGenerator 接口的实现类</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki slack-ochin"><code><span class="line"><span style="color:#0991B6;">RandomGenerator</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">generator</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">RandomGeneratorFactory</span><span style="color:#002339;">.</span><span style="color:#7EB233;">all</span><span style="color:#002339;">()</span></span>
<span class="line"><span style="color:#002339;">    .</span><span style="color:#7EB233;">filter</span><span style="color:#002339;">(RandomGeneratorFactory</span><span style="color:#7B30D0;">::</span><span style="color:#002339;">isJumpable)</span></span>
<span class="line"><span style="color:#002339;">    .</span><span style="color:#7EB233;">filter</span><span style="color:#002339;">(factory </span><span style="color:#0991B6;">-&gt;</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">factory</span><span style="color:#002339;">.</span><span style="color:#7EB233;">stateBits</span><span style="color:#002339;">() </span><span style="color:#7B30D0;">&gt;</span><span style="color:#002339;"> </span><span style="color:#174781;">128</span><span style="color:#002339;">)</span></span>
<span class="line"><span style="color:#002339;">    .</span><span style="color:#7EB233;">findAny</span><span style="color:#002339;">()</span></span>
<span class="line"><span style="color:#002339;">    .</span><span style="color:#7EB233;">map</span><span style="color:#002339;">(RandomGeneratorFactory</span><span style="color:#7B30D0;">::</span><span style="color:#002339;">create)</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#357B42;font-style:italic;">//  if you need a \`JumpableGenerator\`:</span></span>
<span class="line"><span style="color:#002339;">    </span><span style="color:#357B42;font-style:italic;">//  .map(JumpableGenerator.class::cast)</span></span>
<span class="line"><span style="color:#002339;">    .</span><span style="color:#7EB233;">orElseThrow</span><span style="color:#002339;">();</span></span></code></pre></div><hr><h3 id="jep-382-新的macos渲染管道" tabindex="-1">JEP 382: 新的macOS渲染管道 <a class="header-anchor" href="#jep-382-新的macos渲染管道" aria-label="Permalink to &quot;JEP 382: 新的macOS渲染管道&quot;">​</a></h3><p>这个新管道通过使用新的 Apple Metal API 为 macOS 实现 Java 2D 渲染管道，减少了 JDK 对已弃用的 Apple OpenGL API 的依赖</p><hr><h3 id="jep-403-jdk-内部强封装" tabindex="-1">JEP 403: JDK 内部强封装 <a class="header-anchor" href="#jep-403-jdk-内部强封装" aria-label="Permalink to &quot;JEP 403: JDK 内部强封装&quot;">​</a></h3><p>JDK 内部强封装，它是 JDK 16 中 JEP 396 的延续，JDK 16 开始对 JDK 内部大部分元素默认进行强封装，sun.misc.Unsafe 之类的关键内部 API 除外，从而限制对它们的访问。 此外，用户仍然可以选择自 JDK 9 以来的默认的宽松的强封装，这样可以帮助用户毫不费力地升级到未来的 Java 版本</p><hr><h3 id="jep-415-上下文特定反序列化过滤器" tabindex="-1">JEP 415: 上下文特定反序列化过滤器 <a class="header-anchor" href="#jep-415-上下文特定反序列化过滤器" aria-label="Permalink to &quot;JEP 415: 上下文特定反序列化过滤器&quot;">​</a></h3><p>允许应用配置 context-specific 和 dynamically-selected 过滤器，通过一个 JVM 范围的过滤器工厂，用来为每个单独的反序列化操作选择一个过滤器</p><hr><h2 id="新平台支持" tabindex="-1">新平台支持 <a class="header-anchor" href="#新平台支持" aria-label="Permalink to &quot;新平台支持&quot;">​</a></h2><h3 id="jep-391-macos-aarch64-端口" tabindex="-1">JEP 391 : macOS AArch64 端口 <a class="header-anchor" href="#jep-391-macos-aarch64-端口" aria-label="Permalink to &quot;JEP 391 : macOS AArch64 端口&quot;">​</a></h3><p>macOS AArch64 端口，即提供可适用于 macOS 的 JDK 版本，该版本可在基于 Arm 64 的较新的 macOS 系统上本地化运行</p><hr><h2 id="弃用和移除项" tabindex="-1">弃用和移除项 <a class="header-anchor" href="#弃用和移除项" aria-label="Permalink to &quot;弃用和移除项&quot;">​</a></h2><h3 id="jep-411-弃用安全管理器" tabindex="-1">JEP 411: 弃用安全管理器 <a class="header-anchor" href="#jep-411-弃用安全管理器" aria-label="Permalink to &quot;JEP 411: 弃用安全管理器&quot;">​</a></h3><p>安全管理器从 Java 1.0 开始，这些年来它一直都不是保护 Java 应用程序代码的主要手段，也很少用于保护 Java 服务器端代码，所以这个版本标识为弃用状态了，未来的版本会进行移除</p><hr><h3 id="jep-398-弃用-applet-api" tabindex="-1">JEP 398: 弃用 Applet API <a class="header-anchor" href="#jep-398-弃用-applet-api" aria-label="Permalink to &quot;JEP 398: 弃用 Applet API&quot;">​</a></h3><p>Applet 是一种运行在 Web 浏览器内的 Java 程序，但 Applet 早就没什么鸟用了，现在很少有浏览器支持 Java Applet</p><hr><h3 id="jep-407-移除-rmi-激活" tabindex="-1">JEP 407: 移除 RMI 激活 <a class="header-anchor" href="#jep-407-移除-rmi-激活" aria-label="Permalink to &quot;JEP 407: 移除 RMI 激活&quot;">​</a></h3><p>RMI 激活机制已于 2020 年 9 月在 <a href="https://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw%3D%3D&amp;idx=1&amp;mid=2247507309&amp;scene=21&amp;sn=e78cfee56a2b5cd617c0370f64f4c83d#wechat_redirect" target="_blank" rel="noreferrer">JDK 15</a> 中移除了，远程方法调用 (RMI) 激活机制现也已被移除，需要说明的是，RMI 激活是 RMI 中一个过时的组件，自 Java 8 以来一直是可选的</p><hr><h3 id="jep-410-移除实验性的-aot-和-jit-编译器" tabindex="-1">JEP 410: 移除实验性的 AOT 和 JIT 编译器 <a class="header-anchor" href="#jep-410-移除实验性的-aot-和-jit-编译器" aria-label="Permalink to &quot;JEP 410: 移除实验性的 AOT 和 JIT 编译器&quot;">​</a></h3><p>AOT 和 JIT 这两个实验性的编译器，自从在 JDK 9 中引入以来几乎没有怎么使用，市面上也出现了更为广泛使用的替代方案，并且维护它们所需的工作量很大，所以在 JDK 16 中就已经删除了，本次从 <a href="https://so.csdn.net/so/search?q=OpenJDK&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">OpenJDK</a> 项目中删除了源代码</p><hr>`,55),e=[t];function p(r,c,i,y,d,h){return s(),n("div",null,e)}const D=a(l,[["render",p]]);export{u as __pageData,D as default};
