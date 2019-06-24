webpackJsonp([34288857468311],{364:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>😼 So what is GraphQL exactly?</h2>\n<ul>\n<li>A query language for your API.</li>\n<li>GraphQL gives the power to ask for exactly what we need and nothing more.</li>\n<li>Get as many as resources in a single request.</li>\n<li>Evolve your API’s without versions.</li>\n<li>GraphQL makes it easy to build powerful tools like <a href="https://github.com/graphql/graphiql">GraphiQL</a> by leveraging your API’s type system.</li>\n</ul>\n<h2>🐙 Concepts of GraphQL</h2>\n<ul>\n<li><a href="https://graphql.org/learn/queries/">Queries &#x26; Mutations</a> - GraphQL queries are so much easier to request data than a REST API.</li>\n<li><a href="https://graphql.org/learn/schema/">Schema &#x26; Types, Variables, Arguments</a> - GraphQL has its own schema &#x26; type system which we are already familiar with (<code class="language-text">String</code>, <code class="language-text">Int</code>, <code class="language-text">[]</code> etc.).</li>\n<li><a href="https://graphql.org/learn/execution/#root-fields-resolvers">Resolver</a> - is responsible for mapping the query to a function.</li>\n<li><a href="https://graphql.org/learn/validation/">Validation</a> - By using the type system, it is easy to determine whether a GraphQL query is valid or not.</li>\n<li><a href="https://graphql.org/learn/execution/">Execution</a> - After being validated, a GraphQL query is executed by a GraphQL server which returns a result that mirrors the shape of the requested query, typically as JSON.</li>\n<li><a href="https://graphql.org/learn/introspection/">Introspection</a> - It’s often useful to ask a GraphQL schema for information about what queries it supports.</li>\n</ul>\n<h2>🐣 Steps to run the demo</h2>\n<h5>1. Clone the repo</h5>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">git</span> clone https://github.com/gokulkrishh/introduction-to-graphql</code></pre>\n      </div>\n<h5>2. Install dependencies</h5>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">yarn or <span class="token function">npm</span> <span class="token function">install</span></code></pre>\n      </div>\n<h5>3. Run</h5>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">yarn or <span class="token function">npm</span> start</code></pre>\n      </div>\n<h2>🎅🏻 Demo</h2>\n<ul>\n<li>\n<p>For local server <strong>open <a href="http://localhost:3000">localhost:3000</a> in your browser.</strong></p>\n</li>\n<li>\n<p><a href="https://hello-world-graphql.surge.sh">Demo using GraphQL API</a>.</p>\n</li>\n<li>\n<p><a href="https://hello-world-graphql-oifivtepjc.now.sh/graphql">Demo GraphQL Server</a>.</p>\n</li>\n</ul>\n<h2>🧤 Libraries I used for demo</h2>\n<ul>\n<li><a href="https://www.npmjs.com/package/graphql">GraphQL</a>.</li>\n<li><a href="https://www.npmjs.com/package/express">Express</a> server.</li>\n<li><a href="https://www.npmjs.com/package/express-graphql">GraphQL HTTP Server Middleware</a>.</li>\n<li><a href="https://github.com/apollographql/apollo-fetch">apollo-fetch</a> for making fetch requests for demo.</li>\n</ul>\n<h3>1. Variables, Arguments &#x26; Types</h3>\n<p>Like any other programming language, GraphQL has <code class="language-text">variables</code>, <code class="language-text">arguments</code>. Let’s see some examples.</p>\n<h4><a href="https://graphql.org/graphql-js/type/">Types</a></h4>\n<p>The most basic components of a GraphQL schema are object types, which just represent a kind of object you can fetch from your service, and what fields it has. If you are a web developer, you can relate this to <a href="https://github.com/facebook/flow">flow</a> or <a href="https://www.typescriptlang.org/docs/handbook/basic-types.html">typescript</a>.</p>\n<h5><strong>Example</strong>:</h5>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql">type Person <span class="token punctuation">{</span>\n  <span class="token attr-name">name</span><span class="token punctuation">:</span> String<span class="token operator">!</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<ul>\n<li><code class="language-text">String!</code> - <code class="language-text">name</code> property is a non-nullable string. Meaning you will always give a value to this property.</li>\n<li><a href="https://graphql.org/graphql-js/type/">More types</a>.</li>\n</ul>\n<h4><a href="https://graphql.org/learn/queries/#arguments">Arguments</a></h4>\n<p>We can pass arguments to any query.</p>\n<h5><strong>Example</strong>:</h5>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> user <span class="token punctuation">{</span>\n  getUser<span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    name\n    age\n    gender\n    picture\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4><a href="https://graphql.org/learn/queries/#variables">Variables</a></h4>\n<p>So far, we have been writing all of our arguments inside the query string. But in most applications, the arguments to fields will be dynamic.</p>\n<h5><strong>Example</strong>:</h5>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token punctuation">{</span>\n  <span class="token string">"userId"</span><span class="token punctuation">:</span> <span class="token number">1</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>query</strong>:</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> user<span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">:</span> Int<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  getUser<span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token variable">$id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    name\n    age\n    gender\n    picture<span class="token punctuation">,</span>\n    about\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>2. 🤔 Queries (GET API’s)</h3>\n<h4>1.  What is better than a Hello World 🤪</h4>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> helloworld <span class="token punctuation">{</span>\n  hello\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Result</strong>:</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token punctuation">{</span>\n  <span class="token string">"data"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"hello"</span><span class="token punctuation">:</span> <span class="token string">"Hello World"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4>2.  To get all the users from dummy JSON.</h4>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> getAllUsers <span class="token punctuation">{</span>\n  getUsers <span class="token punctuation">{</span>\n    name\n    age\n    gender\n    picture\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Resolver <a href="https://github.com/gokulkrishh/introduction-to-graphql/blob/master/resolvers/Query.js#L9">getUsers</a></strong>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">getUsers</span> <span class="token operator">=</span> args <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> gender <span class="token punctuation">}</span> <span class="token operator">=</span> args<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>gender<span class="token punctuation">)</span> <span class="token keyword">return</span> users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>user <span class="token operator">=></span> user<span class="token punctuation">.</span>gender <span class="token operator">===</span> gender<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">else</span> <span class="token keyword">return</span> users<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong>Result</strong>:</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span>\n    <span class="token property">"users"</span><span class="token operator">:</span><span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"Price Weber"</span><span class="token punctuation">,</span>\n        <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">37</span><span class="token punctuation">,</span>\n        <span class="token property">"gender"</span><span class="token operator">:</span><span class="token string">"male"</span><span class="token punctuation">,</span>\n        <span class="token property">"picture"</span><span class="token operator">:</span><span class="token string">"http://placehold.it/32x32"</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"Pennington Parsons"</span><span class="token punctuation">,</span>\n        <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span>\n        <span class="token property">"gender"</span><span class="token operator">:</span><span class="token string">"male"</span><span class="token punctuation">,</span>\n        <span class="token property">"picture"</span><span class="token operator">:</span><span class="token string">"http://placehold.it/32x32"</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"Yesenia Galloway"</span><span class="token punctuation">,</span>\n        <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">36</span><span class="token punctuation">,</span>\n        <span class="token property">"gender"</span><span class="token operator">:</span><span class="token string">"female"</span><span class="token punctuation">,</span>\n        <span class="token property">"picture"</span><span class="token operator">:</span><span class="token string">"http://placehold.it/32x32"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4>3.  To get a single user based on an id.</h4>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">query</span> user <span class="token punctuation">{</span>\n  getUser<span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    name\n    age\n    gender\n    picture\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Resolver <a href="https://github.com/gokulkrishh/introduction-to-graphql/blob/master/resolvers/Query.js#L3">getUser</a></strong>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getUser</span> <span class="token operator">=</span> args <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> args<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>user <span class="token operator">=></span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> user<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`User not found for the id </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong>Result</strong>:</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span>\n    <span class="token property">"user"</span><span class="token operator">:</span><span class="token punctuation">{</span>\n      <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"Price Weber"</span><span class="token punctuation">,</span>\n      <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">37</span><span class="token punctuation">,</span>\n      <span class="token property">"gender"</span><span class="token operator">:</span><span class="token string">"male"</span><span class="token punctuation">,</span>\n      <span class="token property">"picture"</span><span class="token operator">:</span><span class="token string">"http://placehold.it/32x32"</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>3. 🍔 Mutations</h3>\n<p>Most discussions of GraphQL focus on data fetching, but any complete data platform needs a way to modify server-side data as well. It is analogous to performing HTTP verbs such as <code class="language-text">POST</code>, <code class="language-text">PATCH</code>, and <code class="language-text">DELETE</code>. Just like queries, mutation should have <code class="language-text">mutation</code> instead of <code class="language-text">query</code> with some id or something.</p>\n<h5><strong>Examples</strong>: open <strong><a href="http://localhost:3000/graphql">localhost:3000/graphql</a></strong> to try the below.</h5>\n<h4>Create a new user: (POST API 🤪)</h4>\n<p><strong>variables</strong>:</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token punctuation">{</span>\n  <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"JEDI"</span><span class="token punctuation">,</span>\n  <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span>\n  <span class="token string">"gender"</span><span class="token punctuation">:</span> <span class="token string">"male"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>mutation</strong>:</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">mutation</span> user<span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">:</span> String<span class="token operator">!</span><span class="token punctuation">,</span> <span class="token variable">$age</span><span class="token punctuation">:</span> Int<span class="token operator">!</span><span class="token punctuation">,</span> <span class="token variable">$gender</span><span class="token punctuation">:</span> String<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  createUser<span class="token punctuation">(</span><span class="token attr-name">name</span><span class="token punctuation">:</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token attr-name">age</span><span class="token punctuation">:</span> <span class="token variable">$age</span><span class="token punctuation">,</span> <span class="token attr-name">gender</span><span class="token punctuation">:</span> <span class="token variable">$gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    name\n    age\n    gender\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Resolver for <a href="https://github.com/gokulkrishh/introduction-to-graphql/blob/master/resolvers/Mutation.js#L3">createUser</a></strong>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">createUser</span> <span class="token operator">=</span> args <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender <span class="token punctuation">}</span> <span class="token operator">=</span> args<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>user <span class="token operator">=></span> user<span class="token punctuation">.</span>name <span class="token operator">===</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// users from DB</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> user<span class="token punctuation">;</span> <span class="token comment">// Save in DB and return</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`A user with that name already exists.`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong>Result</strong>:</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span>\n    <span class="token property">"createUser"</span><span class="token operator">:</span><span class="token punctuation">{</span>\n      <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"JEDI"</span><span class="token punctuation">,</span>\n      <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">25</span><span class="token punctuation">,</span>\n      <span class="token property">"gender"</span><span class="token operator">:</span><span class="token string">"male"</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4>Update existing user details: (PUT API 😁)</h4>\n<p><strong>variables</strong>:</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token punctuation">{</span>\n  <span class="token string">"id"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"JEDI 🙃"</span><span class="token punctuation">,</span>\n  <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">26</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>mutation</strong>:</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">mutation</span> user<span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">:</span> Int<span class="token operator">!</span><span class="token punctuation">,</span> <span class="token variable">$name</span><span class="token punctuation">:</span> String<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  updateUser<span class="token punctuation">(</span><span class="token attr-name">name</span><span class="token punctuation">:</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token attr-name">age</span><span class="token punctuation">:</span> <span class="token variable">$age</span><span class="token punctuation">,</span> <span class="token attr-name">gender</span><span class="token punctuation">:</span> <span class="token variable">$gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    name\n    age\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Resolver for <a href="https://github.com/gokulkrishh/introduction-to-graphql/blob/master/resolvers/Mutation.js#L13">updateUser</a></strong>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">updateUser</span> <span class="token operator">=</span> args <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender <span class="token punctuation">}</span> <span class="token operator">=</span> args<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>user <span class="token operator">=></span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> user<span class="token punctuation">;</span> <span class="token comment">// Save the updates in DB and return</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`User doesn\'t exist for id </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong>Result</strong>:</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span>\n    <span class="token property">"updateUser"</span><span class="token operator">:</span><span class="token punctuation">{</span>\n      <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"JEDI 🙃"</span><span class="token punctuation">,</span>\n      <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">25</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h4>Delate a user: (DELETE API 😜)</h4>\n<p><strong>variables</strong>:</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token punctuation">{</span>\n  <span class="token string">"id"</span><span class="token punctuation">:</span> <span class="token number">1</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>mutation</strong>:</p>\n<div class="gatsby-highlight" data-language="graphql">\n      <pre class="language-graphql"><code class="language-graphql"><span class="token keyword">mutation</span> user<span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">:</span> Int<span class="token operator">!</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  deleteUser<span class="token punctuation">(</span><span class="token attr-name">id</span><span class="token punctuation">:</span> <span class="token variable">$id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    id\n    name\n    age\n    gender\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><strong>Resolver <a href="https://github.com/gokulkrishh/introduction-to-graphql/blob/master/resolvers/Mutation.js#L24">deleteUser</a></strong>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token function-variable function">deleteUser</span> <span class="token operator">=</span> args <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> args<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> user <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>user <span class="token operator">=></span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> user<span class="token punctuation">;</span> <span class="token comment">// Delete from DB and return user or return ok</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`User doesn\'t exist for id </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.`</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><strong>Result</strong>:</p>\n<div class="gatsby-highlight" data-language="json">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span><span class="token punctuation">{</span>\n    <span class="token property">"deleteUser"</span><span class="token operator">:</span><span class="token punctuation">{</span>\n      <span class="token property">"id"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"Price Weber"</span><span class="token punctuation">,</span>\n      <span class="token property">"age"</span><span class="token operator">:</span><span class="token number">37</span><span class="token punctuation">,</span>\n      <span class="token property">"gender"</span><span class="token operator">:</span><span class="token string">"male"</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>4. 🥊 Test Cases for GraphQL.</h3>\n<p>If are wondering how to write test cases for GraphQL. Here is an example for you <a href="https://github.com/graphql/graphql-js/blob/master/src/__tests__/starWarsValidation-test.js">starWarsValidation-test.js</a>.</p>\n<h3>5. 🐷 Limitations of GraphQL</h3>\n<ul>\n<li>\n<p><strong>Specific Response Structure</strong> may be required - In GraphQL the response matches the shape of the query, so if you need to respond in a very specific structure, you’ll have to add a transformation layer to reshape the response.</p>\n</li>\n<li>\n<p><strong>Handling File Upload</strong> - There is nothing about file upload in the GraphQL specification and mutations doesn’t accept files in the arguments.</p>\n</li>\n<li>\n<p><strong>Cache at Network Level</strong> - Because of the common way GraphQL is used over HTTP (A POST in a single endpoint), cache at network level becomes hard. A way to solve it is to use Persisted Queries.</p>\n</li>\n<li>\n<p><strong>Rate Limiting</strong> - Limiting the API call’s to the particular query is the problem in GraphQL. Github recently introduced GraphQL with the different approach to solving this issue. Take a <a href="https://developer.github.com/v4/guides/resource-limitations/">look here</a>.</p>\n</li>\n</ul>\n<h3>6. 🏆 References</h3>\n<ul>\n<li><a href="https://graphql.org/learn/best-practices/">Best practices for GraphQL</a> - Serving over HTTP, Pagination, Caching etc.</li>\n<li><a href="https://graphql.org/graphql-js/running-an-express-graphql-server/">Running an Express GraphQL Server</a></li>\n<li><a href="https://philsturgeon.uk/api/2017/01/24/graphql-vs-rest-overview/">GraphQL vs REST</a>.</li>\n<li><a href="https://github.com/apollographql/apollo-fetch">Apollo-Fetch</a> - Handle all POST fetch calls as normal fetch API (See demo folder for more).</li>\n</ul>\n<p>Thanks for reading so far 😙. Share this post if you liked it.</p>',
frontmatter:{date:"August 20, 2018",path:"/blog/2018/introduction-to-graphql",title:"Introduction to GraphQL"}}},pathContext:{}}}});