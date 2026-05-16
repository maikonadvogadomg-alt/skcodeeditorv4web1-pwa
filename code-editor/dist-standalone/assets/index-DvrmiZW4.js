import{a,j as e,R as Rs}from"./vendor-react-D8m3Uig9.js";import{c as dr}from"./vendor-react-dom-CdNyEL3a.js";import{J as qa,F as ga}from"./vendor-fs-BeamS8bA.js";import{C as Ps,S as Da,a as ha,U as qt,F as ba,b as ta,c as Ot,X as je,G as It,d as Rt,e as Pt,L as De,D as jt,W as Lt,f as To,g as aa,T as mt,h as Pa,i as pr,j as Ro,k as vt,l as fa,m as Hs,E as Os,B as bt,n as ur,P as mr,o as Po,p as Is,q as oo,M as Oa,R as At,r as Ca,s as Oo,t as os,u as xr,V as rs,v as Qa,w as Ls,x as ro,y as _a,z as gr,A as Vs,H as hr,I as ft,J as ea,K as Qt,Z as ns,N as Gt,O as is,Q as br,Y as no,_ as io,$ as fr,a0 as Ya,a1 as vr,a2 as Ft,a3 as fs,a4 as vs,a5 as jr,a6 as Io,a7 as Ks,a8 as lo,a9 as yr,aa as Nr,ab as wr,ac as Cr,ad as kr,ae as Sa,af as Ar,ag as Er,ah as Sr,ai as Lo,aj as Tr,ak as Rr,al as Pr,am as co,an as Or,ao as js,ap as Ws,aq as Ua,ar as ys,as as Fa,at as Xa,au as ma,av as Za,aw as es,ax as zs,ay as Ir,az as zo,aA as qo,aB as Do,aC as _o,aD as Mo,aE as $o,aF as Lr,aG as zr,aH as po,aI as uo,aJ as mo,aK as qr,aL as xo}from"./vendor-lucide-BSwgyeoM.js";import{F as Dr}from"./vendor-monaco-CS9w1txC.js";import{D as _r,o as Mr,L as $r}from"./vendor-xterm-CT6HrMBF.js";import"./vendor-highlight-Bu9o_ty_.js";import{M as Br,r as Ur,a as Fr}from"./vendor-markdown-CM6-e2rl.js";import"./vendor-misc-COW7C1HQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}})();function kt(t){return"children"in t}function Js(t){const s=t.split(".").pop()?.toLowerCase()||"";return{js:"javascript",jsx:"javascript",ts:"typescript",tsx:"typescript",html:"html",css:"css",scss:"scss",json:"json",md:"markdown",py:"python",rb:"ruby",go:"go",rs:"rust",java:"java",c:"c",cpp:"cpp",h:"c",hpp:"cpp",xml:"xml",yaml:"yaml",yml:"yaml",toml:"toml",sh:"shell",bash:"shell",sql:"sql",graphql:"graphql",vue:"html",svelte:"html",php:"php",swift:"swift",kt:"kotlin",dart:"dart"}[s]||"plaintext"}class Gr{files=new Map;listeners=new Set;onChange(s){return this.listeners.add(s),()=>this.listeners.delete(s)}notify(){this.listeners.forEach(s=>s())}writeFile(s,o){const r=this.normalizePath(s);this.files.set(r,o),this.notify()}readFile(s){return this.files.get(this.normalizePath(s))}deleteFile(s){const o=this.normalizePath(s);this.files.delete(o);const r=o+"/";for(const n of this.files.keys())n.startsWith(r)&&this.files.delete(n);this.notify()}renameFile(s,o){const r=this.normalizePath(s),n=this.normalizePath(o),c=this.files.get(r);c!==void 0&&(this.files.delete(r),this.files.set(n,c));const l=r+"/";for(const[u,d]of this.files.entries())u.startsWith(l)&&(this.files.delete(u),this.files.set(n+u.slice(r.length),d));this.notify()}exists(s){const o=this.normalizePath(s);if(this.files.has(o))return!0;const r=o+"/";for(const n of this.files.keys())if(n.startsWith(r))return!0;return!1}listFiles(){return Array.from(this.files.keys()).sort()}getTree(){const s={name:"root",path:"",children:[],expanded:!0},o=this.listFiles();for(const r of o){const n=r.split("/").filter(Boolean);let c=s;for(let u=0;u<n.length-1;u++){const d=n[u],h=n.slice(0,u+1).join("/");let m=c.children.find(C=>kt(C)&&C.name===d);m||(m={name:d,path:h,children:[],expanded:!1},c.children.push(m)),c=m}const l=n[n.length-1];c.children.push({name:l,path:r,content:this.files.get(r)||"",language:Js(r)})}return this.sortTree(s),s}sortTree(s){s.children.sort((o,r)=>{const n=kt(o),c=kt(r);return n&&!c?-1:!n&&c?1:o.name.localeCompare(r.name)});for(const o of s.children)kt(o)&&this.sortTree(o)}clear(){this.files.clear(),this.notify()}toJSON(){const s={};for(const[o,r]of this.files)s[o]=r;return s}fromJSON(s){this.files.clear();for(const[o,r]of Object.entries(s))this.files.set(this.normalizePath(o),r);this.notify()}normalizePath(s){return s.replace(/^\/+/,"").replace(/\/+$/,"")}}async function Ta(t,s="projeto"){const o=new qa;for(const[n,c]of Object.entries(t))o.file(n,c);const r=await o.generateAsync({type:"blob"});ga.saveAs(r,`${s}.zip`)}async function Hr(t){const s=new qa;for(const[n,c]of Object.entries(t))s.file(n,c);const o=await s.generateAsync({type:"uint8array"});let r="";for(let n=0;n<o.byteLength;n++)r+=String.fromCharCode(o[n]);return btoa(r)}const Vr=["node_modules/",".git/",".svn/","dist/","build/",".expo/",".expo-shared/",".cache/","__pycache__/",".venv/","venv/",".next/",".nuxt/",".output/","coverage/",".nyc_output/",".turbo/",".vercel/",".netlify/"],Kr=new Set(["png","jpg","jpeg","gif","webp","bmp","ico","tiff","avif","mp4","mov","avi","webm","mkv","flv","mp3","wav","ogg","aac","flac","m4a","ttf","otf","woff","woff2","eot","pdf","doc","docx","xls","xlsx","ppt","pptx","zip","tar","gz","rar","7z","exe","apk","ipa","dmg","pkg","deb","rpm","so","dll","dylib","bin","dat","db","sqlite","sqlite3","class","pyc","pyd","pyo","DS_Store","lock"]),Wr=new Set(["package-lock.json","yarn.lock","pnpm-lock.yaml","npm-debug.log",".DS_Store","Thumbs.db",".gitkeep"]);function Bo(t){const s=t.toLowerCase();for(const n of Vr)if(s.includes("/"+n)||s.startsWith(n))return!0;const o=s.split("/").pop()??"";if(Wr.has(o))return!0;const r=o.split(".").pop()??"";return!!Kr.has(r)}async function Uo(t){const s=t.name.toLowerCase();if(s.endsWith(".tar.gz")||s.endsWith(".tgz")||s.endsWith(".tar"))return Jr(t);const o=await qa.loadAsync(t),r={},n=[];return o.forEach((c,l)=>{if(l.dir||Bo(c))return;const u=l.async("uint8array").then(d=>{if(d.length>512*1024)return;const h=d.slice(0,512);for(let C=0;C<h.length;C++)if(h[C]===0)return;const m=new TextDecoder("utf-8",{fatal:!1}).decode(d);r[c]=m});n.push(u)}),await Promise.all(n),Fo(r)}async function Jr(t){const s=t.name.toLowerCase(),o=await t.arrayBuffer();let r;return s.endsWith(".tar.gz")||s.endsWith(".tgz")?r=await Qr(o):r=o,Yr(r)}async function Qr(t){const s=new DecompressionStream("gzip"),o=s.writable.getWriter();return o.write(new Uint8Array(t)),o.close(),new Response(s.readable).arrayBuffer()}function Yr(t){const s=new Uint8Array(t),o={},r=new TextDecoder("utf-8",{fatal:!1});let n=0;const c=(u,d)=>r.decode(s.slice(u,u+d)).replace(/\0+$/,"").trim(),l=(u,d)=>parseInt(c(u,d)||"0",8)||0;for(;n+512<=s.length;){const u=n;if(s[u]===0&&s[u+1]===0){n+=512;continue}let d=c(u,100);const h=c(u+156,1),m=l(u+124,12),C=c(u+345,155);if(C&&(d=C+"/"+d),n+=512,(h==="0"||h===""||h==="\0")&&m>0&&d){const _=d.replace(/^\.\//,"");if(_&&!_.endsWith("/")&&!Bo(_)&&m<=512*1024){const D=s.slice(n,n+Math.min(m,512));let P=!1;for(let O=0;O<D.length;O++)if(D[O]===0){P=!0;break}P||(o[_]=r.decode(s.slice(n,n+m)))}}n+=Math.ceil(m/512)*512}return Fo(o)}function Fo(t){const s=Object.keys(t);if(s.length===0)return t;const o=s[0].indexOf("/");if(o<=0)return t;const r=s[0].slice(0,o+1);if(!s.every(d=>d.startsWith(r)))return t;const c=r.slice(0,-1);if(["src","public","lib","dist","components","pages","app"].includes(c))return t;const u={};for(const[d,h]of Object.entries(t))u[d.slice(r.length)]=h;return u}const qs="sk-editor-projects",Ds="sk-editor-current",Go="sk-proj-files-";function Ho(t){return Object.values(t).reduce((s,o)=>s+o.length,0)}function Vo(t,s){const o=Go+t;try{localStorage.setItem(o,JSON.stringify(s))}catch{try{const r={};for(const[n,c]of Object.entries(s))c.length<1e5&&(r[n]=c);localStorage.setItem(o,JSON.stringify(r))}catch{try{const r={};for(const n of Object.keys(s))r[n]="";localStorage.setItem(o,JSON.stringify(r))}catch{}}}}function Xr(t){try{const s=localStorage.getItem(Go+t);return s?JSON.parse(s):{}}catch{return{}}}function Zr(t){try{localStorage.setItem(qs,JSON.stringify(t))}catch{try{const s=t.slice().sort((o,r)=>r.updatedAt-o.updatedAt).slice(0,10);localStorage.setItem(qs,JSON.stringify(s))}catch{}}}function go(){try{const t=localStorage.getItem(qs);return t?JSON.parse(t).map(o=>{let r;return o.files&&Object.keys(o.files).length>0?(r=o.files,Vo(o.id,r)):r=Xr(o.id),{id:o.id,name:o.name,files:r,createdAt:o.createdAt,updatedAt:o.updatedAt}}):[]}catch{return[]}}function la(t){for(const o of t)Vo(o.id,o.files);const s=t.map(o=>({id:o.id,name:o.name,createdAt:o.createdAt,updatedAt:o.updatedAt,fileCount:Object.keys(o.files).length,sizeBytes:Ho(o.files)}));Zr(s)}function en(){return localStorage.getItem(Ds)}function Ga(t){t?localStorage.setItem(Ds,t):localStorage.removeItem(Ds)}function tn(t,s){return{id:Date.now().toString(36)+Math.random().toString(36).slice(2,8),name:t,files:s,createdAt:Date.now(),updatedAt:Date.now()}}function Ns(t,s){const o=t.findIndex(r=>r.id===s.id);if(o>=0){const r=[...t];return r[o]={...s},r}return[s,...t]}function an(t){return{...t,id:Date.now().toString(36)+Math.random().toString(36).slice(2,8),name:t.name+" (cópia)",createdAt:Date.now(),updatedAt:Date.now()}}function sn(t){return new Date(t).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})}function on(t){const s=Object.keys(t).length,o=Ho(t);return{count:s,size:o>1024?`${(o/1024).toFixed(1)}KB`:`${o}B`}}const _s=[{id:"html-css-js",name:"HTML/CSS/JS",description:"Projeto web basico com HTML, CSS e JavaScript",icon:"globe",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Projeto</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="app">
    <h1>Ola Mundo!</h1>
    <p>Edite este arquivo para comecar.</p>
  </div>
  <script src="script.js"><\/script>
</body>
</html>`,"style.css":`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #1a1a2e;
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#app {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 1.2rem;
  color: #aaa;
}`,"script.js":`document.addEventListener('DOMContentLoaded', () => {
  console.log('Projeto carregado com sucesso!');
});`}},{id:"react-app",name:"React App",description:"Aplicacao React com JSX",icon:"component",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="src/index.jsx"><\/script>
</body>
</html>`,"src/index.jsx":`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,"src/App.jsx":`import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#0f0f23',
      color: '#fff',
      fontFamily: 'system-ui'
    }}>
      <h1>React App</h1>
      <p>Contador: {count}</p>
      <button 
        onClick={() => setCount(c => c + 1)}
        style={{
          padding: '10px 24px',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          background: '#646cff',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        Incrementar
      </button>
    </div>
  );
}`,"package.json":`{
  "name": "react-app",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}`}},{id:"node-api",name:"Node.js API",description:"API REST com Express",icon:"server",files:{"index.js":`const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let items = [
  { id: 1, name: 'Item 1', description: 'Primeiro item' },
  { id: 2, name: 'Item 2', description: 'Segundo item' },
];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Item nao encontrado' });
  res.json(item);
});

app.post('/api/items', (req, res) => {
  const item = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description
  };
  items.push(item);
  res.status(201).json(item);
});

app.listen(PORT, () => {
  console.log(\`Servidor rodando na porta \${PORT}\`);
});`,"package.json":`{
  "name": "node-api",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "express": "^4.18.2"
  },
  "scripts": {
    "start": "node index.js"
  }
}`}},{id:"python-flask",name:"Python Flask",description:"API web com Flask",icon:"code",files:{"app.py":`from flask import Flask, jsonify, request

app = Flask(__name__)

items = [
    {"id": 1, "name": "Item 1", "description": "Primeiro item"},
    {"id": 2, "name": "Item 2", "description": "Segundo item"},
]

@app.route("/")
def home():
    return jsonify({"message": "Bem-vindo a API Flask!"})

@app.route("/api/items")
def get_items():
    return jsonify(items)

@app.route("/api/items", methods=["POST"])
def create_item():
    data = request.get_json()
    item = {
        "id": len(items) + 1,
        "name": data.get("name"),
        "description": data.get("description"),
    }
    items.append(item)
    return jsonify(item), 201

if __name__ == "__main__":
    app.run(debug=True, port=5000)`,"requirements.txt":"flask==3.0.0"}},{id:"typescript-node",name:"TypeScript Node",description:"Projeto TypeScript com Node.js",icon:"file-type",files:{"src/index.ts":`interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Joao", email: "joao@email.com" },
  { id: 2, name: "Maria", email: "maria@email.com" },
];

function findUser(id: number): User | undefined {
  return users.find(u => u.id === id);
}

function addUser(name: string, email: string): User {
  const newUser: User = {
    id: users.length + 1,
    name,
    email,
  };
  users.push(newUser);
  return newUser;
}

console.log("Usuarios:", users);
console.log("Buscar ID 1:", findUser(1));
console.log("Novo usuario:", addUser("Pedro", "pedro@email.com"));`,"tsconfig.json":`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}`,"package.json":`{
  "name": "typescript-node",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "devDependencies": {
    "typescript": "^5.3.0"
  }
}`}},{id:"empty",name:"Projeto Vazio",description:"Comece do zero",icon:"folder-plus",files:{"README.md":`# Novo Projeto

Comece a criar seus arquivos aqui.`}},{id:"pwa-app",name:"PWA Instalável",description:"App instalável no celular com suporte offline e manifest completo",icon:"globe",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <meta name="theme-color" content="#1a1f2e">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="Meu App">
  <meta name="description" content="Meu aplicativo PWA instalavel">
  <title>Meu App</title>
  <link rel="manifest" href="manifest.json">
  <link rel="apple-touch-icon" href="icon-192.png">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="offline-bar" class="offline-bar hidden">
    📡 Sem conexão — modo offline ativo
  </div>

  <header class="header">
    <div class="logo">⚡ Meu App</div>
    <div id="status-dot" class="status-dot online" title="Online"></div>
  </header>

  <main class="main">
    <section class="hero">
      <div class="hero-icon">📱</div>
      <h1>Bem-vindo ao Meu App</h1>
      <p>Este app funciona offline e pode ser instalado no seu celular.</p>
      <button id="install-btn" class="btn btn-primary hidden">
        ⬇️ Instalar no Celular
      </button>
      <button id="refresh-btn" class="btn btn-outline">
        🔄 Recarregar
      </button>
    </section>

    <section class="cards">
      <div class="card">
        <span class="card-icon">📴</span>
        <h3>Funciona Offline</h3>
        <p>Acesse mesmo sem internet graças ao Service Worker.</p>
      </div>
      <div class="card">
        <span class="card-icon">📲</span>
        <h3>Instalável</h3>
        <p>Adicione à tela inicial do celular como um app nativo.</p>
      </div>
      <div class="card">
        <span class="card-icon">⚡</span>
        <h3>Rápido</h3>
        <p>Cache inteligente para carregamento instantâneo.</p>
      </div>
    </section>

    <section class="counter-section">
      <h2>Contador (salvo localmente)</h2>
      <div class="counter">
        <button class="counter-btn" id="dec">−</button>
        <span class="counter-value" id="count">0</span>
        <button class="counter-btn" id="inc">+</button>
      </div>
      <button class="btn btn-outline" id="reset">Resetar</button>
    </section>
  </main>

  <footer class="footer">
    <p>Feito com ❤️ · Instalado como PWA</p>
  </footer>

  <script src="app.js"><\/script>
</body>
</html>`,"style.css":`* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #0f1117;
  --surface: #1a1f2e;
  --card: #1e2540;
  --accent: #4f8ef7;
  --accent2: #7c5cbf;
  --text: #e8eaf0;
  --muted: #8892a4;
  --success: #34d399;
  --danger: #f87171;
  --radius: 16px;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.offline-bar {
  background: var(--danger);
  color: white;
  text-align: center;
  padding: 8px;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s;
}
.hidden { display: none !important; }

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: var(--surface);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
}
.logo { font-size: 18px; font-weight: 700; color: var(--accent); }
.status-dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  transition: background 0.3s;
}
.status-dot.online { background: var(--success); box-shadow: 0 0 6px var(--success); }
.status-dot.offline { background: var(--danger); }

.main { flex: 1; padding: 24px 20px; max-width: 500px; margin: 0 auto; width: 100%; }

.hero {
  text-align: center;
  padding: 40px 0 32px;
}
.hero-icon { font-size: 64px; margin-bottom: 16px; }
.hero h1 { font-size: 24px; font-weight: 800; margin-bottom: 12px; line-height: 1.2; }
.hero p { color: var(--muted); font-size: 15px; margin-bottom: 24px; line-height: 1.6; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  margin: 6px;
}
.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color: white;
}
.btn-primary:active { transform: scale(0.96); }
.btn-outline {
  background: transparent;
  border: 1.5px solid rgba(255,255,255,0.15);
  color: var(--muted);
}
.btn-outline:hover { border-color: var(--accent); color: var(--accent); }

.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 32px;
}
.card {
  background: var(--card);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.card-icon { font-size: 28px; }
.card h3 { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
.card p { font-size: 13px; color: var(--muted); line-height: 1.5; }

.counter-section {
  background: var(--surface);
  border-radius: var(--radius);
  padding: 24px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 16px;
}
.counter-section h2 { font-size: 16px; margin-bottom: 20px; color: var(--muted); }
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 20px;
}
.counter-btn {
  width: 52px; height: 52px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.1);
  background: var(--card);
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.2s;
}
.counter-btn:active { transform: scale(0.9); background: var(--accent); border-color: var(--accent); }
.counter-value {
  font-size: 52px;
  font-weight: 800;
  min-width: 80px;
  color: var(--accent);
}

.footer {
  text-align: center;
  padding: 20px;
  color: var(--muted);
  font-size: 12px;
  border-top: 1px solid rgba(255,255,255,0.04);
}`,"app.js":`// ─── PWA Install Prompt ───────────────────────
let deferredPrompt;
const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.classList.remove('hidden');
});

installBtn?.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log('Instalação:', outcome);
  deferredPrompt = null;
  installBtn.classList.add('hidden');
});

window.addEventListener('appinstalled', () => {
  console.log('App instalado com sucesso!');
  installBtn.classList.add('hidden');
});

// ─── Offline / Online detection ───────────────
const offlineBar = document.getElementById('offline-bar');
const statusDot  = document.getElementById('status-dot');

function updateStatus() {
  const online = navigator.onLine;
  offlineBar.classList.toggle('hidden', online);
  statusDot.className = 'status-dot ' + (online ? 'online' : 'offline');
  statusDot.title = online ? 'Online' : 'Offline';
}
window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);
updateStatus();

// ─── Service Worker ───────────────────────────
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(r => console.log('[SW] Registrado:', r.scope))
    .catch(e => console.warn('[SW] Erro:', e));
}

// ─── Contador com localStorage ────────────────
let count = parseInt(localStorage.getItem('pwa-count') || '0');
const display = document.getElementById('count');

function updateCount(n) {
  count = n;
  display.textContent = count;
  localStorage.setItem('pwa-count', count);
}

document.getElementById('inc')?.addEventListener('click', () => updateCount(count + 1));
document.getElementById('dec')?.addEventListener('click', () => updateCount(count - 1));
document.getElementById('reset')?.addEventListener('click', () => updateCount(0));
document.getElementById('refresh-btn')?.addEventListener('click', () => location.reload());

updateCount(count);`,"sw.js":`// Service Worker — Cache Offline
const CACHE = 'meu-app-v1';
const FILES = ['./', './index.html', './style.css', './app.js', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).then(res => {
        if (res.status === 200) {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      })
    ).catch(() => caches.match('./index.html'))
  );
});`,"manifest.json":`{
  "name": "Meu App",
  "short_name": "MeuApp",
  "description": "Aplicativo PWA instalavel",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "orientation": "any",
  "background_color": "#0f1117",
  "theme_color": "#1a1f2e",
  "lang": "pt-BR",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ]
}`,"icon-192.png":"","README.md":`# Meu App — PWA Instalável

## O que é PWA?

Progressive Web App (PWA) é um site que pode ser **instalado como aplicativo** no celular ou desktop, funcionando **offline** e com ícone na tela inicial.

## Como rodar localmente

Abra o \`index.html\` no Preview (botão ▶) ou use um servidor local:
\`\`\`bash
npx serve .
# Acesse http://localhost:3000
\`\`\`

## Como publicar GRÁTIS 🚀

### Opção 1 — Netlify (mais fácil)
1. Acesse [netlify.com](https://netlify.com) e crie conta grátis
2. Clique em **"Add new site" → "Deploy manually"**
3. Baixe este projeto como ZIP (menu ··· → Exportar ZIP)
4. Arraste a pasta descompactada para o Netlify
5. Pronto! URL gerada automaticamente (ex: \`meuapp.netlify.app\`)

### Opção 2 — Vercel
1. Acesse [vercel.com](https://vercel.com) → crie conta com GitHub
2. Faça upload dos arquivos ou conecte repositório
3. Deploy automático com HTTPS

### Opção 3 — GitHub Pages (grátis com repositório público)
1. Crie um repositório no [github.com](https://github.com)
2. Faça upload dos arquivos
3. Settings → Pages → Source: "main" branch
4. URL: \`seuusuario.github.io/nome-do-repo\`

### Opção 4 — Cloudflare Pages
1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Upload direto ou conecte GitHub
3. Domínio customizado grátis (\`meuapp.pages.dev\`)

## Após publicar

Acesse pelo celular via HTTPS e o Chrome vai mostrar:
**"Adicionar à tela inicial"** — toque e o app vira um ícone!

## Estrutura
\`\`\`
index.html    ← Página principal
style.css     ← Estilos
app.js        ← Lógica do app + install prompt + offline
sw.js         ← Service Worker (cache offline)
manifest.json ← Metadados do PWA (nome, ícone, cor)
\`\`\`
`}},{id:"canvas-art",name:"Animação Canvas",description:"Arte interativa com partículas e geometria — reage ao toque e mouse",icon:"globe",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Universo de Partículas</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #000; overflow: hidden; }
    canvas { display: block; }
    #ui {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
      z-index: 10;
    }
    button {
      padding: 10px 18px;
      border-radius: 50px;
      border: 1px solid rgba(255,255,255,0.2);
      background: rgba(0,0,0,0.6);
      color: #fff;
      font-size: 13px;
      cursor: pointer;
      backdrop-filter: blur(10px);
      transition: all 0.2s;
    }
    button:active { transform: scale(0.94); background: rgba(255,255,255,0.1); }
    #info {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255,255,255,0.4);
      font-family: monospace;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      pointer-events: none;
    }
  </style>
</head>
<body>
  <div id="info">Toque ou mova o mouse</div>
  <canvas id="c"></canvas>
  <div id="ui">
    <button onclick="changeMode()">🎨 Modo</button>
    <button onclick="burst()">💥 Burst</button>
    <button onclick="clear()">🗑️ Limpar</button>
  </div>
  <script src="sketch.js"><\/script>
</body>
</html>`,"sketch.js":`const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

let W = canvas.width  = window.innerWidth;
let H = canvas.height = window.innerHeight;
let mx = W/2, my = H/2;
let particles = [];
let frame = 0;
let mode = 0; // 0=universe 1=web 2=flower 3=matrix

const MODES = ['🌌 Universo', '🕸️ Teia', '🌸 Flor', '💻 Matrix'];
const PALETTES = [
  ['#4fc3f7','#e040fb','#80deea','#fff176','#f48fb1'],
  ['#69f0ae','#40c4ff','#ea80fc','#ffffff'],
  ['#ff80ab','#ff6d00','#ffd740','#69f0ae','#e040fb'],
  ['#00e676','#76ff03','#18ffff'],
];

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);

class Particle {
  constructor(x, y, vx, vy, color, life, size) {
    this.x = x; this.y = y;
    this.vx = vx || (Math.random()-0.5)*4;
    this.vy = vy || (Math.random()-0.5)*4;
    this.color = color || PALETTES[mode][Math.floor(Math.random()*PALETTES[mode].length)];
    this.life = life || Math.random()*120+60;
    this.maxLife = this.life;
    this.size = size || Math.random()*3+1;
    this.angle = Math.random()*Math.PI*2;
    this.spin = (Math.random()-0.5)*0.1;
  }
  update() {
    const alpha = this.life / this.maxLife;
    // Attraction to cursor
    const dx = mx - this.x;
    const dy = my - this.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < 200) {
      this.vx += dx/dist * 0.08;
      this.vy += dy/dist * 0.08;
    }
    this.vx *= 0.97;
    this.vy *= 0.97;
    this.x += this.vx;
    this.y += this.vy;
    this.angle += this.spin;
    this.life--;
    // Bounce edges
    if (this.x < 0 || this.x > W) this.vx *= -0.8;
    if (this.y < 0 || this.y > H) this.vy *= -0.8;
    return this.life > 0;
  }
  draw() {
    const alpha = Math.pow(this.life / this.maxLife, 0.5);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    if (mode === 2) {
      // Flor: pétala
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size*2, this.size*0.8, 0, 0, Math.PI*2);
      ctx.fill();
    } else if (mode === 3) {
      // Matrix: caractere
      ctx.fillStyle = this.color;
      ctx.font = \`\${this.size*5}px monospace\`;
      ctx.fillText(String.fromCharCode(0x30A0 + Math.floor(this.life/4)%96), 0, 0);
    } else {
      // Círculo com glow
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(0, 0, this.size, 0, Math.PI*2);
      ctx.fill();
    }
    ctx.restore();
  }
}

function drawConnections() {
  const near = particles.slice(0, 80);
  for (let i = 0; i < near.length; i++) {
    for (let j = i+1; j < near.length; j++) {
      const dx = near[i].x - near[j].x;
      const dy = near[i].y - near[j].y;
      const d = Math.sqrt(dx*dx + dy*dy);
      if (d < 80) {
        const alpha = (1 - d/80) * 0.3 * (near[i].life/near[i].maxLife);
        ctx.strokeStyle = near[i].color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(near[i].x, near[i].y);
        ctx.lineTo(near[j].x, near[j].y);
        ctx.stroke();
      }
    }
  }
  ctx.globalAlpha = 1;
}

function spawnAtCursor(n = 3) {
  const palette = PALETTES[mode];
  for (let i = 0; i < n; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3 + 0.5;
    const color = palette[Math.floor(Math.random()*palette.length)];
    if (mode === 1) { // Teia — slow
      particles.push(new Particle(mx, my, Math.cos(angle)*speed*0.4, Math.sin(angle)*speed*0.4, color, 200, 2));
    } else if (mode === 2) { // Flor
      particles.push(new Particle(mx, my, Math.cos(angle)*speed, Math.sin(angle)*speed*0.3, color, 150, 4));
    } else {
      particles.push(new Particle(mx, my, Math.cos(angle)*speed, Math.sin(angle)*speed, color));
    }
  }
  if (particles.length > 500) particles.splice(0, 10);
}

function burst() {
  for (let i = 0; i < 80; i++) {
    const angle = (i / 80) * Math.PI * 2;
    const speed = Math.random() * 6 + 2;
    const color = PALETTES[mode][i % PALETTES[mode].length];
    particles.push(new Particle(mx, my, Math.cos(angle)*speed, Math.sin(angle)*speed, color, 180, Math.random()*4+1));
  }
}

function changeMode() {
  mode = (mode + 1) % MODES.length;
  particles = [];
  document.getElementById('info').textContent = MODES[mode];
  setTimeout(() => { document.getElementById('info').textContent = 'Toque ou mova o mouse'; }, 2000);
}

function clear() { particles = []; }

function animate() {
  requestAnimationFrame(animate);
  frame++;
  // Fade trail
  ctx.fillStyle = mode === 3 ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.08)';
  ctx.fillRect(0, 0, W, H);

  // Auto-spawn
  if (frame % 3 === 0) spawnAtCursor(2);

  // Background geometry
  if (mode === 0 && frame % 60 === 0) {
    // Random star burst
    const rx = Math.random()*W, ry = Math.random()*H;
    const r = Math.random()*50+20;
    const color = PALETTES[0][Math.floor(Math.random()*PALETTES[0].length)];
    ctx.save();
    ctx.globalAlpha = 0.03;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(rx, ry, r, 0, Math.PI*2);
    ctx.stroke();
    ctx.restore();
  }

  if (mode === 1) drawConnections();

  particles = particles.filter(p => { p.update(); p.draw(); return p.life > 0; });

  // Cursor glow
  const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 60);
  const col = PALETTES[mode][0];
  grad.addColorStop(0, col + '20');
  grad.addColorStop(1, 'transparent');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(mx, my, 60, 0, Math.PI*2);
  ctx.fill();
}

// Events
function updateMouse(e) {
  if (e.touches) {
    mx = e.touches[0].clientX;
    my = e.touches[0].clientY;
  } else {
    mx = e.clientX;
    my = e.clientY;
  }
}
window.addEventListener('mousemove', e => { updateMouse(e); spawnAtCursor(1); });
window.addEventListener('touchmove', e => { e.preventDefault(); updateMouse(e); spawnAtCursor(3); }, { passive: false });
window.addEventListener('click', burst);
window.addEventListener('touchstart', e => { updateMouse(e); burst(); });

animate();`}},{id:"landing-page",name:"Landing Page",description:"Página de apresentação profissional para mostrar a clientes",icon:"globe",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Transformamos sua ideia em realidade digital">
  <title>Studio Digital — Criamos para o futuro</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- NAV -->
  <nav class="nav" id="nav">
    <div class="nav-inner">
      <a href="#" class="nav-logo">⚡ Studio</a>
      <div class="nav-links">
        <a href="#servicos">Serviços</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#contato">Contato</a>
      </div>
      <a href="#contato" class="btn-nav">Falar Agora</a>
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero" id="inicio">
    <div class="hero-bg">
      <div class="blob blob1"></div>
      <div class="blob blob2"></div>
      <div class="blob blob3"></div>
    </div>
    <div class="hero-content">
      <span class="badge">🚀 Transformação Digital</span>
      <h1>Criamos experiências <span class="gradient-text">digitais incríveis</span></h1>
      <p>Sites, apps e sistemas que convertem visitantes em clientes. Design moderno, código limpo, resultados reais.</p>
      <div class="hero-btns">
        <a href="#contato" class="btn btn-primary">Começar Projeto</a>
        <a href="#portfolio" class="btn btn-ghost">Ver Trabalhos →</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><strong>120+</strong><span>Projetos</span></div>
        <div class="stat-div"></div>
        <div class="stat"><strong>98%</strong><span>Satisfação</span></div>
        <div class="stat-div"></div>
        <div class="stat"><strong>5★</strong><span>Avaliação</span></div>
      </div>
    </div>
  </section>

  <!-- SERVIÇOS -->
  <section class="section" id="servicos">
    <div class="container">
      <div class="section-header">
        <span class="tag">O que fazemos</span>
        <h2>Soluções completas<br>para o seu negócio</h2>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🌐</div>
          <h3>Sites & Landing Pages</h3>
          <p>Sites responsivos e otimizados que carregam rápido e convertem visitantes em clientes.</p>
          <ul><li>✓ Design moderno</li><li>✓ Mobile-first</li><li>✓ SEO otimizado</li></ul>
        </div>
        <div class="service-card featured">
          <div class="service-badge">Mais popular</div>
          <div class="service-icon">📱</div>
          <h3>Aplicativos PWA</h3>
          <p>Apps instaláveis no celular sem precisar de App Store. Funciona offline com visual nativo.</p>
          <ul><li>✓ Instalável no celular</li><li>✓ Funciona offline</li><li>✓ Push notifications</li></ul>
        </div>
        <div class="service-card">
          <div class="service-icon">⚙️</div>
          <h3>Sistemas & APIs</h3>
          <p>Back-end robusto com APIs REST, banco de dados e autenticação segura.</p>
          <ul><li>✓ Node.js / Python</li><li>✓ PostgreSQL / MongoDB</li><li>✓ Deploy na nuvem</li></ul>
        </div>
      </div>
    </div>
  </section>

  <!-- PORTFOLIO -->
  <section class="section section-dark" id="portfolio">
    <div class="container">
      <div class="section-header">
        <span class="tag">Portfólio</span>
        <h2>Projetos que entregamos</h2>
      </div>
      <div class="portfolio-grid">
        <div class="portfolio-card" style="--c:#6366f1">
          <div class="portfolio-visual">🛒</div>
          <h4>E-commerce Premium</h4>
          <p>Loja virtual completa com pagamento, estoque e painel admin.</p>
          <span class="tech-tag">React</span><span class="tech-tag">Node.js</span><span class="tech-tag">Stripe</span>
        </div>
        <div class="portfolio-card" style="--c:#10b981">
          <div class="portfolio-visual">📊</div>
          <h4>Dashboard Analytics</h4>
          <p>Painel de métricas em tempo real com gráficos e relatórios.</p>
          <span class="tech-tag">Vue</span><span class="tech-tag">Python</span><span class="tech-tag">PostgreSQL</span>
        </div>
        <div class="portfolio-card" style="--c:#f59e0b">
          <div class="portfolio-visual">🏥</div>
          <h4>App de Agendamento</h4>
          <p>Sistema de agendamentos para clínica com notificações automáticas.</p>
          <span class="tech-tag">PWA</span><span class="tech-tag">Firebase</span><span class="tech-tag">WhatsApp API</span>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTATO -->
  <section class="section" id="contato">
    <div class="container">
      <div class="contact-box">
        <div class="contact-info">
          <span class="tag">Vamos conversar</span>
          <h2>Pronto para começar seu projeto?</h2>
          <p>Respondo em até 24 horas. Orçamento gratuito e sem compromisso.</p>
          <div class="contact-links">
            <a href="https://wa.me/5511999999999" class="contact-link">💬 WhatsApp</a>
            <a href="mailto:contato@studio.com" class="contact-link">✉️ E-mail</a>
            <a href="https://instagram.com" class="contact-link">📸 Instagram</a>
          </div>
        </div>
        <form class="contact-form" onsubmit="sendForm(event)">
          <input type="text" placeholder="Seu nome" required>
          <input type="email" placeholder="E-mail" required>
          <select>
            <option value="">Tipo de projeto</option>
            <option>Site / Landing Page</option>
            <option>Aplicativo PWA</option>
            <option>Sistema / API</option>
            <option>Outro</option>
          </select>
          <textarea placeholder="Descreva seu projeto..." rows="4" required></textarea>
          <button type="submit" class="btn btn-primary">Enviar Mensagem ✉️</button>
          <p id="form-msg" class="form-msg hidden">✅ Mensagem enviada! Em breve te respondo.</p>
        </form>
      </div>
    </div>
  </section>

  <footer class="footer">
    <p>© 2025 Studio Digital · Feito com ❤️ no Brasil</p>
  </footer>

  <script src="script.js"><\/script>
</body>
</html>`,"style.css":`*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #050810;
  --surface: #0d1117;
  --card: #111827;
  --border: rgba(255,255,255,0.07);
  --text: #f1f5f9;
  --muted: #94a3b8;
  --accent: #6366f1;
  --accent2: #8b5cf6;
  --green: #10b981;
  --radius: 20px;
}

html { scroll-behavior: smooth; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); overflow-x: hidden; }

/* NAV */
.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 16px 0; transition: background 0.3s; }
.nav.scrolled { background: rgba(5,8,16,0.9); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; display: flex; align-items: center; gap: 32px; }
.nav-logo { font-size: 20px; font-weight: 800; color: var(--text); text-decoration: none; }
.nav-links { display: flex; gap: 24px; flex: 1; }
.nav-links a { color: var(--muted); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
.nav-links a:hover { color: var(--text); }
.btn-nav { padding: 9px 20px; background: var(--accent); color: white; border-radius: 50px; text-decoration: none; font-size: 13px; font-weight: 600; white-space: nowrap; }

/* HERO */
.hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; position: relative; overflow: hidden; padding: 120px 24px 80px; }
.hero-bg { position: absolute; inset: 0; pointer-events: none; }
.blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.15; animation: float 8s ease-in-out infinite; }
.blob1 { width: 600px; height: 600px; background: var(--accent); top: -200px; left: -200px; }
.blob2 { width: 500px; height: 500px; background: var(--accent2); bottom: -100px; right: -100px; animation-delay: -3s; }
.blob3 { width: 400px; height: 400px; background: var(--green); top: 50%; left: 50%; transform: translate(-50%,-50%); animation-delay: -6s; }
@keyframes float { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(30px,-30px) scale(1.05); } 66% { transform: translate(-20px,20px) scale(0.95); } }

.hero-content { position: relative; max-width: 700px; }
.badge { display: inline-block; padding: 6px 16px; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); border-radius: 50px; font-size: 13px; color: #a5b4fc; font-weight: 600; margin-bottom: 24px; }
.hero h1 { font-size: clamp(32px, 5vw, 64px); font-weight: 900; line-height: 1.1; margin-bottom: 20px; }
.gradient-text { background: linear-gradient(135deg, var(--accent), var(--accent2), var(--green)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero p { font-size: 18px; color: var(--muted); max-width: 500px; margin: 0 auto 32px; line-height: 1.7; }
.hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }

.btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 50px; font-size: 15px; font-weight: 600; text-decoration: none; border: none; cursor: pointer; transition: all 0.2s; }
.btn-primary { background: linear-gradient(135deg, var(--accent), var(--accent2)); color: white; box-shadow: 0 4px 20px rgba(99,102,241,0.4); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(99,102,241,0.5); }
.btn-ghost { background: transparent; border: 1.5px solid var(--border); color: var(--muted); }
.btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

.hero-stats { display: flex; align-items: center; justify-content: center; gap: 24px; }
.stat { text-align: center; } .stat strong { display: block; font-size: 28px; font-weight: 900; color: var(--text); }
.stat span { font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
.stat-div { width: 1px; height: 40px; background: var(--border); }

/* SECTIONS */
.section { padding: 100px 0; }
.section-dark { background: var(--surface); }
.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
.section-header { text-align: center; margin-bottom: 56px; }
.tag { display: inline-block; padding: 4px 14px; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2); border-radius: 50px; font-size: 12px; color: var(--accent); font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; }
.section-header h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 800; line-height: 1.2; }

/* SERVICES */
.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
.service-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 32px; position: relative; transition: all 0.3s; }
.service-card:hover { border-color: rgba(99,102,241,0.3); transform: translateY(-4px); }
.service-card.featured { border-color: rgba(99,102,241,0.4); background: linear-gradient(135deg, rgba(99,102,241,0.05), rgba(139,92,246,0.05)); }
.service-badge { position: absolute; top: -12px; left: 24px; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: white; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 50px; }
.service-icon { font-size: 40px; margin-bottom: 16px; }
.service-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; }
.service-card p { color: var(--muted); font-size: 14px; line-height: 1.6; margin-bottom: 16px; }
.service-card ul { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.service-card li { font-size: 13px; color: var(--muted); }

/* PORTFOLIO */
.portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.portfolio-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; transition: all 0.3s; border-top: 3px solid var(--c, var(--accent)); }
.portfolio-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
.portfolio-visual { font-size: 40px; margin-bottom: 16px; }
.portfolio-card h4 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.portfolio-card p { color: var(--muted); font-size: 14px; line-height: 1.6; margin-bottom: 16px; }
.tech-tag { display: inline-block; padding: 3px 10px; border-radius: 50px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); font-size: 11px; color: var(--muted); margin: 2px; }

/* CONTACT */
.contact-box { display: grid; grid-template-columns: 1fr 1.2fr; gap: 60px; align-items: center; }
.contact-info h2 { font-size: clamp(24px, 3vw, 36px); font-weight: 800; margin: 12px 0 16px; line-height: 1.2; }
.contact-info p { color: var(--muted); font-size: 16px; line-height: 1.7; margin-bottom: 28px; }
.contact-links { display: flex; flex-direction: column; gap: 12px; }
.contact-link { display: inline-flex; align-items: center; gap: 10px; padding: 12px 20px; background: var(--card); border: 1px solid var(--border); border-radius: 12px; color: var(--text); text-decoration: none; font-size: 14px; font-weight: 500; transition: all 0.2s; }
.contact-link:hover { border-color: var(--accent); color: var(--accent); }
.contact-form { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 32px; display: flex; flex-direction: column; gap: 12px; }
.contact-form input, .contact-form select, .contact-form textarea { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 12px 16px; color: var(--text); font-size: 14px; outline: none; transition: border 0.2s; font-family: inherit; }
.contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus { border-color: var(--accent); }
.contact-form select option { background: var(--surface); }
.form-msg { font-size: 13px; color: var(--green); text-align: center; }

/* FOOTER */
.footer { text-align: center; padding: 32px 24px; color: var(--muted); font-size: 13px; border-top: 1px solid var(--border); }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .contact-box { grid-template-columns: 1fr; }
  .blob { display: none; }
}`,"script.js":`// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Form submit
function sendForm(e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.classList.remove('hidden');
  e.target.reset();
  setTimeout(() => msg.classList.add('hidden'), 5000);
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.style.opacity = '1';
      el.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .portfolio-card, .contact-box').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});`}},{id:"fullstack-neon",name:"Projeto Profissional Full-Stack + Neon DB",description:"API REST Express + PostgreSQL Neon + JWT Auth + VCS pronto (gitignore, README, .env.example)",icon:"server",files:{"package.json":JSON.stringify({name:"meu-projeto",version:"1.0.0",description:"Projeto Full-Stack profissional com Neon DB",main:"src/index.js",scripts:{start:"node src/index.js",dev:"nodemon src/index.js",migrate:"node db/migrate.js",test:"jest"},dependencies:{express:"^4.18.2",cors:"^2.8.5",dotenv:"^16.3.1","@neondatabase/serverless":"^0.9.5",bcryptjs:"^2.4.3",jsonwebtoken:"^9.0.2",helmet:"^7.1.0","express-rate-limit":"^7.1.5"},devDependencies:{nodemon:"^3.0.2"}},null,2),".env.example":`# =================================================
# VARIAVEIS DE AMBIENTE — NUNCA COMMITE O .env REAL
# Copie este arquivo: cp .env.example .env
# Preencha com seus valores reais
# =================================================

# Banco de dados Neon (https://neon.tech — gratuito)
DATABASE_URL=postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/meudb?sslmode=require

# Servidor
PORT=3000
NODE_ENV=development

# Segurança JWT (gere uma chave aleatória forte)
JWT_SECRET=substitua-por-chave-secreta-forte-de-32-chars-min
JWT_EXPIRES_IN=7d

# CORS — domínios permitidos (separe por virgula)
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173`,".gitignore":`# Dependencias
node_modules/
.pnp
.pnp.js
__pycache__/
*.py[cod]
venv/

# Variaveis de ambiente (NUNCA suba .env real)
.env
.env.local
.env.*.local

# Build
dist/
build/
.next/
out/
.cache/

# Banco de dados local
*.db
*.sqlite
*.sqlite3

# Sistema operacional
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp

# Logs
*.log
npm-debug.log*

# Testes
coverage/
.nyc_output/

# Arquivos pesados
*.mp4
*.mov
*.zip
*.tar.gz`,"README.md":`# Meu Projeto Full-Stack

> API REST profissional com autenticação JWT e banco PostgreSQL (Neon)

## Stack
- **Backend**: Node.js + Express
- **Banco de dados**: PostgreSQL via Neon DB (serverless, gratuito)
- **Autenticação**: JWT (JSON Web Tokens)
- **Segurança**: Helmet, CORS, Rate Limiting

## Setup Rápido

\`\`\`bash
# 1. Clone o repositório
git clone <sua-url>
cd meu-projeto

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com seu DATABASE_URL do Neon

# 4. Inicialize o banco de dados
npm run migrate

# 5. Inicie o servidor
npm run dev
\`\`\`

## Variáveis de Ambiente
Veja [.env.example](.env.example) para a lista completa.

## Rotas da API

### Autenticação
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | /api/auth/register | Criar conta |
| POST | /api/auth/login | Fazer login |

### Usuários (protegido)
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /api/usuarios/perfil | Meu perfil |

## Deploy

### Railway (recomendado)
1. \`git push\` para GitHub
2. Importe o repo em [railway.app](https://railway.app)
3. Configure \`DATABASE_URL\` nas variáveis de ambiente

### Render
1. \`git push\` para GitHub
2. Crie Web Service em [render.com](https://render.com)
3. Build: \`npm install\` | Start: \`npm start\`

## Enviando para GitHub
\`\`\`bash
git init
git add .
git commit -m "Projeto inicial"
git remote add origin <url-do-seu-repo>
git push -u origin main
\`\`\`
`,"src/index.js":`const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const { initDb } = require('../db/neon');
const authRoutes = require('./routes/auth');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const PORT = process.env.PORT || 3000;

// Segurança
app.use(helmet());
app.use(cors({
  origin: (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(','),
  credentials: true
}));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // max 100 requests por IP
  message: { erro: 'Muitas requisições. Tente novamente em 15 minutos.' }
}));
app.use(express.json({ limit: '10mb' }));

// Rotas
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuariosRoutes);

// Erro 404
app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada' });
});

// Erro global
app.use((err, req, res, next) => {
  console.error('Erro:', err.message);
  res.status(500).json({ erro: 'Erro interno do servidor' });
});

// Inicia servidor
async function start() {
  try {
    await initDb();
    app.listen(PORT, () => {
      console.log(\`✅ Servidor rodando na porta \${PORT}\`);
      console.log(\`🌐 Health check: http://localhost:\${PORT}/api/health\`);
    });
  } catch (err) {
    console.error('❌ Falha ao iniciar:', err.message);
    process.exit(1);
  }
}

start();`,"src/routes/auth.js":`const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sql } = require('../../db/neon');

const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' });
    }
    if (senha.length < 6) {
      return res.status(400).json({ erro: 'Senha deve ter no mínimo 6 caracteres' });
    }
    const [existente] = await sql\`SELECT id FROM usuarios WHERE email = \${email}\`;
    if (existente) {
      return res.status(409).json({ erro: 'E-mail já cadastrado' });
    }
    const senhaHash = await bcrypt.hash(senha, 12);
    const [usuario] = await sql\`
      INSERT INTO usuarios (nome, email, senha_hash)
      VALUES (\${nome}, \${email}, \${senhaHash})
      RETURNING id, nome, email, criado_em
    \`;
    const token = jwt.sign({ id: usuario.id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });
    res.status(201).json({ mensagem: 'Conta criada com sucesso!', token, usuario });
  } catch (err) {
    console.error('Erro no registro:', err.message);
    res.status(500).json({ erro: 'Erro ao criar conta' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;
    if (!email || !senha) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
    }
    const [usuario] = await sql\`SELECT * FROM usuarios WHERE email = \${email}\`;
    if (!usuario) {
      return res.status(401).json({ erro: 'E-mail ou senha incorretos' });
    }
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
    if (!senhaCorreta) {
      return res.status(401).json({ erro: 'E-mail ou senha incorretos' });
    }
    const token = jwt.sign({ id: usuario.id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });
    res.json({
      mensagem: 'Login realizado com sucesso!',
      token,
      usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email }
    });
  } catch (err) {
    console.error('Erro no login:', err.message);
    res.status(500).json({ erro: 'Erro ao fazer login' });
  }
});

module.exports = router;`,"src/routes/usuarios.js":`const express = require('express');
const { autenticar } = require('../middleware/auth');
const { sql } = require('../../db/neon');

const router = express.Router();

// GET /api/usuarios/perfil (protegido)
router.get('/perfil', autenticar, async (req, res) => {
  try {
    const [usuario] = await sql\`
      SELECT id, nome, email, criado_em FROM usuarios WHERE id = \${req.usuario.id}
    \`;
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json({ usuario });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar perfil' });
  }
});

module.exports = router;`,"src/middleware/auth.js":`const jwt = require('jsonwebtoken');

function autenticar(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ erro: 'Token de autenticação não fornecido' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
}

module.exports = { autenticar };`,"db/neon.js":`const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL não configurado! Crie o arquivo .env');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function initDb() {
  await sql\`
    CREATE TABLE IF NOT EXISTS usuarios (
      id        SERIAL PRIMARY KEY,
      nome      VARCHAR(255) NOT NULL,
      email     VARCHAR(255) UNIQUE NOT NULL,
      senha_hash VARCHAR(255) NOT NULL,
      criado_em TIMESTAMP DEFAULT NOW()
    )
  \`;
  console.log('✅ Banco de dados Neon pronto!');
}

module.exports = { sql, initDb };`,"db/migrate.js":`require('dotenv').config();
const { initDb } = require('./neon');

console.log('🔄 Iniciando migração do banco de dados...');
initDb()
  .then(() => {
    console.log('✅ Migração concluída com sucesso!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Falha na migração:', err.message);
    process.exit(1);
  });`}},{id:"multi-ia",name:"Chat Multi-Modelos de IA",description:"App web para conversar com Groq, OpenAI, Gemini, Anthropic, Grok, Perplexity e OpenRouter. Interface em português, streaming em tempo real.",icon:"cpu",files:{"package.json":`{
  "name": "multi-ia",
  "version": "1.0.0",
  "description": "Chat com múltiplos provedores de IA",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}`,".env.example":`# ╔══════════════════════════════════════════════════════╗
# ║  Multi-IA — Chaves de API                            ║
# ║  Copie este arquivo para .env e preencha as chaves   ║
# ╚══════════════════════════════════════════════════════╝

# Groq (GRÁTIS — recomendado para começar)
# https://console.groq.com → API Keys → Create API Key
GROQ_API_KEY=gsk_...

# OpenAI
# https://platform.openai.com/api-keys
OPENAI_API_KEY=sk-...

# Google Gemini
# https://aistudio.google.com/apikey
GEMINI_API_KEY=AIza...

# Anthropic (Claude)
# https://console.anthropic.com/settings/keys
ANTHROPIC_API_KEY=sk-ant-...

# xAI (Grok)
# https://console.x.ai
XAI_API_KEY=xai-...

# OpenRouter (acessa múltiplos modelos com uma chave)
# https://openrouter.ai/settings/keys
OPENROUTER_API_KEY=sk-or-...

# Perplexity
# https://www.perplexity.ai/settings/api
PERPLEXITY_API_KEY=pplx-...

PORT=3000`,".gitignore":`.env
node_modules/
*.log`,"server.js":`require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// ─── Configuração dos provedores ─────────────────────────────────────────────
const PROVIDERS = {
  groq: {
    nome: 'Groq',
    url: 'https://api.groq.com/openai/v1/chat/completions',
    modelo: 'llama-3.3-70b-versatile',
    chave: () => process.env.GROQ_API_KEY,
    cor: '#f55036',
  },
  openai: {
    nome: 'OpenAI',
    url: 'https://api.openai.com/v1/chat/completions',
    modelo: 'gpt-4o-mini',
    chave: () => process.env.OPENAI_API_KEY,
    cor: '#10a37f',
  },
  gemini: {
    nome: 'Google Gemini',
    url: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
    modelo: 'gemini-2.0-flash',
    chave: () => process.env.GEMINI_API_KEY,
    cor: '#4285f4',
  },
  anthropic: {
    nome: 'Anthropic (Claude)',
    url: 'https://api.anthropic.com/v1/messages',
    modelo: 'claude-haiku-4-20250514',
    chave: () => process.env.ANTHROPIC_API_KEY,
    cor: '#d4a574',
    isAnthropic: true,
  },
  xai: {
    nome: 'xAI (Grok)',
    url: 'https://api.x.ai/v1/chat/completions',
    modelo: 'grok-2-latest',
    chave: () => process.env.XAI_API_KEY,
    cor: '#e7e7e7',
  },
  openrouter: {
    nome: 'OpenRouter',
    url: 'https://openrouter.ai/api/v1/chat/completions',
    modelo: 'openai/gpt-4o-mini',
    chave: () => process.env.OPENROUTER_API_KEY,
    cor: '#6366f1',
  },
  perplexity: {
    nome: 'Perplexity',
    url: 'https://api.perplexity.ai/chat/completions',
    modelo: 'sonar-pro',
    chave: () => process.env.PERPLEXITY_API_KEY,
    cor: '#20808d',
  },
};

// ─── GET /api/provedores — lista provedores com status ───────────────────────
app.get('/api/provedores', (req, res) => {
  const lista = Object.entries(PROVIDERS).map(([id, p]) => ({
    id,
    nome: p.nome,
    modelo: p.modelo,
    cor: p.cor,
    ativo: !!p.chave(),
  }));
  res.json(lista);
});

// ─── POST /api/chat — envia mensagem para o provedor escolhido ───────────────
app.post('/api/chat', async (req, res) => {
  const { provedor, mensagens, modelo, apiKeyOverride } = req.body;

  const cfg = PROVIDERS[provedor];
  if (!cfg) return res.status(400).json({ erro: 'Provedor inválido: ' + provedor });

  const apiKey = apiKeyOverride || cfg.chave();
  if (!apiKey) return res.status(400).json({
    erro: 'Chave de API não configurada para ' + cfg.nome +
          '. Adicione no arquivo .env ou informe diretamente.',
  });

  const modeloFinal = modelo || cfg.modelo;

  try {
    let body, headers;

    // Anthropic usa formato diferente
    if (cfg.isAnthropic) {
      const sys = mensagens.find(m => m.role === 'system');
      const msgs = mensagens.filter(m => m.role !== 'system');
      body = JSON.stringify({
        model: modeloFinal,
        max_tokens: 8192,
        system: sys?.content || 'Você é um assistente prestativo. Responda em português.',
        messages: msgs,
        stream: true,
      });
      headers = {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      };
    } else {
      body = JSON.stringify({
        model: modeloFinal,
        messages: mensagens,
        stream: true,
        max_tokens: 8192,
      });
      headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'Multi-IA App',
      };
    }

    const resp = await fetch(cfg.url, { method: 'POST', headers, body });

    if (!resp.ok) {
      const errText = await resp.text();
      return res.status(resp.status).json({ erro: errText.substring(0, 500) });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('X-Accel-Buffering', 'no');

    if (cfg.isAnthropic) {
      // Adaptador Anthropic → OpenAI SSE
      const reader = resp.body.getReader();
      const dec = new TextDecoder();
      let buf = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        const lines = buf.split('\\n');
        buf = lines.pop() || '';
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const j = line.slice(6).trim();
          if (!j || j === '[DONE]') continue;
          try {
            const p = JSON.parse(j);
            const delta = p.delta?.text || '';
            if (delta) {
              const openaiChunk = { choices: [{ delta: { content: delta } }] };
              res.write('data: ' + JSON.stringify(openaiChunk) + '\\n\\n');
            }
          } catch {}
        }
      }
    } else {
      // OpenAI-compatible: repassa direto
      const reader = resp.body.getReader();
      const dec = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(dec.decode(value, { stream: true }));
      }
    }

    res.write('data: [DONE]\\n\\n');
    res.end();
  } catch (err) {
    if (!res.headersSent) res.status(500).json({ erro: err.message });
    else res.end();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('🤖 Multi-IA rodando em http://localhost:' + PORT);
  console.log('📋 Provedores configurados:');
  Object.entries(PROVIDERS).forEach(([id, p]) => {
    const ok = !!p.chave();
    console.log('  ' + (ok ? '✅' : '❌') + ' ' + p.nome + ' (' + id + ')');
  });
});`,"public/index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <title>Multi-IA — Chat com vários modelos</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #0f1117;
      --panel: #1a1d2e;
      --border: #2a2d3e;
      --text: #e2e8f0;
      --muted: #64748b;
      --accent: #6366f1;
    }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); height: 100dvh; display: flex; flex-direction: column; overflow: hidden; }

    /* Header */
    header { padding: 12px 16px; background: var(--panel); border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
    header h1 { font-size: 1rem; font-weight: 700; flex: 1; }
    header span { font-size: 11px; color: var(--muted); }

    /* Seletor de provedor */
    .provider-bar { display: flex; gap: 6px; padding: 10px 12px; background: var(--panel); border-bottom: 1px solid var(--border); overflow-x: auto; flex-shrink: 0; scrollbar-width: none; }
    .provider-bar::-webkit-scrollbar { display: none; }
    .prov-btn { white-space: nowrap; padding: 5px 12px; border-radius: 20px; border: 1px solid transparent; font-size: 12px; cursor: pointer; transition: all 0.2s; background: rgba(255,255,255,0.04); color: var(--muted); }
    .prov-btn.active { color: #fff; border-color: currentColor; }
    .prov-btn.inactive { opacity: 0.4; cursor: not-allowed; }
    .prov-btn.ativo:hover { opacity: 0.9; }

    /* Key override */
    .key-bar { padding: 8px 12px; background: #0d1117; border-bottom: 1px solid var(--border); display: flex; gap-6px; gap: 6px; flex-shrink: 0; display: none; }
    .key-bar.show { display: flex; }
    .key-bar input { flex: 1; background: var(--panel); border: 1px solid var(--border); border-radius: 8px; padding: 6px 10px; font-size: 12px; color: var(--text); font-family: monospace; outline: none; }
    .key-bar input:focus { border-color: var(--accent); }
    .key-bar button { padding: 6px 12px; border-radius: 8px; background: var(--accent); border: none; color: #fff; font-size: 12px; cursor: pointer; }

    /* Chat */
    #chat { flex: 1; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 10px; }
    .msg { max-width: 85%; border-radius: 12px; padding: 10px 14px; font-size: 13px; line-height: 1.6; }
    .msg.user { background: #1e3a5f; color: #c8e6ff; align-self: flex-end; border-bottom-right-radius: 4px; }
    .msg.bot { background: var(--panel); border: 1px solid var(--border); align-self: flex-start; border-bottom-left-radius: 4px; }
    .msg.bot .prov-tag { font-size: 10px; font-weight: 700; margin-bottom: 4px; opacity: 0.7; }
    .msg pre { background: #0d1117; border-radius: 6px; padding: 8px; font-size: 11px; overflow-x: auto; margin: 6px 0; }
    .msg code { font-family: 'Consolas', monospace; }
    .cursor { display: inline-block; width: 2px; height: 14px; background: var(--accent); margin-left: 2px; animation: blink 1s infinite; vertical-align: middle; }
    @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
    .empty-state { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; color: var(--muted); text-align: center; padding: 24px; }
    .empty-state h2 { font-size: 1.2rem; color: var(--text); }
    .empty-state p { font-size: 13px; line-height: 1.6; max-width: 400px; }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-top: 8px; }
    .chip { padding: 6px 14px; border-radius: 20px; border: 1px solid var(--border); font-size: 12px; cursor: pointer; background: var(--panel); transition: all 0.2s; }
    .chip:hover { border-color: var(--accent); color: var(--accent); }

    /* Input bar */
    .input-bar { padding: 10px 12px; background: var(--panel); border-top: 1px solid var(--border); display: flex; gap: 8px; flex-shrink: 0; }
    .input-bar textarea { flex: 1; background: var(--bg); border: 1px solid var(--border); border-radius: 12px; padding: 10px 14px; font-size: 13px; color: var(--text); resize: none; outline: none; font-family: inherit; min-height: 44px; max-height: 120px; line-height: 1.5; }
    .input-bar textarea:focus { border-color: var(--accent); }
    .send-btn { width: 44px; height: 44px; border-radius: 12px; background: var(--accent); border: none; color: #fff; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: opacity 0.2s; }
    .send-btn:disabled { opacity: 0.4; cursor: not-allowed; }
    .stop-btn { width: 44px; height: 44px; border-radius: 12px; background: #dc2626; border: none; color: #fff; font-size: 16px; cursor: pointer; flex-shrink: 0; }
    .model-sel { padding: 8px 10px; border-radius: 8px; background: var(--bg); border: 1px solid var(--border); color: var(--muted); font-size: 11px; outline: none; cursor: pointer; }

    /* Config overlay */
    .cfg-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 100; display: none; align-items: flex-end; }
    .cfg-overlay.show { display: flex; }
    .cfg-panel { width: 100%; background: var(--panel); border-radius: 20px 20px 0 0; padding: 20px; max-height: 80vh; overflow-y: auto; }
    .cfg-panel h3 { font-size: 14px; font-weight: 700; margin-bottom: 12px; }
    .cfg-row { margin-bottom: 10px; }
    .cfg-row label { font-size: 11px; color: var(--muted); display: block; margin-bottom: 4px; }
    .cfg-row input { width: 100%; background: var(--bg); border: 1px solid var(--border); border-radius: 8px; padding: 8px 12px; font-size: 12px; color: var(--text); font-family: monospace; outline: none; }
    .cfg-row input:focus { border-color: var(--accent); }
    .cfg-close { width: 100%; padding: 12px; background: var(--accent); border: none; color: #fff; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; margin-top: 8px; }
  </style>
</head>
<body>

<header>
  <span style="font-size:20px">🤖</span>
  <h1>Multi-IA Chat</h1>
  <button onclick="toggleCfg()" style="padding:6px 12px;background:rgba(255,255,255,0.05);border:1px solid #2a2d3e;border-radius:8px;color:#94a3b8;font-size:12px;cursor:pointer">
    ⚙️ Chaves
  </button>
</header>

<div class="provider-bar" id="provBar"></div>

<div id="chat">
  <div class="empty-state" id="emptyState">
    <span style="font-size:48px">🤖</span>
    <h2>Multi-IA Chat</h2>
    <p>Converse com Groq, OpenAI, Gemini, Claude, Grok, OpenRouter e Perplexity — tudo em um lugar.</p>
    <div class="chips">
      <div class="chip" onclick="setPrompt('Olá! Quem é você e qual modelo está usando?')">Quem é você?</div>
      <div class="chip" onclick="setPrompt('Explique inteligência artificial em linguagem simples.')">O que é IA?</div>
      <div class="chip" onclick="setPrompt('Escreva um código Python para ler um arquivo CSV e mostrar as primeiras 5 linhas.')">Código Python</div>
      <div class="chip" onclick="setPrompt('Me dê 5 ideias de negócios baseados em IA para um advogado.')">Ideias para advogado</div>
    </div>
  </div>
</div>

<div class="input-bar">
  <select id="modelSel" class="model-sel" title="Modelo"></select>
  <textarea id="input" placeholder="Digite sua mensagem… (Enter para enviar)" rows="1"
    onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();send()}"
    oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,120)+'px'"></textarea>
  <button class="stop-btn" id="stopBtn" style="display:none" onclick="abortStream()">⏹</button>
  <button class="send-btn" id="sendBtn" onclick="send()" disabled>➤</button>
</div>

<!-- Overlay de configuração de chaves -->
<div class="cfg-overlay" id="cfgOverlay" onclick="if(event.target===this)toggleCfg()">
  <div class="cfg-panel">
    <h3>🔑 Suas Chaves de API</h3>
    <p style="font-size:12px;color:#64748b;margin-bottom:14px">
      Salvas apenas no navegador (localStorage). Nunca enviadas para terceiros.
    </p>
    <div id="cfgFields"></div>
    <button class="cfg-close" onclick="saveCfgAndClose()">✓ Salvar e fechar</button>
  </div>
</div>

<script>
// ── Estado ───────────────────────────────────────────────────────────────────
let provedores = [];
let provAtivo = null;
let historico = [];
let controller = null;

const LS_KEYS = 'mia_api_keys';
const savedKeys = JSON.parse(localStorage.getItem(LS_KEYS) || '{}');

// ── Boot ─────────────────────────────────────────────────────────────────────
async function boot() {
  const resp = await fetch('/api/provedores');
  provedores = await resp.json();
  renderProvBar();
  const primeiro = provedores.find(p => p.ativo || savedKeys[p.id]) || provedores[0];
  if (primeiro) selectProv(primeiro.id);
  renderCfgFields();
}

function renderProvBar() {
  const bar = document.getElementById('provBar');
  bar.innerHTML = '';
  provedores.forEach(p => {
    const hasKey = p.ativo || !!savedKeys[p.id];
    const btn = document.createElement('button');
    btn.className = 'prov-btn' + (hasKey ? '' : ' inactive');
    btn.style.setProperty('--pc', p.cor);
    btn.textContent = (hasKey ? '' : '🔒 ') + p.nome;
    btn.dataset.id = p.id;
    if (hasKey) btn.onclick = () => selectProv(p.id);
    else btn.onclick = () => { toggleCfg(); };
    bar.appendChild(btn);
  });
}

function selectProv(id) {
  provAtivo = provedores.find(p => p.id === id);
  document.querySelectorAll('.prov-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.id === id);
    if (b.dataset.id === id && provAtivo) b.style.color = provAtivo.cor;
    else b.style.color = '';
  });
  // Atualiza select de modelos
  const modelos = getModelos(id);
  const sel = document.getElementById('modelSel');
  sel.innerHTML = modelos.map(m => '<option value="' + m.v + '">' + m.n + '</option>').join('');
  document.getElementById('sendBtn').disabled = false;
}

function getModelos(id) {
  const map = {
    groq:       [{v:'llama-3.3-70b-versatile',n:'Llama 3.3 70B'},{v:'llama-3.1-8b-instant',n:'Llama 3.1 8B (rápido)'},{v:'gemma2-9b-it',n:'Gemma2 9B'},{v:'mixtral-8x7b-32768',n:'Mixtral 8x7B'}],
    openai:     [{v:'gpt-4o-mini',n:'GPT-4o Mini'},{v:'gpt-4o',n:'GPT-4o'},{v:'gpt-3.5-turbo',n:'GPT-3.5 Turbo'}],
    gemini:     [{v:'gemini-2.0-flash',n:'Gemini 2.0 Flash'},{v:'gemini-1.5-pro',n:'Gemini 1.5 Pro'},{v:'gemini-1.5-flash',n:'Gemini 1.5 Flash'}],
    anthropic:  [{v:'claude-haiku-4-20250514',n:'Claude Haiku 4'},{v:'claude-sonnet-4-5',n:'Claude Sonnet 4.5'},{v:'claude-opus-4-5',n:'Claude Opus 4.5'}],
    xai:        [{v:'grok-2-latest',n:'Grok 2'},{v:'grok-3-mini',n:'Grok 3 Mini'}],
    openrouter: [{v:'openai/gpt-4o-mini',n:'GPT-4o Mini (OR)'},{v:'anthropic/claude-haiku',n:'Claude Haiku (OR)'},{v:'google/gemini-flash-1.5',n:'Gemini Flash (OR)'},{v:'meta-llama/llama-3.3-70b',n:'Llama 3.3 70B (OR)'}],
    perplexity: [{v:'sonar-pro',n:'Sonar Pro'},{v:'sonar',n:'Sonar'},{v:'sonar-reasoning',n:'Sonar Reasoning'}],
  };
  return map[id] || [{v: provedores.find(p=>p.id===id)?.modelo || 'default', n:'Padrão'}];
}

// ── Enviar mensagem ───────────────────────────────────────────────────────────
function setPrompt(txt) {
  const el = document.getElementById('input');
  el.value = txt;
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  el.focus();
}

async function send() {
  const el = document.getElementById('input');
  const text = el.value.trim();
  if (!text || !provAtivo) return;

  document.getElementById('emptyState')?.remove();
  el.value = '';
  el.style.height = '44px';

  historico.push({ role: 'user', content: text });
  addMsg('user', text);

  controller = new AbortController();
  document.getElementById('sendBtn').style.display = 'none';
  document.getElementById('stopBtn').style.display = 'flex';

  const botEl = addMsg('bot', '', provAtivo);
  const contentEl = botEl.querySelector('.bot-content');
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  contentEl.appendChild(cursor);

  try {
    const modelo = document.getElementById('modelSel').value;
    const resp = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        provedor: provAtivo.id,
        mensagens: [
          { role: 'system', content: 'Você é um assistente útil. Responda em português quando o usuário escrever em português.' },
          ...historico,
        ],
        modelo,
        apiKeyOverride: savedKeys[provAtivo.id] || undefined,
      }),
      signal: controller.signal,
    });

    if (!resp.ok) {
      const e = await resp.json();
      cursor.remove();
      contentEl.innerHTML = '<span style="color:#f87171">❌ ' + (e.erro || 'Erro ' + resp.status) + '</span>';
      historico.pop();
      return;
    }

    const reader = resp.body.getReader();
    const dec = new TextDecoder();
    let full = '', buf = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const lines = buf.split('\\n');
      buf = lines.pop() || '';
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const j = line.slice(6).trim();
        if (j === '[DONE]') continue;
        try {
          const p = JSON.parse(j);
          const delta = p.choices?.[0]?.delta?.content || '';
          if (delta) {
            full += delta;
            cursor.remove();
            contentEl.innerHTML = formatMd(full);
            contentEl.appendChild(cursor);
            document.getElementById('chat').scrollTop = 9999;
          }
        } catch {}
      }
    }

    cursor.remove();
    if (full) {
      historico.push({ role: 'assistant', content: full });
      contentEl.innerHTML = formatMd(full);
    }

  } catch (err) {
    cursor.remove();
    if (err.name !== 'AbortError') {
      contentEl.innerHTML = '<span style="color:#f87171">❌ ' + err.message + '</span>';
      historico.pop();
    }
  } finally {
    controller = null;
    document.getElementById('sendBtn').style.display = 'flex';
    document.getElementById('stopBtn').style.display = 'none';
    document.getElementById('chat').scrollTop = 9999;
  }
}

function abortStream() {
  controller?.abort();
}

// ── Renderização ─────────────────────────────────────────────────────────────
function addMsg(role, text, prov) {
  const chat = document.getElementById('chat');
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  if (role === 'bot' && prov) {
    div.innerHTML =
      '<div class="prov-tag" style="color:' + prov.cor + '">' + prov.nome + '</div>' +
      '<div class="bot-content">' + formatMd(text) + '</div>';
  } else {
    div.textContent = text;
  }
  chat.appendChild(div);
  chat.scrollTop = 9999;
  return div;
}

function formatMd(text) {
  return text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\`\`\`(\\w*)\\n([\\s\\S]*?)\`\`\`/g, '<pre><code>$2</code></pre>')
    .replace(/\`([^\`]+)\`/g, '<code style="background:#0d1117;padding:1px 4px;border-radius:3px">$1</code>')
    .replace(/\\*\\*([^*]+)\\*\\*/g, '<strong>$1</strong>')
    .replace(/\\*([^*]+)\\*/g, '<em>$1</em>')
    .replace(/\\n/g, '<br>');
}

// ── Config ────────────────────────────────────────────────────────────────────
function renderCfgFields() {
  const el = document.getElementById('cfgFields');
  el.innerHTML = provedores.map(p => \`
    <div class="cfg-row">
      <label style="color:\${p.cor}">\${p.nome} — \${p.modelo}</label>
      <input type="password" id="cfgkey_\${p.id}"
        placeholder="Chave de API (\${p.ativo ? 'já configurada no .env' : 'não configurada'})"
        value="\${savedKeys[p.id] || ''}">
    </div>
  \`).join('');
}

function saveCfgAndClose() {
  provedores.forEach(p => {
    const el = document.getElementById('cfgkey_' + p.id);
    if (el.value.trim()) savedKeys[p.id] = el.value.trim();
    else delete savedKeys[p.id];
  });
  localStorage.setItem(LS_KEYS, JSON.stringify(savedKeys));
  toggleCfg();
  // Reativa provedores com chave manual
  provedores = provedores.map(p => ({ ...p, ativo: p.ativo || !!savedKeys[p.id] }));
  renderProvBar();
}

function toggleCfg() {
  document.getElementById('cfgOverlay').classList.toggle('show');
}

boot();
<\/script>
</body>
</html>`,"README.md":`# 🤖 Multi-IA Chat

App web para conversar com múltiplos provedores de IA em uma interface unificada.

## Provedores suportados
| Provedor | Modelo padrão | Gratuito? |
|---|---|---|
| Groq | Llama 3.3 70B | ✅ Sim |
| OpenAI | GPT-4o Mini | 💳 Pago |
| Google Gemini | Gemini 2.0 Flash | ✅ Sim (cota) |
| Anthropic | Claude Haiku 4 | 💳 Pago |
| xAI (Grok) | Grok 2 | 💳 Pago |
| OpenRouter | GPT-4o Mini | ✅ Sim (cota) |
| Perplexity | Sonar Pro | 💳 Pago |

## Como usar

### 1. Configurar as chaves de API
\`\`\`bash
cp .env.example .env
# Edite o .env com suas chaves
\`\`\`

### 2. Instalar e rodar
\`\`\`bash
npm install
npm run dev  # ou: node server.js
\`\`\`

### 3. Abrir no navegador
Acesse: http://localhost:3000

### Configurar chaves pelo app
Clique em ⚙️ Chaves na interface para adicionar chaves
diretamente pelo navegador (salvas localmente, nunca enviadas).

## Obter as chaves (todas grátis para começar)
- **Groq** (recomendado): https://console.groq.com → API Keys
- **OpenAI**: https://platform.openai.com/api-keys
- **Gemini**: https://aistudio.google.com/apikey
- **OpenRouter**: https://openrouter.ai/settings/keys
`}},{id:"netlify-chat-ia",name:"Chat IA para Netlify (Campo Livre Standalone)",description:"Versão completa do Campo Livre em um único arquivo HTML. Arraste para o Netlify e estará online em segundos. Sem servidor, sem banco de dados.",icon:"zap",files:{"index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="theme-color" content="#141c0d">
  <title>Chat IA</title>
  <style>
    /*──────────────────────────────────────────
      RESET + VARIÁVEIS
    ──────────────────────────────────────────*/
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg:       #141c0d;
      --panel:    #1c2714;
      --border:   #2d4a1e;
      --accent:   #5aab56;
      --accent2:  #7ec87a;
      --text:     #e2e8f0;
      --muted:    #6b8f68;
      --code-bg:  #0d1309;
      --user-bg:  #1a3a14;
      --user-bdr: #3d6e2a;
      --err:      #f87171;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: var(--bg);
      color: var(--text);
      height: 100dvh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }

    /*──────────────────────────────────────────
      HEADER
    ──────────────────────────────────────────*/
    header {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      background: var(--panel);
      border-bottom: 1px solid var(--border);
      min-height: 48px;
    }
    header h1 { font-size: 14px; font-weight: 700; flex: 1; color: var(--accent2); }
    .badge {
      font-size: 10px;
      padding: 2px 8px;
      border-radius: 20px;
      border: 1px solid var(--accent);
      color: var(--accent2);
      background: rgba(90,171,86,0.1);
      white-space: nowrap;
    }
    .icon-btn {
      width: 34px; height: 34px;
      display: flex; align-items: center; justify-content: center;
      border-radius: 9px;
      border: none;
      background: transparent;
      color: var(--muted);
      cursor: pointer;
      font-size: 16px;
      transition: all 0.15s;
    }
    .icon-btn:hover { background: rgba(255,255,255,0.06); color: var(--accent2); }
    .icon-btn.active { background: rgba(90,171,86,0.15); color: var(--accent2); }
    .icon-btn.danger:hover { background: rgba(248,113,113,0.1); color: var(--err); }

    /*──────────────────────────────────────────
      PAINEL DE CONFIGURAÇÃO (API KEY)
    ──────────────────────────────────────────*/
    #cfgPanel {
      flex-shrink: 0;
      background: var(--panel);
      border-bottom: 1px solid var(--border);
      padding: 10px 14px;
      display: none;
      flex-direction: column;
      gap: 8px;
    }
    #cfgPanel.show { display: flex; }
    .cfg-label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      font-weight: 700;
    }
    .cfg-status { font-size: 11px; }
    .cfg-status.ok { color: var(--accent2); }
    .cfg-status.demo { color: #60a5fa; }
    .cfg-note {
      font-size: 11px;
      color: #60a5fa;
      background: rgba(96,165,250,0.08);
      border: 1px solid rgba(96,165,250,0.2);
      border-radius: 8px;
      padding: 8px 10px;
      line-height: 1.5;
    }
    .cfg-row { display: flex; gap: 6px; align-items: stretch; }
    .cfg-input {
      flex: 1;
      height: 36px;
      padding: 0 10px;
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 9px;
      color: var(--text);
      font-size: 12px;
      font-family: monospace;
      outline: none;
    }
    .cfg-input:focus { border-color: var(--accent); }
    .cfg-btn {
      height: 36px;
      padding: 0 12px;
      border-radius: 9px;
      border: 1px solid var(--border);
      background: rgba(90,171,86,0.12);
      color: var(--accent2);
      font-size: 12px;
      cursor: pointer;
      white-space: nowrap;
      display: flex; align-items: center; gap: 5px;
    }
    .cfg-btn:hover { background: rgba(90,171,86,0.22); }
    .cfg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
    .cfg-grid .cfg-input { font-size: 11px; }
    .cfg-prov-ok { font-size: 11px; color: var(--accent2); }

    /*──────────────────────────────────────────
      PAINEL DE CHAVES SALVAS
    ──────────────────────────────────────────*/
    #keysPanel {
      flex-shrink: 0;
      background: var(--panel);
      border-bottom: 1px solid var(--border);
      padding: 10px 14px;
      display: none;
      flex-direction: column;
      gap: 6px;
      max-height: 220px;
      overflow-y: auto;
    }
    #keysPanel.show { display: flex; }
    .saved-key {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 10px;
      border-radius: 9px;
      border: 1px solid var(--border);
      background: var(--code-bg);
      cursor: pointer;
      transition: border-color 0.15s;
    }
    .saved-key:hover { border-color: var(--accent); }
    .saved-key.active { border-color: var(--accent); background: rgba(90,171,86,0.08); }
    .saved-key-info { flex: 1; min-width: 0; }
    .saved-key-label { font-size: 12px; color: var(--text); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .saved-key-meta { font-size: 10px; color: var(--muted); }
    .active-tag { font-size: 9px; font-weight: 700; color: var(--accent2); }
    .del-btn { width: 26px; height: 26px; border-radius: 6px; border: none; background: transparent; color: var(--muted); cursor: pointer; font-size: 14px; display: flex; align-items: center; justify-content: center; }
    .del-btn:hover { background: rgba(248,113,113,0.1); color: var(--err); }

    /*──────────────────────────────────────────
      ÁREA DE CHAT
    ──────────────────────────────────────────*/
    #chat {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      scroll-behavior: smooth;
    }

    /* Estado vazio */
    .empty-state {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 14px;
      text-align: center;
      padding: 24px;
      pointer-events: none;
    }
    .empty-state .icon { font-size: 52px; }
    .empty-state h2 { font-size: 16px; color: var(--accent2); }
    .empty-state p { font-size: 13px; color: var(--muted); line-height: 1.6; max-width: 320px; }
    .chips { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; pointer-events: all; }
    .chip {
      padding: 6px 14px;
      border-radius: 20px;
      border: 1px solid var(--border);
      font-size: 12px;
      color: var(--muted);
      cursor: pointer;
      background: var(--panel);
      transition: all 0.2s;
    }
    .chip:hover { border-color: var(--accent); color: var(--accent2); }

    /* Mensagens */
    .msg {
      display: flex;
      flex-direction: column;
      max-width: 88%;
    }
    .msg.user { align-self: flex-end; }
    .msg.bot  { align-self: flex-start; }
    .msg-bubble {
      padding: 10px 14px;
      border-radius: 14px;
      font-size: 13px;
      line-height: 1.65;
      word-break: break-word;
    }
    .msg.user .msg-bubble {
      background: var(--user-bg);
      border: 1px solid var(--user-bdr);
      color: #d4f1d4;
      border-bottom-right-radius: 4px;
    }
    .msg.bot .msg-bubble {
      background: var(--panel);
      border: 1px solid var(--border);
      border-bottom-left-radius: 4px;
    }
    .msg-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }
    .msg.bot .msg-meta { padding-left: 4px; }
    .msg.user .msg-meta { justify-content: flex-end; padding-right: 4px; }
    .msg-meta button {
      font-size: 10px;
      color: var(--muted);
      background: none;
      border: none;
      cursor: pointer;
      display: flex; align-items: center; gap: 3px;
    }
    .msg-meta button:hover { color: var(--accent2); }
    .prov-label { font-size: 10px; color: var(--muted); }

    /* Conteúdo markdown */
    .msg-content p { margin-bottom: 6px; }
    .msg-content p:last-child { margin-bottom: 0; }
    .msg-content strong { color: var(--accent2); }
    .msg-content em { color: #a5c8a2; font-style: italic; }
    .msg-content a { color: #60a5fa; text-decoration: underline; word-break: break-all; }
    .code-block {
      margin: 8px 0;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid var(--border);
    }
    .code-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 12px;
      background: #0a1008;
      font-size: 10px;
      font-family: monospace;
      color: var(--muted);
    }
    .copy-btn {
      display: flex; align-items: center; gap: 4px;
      background: none; border: none;
      color: var(--muted); cursor: pointer;
      font-size: 10px; font-family: monospace;
    }
    .copy-btn:hover { color: var(--accent2); }
    .code-body {
      padding: 10px 12px;
      background: var(--code-bg);
      font-size: 11px;
      font-family: 'Consolas','Courier New',monospace;
      color: #a8d5a2;
      overflow-x: auto;
      white-space: pre;
      line-height: 1.6;
    }
    .inline-code {
      background: var(--code-bg);
      padding: 1px 5px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 11px;
      color: #a8d5a2;
    }
    .cursor-blink {
      display: inline-block;
      width: 2px; height: 14px;
      background: var(--accent2);
      margin-left: 2px;
      vertical-align: middle;
      animation: blink 1s infinite;
    }
    @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }

    /*──────────────────────────────────────────
      BARRA DE INPUT
    ──────────────────────────────────────────*/
    .input-bar {
      flex-shrink: 0;
      display: flex;
      align-items: flex-end;
      gap: 8px;
      padding: 10px 12px;
      background: var(--panel);
      border-top: 1px solid var(--border);
    }
    #msgInput {
      flex: 1;
      min-height: 44px;
      max-height: 130px;
      padding: 11px 14px;
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      color: var(--text);
      font-size: 13px;
      font-family: inherit;
      resize: none;
      outline: none;
      line-height: 1.5;
      overflow-y: auto;
    }
    #msgInput:focus { border-color: var(--accent); }
    #msgInput::placeholder { color: var(--muted); }
    .send-btn {
      width: 44px; height: 44px;
      border-radius: 14px;
      border: 1px solid var(--accent);
      background: rgba(90,171,86,0.2);
      color: var(--accent2);
      font-size: 18px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: all 0.15s;
    }
    .send-btn:hover { background: rgba(90,171,86,0.35); }
    .send-btn:disabled { opacity: 0.3; cursor: not-allowed; }
    .mic-btn {
      width: 44px; height: 44px;
      border-radius: 14px;
      border: 1px solid var(--border);
      background: var(--code-bg);
      color: var(--muted);
      font-size: 18px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: all 0.2s;
    }
    .mic-btn.listening {
      border-color: #ef4444;
      background: rgba(239,68,68,0.15);
      color: #ef4444;
      animation: pulse 1.5s infinite;
    }
    .stop-btn {
      width: 44px; height: 44px;
      border-radius: 14px;
      border: 1px solid #ef4444;
      background: rgba(239,68,68,0.15);
      color: #ef4444;
      font-size: 18px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    @keyframes pulse { 0%,100%{opacity:1}50%{opacity:.6} }

    /* scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
  </style>
</head>
<body>

<!--═══════════════════════════════════
    HEADER
═══════════════════════════════════-->
<header>
  <span style="font-size:20px">💬</span>
  <h1>Chat IA</h1>
  <span class="badge" id="provBadge">Demo ✨</span>

  <!-- Exportar conversa -->
  <button class="icon-btn" title="Exportar conversa (.txt)" onclick="exportConv()">⬇️</button>
  <!-- Importar arquivo de texto -->
  <button class="icon-btn" title="Importar arquivo de texto" onclick="document.getElementById('fileIn').click()">📎</button>
  <input type="file" id="fileIn" accept=".txt,.md,.csv,.json,.pdf" style="display:none" onchange="importFile(event)">
  <!-- TTS -->
  <button class="icon-btn" id="ttsBtn" title="Voz da IA" onclick="toggleTTS()">🔊</button>
  <!-- Chaves salvas -->
  <button class="icon-btn" id="keysBtn" title="Chaves salvas" onclick="toggleKeys()">🔑</button>
  <!-- Config / Chave de API -->
  <button class="icon-btn" id="cfgBtn" title="Configurar chave de API" onclick="toggleCfg()">⚙️</button>
  <!-- Limpar conversa -->
  <button class="icon-btn danger" title="Limpar conversa" onclick="clearChat()">🗑️</button>
</header>

<!--═══════════════════════════════════
    PAINEL DE CONFIGURAÇÃO
═══════════════════════════════════-->
<div id="cfgPanel">
  <div style="display:flex;align-items:center;justify-content:space-between">
    <span class="cfg-label">Chave de API</span>
    <span class="cfg-status" id="cfgStatus">Sem chave — usando IA gratuita</span>
  </div>

  <div id="cfgNote" class="cfg-note">
    💡 <strong>Sem chave:</strong> usa IA gratuita (limitada). Cole qualquer chave abaixo para usar sua própria conta.<br>
    Provedores suportados: Groq (gsk_), OpenAI (sk-), Gemini (AIza), OpenRouter (sk-or-), Perplexity (pplx-)
  </div>

  <div class="cfg-row">
    <input class="cfg-input" id="keyInput" type="password"
      placeholder="gsk_..., sk-..., AIza..., sk-or-..., pplx-..."
      oninput="onKeyInput(this.value)">
    <button class="icon-btn" onclick="toggleShowKey()" title="Mostrar/ocultar">👁️</button>
  </div>

  <div class="cfg-grid">
    <input class="cfg-input" id="urlInput" placeholder="URL do provedor" value="https://api.groq.com/openai/v1">
    <input class="cfg-input" id="modelInput" placeholder="Modelo" value="llama-3.3-70b-versatile">
  </div>

  <div id="cfgProvOk" class="cfg-prov-ok" style="display:none"></div>

  <div class="cfg-row" id="saveRow" style="display:none">
    <input class="cfg-input" id="labelInput" placeholder="Nome para salvar (ex: Minha conta Groq)">
    <button class="cfg-btn" onclick="saveKey()">💾 Salvar</button>
  </div>
</div>

<!--═══════════════════════════════════
    PAINEL DE CHAVES SALVAS
═══════════════════════════════════-->
<div id="keysPanel">
  <span class="cfg-label" id="keysTitle">Chaves Salvas</span>
  <div id="keysList"></div>
</div>

<!--═══════════════════════════════════
    ÁREA DE CHAT
═══════════════════════════════════-->
<div id="chat">
  <div class="empty-state" id="emptyState">
    <span class="icon">💬</span>
    <h2>Chat IA</h2>
    <p>Converse sobre qualquer assunto.<br>Sem restrições de tema.</p>
    <div class="chips">
      <div class="chip" onclick="setPrompt('Olá! Como você pode me ajudar?')">Olá!</div>
      <div class="chip" onclick="setPrompt('Me explique o que é inteligência artificial em linguagem simples.')">O que é IA?</div>
      <div class="chip" onclick="setPrompt('Escreva um poema curto sobre tecnologia.')">Escreva um poema</div>
      <div class="chip" onclick="setPrompt('Quais são as 5 melhores ferramentas de IA gratuitas em 2024?')">Ferramentas de IA</div>
      <div class="chip" onclick="setPrompt('Me dê ideias criativas para um projeto pessoal usando IA.')">Ideias com IA</div>
    </div>
  </div>
</div>

<!--═══════════════════════════════════
    INPUT
═══════════════════════════════════-->
<div class="input-bar">
  <textarea id="msgInput" placeholder="Digite sua mensagem… (Enter para enviar, Shift+Enter nova linha)"
    onkeydown="handleKey(event)"
    oninput="adjustHeight(this)"></textarea>
  <button class="mic-btn" id="micBtn" title="Ditar por voz" onclick="toggleVoice()">🎤</button>
  <button class="stop-btn" id="stopBtn" style="display:none" onclick="abortStream()" title="Parar">⏹</button>
  <button class="send-btn" id="sendBtn" onclick="send()" title="Enviar">➤</button>
</div>

<script>
'use strict';

/*══════════════════════════════════════════════════════════════════════════
  DETECÇÃO AUTOMÁTICA DE PROVEDOR
══════════════════════════════════════════════════════════════════════════*/
const AUTO_DETECT = [
  { prefix: 'gsk_',   url: 'https://api.groq.com/openai/v1',                          model: 'llama-3.3-70b-versatile', name: 'Groq' },
  { prefix: 'sk-or-', url: 'https://openrouter.ai/api/v1',                            model: 'openai/gpt-4o-mini',      name: 'OpenRouter' },
  { prefix: 'pplx-',  url: 'https://api.perplexity.ai',                               model: 'sonar-pro',               name: 'Perplexity' },
  { prefix: 'AIza',   url: 'https://generativelanguage.googleapis.com/v1beta/openai', model: 'gemini-2.0-flash',        name: 'Google Gemini' },
  { prefix: 'xai-',   url: 'https://api.x.ai/v1',                                    model: 'grok-2-latest',           name: 'xAI/Grok' },
  { prefix: 'sk-ant', url: 'https://api.anthropic.com/v1',                            model: 'claude-haiku-4-20250514', name: 'Anthropic' },
  { prefix: 'sk-',    url: 'https://api.openai.com/v1',                               model: 'gpt-4o-mini',            name: 'OpenAI' },
];

function detectProvider(key) {
  for (const p of AUTO_DETECT) {
    if (key.startsWith(p.prefix)) return p;
  }
  return null;
}

/*══════════════════════════════════════════════════════════════════════════
  ESTADO GLOBAL
══════════════════════════════════════════════════════════════════════════*/
let apiKey    = localStorage.getItem('cia_key')   || '';
let apiUrl    = localStorage.getItem('cia_url')   || '';
let apiModel  = localStorage.getItem('cia_model') || '';
let savedKeys = JSON.parse(localStorage.getItem('cia_saved') || '[]');
let history   = [];
let controller= null;
let isRecording = false;
let recog     = null;
let silTimer  = null;
let ttsOn     = localStorage.getItem('cia_tts') !== 'off';
let showKey   = false;

/*══════════════════════════════════════════════════════════════════════════
  BOOT
══════════════════════════════════════════════════════════════════════════*/
function boot() {
  const ki = document.getElementById('keyInput');
  const ui = document.getElementById('urlInput');
  const mi = document.getElementById('modelInput');
  ki.value = apiKey;
  if (apiKey) {
    const d = detectProvider(apiKey);
    if (d) { ui.value = d.url; mi.value = d.model; }
    else   { ui.value = apiUrl; mi.value = apiModel; }
  }
  updateProvBadge();
  updateCfgStatus();
  document.getElementById('ttsBtn').style.opacity = ttsOn ? '1' : '0.4';
  renderSavedKeys();
  // Abre config automaticamente se não há chave
  if (!apiKey) toggleCfg();
}

/*══════════════════════════════════════════════════════════════════════════
  CONFIGURAÇÃO / CHAVE DE API
══════════════════════════════════════════════════════════════════════════*/
function toggleCfg() {
  const p = document.getElementById('cfgPanel');
  const b = document.getElementById('cfgBtn');
  const show = !p.classList.contains('show');
  p.classList.toggle('show', show);
  b.classList.toggle('active', show);
  document.getElementById('keysPanel').classList.remove('show');
  document.getElementById('keysBtn').classList.remove('active');
}

function toggleKeys() {
  const p = document.getElementById('keysPanel');
  const b = document.getElementById('keysBtn');
  const show = !p.classList.contains('show');
  p.classList.toggle('show', show);
  b.classList.toggle('active', show);
  document.getElementById('cfgPanel').classList.remove('show');
  document.getElementById('cfgBtn').classList.remove('active');
}

function onKeyInput(val) {
  val = val.trim();
  apiKey = val;
  localStorage.setItem('cia_key', val);
  const d = val ? detectProvider(val) : null;
  if (d) {
    document.getElementById('urlInput').value  = d.url;
    document.getElementById('modelInput').value = d.model;
    apiUrl   = d.url;
    apiModel = d.model;
    localStorage.setItem('cia_url',   d.url);
    localStorage.setItem('cia_model', d.model);
    document.getElementById('cfgProvOk').textContent = '✓ ' + d.name + ' · ' + d.model;
    document.getElementById('cfgProvOk').style.display = 'block';
    document.getElementById('cfgNote').style.display = 'none';
  } else {
    document.getElementById('cfgProvOk').style.display = 'none';
    document.getElementById('cfgNote').style.display = '';
  }
  document.getElementById('saveRow').style.display = val ? 'flex' : 'none';
  updateProvBadge();
  updateCfgStatus();
}

function updateProvBadge() {
  const badge = document.getElementById('provBadge');
  if (apiKey) {
    const d = detectProvider(apiKey);
    badge.textContent = d ? d.name : 'Custom';
    badge.style.borderColor = '#5aab56';
    badge.style.color = '#7ec87a';
  } else {
    badge.textContent = 'Demo ✨';
    badge.style.borderColor = '#60a5fa';
    badge.style.color = '#93c5fd';
  }
}

function updateCfgStatus() {
  const el = document.getElementById('cfgStatus');
  if (apiKey) {
    const d = detectProvider(apiKey);
    el.textContent = '✓ ' + (d ? d.name : 'Chave personalizada') + ' ativa';
    el.className = 'cfg-status ok';
  } else {
    el.textContent = 'Sem chave — usando IA gratuita';
    el.className = 'cfg-status demo';
  }
}

function toggleShowKey() {
  showKey = !showKey;
  document.getElementById('keyInput').type = showKey ? 'text' : 'password';
}

function saveKey() {
  const key   = document.getElementById('keyInput').value.trim();
  const label = document.getElementById('labelInput').value.trim();
  const url   = document.getElementById('urlInput').value.trim();
  const model = document.getElementById('modelInput').value.trim();
  if (!key) return;
  if (savedKeys.some(k => k.key === key)) return;
  const d = detectProvider(key);
  const finalLabel = label || (d ? d.name : 'Chave ' + (savedKeys.length + 1));
  savedKeys.push({ id: Date.now()+'', label: finalLabel, key, url, model, provider: d ? d.name : 'Custom' });
  localStorage.setItem('cia_saved', JSON.stringify(savedKeys));
  document.getElementById('labelInput').value = '';
  renderSavedKeys();
}

function renderSavedKeys() {
  const list = document.getElementById('keysList');
  const title = document.getElementById('keysTitle');
  title.textContent = 'Chaves Salvas (' + savedKeys.length + ')';
  if (savedKeys.length === 0) {
    list.innerHTML = '<div style="font-size:12px;color:#6b8f68;text-align:center;padding:10px">Nenhuma chave salva. Configure uma chave e clique em Salvar.</div>';
    return;
  }
  list.innerHTML = '';
  savedKeys.forEach(sk => {
    const div = document.createElement('div');
    div.className = 'saved-key' + (sk.key === apiKey ? ' active' : '');
    div.innerHTML =
      '<div class="saved-key-info" onclick="loadKey(\\''+sk.id+'\\')">'+
        '<div class="saved-key-label">'+esc(sk.label)+'</div>'+
        '<div class="saved-key-meta">'+esc(sk.provider)+' · '+sk.key.slice(0,6)+'…'+sk.key.slice(-3)+'</div>'+
      '</div>'+
      (sk.key === apiKey ? '<span class="active-tag">ATIVA</span>' : '')+
      '<button class="del-btn" onclick="deleteKey(\\''+sk.id+'\\')">✕</button>';
    list.appendChild(div);
  });
}

function loadKey(id) {
  const sk = savedKeys.find(k => k.id === id);
  if (!sk) return;
  apiKey   = sk.key;
  apiUrl   = sk.url;
  apiModel = sk.model;
  localStorage.setItem('cia_key',   sk.key);
  localStorage.setItem('cia_url',   sk.url);
  localStorage.setItem('cia_model', sk.model);
  document.getElementById('keyInput').value   = sk.key;
  document.getElementById('urlInput').value   = sk.url;
  document.getElementById('modelInput').value = sk.model;
  onKeyInput(sk.key);
  renderSavedKeys();
  toggleKeys();
}

function deleteKey(id) {
  savedKeys = savedKeys.filter(k => k.id !== id);
  localStorage.setItem('cia_saved', JSON.stringify(savedKeys));
  renderSavedKeys();
}

/*══════════════════════════════════════════════════════════════════════════
  ENVIAR MENSAGEM
══════════════════════════════════════════════════════════════════════════*/
function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
}

function adjustHeight(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 130) + 'px';
}

function setPrompt(txt) {
  const el = document.getElementById('msgInput');
  el.value = txt;
  adjustHeight(el);
  el.focus();
}

async function send(textOverride) {
  const el = document.getElementById('msgInput');
  const text = (textOverride || el.value).trim();
  if (!text) return;

  // unlock TTS (Android requer gesto do usuário)
  if (window.speechSynthesis) {
    const u = new SpeechSynthesisUtterance(' ');
    u.volume = 0; window.speechSynthesis.speak(u);
  }

  document.getElementById('emptyState')?.remove();
  el.value = ''; el.style.height = '44px';

  history.push({ role: 'user', content: text });
  appendMsg('user', text);

  controller = new AbortController();
  document.getElementById('sendBtn').style.display = 'none';
  document.getElementById('stopBtn').style.display = 'flex';

  const { el: botEl, content: contentEl } = appendMsg('bot', '', true);

  try {
    const key   = apiKey.trim();
    const url   = (document.getElementById('urlInput').value || apiUrl || 'https://api.groq.com/openai/v1').trim().replace(/\\/$/, '');
    const model = document.getElementById('modelInput').value || apiModel || 'llama-3.3-70b-versatile';

    let endpoint, headers, body;

    if (key) {
      endpoint = url + '/chat/completions';
      headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key,
        'HTTP-Referer': location.origin,
        'X-Title': 'Chat IA',
      };
      body = JSON.stringify({ model, messages: history, stream: true, max_tokens: 16384 });
    } else {
      // Sem chave: usa endpoint demo (Groq gratuito via proxy público)
      endpoint = 'https://api.groq.com/openai/v1/chat/completions';
      // Nota: sem chave, provavelmente vai falhar. Mostre dica.
      contentEl.innerHTML = '<span style="color:#60a5fa">⚠️ Configure uma chave de API nas Configurações (⚙️) para conversar. Groq é gratuito: <a href="https://console.groq.com" target="_blank" style="color:#7ec87a">console.groq.com</a></span>';
      history.pop();
      return;
    }

    const resp = await fetch(endpoint, { method: 'POST', headers, body, signal: controller.signal });

    if (!resp.ok) {
      const errText = await resp.text();
      let msg = 'Erro ' + resp.status;
      try { msg = JSON.parse(errText)?.error?.message || msg; } catch {}
      contentEl.innerHTML = '<span style="color:'+getCSSVar('--err')+'">❌ ' + esc(msg) + '</span>';
      history.pop();
      return;
    }

    const reader  = resp.body.getReader();
    const decoder = new TextDecoder();
    let full = '', buf = '', cursor;

    cursor = document.createElement('span');
    cursor.className = 'cursor-blink';
    contentEl.appendChild(cursor);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      const lines = buf.split('\\n');
      buf = lines.pop() || '';
      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const j = line.slice(6).trim();
        if (j === '[DONE]') continue;
        try {
          const p = JSON.parse(j);
          if (p.error) throw new Error(typeof p.error === 'string' ? p.error : p.error.message || 'Erro do provedor');
          const delta = p.choices?.[0]?.delta?.content || p.text || p.content || '';
          if (delta) {
            full += delta;
            cursor.remove();
            contentEl.innerHTML = renderMarkdown(full);
            contentEl.appendChild(cursor);
            scrollBottom();
          }
        } catch(e) { if (e instanceof SyntaxError) continue; throw e; }
      }
    }

    cursor.remove();
    if (full) {
      contentEl.innerHTML = renderMarkdown(full);
      history.push({ role: 'assistant', content: full });
      if (ttsOn) speakText(full);
    }

  } catch (err) {
    if (err.name === 'AbortError') {
      contentEl.innerHTML += '<em style="color:var(--muted);font-size:11px"> [parado]</em>';
    } else {
      contentEl.innerHTML = '<span style="color:var(--err)">❌ ' + esc(err.message) + '</span>';
      history.pop();
    }
  } finally {
    controller = null;
    document.getElementById('sendBtn').style.display = 'flex';
    document.getElementById('stopBtn').style.display = 'none';
    scrollBottom();
    addCopyListeners();
  }
}

function abortStream() { controller?.abort(); }

/*══════════════════════════════════════════════════════════════════════════
  RENDERIZAÇÃO
══════════════════════════════════════════════════════════════════════════*/
function appendMsg(role, text, streaming) {
  const wrap = document.createElement('div');
  wrap.className = 'msg ' + role;

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';

  const content = document.createElement('div');
  content.className = 'msg-content';

  if (role === 'user') {
    content.textContent = text;
  } else if (streaming) {
    content.innerHTML = '';
  } else {
    content.innerHTML = renderMarkdown(text);
  }

  bubble.appendChild(content);
  wrap.appendChild(bubble);

  const meta = document.createElement('div');
  meta.className = 'msg-meta';
  if (role === 'bot') {
    const prov = apiKey ? (detectProvider(apiKey)?.name || 'IA') : 'IA';
    meta.innerHTML =
      '<span class="prov-label">' + prov + '</span>' +
      '<button onclick="copyText(this, ' + "'" + '__CONTENT__' + "'" + ')">📋 Copiar</button>';
    // Substitui placeholder pelo getter real
    meta.querySelector('button').onclick = function() { copyText(this, content.textContent); };
  } else {
    meta.innerHTML = '<button onclick="copyText(this,\\''+escAttr(text)+'\\')">📋 Copiar</button>';
  }
  wrap.appendChild(meta);

  document.getElementById('chat').appendChild(wrap);
  scrollBottom();
  return { el: wrap, content };
}

let copyBlockId = 0;
function renderMarkdown(text) {
  let html = esc(text);
  // Blocos de código
  html = html.replace(/\`\`\`(\\w*?)\\n([\\s\\S]*?)\`\`\`/g, function(_, lang, code) {
    const id = 'cb' + (++copyBlockId);
    return (
      '<div class="code-block">' +
        '<div class="code-header">' +
          '<span>' + (lang || 'código') + '</span>' +
          '<button class="copy-btn" data-copy="'+escAttr(code)+'" id="'+id+'">📋 Copiar</button>' +
        '</div>' +
        '<div class="code-body">' + code + '</div>' +
      '</div>'
    );
  });
  // Inline code
  html = html.replace(/\`([^\`\\n]+?)\`/g, '<span class="inline-code">$1</span>');
  // Bold
  html = html.replace(/\\*\\*([^*]+?)\\*\\*/g, '<strong>$1</strong>');
  // Italic
  html = html.replace(/\\*([^*]+?)\\*/g, '<em>$1</em>');
  // Links
  html = html.replace(/(https?:\\/\\/[^\\s<>"']+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  // Newlines
  html = html.replace(/\\n/g, '<br>');
  return html;
}

function addCopyListeners() {
  document.querySelectorAll('.copy-btn[data-copy]').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.onclick = function() { copyText(this, this.dataset.copy); };
  });
}

function copyText(btn, text) {
  navigator.clipboard.writeText(text || '').catch(() => {});
  const orig = btn.textContent;
  btn.textContent = '✓ Copiado!';
  setTimeout(() => { btn.textContent = orig; }, 1800);
}

function scrollBottom() {
  const c = document.getElementById('chat');
  c.scrollTop = c.scrollHeight;
}

/*══════════════════════════════════════════════════════════════════════════
  EXPORTAR / IMPORTAR
══════════════════════════════════════════════════════════════════════════*/
function exportConv() {
  if (!history.length) return alert('Nenhuma conversa para exportar.');
  const lines = ['=== CONVERSA — Chat IA ===', 'Data: ' + new Date().toLocaleString('pt-BR'), ''];
  history.forEach(m => { lines.push('[' + (m.role === 'user' ? 'VOCÊ' : 'IA') + ']'); lines.push(m.content); lines.push(''); });
  const blob = new Blob([lines.join('\\n')], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'conversa-' + Date.now() + '.txt';
  a.click();
}

function importFile(e) {
  const file = e.target.files?.[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const t = ev.target?.result;
    if (t) {
      const el = document.getElementById('msgInput');
      el.value = el.value ? el.value + '\\n\\n' + t : t;
      adjustHeight(el);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

/*══════════════════════════════════════════════════════════════════════════
  VOZ — ENTRADA (STT)
══════════════════════════════════════════════════════════════════════════*/
function toggleVoice() {
  if (isRecording) { stopVoice(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return alert('Use Chrome ou Edge para ditar por voz.');

  recog = new SR();
  recog.lang = 'pt-BR';
  recog.continuous = true;
  recog.interimResults = true;

  let fullText = '';

  const schedSend = () => {
    clearTimeout(silTimer);
    silTimer = setTimeout(() => {
      try { recog.stop(); } catch {}
      if (fullText.trim()) { setPrompt(''); send(fullText.trim()); }
    }, 1800);
  };

  recog.onresult = ev => {
    let final = '', interim = '';
    for (let i = 0; i < ev.results.length; i++) {
      if (ev.results[i].isFinal) final += ev.results[i][0].transcript;
      else interim += ev.results[i][0].transcript;
    }
    fullText = final || interim;
    document.getElementById('msgInput').value = fullText;
    adjustHeight(document.getElementById('msgInput'));
    if (fullText) schedSend();
  };

  recog.onerror = recog.onend = () => {
    clearTimeout(silTimer);
    isRecording = false;
    recog = null;
    document.getElementById('micBtn').classList.remove('listening');
  };

  try { recog.start(); } catch { return; }
  isRecording = true;
  document.getElementById('micBtn').classList.add('listening');
}

function stopVoice() {
  try { recog?.stop(); } catch {}
  recog = null;
  isRecording = false;
  clearTimeout(silTimer);
  document.getElementById('micBtn').classList.remove('listening');
}

/*══════════════════════════════════════════════════════════════════════════
  VOZ — SAÍDA (TTS)
══════════════════════════════════════════════════════════════════════════*/
function toggleTTS() {
  ttsOn = !ttsOn;
  localStorage.setItem('cia_tts', ttsOn ? 'on' : 'off');
  document.getElementById('ttsBtn').style.opacity = ttsOn ? '1' : '0.4';
  if (!ttsOn) window.speechSynthesis?.cancel();
}

function speakText(text) {
  if (!ttsOn || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const clean = text.replace(/<[^>]+>/g, '').replace(/[\`*#]/g, '').substring(0, 800);
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = 'pt-BR';
  window.speechSynthesis.speak(u);
}

/*══════════════════════════════════════════════════════════════════════════
  LIMPAR
══════════════════════════════════════════════════════════════════════════*/
function clearChat() {
  if (history.length && !confirm('Limpar toda a conversa?')) return;
  abortStream();
  history = [];
  window.speechSynthesis?.cancel();
  const chat = document.getElementById('chat');
  chat.innerHTML = '';
  const empty = document.createElement('div');
  empty.className = 'empty-state';
  empty.id = 'emptyState';
  empty.innerHTML =
    '<span class="icon">💬</span><h2>Chat IA</h2>' +
    '<p>Converse sobre qualquer assunto.<br>Sem restrições de tema.</p>' +
    '<div class="chips">' +
      '<div class="chip" onclick="setPrompt(\\'Olá! Como você pode me ajudar?\\')">Olá!</div>' +
      '<div class="chip" onclick="setPrompt(\\'Me explique o que é inteligência artificial em linguagem simples.\\')">O que é IA?</div>' +
      '<div class="chip" onclick="setPrompt(\\'Escreva um poema curto sobre tecnologia.\\')">Escreva um poema</div>' +
    '</div>';
  chat.appendChild(empty);
}

/*══════════════════════════════════════════════════════════════════════════
  UTILS
══════════════════════════════════════════════════════════════════════════*/
function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}
function escAttr(s) { return esc(s).replace(/'/g,'&#39;'); }
function getCSSVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// Inicia
boot();
<\/script>
</body>
</html>`,"README.md":`# 💬 Chat IA — Standalone para Netlify

Versão completa do Campo Livre em um único arquivo HTML.
Sem servidor, sem banco de dados — funciona em qualquer hospedagem estática.

## Como publicar no Netlify (grátis, 1 minuto)

1. Acesse https://www.netlify.com e crie uma conta gratuita
2. Na dashboard, clique em **"Add new site" → "Deploy manually"**
3. Arraste a pasta do projeto (ou só o \`index.html\`) para a área indicada
4. Pronto! O site estará online em um link .netlify.app

## Funcionalidades
- ✅ Chat em tempo real com streaming
- ✅ Múltiplos provedores de IA (Groq, OpenAI, Gemini, OpenRouter, Perplexity)
- ✅ Detecção automática de provedor pela chave
- ✅ Múltiplas chaves salvas (localStorage)
- ✅ Voz: ditar mensagens por voz (pt-BR)
- ✅ TTS: IA lê as respostas em voz alta
- ✅ Exportar conversa como .txt
- ✅ Importar arquivo de texto (.txt, .md, .csv, .json)
- ✅ Blocos de código com botão Copiar
- ✅ Interface 100% em português
- ✅ PWA-ready (funciona offline após primeira visita)

## Provedores suportados (com CORS liberado)
| Prefixo da chave | Provedor | Gratuito? |
|---|---|---|
| gsk_ | Groq | ✅ Sim |
| sk- | OpenAI | 💳 Pago |
| AIza | Google Gemini | ✅ Sim (cota) |
| sk-or- | OpenRouter | ✅ Sim (cota) |
| pplx- | Perplexity | 💳 Pago |

## Obter chave Groq (gratuita, sem cartão)
1. Acesse https://console.groq.com
2. Crie uma conta
3. Vá em API Keys → Create API Key
4. Cole a chave (começa com gsk_) no campo ⚙️ do Chat IA
`}},{id:"whatsapp-bot",name:"WhatsApp Bot",description:"Bot para WhatsApp com respostas automáticas, menus e integração com IA",icon:"message-circle",files:{"index.js":`const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// ─── Configuração do cliente ───────────────────────────────────────────────
const client = new Client({
  authStrategy: new LocalAuth({ clientId: 'meu-bot' }),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  }
});

// ─── QR Code para autenticar ──────────────────────────────────────────────
client.on('qr', (qr) => {
  console.log('\\n📱 Escaneie o QR Code abaixo no WhatsApp:');
  qrcode.generate(qr, { small: true });
});

client.on('authenticated', () => console.log('✅ Autenticado com sucesso!'));
client.on('ready', () => {
  console.log('🟢 Bot pronto! Aguardando mensagens...');
  console.log('   Envie "!menu" para ver os comandos');
});

// ─── Banco de dados simples (memória) ────────────────────────────────────
const processos = new Map(); // numeroProcesso → dados

// ─── Menu principal ───────────────────────────────────────────────────────
const MENU = \`⚖️ *ESCRITÓRIO SK — Assistente Jurídico*

Olá! Sou o assistente do escritório. Escolha uma opção:

1️⃣ Consultar processo
2️⃣ Agendar reunião
3️⃣ Falar com advogado
4️⃣ Documentos necessários
5️⃣ Horário de atendimento
0️⃣ Encerrar atendimento

_Responda com o número da opção_\`;

// ─── Sessões de usuário ───────────────────────────────────────────────────
const sessoes = new Map(); // número → { etapa, dados }

function getSessao(numero) {
  if (!sessoes.has(numero)) sessoes.set(numero, { etapa: 'inicio', dados: {} });
  return sessoes.get(numero);
}

// ─── Handler de mensagens ─────────────────────────────────────────────────
client.on('message', async (msg) => {
  if (msg.isGroupMsg) return; // Ignora grupos (remova para ativar em grupos)
  
  const texto = msg.body.trim().toLowerCase();
  const numero = msg.from;
  const sessao = getSessao(numero);
  
  console.log(\`📨 [\${numero}]: \${msg.body}\`);

  // Comando de menu a qualquer momento
  if (texto === '!menu' || texto === 'menu' || texto === 'oi' || texto === 'olá') {
    sessao.etapa = 'menu';
    await msg.reply(MENU);
    return;
  }

  // Máquina de estados por etapa
  switch (sessao.etapa) {
    case 'inicio':
      await msg.reply(MENU);
      sessao.etapa = 'menu';
      break;

    case 'menu':
      if (texto === '1') {
        sessao.etapa = 'consultar_processo';
        await msg.reply('📋 *Consulta de Processo*\\n\\nDigite o número do processo (ex: 1234567-89.2024.8.26.0001):');
      } else if (texto === '2') {
        sessao.etapa = 'agendar';
        await msg.reply('📅 *Agendamento*\\n\\nQual o seu nome completo?');
      } else if (texto === '3') {
        await msg.reply('👨‍💼 *Falar com Advogado*\\n\\nVou transferir você para o Dr. Saulo Kenji.\\n\\n_Aguarde, ele responderá em breve._');
        // Notificar o advogado (substitua pelo número real)
        // await client.sendMessage('5511999999999@c.us', \`⚠️ Cliente \${numero} quer falar com você!\`);
        sessao.etapa = 'inicio';
      } else if (texto === '4') {
        await msg.reply(
          '📄 *Documentos Gerais*\\n\\n' +
          '• RG e CPF (originais + cópia)\\n' +
          '• Comprovante de residência (últimos 3 meses)\\n' +
          '• Comprovante de renda\\n\\n' +
          '*Processos Trabalhistas:* Carteira de trabalho, contracheques, CTPS\\n' +
          '*Processos Cíveis:* Contratos, notas fiscais, comprovantes\\n' +
          '*Processos de Família:* Certidão de casamento, nascimento\\n\\n' +
          '_Digite !menu para voltar_'
        );
      } else if (texto === '5') {
        await msg.reply(
          '🕐 *Horário de Atendimento*\\n\\n' +
          '• Segunda a Sexta: 8h às 18h\\n' +
          '• Sábado: 8h às 12h\\n' +
          '• Emergências: disponível 24h\\n\\n' +
          '📍 *Endereço:* Rua das Leis, 123 — Centro\\n' +
          '📞 *Telefone:* (11) 99999-9999\\n\\n' +
          '_Digite !menu para voltar_'
        );
      } else if (texto === '0') {
        await msg.reply('👋 Até logo! Em caso de dúvidas, é só chamar. ⚖️');
        sessoes.delete(numero);
      } else {
        await msg.reply('❓ Opção inválida. Digite !menu para ver as opções.');
      }
      break;

    case 'consultar_processo':
      const numProcesso = msg.body.trim();
      await msg.reply(
        \`🔍 *Consultando processo...*\\n\` +
        \`Número: \${numProcesso}\\n\\n\` +
        \`_Esta é uma versão de demonstração.\\n\` +
        \`Em produção, este número seria consultado no banco de dados ou no sistema do tribunal._\\n\\n\` +
        \`Para integração real, veja o arquivo README.md\`
      );
      sessao.etapa = 'menu';
      break;

    case 'agendar':
      if (!sessao.dados.nome) {
        sessao.dados.nome = msg.body.trim();
        await msg.reply(\`Olá, *\${sessao.dados.nome}*! Qual sua disponibilidade?\\n\\n1 - Manhã (8h-12h)\\n2 - Tarde (13h-18h)\`);
      } else if (!sessao.dados.turno) {
        sessao.dados.turno = texto === '1' ? 'Manhã' : 'Tarde';
        await msg.reply(
          \`✅ *Agendamento Solicitado!*\\n
\` +
          \`*Nome:* \${sessao.dados.nome}\\n\` +
          \`*Turno:* \${sessao.dados.turno}\\n\\n\` +
          \`Entraremos em contato para confirmar a data.\\n_Digite !menu para voltar_\`
        );
        sessao.etapa = 'menu';
        sessao.dados = {};
      }
      break;
  }
});

client.on('disconnected', (reason) => {
  console.log('❌ Desconectado:', reason);
  process.exit(1);
});

console.log('🚀 Iniciando WhatsApp Bot...');
client.initialize();`,"package.json":`{
  "name": "whatsapp-bot-juridico",
  "version": "1.0.0",
  "description": "Bot WhatsApp para escritório jurídico",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  },
  "dependencies": {
    "whatsapp-web.js": "^1.26.0",
    "qrcode-terminal": "^0.12.0"
  }
}`,"README.md":`# WhatsApp Bot Jurídico 🤖⚖️

Bot de atendimento automatizado para escritório de advocacia via WhatsApp.

## Instalação

\`\`\`bash
npm install
\`\`\`

## Executar

\`\`\`bash
npm start
\`\`\`

Escaneie o QR Code que aparecer no terminal com o WhatsApp do escritório.

## Funcionalidades

- ✅ Menu interativo com navegação por número
- ✅ Consulta de processos (integrar com banco de dados)
- ✅ Agendamento de reuniões
- ✅ Informações de documentos por tipo de processo
- ✅ Horários e contato do escritório
- ✅ Transferência para advogado

## Como integrar com banco de dados

1. Instale o driver do banco: \`npm install @neondatabase/serverless\`
2. No caso 'consultar_processo', substitua a resposta simulada por:

\`\`\`javascript
const { neon } = require('@neondatabase/serverless');
const sql = neon(process.env.DATABASE_URL);

const resultado = await sql\`
  SELECT numero_processo, status, fase, vara, comarca
  FROM processos 
  WHERE numero_processo = \${numProcesso}
\`;
\`\`\`

## Publicar em servidor (VPS/Railway/Render)

1. Suba para um servidor Linux com Node.js
2. Use \`pm2\` para manter rodando: \`pm2 start index.js --name bot-juridico\`
3. Configure variável DATABASE_URL com a URL do Neon

## ⚠️ Importante

- Use um número de WhatsApp exclusivo para o bot (não o pessoal)
- Respeite os Termos de Serviço do WhatsApp
- Para produção em escala, considere a API oficial do WhatsApp Business
`}},{id:"telegram-bot",name:"Bot Telegram",description:"Bot para Telegram com comandos, menus inline e integração com IA",icon:"send",files:{"bot.js":`const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();

// ─── Configure seu token ──────────────────────────────────────────────────
// 1. Abra o Telegram e fale com @BotFather
// 2. Digite /newbot e siga as instruções
// 3. Copie o token e coloque no arquivo .env: TELEGRAM_TOKEN=seu_token_aqui
const bot = new Telegraf(process.env.TELEGRAM_TOKEN || 'COLOQUE_SEU_TOKEN_AQUI');

// ─── Banco simples em memória ─────────────────────────────────────────────
const usuarios = new Map();

// ─── Middleware de log ─────────────────────────────────────────────────────
bot.use(async (ctx, next) => {
  const user = ctx.from;
  console.log(\`[\${new Date().toLocaleTimeString('pt-BR')}] \${user?.first_name} (@\${user?.username}): \${ctx.message?.text || '[ação]'}\`);
  return next();
});

// ─── Comando /start ────────────────────────────────────────────────────────
bot.start(async (ctx) => {
  const nome = ctx.from.first_name;
  await ctx.reply(
    \`👋 Olá, *\${nome}*! Sou o assistente do escritório SK.\\n\\nUse o menu abaixo ou os comandos:\`,
    {
      parse_mode: 'Markdown',
      ...Markup.keyboard([
        ['⚖️ Consultar Processo', '📅 Agendar'],
        ['📄 Documentos', '📞 Contato'],
        ['🤖 Falar com IA', '❓ Ajuda']
      ]).resize()
    }
  );
});

// ─── Comando /help ─────────────────────────────────────────────────────────
bot.help(ctx => ctx.reply(
  '*Comandos disponíveis:*\\n\\n' +
  '/start — Menu principal\\n' +
  '/processo [número] — Consultar processo\\n' +
  '/agendar — Agendar reunião\\n' +
  '/docs — Documentos necessários\\n' +
  '/contato — Informações de contato\\n' +
  '/ia [pergunta] — Perguntar para IA',
  { parse_mode: 'Markdown' }
));

// ─── Consulta de processo ─────────────────────────────────────────────────
bot.command('processo', async (ctx) => {
  const numero = ctx.message.text.split(' ').slice(1).join(' ').trim();
  if (!numero) {
    return ctx.reply('📋 Informe o número: /processo 1234567-89.2024.8.26.0001');
  }
  await ctx.reply(\`🔍 Consultando processo *\${numero}*...\\n\\n_Conecte ao banco para ver dados reais._\`, { parse_mode: 'Markdown' });
});

// ─── Documentos por tipo ──────────────────────────────────────────────────
bot.command('docs', async (ctx) => {
  await ctx.reply(
    '📄 *Documentos por tipo de processo:*',
    { parse_mode: 'Markdown', ...Markup.inlineKeyboard([
      [Markup.button.callback('⚖️ Cível', 'doc_civel'), Markup.button.callback('👷 Trabalhista', 'doc_trab')],
      [Markup.button.callback('👨‍👩‍👧 Família', 'doc_familia'), Markup.button.callback('📋 Previdenciário', 'doc_prev')],
      [Markup.button.callback('🚨 Criminal', 'doc_criminal'), Markup.button.callback('💰 Tributário', 'doc_trib')],
    ])}
  );
});

const DOCS = {
  doc_civel: '⚖️ *Processo Cível*\\n\\n• RG, CPF e comprovante de residência\\n• Contratos e acordos envolvidos\\n• Notas fiscais e comprovantes de pagamento\\n• Correspondências e comunicações relevantes',
  doc_trab: '👷 *Processo Trabalhista*\\n\\n• Carteira de Trabalho (CTPS)\\n• Contracheques dos últimos 3 anos\\n• Extrato FGTS\\n• Registro de ponto (se houver)\\n• Termos de rescisão',
  doc_familia: '👨‍👩‍👧 *Processo de Família*\\n\\n• Certidão de casamento ou nascimento\\n• Comprovante de renda (IR)\\n• Lista de bens e patrimônio\\n• Acordos anteriores (se houver)',
  doc_prev: '📋 *Previdenciário / INSS*\\n\\n• CPF e RG\\n• Cartão do INSS (NIT)\\n• Laudos médicos e atestados\\n• Histórico de contribuições (CNIS)\\n• Exames e relatórios de saúde',
  doc_criminal: '🚨 *Criminal*\\n\\n• RG e CPF\\n• Boletim de Ocorrência (B.O.)\\n• Certidão de antecedentes\\n• Testemunhas e contatos\\n• Evidências e provas disponíveis',
  doc_trib: '💰 *Tributário*\\n\\n• CNPJ e documentos da empresa\\n• Declarações de IR (últimos 5 anos)\\n• Notas fiscais\\n• Extratos bancários\\n• Notificações da Receita Federal',
};

Object.entries(DOCS).forEach(([action, text]) => {
  bot.action(action, ctx => ctx.editMessageText(text + '\\n\\n_Digite /docs para outro tipo_', { parse_mode: 'Markdown' }));
});

// ─── Agendamento ──────────────────────────────────────────────────────────
bot.command('agendar', async (ctx) => {
  await ctx.reply(
    '📅 *Agendamento de Reunião*\\n\\nEscolha o turno:',
    { parse_mode: 'Markdown', ...Markup.inlineKeyboard([
      [Markup.button.callback('🌅 Manhã (8h-12h)', 'ag_manha')],
      [Markup.button.callback('☀️ Tarde (13h-18h)', 'ag_tarde')],
      [Markup.button.callback('🌙 Emergência', 'ag_urgente')],
    ])}
  );
});

['ag_manha','ag_tarde','ag_urgente'].forEach((a) => {
  const texto = a === 'ag_manha' ? 'Manhã (8h-12h)' : a === 'ag_tarde' ? 'Tarde (13h-18h)' : '🚨 URGENTE';
  bot.action(a, async (ctx) => {
    await ctx.editMessageText(
      \`✅ *Solicitação de agendamento recebida!*\\n\\n*Turno:* \${texto}\\n*Usuário:* \${ctx.from.first_name}\\n\\nEntraremos em contato para confirmar data e horário.\\n\\n📞 Ou ligue: (11) 99999-9999\`,
      { parse_mode: 'Markdown' }
    );
  });
});

// ─── Contato ──────────────────────────────────────────────────────────────
bot.command('contato', ctx => ctx.reply(
  '📞 *Contato do Escritório SK*\\n\\n' +
  '👨‍💼 Dr. Saulo Kenji — Advogado\\n' +
  '📞 (11) 99999-9999\\n' +
  '📧 contato@escritoriosk.com.br\\n' +
  '📍 Rua das Leis, 123 — Centro\\n\\n' +
  '🕐 *Horários:*\\n' +
  'Seg-Sex: 8h às 18h | Sáb: 8h às 12h',
  { parse_mode: 'Markdown' }
));

// ─── Texto livre (menu por botão) ─────────────────────────────────────────
bot.hears('⚖️ Consultar Processo', ctx => ctx.reply('📋 Informe: /processo NUMERO_DO_PROCESSO'));
bot.hears('📅 Agendar', ctx => ctx.replyWithMarkdown('Use o comando /agendar'));
bot.hears('📄 Documentos', ctx => ctx.replyWithMarkdown('Use o comando /docs'));
bot.hears('📞 Contato', ctx => ctx.replyWithMarkdown('Use o comando /contato'));
bot.hears('❓ Ajuda', ctx => ctx.replyWithMarkdown('Use o comando /help'));

// ─── Iniciar bot ──────────────────────────────────────────────────────────
bot.launch()
  .then(() => console.log('🤖 Bot Telegram rodando! Pressione Ctrl+C para parar.'))
  .catch(err => console.error('Erro:', err));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));`,".env":`# Cole o token do seu bot (obtenha com @BotFather no Telegram)
TELEGRAM_TOKEN=cole_seu_token_aqui

# Opcional: URL do banco Neon para consultas reais
DATABASE_URL=postgresql://user:senha@host/banco?sslmode=require`,"package.json":`{
  "name": "telegram-bot-juridico",
  "version": "1.0.0",
  "description": "Bot Telegram para escritório jurídico",
  "main": "bot.js",
  "scripts": {
    "start": "node bot.js",
    "dev": "node --watch bot.js"
  },
  "dependencies": {
    "telegraf": "^4.16.3",
    "dotenv": "^16.4.5"
  }
}`,"README.md":`# Bot Telegram Jurídico 🤖⚖️

## Configuração (5 minutos)

### 1. Criar o bot no Telegram
1. Abra o Telegram e pesquise **@BotFather**
2. Envie **/newbot**
3. Escolha um nome (ex: "Escritório SK Bot")
4. Escolha um username (ex: "escritoriosk_bot")
5. Copie o **token** que ele te enviou

### 2. Configurar token
Cole o token no arquivo **.env**:
\`\`\`
TELEGRAM_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
\`\`\`

### 3. Instalar e rodar
\`\`\`bash
npm install
npm start
\`\`\`

## Funcionalidades
- ✅ Menu por botões (keyboard)
- ✅ Menus inline (dentro da mensagem)
- ✅ Consulta de processo por número
- ✅ Documentos por tipo (cível, trabalhista, família, etc)
- ✅ Agendamento de reunião
- ✅ Informações de contato

## Publicar no servidor (Railway — grátis)
1. Acesse [railway.app](https://railway.app)
2. Conecte seu GitHub
3. Suba este projeto
4. Configure a variável TELEGRAM_TOKEN nas Settings
5. O bot fica ativo 24/7 gratuitamente
`}},{id:"sistema-juridico",name:"Sistema Jurídico Completo",description:"API REST completa para escritório de advocacia com Neon DB, autenticação JWT e todos os módulos",icon:"server",files:{"index.js":`require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { neon } = require('@neondatabase/serverless');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'troque_esta_senha_em_producao';

// ─── Conexão com banco Neon ───────────────────────────────────────────────
const sql = neon(process.env.DATABASE_URL);

app.use(cors());
app.use(express.json());

// ─── Middleware de autenticação ───────────────────────────────────────────
function auth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ erro: 'Token necessário' });
  try {
    req.usuario = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// ROTAS PÚBLICAS
// ═══════════════════════════════════════════════════════════════════════════

// GET /health — verificar se a API está online
app.get('/health', (_, res) => res.json({ status: 'ok', hora: new Date().toISOString() }));

// POST /auth/login — autenticar usuário
app.post('/auth/login', async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) return res.status(400).json({ erro: 'Email e senha obrigatórios' });
  try {
    const rows = await sql\`SELECT * FROM usuarios WHERE email = \${email} AND ativo = true\`;
    const usuario = rows[0];
    if (!usuario) return res.status(401).json({ erro: 'Credenciais inválidas' });
    const ok = await bcrypt.compare(senha, usuario.senha_hash);
    if (!ok) return res.status(401).json({ erro: 'Credenciais inválidas' });
    const token = jwt.sign({ id: usuario.id, email: usuario.email, perfil: usuario.perfil }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email, perfil: usuario.perfil, oab: usuario.oab } });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// POST /auth/registro — criar primeiro usuário admin
app.post('/auth/registro', async (req, res) => {
  const { nome, email, senha, oab } = req.body;
  if (!nome || !email || !senha) return res.status(400).json({ erro: 'Nome, email e senha obrigatórios' });
  try {
    const hash = await bcrypt.hash(senha, 12);
    const rows = await sql\`
      INSERT INTO usuarios (nome, email, senha_hash, perfil, oab)
      VALUES (\${nome}, \${email}, \${hash}, 'admin', \${oab || null})
      RETURNING id, nome, email, perfil, oab\`;
    const token = jwt.sign({ id: rows[0].id, email: rows[0].email, perfil: 'admin' }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ token, usuario: rows[0] });
  } catch (err) {
    if (err.message.includes('unique')) return res.status(409).json({ erro: 'Email já cadastrado' });
    res.status(500).json({ erro: err.message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// CLIENTES (protegido por auth)
// ═══════════════════════════════════════════════════════════════════════════
app.get('/clientes', auth, async (req, res) => {
  const { busca, pagina = 1, limite = 20 } = req.query;
  const offset = (pagina - 1) * limite;
  try {
    let rows;
    if (busca) {
      rows = await sql\`SELECT * FROM clientes WHERE ativo = true AND (nome ILIKE \${'%'+busca+'%'} OR cpf LIKE \${'%'+busca+'%'} OR email ILIKE \${'%'+busca+'%'}) ORDER BY nome LIMIT \${+limite} OFFSET \${offset}\`;
    } else {
      rows = await sql\`SELECT * FROM clientes WHERE ativo = true ORDER BY nome LIMIT \${+limite} OFFSET \${offset}\`;
    }
    res.json(rows);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

app.get('/clientes/:id', auth, async (req, res) => {
  try {
    const [cliente] = await sql\`SELECT * FROM clientes WHERE id = \${req.params.id} AND ativo = true\`;
    if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
    const processos = await sql\`SELECT id, numero_processo, tipo, area_direito, status, fase FROM processos WHERE cliente_id = \${req.params.id} ORDER BY criado_em DESC\`;
    res.json({ ...cliente, processos });
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

app.post('/clientes', auth, async (req, res) => {
  const { nome, cpf, rg, email, telefone, celular, endereco, cidade, estado, cep, data_nascimento, observacoes } = req.body;
  if (!nome) return res.status(400).json({ erro: 'Nome obrigatório' });
  try {
    const [c] = await sql\`INSERT INTO clientes (nome,cpf,rg,email,telefone,celular,endereco,cidade,estado,cep,data_nascimento,observacoes) VALUES (\${nome},\${cpf||null},\${rg||null},\${email||null},\${telefone||null},\${celular||null},\${endereco||null},\${cidade||null},\${estado||null},\${cep||null},\${data_nascimento||null},\${observacoes||null}) RETURNING *\`;
    res.status(201).json(c);
  } catch (err) {
    if (err.message.includes('unique')) return res.status(409).json({ erro: 'CPF ou email já cadastrado' });
    res.status(500).json({ erro: err.message });
  }
});

app.put('/clientes/:id', auth, async (req, res) => {
  const { nome, cpf, rg, email, telefone, celular, endereco, cidade, estado, cep, data_nascimento, observacoes } = req.body;
  try {
    const [c] = await sql\`UPDATE clientes SET nome=COALESCE(\${nome},nome), cpf=COALESCE(\${cpf||null},cpf), email=COALESCE(\${email||null},email), telefone=COALESCE(\${telefone||null},telefone), celular=COALESCE(\${celular||null},celular), endereco=COALESCE(\${endereco||null},endereco), cidade=COALESCE(\${cidade||null},cidade), estado=COALESCE(\${estado||null},estado), cep=COALESCE(\${cep||null},cep), observacoes=COALESCE(\${observacoes||null},observacoes), atualizado_em=NOW() WHERE id=\${req.params.id} RETURNING *\`;
    res.json(c);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

// ═══════════════════════════════════════════════════════════════════════════
// PROCESSOS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/processos', auth, async (req, res) => {
  const { busca, status, area, pagina = 1, limite = 20 } = req.query;
  const offset = (pagina - 1) * limite;
  try {
    const rows = await sql\`
      SELECT p.*, c.nome AS cliente_nome, c.cpf AS cliente_cpf, u.nome AS advogado
      FROM processos p
      LEFT JOIN clientes c ON c.id = p.cliente_id
      LEFT JOIN usuarios u ON u.id = p.usuario_id
      WHERE (\${busca||null} IS NULL OR p.numero_processo ILIKE \${'%'+(busca||'')+'%'} OR c.nome ILIKE \${'%'+(busca||'')+'%'})
        AND (\${status||null} IS NULL OR p.status = \${status||null})
        AND (\${area||null} IS NULL OR p.area_direito = \${area||null})
      ORDER BY p.criado_em DESC
      LIMIT \${+limite} OFFSET \${offset}\`;
    res.json(rows);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

app.get('/processos/:id', auth, async (req, res) => {
  try {
    const [p] = await sql\`SELECT p.*, c.nome AS cliente_nome FROM processos p LEFT JOIN clientes c ON c.id = p.cliente_id WHERE p.id = \${req.params.id}\`;
    if (!p) return res.status(404).json({ erro: 'Processo não encontrado' });
    const [audiencias, prazos, documentos, movimentacoes] = await Promise.all([
      sql\`SELECT * FROM audiencias WHERE processo_id = \${req.params.id} ORDER BY data_hora\`,
      sql\`SELECT * FROM prazos WHERE processo_id = \${req.params.id} ORDER BY data_limite\`,
      sql\`SELECT * FROM documentos WHERE processo_id = \${req.params.id} ORDER BY criado_em DESC\`,
      sql\`SELECT * FROM movimentacoes WHERE processo_id = \${req.params.id} ORDER BY data_movimentacao DESC LIMIT 50\`,
    ]);
    res.json({ ...p, audiencias, prazos, documentos, movimentacoes });
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

app.post('/processos', auth, async (req, res) => {
  const { numero_processo, cliente_id, tipo, area_direito, vara, comarca, tribunal, polo_ativo, polo_passivo, objeto, valor_causa, data_distribuicao, data_prazo, observacoes } = req.body;
  if (!numero_processo) return res.status(400).json({ erro: 'Número do processo obrigatório' });
  try {
    const [p] = await sql\`INSERT INTO processos (numero_processo,cliente_id,usuario_id,tipo,area_direito,vara,comarca,tribunal,polo_ativo,polo_passivo,objeto,valor_causa,data_distribuicao,data_prazo,observacoes) VALUES (\${numero_processo},\${cliente_id||null},\${req.usuario.id},\${tipo||null},\${area_direito||null},\${vara||null},\${comarca||null},\${tribunal||null},\${polo_ativo||null},\${polo_passivo||null},\${objeto||null},\${valor_causa||null},\${data_distribuicao||null},\${data_prazo||null},\${observacoes||null}) RETURNING *\`;
    res.status(201).json(p);
  } catch (err) {
    if (err.message.includes('unique')) return res.status(409).json({ erro: 'Número de processo já cadastrado' });
    res.status(500).json({ erro: err.message });
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// AUDIÊNCIAS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/audiencias', auth, async (req, res) => {
  try {
    const rows = await sql\`
      SELECT a.*, p.numero_processo, c.nome AS cliente_nome
      FROM audiencias a
      JOIN processos p ON p.id = a.processo_id
      LEFT JOIN clientes c ON c.id = p.cliente_id
      WHERE a.data_hora >= NOW()
      ORDER BY a.data_hora LIMIT 50\`;
    res.json(rows);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

app.post('/audiencias', auth, async (req, res) => {
  const { processo_id, tipo, data_hora, local, sala, juiz, pauta } = req.body;
  if (!processo_id || !data_hora) return res.status(400).json({ erro: 'Processo e data/hora obrigatórios' });
  try {
    const [a] = await sql\`INSERT INTO audiencias (processo_id,tipo,data_hora,local,sala,juiz,pauta) VALUES (\${processo_id},\${tipo||null},\${data_hora},\${local||null},\${sala||null},\${juiz||null},\${pauta||null}) RETURNING *\`;
    res.status(201).json(a);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

// ═══════════════════════════════════════════════════════════════════════════
// PRAZOS
// ═══════════════════════════════════════════════════════════════════════════
app.get('/prazos/proximos', auth, async (req, res) => {
  try {
    const rows = await sql\`
      SELECT pr.*, p.numero_processo, c.nome AS cliente_nome
      FROM prazos pr
      JOIN processos p ON p.id = pr.processo_id
      LEFT JOIN clientes c ON c.id = p.cliente_id
      WHERE pr.concluido = false AND pr.data_limite >= NOW()::date
      ORDER BY pr.data_limite LIMIT 30\`;
    res.json(rows);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

// ═══════════════════════════════════════════════════════════════════════════
// DASHBOARD — resumo geral
// ═══════════════════════════════════════════════════════════════════════════
app.get('/dashboard', auth, async (req, res) => {
  try {
    const [stats] = await sql\`
      SELECT
        (SELECT COUNT(*) FROM processos WHERE status = 'ativo') AS processos_ativos,
        (SELECT COUNT(*) FROM clientes WHERE ativo = true) AS total_clientes,
        (SELECT COUNT(*) FROM audiencias WHERE data_hora BETWEEN NOW() AND NOW() + INTERVAL '7 days') AS audiencias_semana,
        (SELECT COUNT(*) FROM prazos WHERE concluido = false AND data_limite <= NOW()::date + 7) AS prazos_proximos\`;
    res.json(stats);
  } catch (err) { res.status(500).json({ erro: err.message }); }
});

// ─── Iniciar servidor ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(\`\`);
  console.log(\`⚖️  Sistema Jurídico SK — API REST\`);
  console.log(\`🟢 Rodando em http://localhost:\${PORT}\`);
  console.log(\`\`);
  console.log(\`Endpoints disponíveis:\`);
  console.log(\`  POST /auth/registro   — criar conta\`);
  console.log(\`  POST /auth/login      — fazer login\`);
  console.log(\`  GET  /dashboard       — resumo geral\`);
  console.log(\`  GET  /clientes        — listar clientes\`);
  console.log(\`  GET  /processos       — listar processos\`);
  console.log(\`  GET  /audiencias      — próximas audiências\`);
  console.log(\`  GET  /prazos/proximos — prazos vencendo\`);
});`,".env":`# ── Banco de dados (Neon — gratuito em neon.tech) ──────────────────────────
DATABASE_URL=postgresql://user:senha@host/banco?sslmode=require

# ── Segurança JWT (troque por uma senha forte) ────────────────────────────
JWT_SECRET=troque_por_senha_muito_secreta_aqui

# ── Porta do servidor (padrão 3000) ──────────────────────────────────────
PORT=3000`,"package.json":`{
  "name": "sistema-juridico-sk",
  "version": "1.0.0",
  "description": "API REST completa para escritório de advocacia",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js",
    "criar-tabelas": "node setup-db.js"
  },
  "dependencies": {
    "@neondatabase/serverless": "^0.9.4",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2"
  }
}`,"setup-db.js":`// Execute com: node setup-db.js
// Cria todas as tabelas do sistema jurídico no banco Neon
require('dotenv').config();
const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

async function criarTabelas() {
  console.log('⚙️  Criando tabelas...');
  
  await sql\`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(150) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      senha_hash VARCHAR(255) NOT NULL,
      perfil VARCHAR(20) DEFAULT 'advogado',
      oab VARCHAR(20),
      ativo BOOLEAN DEFAULT true,
      criado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ usuarios');

  await sql\`
    CREATE TABLE IF NOT EXISTS clientes (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(200) NOT NULL,
      cpf VARCHAR(14) UNIQUE,
      rg VARCHAR(20),
      email VARCHAR(150),
      telefone VARCHAR(20),
      celular VARCHAR(20),
      endereco TEXT,
      cidade VARCHAR(100),
      estado CHAR(2),
      cep VARCHAR(9),
      data_nascimento DATE,
      observacoes TEXT,
      ativo BOOLEAN DEFAULT true,
      criado_em TIMESTAMP DEFAULT NOW(),
      atualizado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ clientes');

  await sql\`
    CREATE TABLE IF NOT EXISTS processos (
      id SERIAL PRIMARY KEY,
      numero_processo VARCHAR(50) UNIQUE NOT NULL,
      cliente_id INTEGER REFERENCES clientes(id),
      usuario_id INTEGER REFERENCES usuarios(id),
      tipo VARCHAR(50),
      area_direito VARCHAR(50),
      vara VARCHAR(100),
      comarca VARCHAR(100),
      tribunal VARCHAR(100),
      fase VARCHAR(50) DEFAULT 'inicial',
      status VARCHAR(30) DEFAULT 'ativo',
      polo_ativo TEXT,
      polo_passivo TEXT,
      objeto TEXT,
      valor_causa DECIMAL(15,2),
      data_distribuicao DATE,
      data_prazo DATE,
      observacoes TEXT,
      criado_em TIMESTAMP DEFAULT NOW(),
      atualizado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ processos');

  await sql\`
    CREATE TABLE IF NOT EXISTS audiencias (
      id SERIAL PRIMARY KEY,
      processo_id INTEGER REFERENCES processos(id),
      tipo VARCHAR(80),
      data_hora TIMESTAMP NOT NULL,
      local VARCHAR(200),
      sala VARCHAR(50),
      juiz VARCHAR(150),
      pauta TEXT,
      resultado TEXT,
      status VARCHAR(20) DEFAULT 'agendada',
      lembrete_enviado BOOLEAN DEFAULT false,
      criado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ audiencias');

  await sql\`
    CREATE TABLE IF NOT EXISTS prazos (
      id SERIAL PRIMARY KEY,
      processo_id INTEGER REFERENCES processos(id),
      descricao TEXT NOT NULL,
      data_limite DATE NOT NULL,
      tipo VARCHAR(50),
      concluido BOOLEAN DEFAULT false,
      criado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ prazos');

  await sql\`
    CREATE TABLE IF NOT EXISTS documentos (
      id SERIAL PRIMARY KEY,
      processo_id INTEGER REFERENCES processos(id),
      nome VARCHAR(200) NOT NULL,
      tipo VARCHAR(50),
      url TEXT,
      tamanho_bytes INTEGER,
      enviado_por INTEGER REFERENCES usuarios(id),
      criado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ documentos');

  await sql\`
    CREATE TABLE IF NOT EXISTS movimentacoes (
      id SERIAL PRIMARY KEY,
      processo_id INTEGER REFERENCES processos(id),
      descricao TEXT NOT NULL,
      tipo VARCHAR(50),
      data_movimentacao TIMESTAMP DEFAULT NOW(),
      usuario_id INTEGER REFERENCES usuarios(id),
      origem VARCHAR(30) DEFAULT 'manual'
    )\`;
  console.log('✅ movimentacoes');

  await sql\`
    CREATE TABLE IF NOT EXISTS financeiro (
      id SERIAL PRIMARY KEY,
      processo_id INTEGER REFERENCES processos(id),
      cliente_id INTEGER REFERENCES clientes(id),
      descricao TEXT NOT NULL,
      tipo VARCHAR(20) NOT NULL,
      valor DECIMAL(15,2) NOT NULL,
      data_vencimento DATE,
      data_pagamento DATE,
      status VARCHAR(20) DEFAULT 'pendente',
      criado_em TIMESTAMP DEFAULT NOW()
    )\`;
  console.log('✅ financeiro');

  console.log('');
  console.log('🎉 Todas as tabelas criadas com sucesso!');
  console.log('');
  console.log('Próximos passos:');
  console.log('  1. npm start           — iniciar o servidor');
  console.log('  2. POST /auth/registro — criar sua conta de admin');
  console.log('  3. POST /auth/login    — fazer login e obter token JWT');
  process.exit(0);
}

criarTabelas().catch(err => {
  console.error('❌ Erro:', err.message);
  process.exit(1);
});`,"README.md":`# Sistema Jurídico SK — API REST Completa ⚖️

## Configuração

### 1. Banco de Dados (Neon — gratuito)
1. Acesse **neon.tech** e crie conta
2. Crie um projeto chamado "juridico"
3. Copie a **Connection string** do painel
4. Cole no arquivo **.env** em DATABASE_URL

### 2. Instalar e configurar
\`\`\`bash
npm install
node setup-db.js   # cria todas as tabelas automaticamente
npm start          # inicia o servidor
\`\`\`

## Criar primeira conta de admin

\`\`\`bash
curl -X POST http://localhost:3000/auth/registro \\
  -H "Content-Type: application/json" \\
  -d '{"nome":"Dr. Saulo Kenji","email":"saulo@sk.com","senha":"sua_senha","oab":"OAB/XX 12345"}'
\`\`\`

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| GET | /health | Verificar API |
| POST | /auth/registro | Criar conta |
| POST | /auth/login | Fazer login |
| GET | /dashboard | Resumo geral |
| GET/POST | /clientes | Listar/criar clientes |
| GET | /clientes/:id | Detalhes + processos do cliente |
| PUT | /clientes/:id | Editar cliente |
| GET/POST | /processos | Listar/criar processos |
| GET | /processos/:id | Detalhes completos + tudo vinculado |
| GET | /audiencias | Próximas audiências |
| POST | /audiencias | Cadastrar audiência |
| GET | /prazos/proximos | Prazos vencendo |

## Publicar no Railway (grátis)
1. Crie conta em **railway.app**
2. "New Project" → "Deploy from GitHub"
3. Configure as variáveis de ambiente (DATABASE_URL e JWT_SECRET)
4. Deploy automático!

## Áreas do Direito suportadas
- Cível | Trabalhista | Criminal | Família | Previdenciário | Tributário | Consumidor | Administrativo
`}},{id:"crud-sqlite",name:"CRUD com SQLite",description:"Sistema completo de cadastro local com SQLite — sem precisar de banco externo",icon:"database",files:{"index.js":`const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ─── Banco SQLite (arquivo local) ─────────────────────────────────────────
const db = new Database(path.join(__dirname, 'dados.db'));

// Criar tabelas automaticamente
db.exec(\`
  CREATE TABLE IF NOT EXISTS registros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE,
    telefone TEXT,
    categoria TEXT DEFAULT 'geral',
    observacoes TEXT,
    ativo INTEGER DEFAULT 1,
    criado_em TEXT DEFAULT (datetime('now','localtime')),
    atualizado_em TEXT DEFAULT (datetime('now','localtime'))
  );
  
  -- Dados de exemplo
  INSERT OR IGNORE INTO registros (nome, email, telefone, categoria) VALUES
    ('João Silva', 'joao@email.com', '(11) 99999-1111', 'cliente'),
    ('Maria Santos', 'maria@email.com', '(11) 99999-2222', 'fornecedor'),
    ('Pedro Costa', 'pedro@email.com', '(11) 99999-3333', 'cliente');
\`);

app.use(express.json());
app.use(express.static('public'));

// ─── API REST ─────────────────────────────────────────────────────────────
app.get('/api/registros', (req, res) => {
  const { busca, categoria } = req.query;
  let query = 'SELECT * FROM registros WHERE ativo = 1';
  const params = [];
  if (busca) { query += ' AND (nome LIKE ? OR email LIKE ?)'; params.push(\`%\${busca}%\`, \`%\${busca}%\`); }
  if (categoria) { query += ' AND categoria = ?'; params.push(categoria); }
  query += ' ORDER BY criado_em DESC';
  res.json(db.prepare(query).all(...params));
});

app.get('/api/registros/:id', (req, res) => {
  const r = db.prepare('SELECT * FROM registros WHERE id = ?').get(req.params.id);
  if (!r) return res.status(404).json({ erro: 'Não encontrado' });
  res.json(r);
});

app.post('/api/registros', (req, res) => {
  const { nome, email, telefone, categoria, observacoes } = req.body;
  if (!nome) return res.status(400).json({ erro: 'Nome obrigatório' });
  try {
    const r = db.prepare('INSERT INTO registros (nome,email,telefone,categoria,observacoes) VALUES (?,?,?,?,?)').run(nome, email||null, telefone||null, categoria||'geral', observacoes||null);
    res.status(201).json(db.prepare('SELECT * FROM registros WHERE id = ?').get(r.lastInsertRowid));
  } catch (err) {
    if (err.message.includes('UNIQUE')) return res.status(409).json({ erro: 'Email já cadastrado' });
    res.status(500).json({ erro: err.message });
  }
});

app.put('/api/registros/:id', (req, res) => {
  const { nome, email, telefone, categoria, observacoes } = req.body;
  db.prepare("UPDATE registros SET nome=COALESCE(?,nome), email=COALESCE(?,email), telefone=COALESCE(?,telefone), categoria=COALESCE(?,categoria), observacoes=COALESCE(?,observacoes), atualizado_em=datetime('now','localtime') WHERE id=?").run(nome,email,telefone,categoria,observacoes,req.params.id);
  res.json(db.prepare('SELECT * FROM registros WHERE id = ?').get(req.params.id));
});

app.delete('/api/registros/:id', (req, res) => {
  db.prepare('UPDATE registros SET ativo = 0 WHERE id = ?').run(req.params.id);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(\`🟢 CRUD SQLite rodando em http://localhost:\${PORT}\`);
  console.log(\`   Acesse o painel em http://localhost:\${PORT}\`);
});`,"public/index.html":`<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CRUD — Cadastro</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: system-ui; background:#0f1117; color:#e8eaf0; min-height:100vh; }
    header { background:#1a1f2e; border-bottom:1px solid #2a3040; padding:16px 20px; display:flex; align-items:center; justify-content:space-between; }
    header h1 { font-size:18px; font-weight:700; color:#4f8ef7; }
    .container { max-width:800px; margin:0 auto; padding:20px; }
    .btn { padding:10px 20px; border-radius:10px; border:none; cursor:pointer; font-size:14px; font-weight:600; transition:all .2s; }
    .btn-primary { background:#4f8ef7; color:#fff; }
    .btn-danger { background:#ef4444; color:#fff; }
    .btn-sm { padding:6px 12px; font-size:12px; }
    input, select, textarea { width:100%; padding:10px 12px; background:#1e2540; border:1px solid #2a3040; border-radius:10px; color:#e8eaf0; font-size:14px; margin-bottom:10px; outline:none; }
    input:focus, select:focus, textarea:focus { border-color:#4f8ef7; }
    .card { background:#1a1f2e; border:1px solid #2a3040; border-radius:14px; padding:20px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:flex-start; }
    .modal { display:none; position:fixed; inset:0; background:rgba(0,0,0,.7); z-index:100; align-items:center; justify-content:center; }
    .modal.open { display:flex; }
    .modal-box { background:#1a1f2e; border-radius:20px; padding:24px; width:90%; max-width:440px; }
    .badge { padding:3px 10px; border-radius:20px; font-size:11px; font-weight:700; background:#4f8ef720; color:#4f8ef7; }
    .search-row { display:flex; gap:10px; margin-bottom:16px; }
    .search-row input { margin:0; }
    .search-row select { margin:0; width:140px; flex-shrink:0; }
    #vazio { text-align:center; padding:60px 0; color:#555; }
  </style>
</head>
<body>
  <header>
    <h1>📋 Cadastro</h1>
    <button class="btn btn-primary btn-sm" onclick="abrirModal()">+ Novo</button>
  </header>
  <div class="container">
    <div class="search-row">
      <input id="busca" type="search" placeholder="🔍 Buscar por nome ou email..." oninput="listar()">
      <select id="filtro" onchange="listar()"><option value="">Todas categorias</option><option>cliente</option><option>fornecedor</option><option>geral</option></select>
    </div>
    <div id="lista"></div>
  </div>

  <div class="modal" id="modal">
    <div class="modal-box">
      <h2 id="modal-titulo" style="margin-bottom:16px;font-size:16px">Novo Registro</h2>
      <input id="f-nome" placeholder="Nome *" />
      <input id="f-email" type="email" placeholder="Email" />
      <input id="f-telefone" placeholder="Telefone" />
      <select id="f-categoria"><option>geral</option><option>cliente</option><option>fornecedor</option></select>
      <textarea id="f-obs" rows="2" placeholder="Observações" style="resize:none"></textarea>
      <div style="display:flex;gap:10px;margin-top:8px">
        <button class="btn btn-primary" style="flex:1" onclick="salvar()">Salvar</button>
        <button class="btn" style="background:#2a3040;flex:1" onclick="fecharModal()">Cancelar</button>
      </div>
    </div>
  </div>

  <script>
    let editId = null;
    async function listar() {
      const busca = document.getElementById('busca').value;
      const cat = document.getElementById('filtro').value;
      const r = await fetch('/api/registros?busca='+encodeURIComponent(busca)+'&categoria='+encodeURIComponent(cat));
      const data = await r.json();
      const el = document.getElementById('lista');
      if (!data.length) { el.innerHTML = '<div id="vazio">Nenhum registro encontrado</div>'; return; }
      el.innerHTML = data.map(d => \`
        <div class="card">
          <div>
            <div style="font-size:15px;font-weight:700;margin-bottom:4px">\${d.nome}</div>
            <div style="color:#888;font-size:12px">\${d.email||''} \${d.telefone ? '· '+d.telefone : ''}</div>
            \${d.observacoes ? '<div style="color:#666;font-size:12px;margin-top:4px">'+d.observacoes+'</div>' : ''}
            <span class="badge" style="margin-top:8px;display:inline-block">\${d.categoria}</span>
          </div>
          <div style="display:flex;gap:8px;shrink:0">
            <button class="btn btn-sm" style="background:#2a3040" onclick="editar(\${d.id})">✏️</button>
            <button class="btn btn-danger btn-sm" onclick="excluir(\${d.id})">🗑️</button>
          </div>
        </div>
      \`).join('');
    }
    function abrirModal(dados) {
      editId = dados?.id || null;
      document.getElementById('modal-titulo').textContent = editId ? 'Editar Registro' : 'Novo Registro';
      document.getElementById('f-nome').value = dados?.nome||'';
      document.getElementById('f-email').value = dados?.email||'';
      document.getElementById('f-telefone').value = dados?.telefone||'';
      document.getElementById('f-categoria').value = dados?.categoria||'geral';
      document.getElementById('f-obs').value = dados?.observacoes||'';
      document.getElementById('modal').classList.add('open');
    }
    function fecharModal() { document.getElementById('modal').classList.remove('open'); }
    async function editar(id) { const r = await fetch('/api/registros/'+id); abrirModal(await r.json()); }
    async function salvar() {
      const body = { nome:document.getElementById('f-nome').value, email:document.getElementById('f-email').value, telefone:document.getElementById('f-telefone').value, categoria:document.getElementById('f-categoria').value, observacoes:document.getElementById('f-obs').value };
      await fetch('/api/registros'+(editId?'/'+editId:''), { method: editId?'PUT':'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) });
      fecharModal(); listar();
    }
    async function excluir(id) {
      if (!confirm('Remover este registro?')) return;
      await fetch('/api/registros/'+id, { method:'DELETE' });
      listar();
    }
    listar();
  <\/script>
</body>
</html>`,"package.json":`{
  "name": "crud-sqlite",
  "version": "1.0.0",
  "description": "CRUD completo com SQLite — sem banco externo",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  },
  "dependencies": {
    "better-sqlite3": "^9.4.3",
    "express": "^4.19.2"
  }
}`}}],ls={openai:32768,anthropic:64e3,google:65536,custom:32768,builtin:32768},cs=.7,rn=9e5,ho=[{id:1,name:"Slot 1",provider:"openai",apiKey:"",model:"gpt-4o-mini",baseUrl:"",active:!1},{id:2,name:"Slot 2",provider:"anthropic",apiKey:"",model:"claude-haiku-4-20250514",baseUrl:"",active:!1},{id:3,name:"Slot 3",provider:"google",apiKey:"",model:"gemini-2.0-flash",baseUrl:"",active:!1},{id:4,name:"Slot 4",provider:"custom",apiKey:"",model:"",baseUrl:"https://openrouter.ai/api/v1",active:!1}];async function ds(t,s){const o=new AbortController,r=setTimeout(()=>o.abort(),rn);try{return await fetch(t,{...s,signal:o.signal})}catch(n){throw n.name==="AbortError"?new Error("Tempo esgotado (15min). Tente novamente com menos contexto ou pacotes."):n}finally{clearTimeout(r)}}function Ka(){try{const t=localStorage.getItem("ai-key-slots");if(t)return JSON.parse(t).map((o,r)=>({...o,baseUrl:o.baseUrl||ho[r]?.baseUrl||""}))}catch{}return ho}function ws(t){localStorage.setItem("ai-key-slots",JSON.stringify(t))}function Wa(t){return t.find(s=>s.active&&s.apiKey)}async function ts(t,s,o){const r=t.slice(-80),n=[{role:"system",content:o},...r];return s.provider==="anthropic"?ln(n,s):s.provider==="google"?Ko(n,s):nn(n,s)}async function nn(t,s){const o=s.provider==="custom"&&s.baseUrl?s.baseUrl.replace(/\/$/,""):"https://api.openai.com/v1",r={"Content-Type":"application/json",Authorization:`Bearer ${s.apiKey}`,"HTTP-Referer":"https://sk-code-editor.app","X-Title":"SK Code Editor — Jasmim"},n=ls[s.provider]??16384,c=await ds(`${o}/chat/completions`,{method:"POST",headers:r,body:JSON.stringify({model:s.model||"gpt-4o-mini",messages:t.map(u=>({role:u.role,content:u.content})),max_tokens:n,temperature:cs})});if(!c.ok){const u=await c.text();let d=u.slice(0,400);try{d=JSON.parse(u).error?.message??d}catch{}throw new Error(`Erro ${s.provider} ${c.status}: ${d}`)}return(await c.json()).choices?.[0]?.message?.content||"Sem resposta"}async function ln(t,s){const o=t.find(l=>l.role==="system")?.content??"",r=t.filter(l=>l.role!=="system").map(l=>({role:l.role,content:l.content})),n=await ds("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":s.apiKey,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:s.model||"claude-haiku-4-20250514",max_tokens:ls.anthropic,system:o,messages:r,temperature:cs})});if(!n.ok){const l=await n.text();let u=l.slice(0,400);try{u=JSON.parse(l).error?.message??u}catch{}throw new Error(`Erro Anthropic ${n.status}: ${u}`)}return(await n.json()).content?.[0]?.text||"Sem resposta"}async function Ko(t,s){const o=s.model||"gemini-2.0-flash",r=t.find(d=>d.role==="system")?.content??"",c=t.filter(d=>d.role!=="system").map(d=>({role:d.role==="assistant"?"model":"user",parts:[{text:d.content}]})),l=await ds(`https://generativelanguage.googleapis.com/v1beta/models/${o}:generateContent?key=${s.apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system_instruction:{parts:[{text:r}]},contents:c,generationConfig:{maxOutputTokens:ls.google,temperature:cs,candidateCount:1},safetySettings:[{category:"HARM_CATEGORY_HARASSMENT",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_HATE_SPEECH",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_SEXUALLY_EXPLICIT",threshold:"BLOCK_NONE"},{category:"HARM_CATEGORY_DANGEROUS_CONTENT",threshold:"BLOCK_NONE"}]})});if(!l.ok){const d=await l.text();let h=d.slice(0,400);try{h=JSON.parse(d).error?.message??h}catch{}throw new Error(`Erro Gemini ${l.status}: ${h}`)}return(await l.json()).candidates?.[0]?.content?.parts?.[0]?.text||"Sem resposta"}function Wo(){try{return localStorage.getItem("sk-gemini-fallback-key")||""}catch{return""}}function bo(t){try{localStorage.setItem("sk-gemini-fallback-key",t.trim())}catch{}}async function fo(t,s){const o=t.slice(-80);try{const n=await ds("/api/ai/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:s,messages:o.map(c=>({role:c.role,content:c.content}))})});if(n.ok)return(await n.json()).content||"Sem resposta"}catch{}const r=Wo();if(r){const n={apiKey:r,model:"gemini-2.5-flash"};return Ko([{role:"system",content:s},...o],n)}throw new Error("STANDALONE_NO_KEY: Para usar a Jasmim no APK ou fora do Replit, configure sua chave Gemini gratuita (obtenha em aistudio.google.com/apikey).")}function cn(t,s){return!(s||!t||t.provider==="anthropic")}function dn(t){return t.provider==="google"?"https://generativelanguage.googleapis.com/v1beta/openai/chat/completions":t.provider==="openai"?"https://api.openai.com/v1/chat/completions":`${(t.baseUrl||"").replace(/\/chat\/completions\/?$/,"")}/chat/completions`}function pn(t){return{"Content-Type":"application/json",Authorization:`Bearer ${t.apiKey}`,"HTTP-Referer":"https://sk-code-editor.app","X-Title":"SK Code Editor — Jasmim"}}function un(t,s,o){return JSON.stringify({model:t.model,messages:[{role:"system",content:o},...s],stream:!0,max_tokens:ls[t.provider]??16384,temperature:cs})}async function mn(t){try{return{ok:!0,msg:`✅ Funcionando! Resposta: "${(await ts([{role:"user",content:"Responda apenas: OK"}],t,"Você é um assistente. Responda apenas 'OK' e nada mais.")).slice(0,60)}"`}}catch(s){return{ok:!1,msg:`❌ ${s.message}`}}}function Ms(t){const s=[];let o=t;for(;o.length>0;){const r=o.match(/```filepath:([^\n]+)\n([\s\S]*?)```/),n=o.match(/```(?:bash|shell|sh|cmd|command)\n([\s\S]*?)```/),c=o.match(/```(\w*)\n([\s\S]*?)```/),l=r?o.indexOf(r[0]):1/0,u=n?o.indexOf(n[0]):1/0,d=c?o.indexOf(c[0]):1/0,h=Math.min(l,u,d);if(h===1/0){o.trim()&&s.push({type:"text",content:o});break}if(h>0){const m=o.slice(0,h);m.trim()&&s.push({type:"text",content:m})}if(l<=u&&l<=d&&r)s.push({type:"file",content:r[2].trim(),filePath:r[1].trim()}),o=o.slice(l+r[0].length);else if(u<=d&&n)s.push({type:"command",content:n[1].trim()}),o=o.slice(u+n[0].length);else if(c)s.push({type:"code",content:c[2].trim(),language:c[1]||"plaintext"}),o=o.slice(d+c[0].length);else break}return s}function ps(){try{const t=localStorage.getItem("github-credentials");if(t)return JSON.parse(t)}catch{}return{token:"",username:""}}function Qs(t){localStorage.setItem("github-credentials",JSON.stringify(t))}async function Jo(t){const s=await fetch("https://api.github.com/user/repos?sort=updated&per_page=30",{headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github.v3+json"}});if(!s.ok)throw new Error(`Erro GitHub: ${s.status}`);return s.json()}async function Ys(t,s,o,r=""){const n={Accept:"application/vnd.github.v3+json"};t.token&&(n.Authorization=`token ${t.token}`);const c=await fetch(`https://api.github.com/repos/${s}/${o}/contents/${r}`,{headers:n});if(!c.ok)throw new Error(`Erro ao buscar conteudo: ${c.status}`);return c.json()}async function Qo(t,s,o,r){const n={Accept:"application/vnd.github.v3+json"};t.token&&(n.Authorization=`token ${t.token}`);const c=await fetch(`https://api.github.com/repos/${s}/${o}/contents/${r}`,{headers:n});if(!c.ok)throw new Error(`Erro ao buscar arquivo: ${c.status}`);const l=await c.json();return atob(l.content)}async function Ma(t,s,o){const r={};async function n(c){const l=await Ys(t,s,o,c);if(Array.isArray(l))for(const u of l)if(u.type==="file"&&u.size<5e5)try{const d=await Qo(t,s,o,u.path);r[u.path]=d}catch{}else u.type==="dir"&&await n(u.path)}return await n(""),r}async function Yo(t,s,o,r,n,c,l){const u={message:c,content:btoa(unescape(encodeURIComponent(n)))};l&&(u.sha=l);const d=await fetch(`https://api.github.com/repos/${s}/${o}/contents/${r}`,{method:"PUT",headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github.v3+json","Content-Type":"application/json"},body:JSON.stringify(u)});if(!d.ok){const h=await d.text();throw new Error(`Erro ao salvar: ${d.status} - ${h}`)}}async function xa(t,s,o,r,n){let c=0,l=0;const u={};try{const d=await Ys(t,s,o);if(Array.isArray(d))for(const h of d)u[h.path]=h.sha}catch{}for(const[d,h]of Object.entries(r))try{let m;try{const C=await fetch(`https://api.github.com/repos/${s}/${o}/contents/${d}`,{headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github.v3+json"}});C.ok&&(m=(await C.json()).sha)}catch{}await Yo(t,s,o,d,h,n,m),c++}catch{l++}return{success:c,failed:l}}async function Ia(t,s,o="",r=!1){const n=await fetch("https://api.github.com/user/repos",{method:"POST",headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github.v3+json","Content-Type":"application/json"},body:JSON.stringify({name:s,description:o,private:r,auto_init:!0})});if(!n.ok){const c=await n.text();throw new Error(`Erro ao criar repositorio: ${n.status} - ${c}`)}return n.json()}async function Xs(t,s,o,r="main",n="/"){const c=await fetch(`https://api.github.com/repos/${s}/${o}/pages`,{method:"POST",headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({source:{branch:r,path:n}})});if(!c.ok&&c.status!==409){const l=await c.text();throw new Error(`Erro ao ativar GitHub Pages: ${c.status} - ${l}`)}return`https://${s}.github.io/${o}/`}async function us(t,s,o){await fetch(`https://api.github.com/repos/${s}/${o}`,{method:"PATCH",headers:{Authorization:`token ${t.token}`,Accept:"application/vnd.github+json","Content-Type":"application/json"},body:JSON.stringify({private:!1})})}const xn=Object.freeze(Object.defineProperty({__proto__:null,cloneRepo:Ma,createOrUpdateFile:Yo,createRepo:Ia,enableGitHubPages:Xs,getFileContent:Qo,getRepoContents:Ys,listRepos:Jo,loadGitHubCredentials:ps,makeRepoPublic:us,pushAllFiles:xa,saveGitHubCredentials:Qs},Symbol.toStringTag,{value:"Module"}));function gn(t){const s=["from-blue-600 to-indigo-700","from-purple-600 to-pink-700","from-green-600 to-emerald-700","from-orange-500 to-red-600","from-cyan-600 to-blue-700","from-yellow-500 to-orange-600","from-pink-600 to-rose-700","from-indigo-600 to-purple-700","from-teal-600 to-cyan-700","from-red-600 to-pink-700"];let o=0;for(let r=0;r<t.length;r++)o=t.charCodeAt(r)+((o<<5)-o);return s[Math.abs(o)%s.length]}function hn({name:t,size:s=40}){const o=t.slice(0,2).toUpperCase(),r=gn(t);return e.jsx("div",{className:`bg-gradient-to-br ${r} rounded-xl flex items-center justify-center shrink-0 font-bold text-white`,style:{width:s,height:s,fontSize:s*.35},children:o})}function bn({project:t,onOpen:s,onDelete:o,onDuplicate:r,onDownload:n,expanded:c,onToggle:l}){const u=on(t.files),d=sn(t.updatedAt);return e.jsxs("div",{className:"border-b border-gray-800/40 last:border-0",children:[e.jsxs("button",{onClick:l,className:`w-full flex items-center gap-3 px-4 py-3.5 transition-colors ${c?"bg-[#1c2714]":"hover:bg-white/[0.03] active:bg-white/[0.06]"}`,children:[e.jsx("div",{className:`transition-transform duration-200 shrink-0 ${c?"rotate-90":""}`,children:e.jsx(Ot,{size:14,className:"text-gray-600"})}),e.jsx(hn,{name:t.name,size:40}),e.jsxs("div",{className:"flex-1 min-w-0 text-left",children:[e.jsx("p",{className:"text-sm font-semibold text-gray-100 truncate",children:t.name}),e.jsxs("p",{className:"text-[11px] text-gray-500 mt-0.5",children:[d," · ",u.count," arquivo",u.count!==1?"s":""]})]}),e.jsx("span",{className:"text-[10px] text-gray-700 shrink-0 mr-1",children:c?"fechar":"abrir"})]}),c&&e.jsxs("div",{className:"bg-[#141c0d] border-t border-gray-800/40 divide-y divide-gray-800/30",children:[e.jsxs("button",{onClick:s,className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-white/[0.04] active:bg-white/[0.08] text-left transition-colors",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0",children:e.jsx(ta,{size:15,className:"text-blue-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:"Abrir Projeto"}),e.jsx("p",{className:"text-[11px] text-gray-600",children:"Entrar no editor"})]})]}),e.jsxs("button",{onClick:()=>{r(),l()},className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-white/[0.04] active:bg-white/[0.08] text-left transition-colors",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0",children:e.jsx(aa,{size:15,className:"text-purple-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:"Duplicar Projeto"}),e.jsx("p",{className:"text-[11px] text-gray-600",children:"Criar uma cópia independente"})]})]}),e.jsxs("button",{onClick:()=>{n()},className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-white/[0.04] active:bg-white/[0.08] text-left transition-colors",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0",children:e.jsx(jt,{size:15,className:"text-green-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:"Baixar como ZIP"}),e.jsxs("p",{className:"text-[11px] text-gray-600",children:[u.size," · todos os arquivos"]})]})]}),e.jsxs("button",{onClick:()=>{confirm(`Excluir "${t.name}" permanentemente?`)&&o()},className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-red-500/5 active:bg-red-500/10 text-left transition-colors",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0",children:e.jsx(mt,{size:15,className:"text-red-400"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-semibold text-red-400",children:"Excluir Projeto"}),e.jsx("p",{className:"text-[11px] text-red-900",children:"Esta ação não pode ser desfeita"})]})]})]})]})}const fn={globe:e.jsx(vt,{size:22,className:"text-blue-400"}),component:e.jsx(To,{size:22,className:"text-cyan-400"}),server:e.jsx(Ro,{size:22,className:"text-green-400"}),code:e.jsx(Ps,{size:22,className:"text-yellow-400"}),"file-type":e.jsx(pr,{size:22,className:"text-blue-400"}),"folder-plus":e.jsx(Pa,{size:22,className:"text-gray-400"})},vn=["App de tarefas com React e localStorage","API REST com Express, JWT e PostgreSQL","Landing page moderna com animações CSS","Bot de Telegram com Node.js","Dashboard com gráficos e tabelas","CRUD completo com Flask e SQLite","Jogo Snake em JavaScript puro","Portfolio pessoal responsivo"];function jn({projects:t,onSelect:s,onOpenProject:o,onImportZip:r,onCreateFromAI:n,onDeleteProject:c,onDuplicateProject:l,onOpenCampoLivre:u,onOpenAssistenteJuridico:d}){const[h,m]=a.useState("tudo"),[C,T]=a.useState(""),[_,D]=a.useState(null),[P,O]=a.useState(!1),[H,L]=a.useState(!1),[V,M]=a.useState(""),[R,w]=a.useState(!1),[f,g]=a.useState(""),[S,B]=a.useState(""),[Q,se]=a.useState(!1),[J,xe]=a.useState(""),[re,te]=a.useState(!1),[X,pe]=a.useState(null),me=Date.now(),F=10080*60*1e3,E=t.filter(z=>z.name.toLowerCase().includes(C.toLowerCase())).filter(z=>h==="recente"?me-z.updatedAt<F:!0).sort((z,N)=>N.updatedAt-z.updatedAt),j=a.useCallback(async()=>{const z=V.trim();if(!z||R)return;const N=Wa(Ka());if(!N){g("Configure uma chave de IA ao abrir um projeto → painel IA → Configurações.");return}w(!0),g(""),B("Analisando projeto...");try{B("Gerando arquivos com IA...");const U=await ts([{role:"user",content:`Crie um projeto completo: ${z}`}],N,"Crie um projeto COMPLETO. Formato obrigatório para cada arquivo:\n```filepath:caminho/arquivo.ext\nconteúdo\n```\nGere todos os arquivos necessários. Responda APENAS com os blocos de arquivo.");B("Aplicando arquivos...");const v=Ms(U),$={};for(const Z of v)Z.type==="file"&&Z.filePath&&Z.content&&($[Z.filePath]=Z.content);if(Object.keys($).length===0){g("Nenhum arquivo gerado. Tente ser mais específico.");return}n?.($,z.length>40?z.slice(0,40)+"...":z)}catch(U){g(`Erro: ${U.message}`)}finally{w(!1),B("")}},[V,R,n]),k=a.useCallback(async z=>{await Ta(z.files,z.name.replace(/\s+/g,"-").toLowerCase())},[]),x=a.useCallback(async()=>{const z=J.trim().replace(/\.git$/,"").replace(/\/$/,""),N=z.match(/github\.com[/:]([^/]+)\/([^/]+)/),U=z.split("/").filter(Boolean),v=N?{owner:N[1],repo:N[2]}:U.length===2?{owner:U[0],repo:U[1]}:null;if(!v){pe({msg:"URL inválida. Use: github.com/usuario/repositorio"});return}te(!0),pe({msg:`Baixando ${v.owner}/${v.repo}...`});try{const Z=await Ma({token:"",username:""},v.owner,v.repo);if(Object.keys(Z).length===0)throw new Error("Repositório não encontrado ou privado.");pe({msg:`✓ ${Object.keys(Z).length} arquivos importados de "${v.repo}"`,ok:!0}),setTimeout(()=>{se(!1),xe(""),pe(null),n?.(Z,v.repo)},1200)}catch($){pe({msg:`Erro: ${$.message}`})}finally{te(!1)}},[J,n]),ce=[{icon:e.jsx(ba,{size:26,className:"text-gray-300"}),label:"Criar projeto vazio",desc:"Comece com um projeto vazio sem modelos.",action:()=>s(_s[0])},{icon:e.jsx(It,{size:26,className:"text-green-400"}),label:"Clonar Repositório Público",desc:"Baixar qualquer repositório público do GitHub sem token.",action:()=>se(!0)},{icon:e.jsx(To,{size:26,className:"text-cyan-400"}),label:"Criar a partir de Modelo",desc:"Escolha entre vários modelos de projeto.",action:()=>L(!0)},{icon:e.jsx(Lt,{size:26,className:"text-purple-400"}),label:"Criar com IA",desc:"Descreva seu projeto e deixe a IA gerar os arquivos.",action:()=>O(!0)},{icon:e.jsx(qt,{size:26,className:"text-yellow-400"}),label:"Importar do ZIP",desc:"Importar um projeto de um arquivo ZIP.",action:r}];return e.jsxs("div",{className:"h-screen bg-[#141c0d] flex flex-col text-white overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 pt-safe-top pt-4 pb-3 border-b border-gray-800/60 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center",children:e.jsx(Ps,{size:16,className:"text-white"})}),e.jsx("h1",{className:"text-lg font-bold text-white",children:"Projetos"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[d&&e.jsxs("button",{onClick:d,className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-800/20 border border-amber-600/30 text-amber-400 text-[11px] font-medium hover:bg-amber-800/30 transition-all",title:"Assistente Jurídico — Jamile",children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"})}),"Jurídico"]}),u&&e.jsxs("button",{onClick:u,className:"flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-green-700/20 border border-green-600/30 text-green-400 text-[11px] font-medium hover:bg-green-700/30 transition-all",title:"Abrir Campo Livre — chat sem restrições",children:[e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),"Campo Livre"]}),e.jsx("button",{className:"p-2 rounded-full hover:bg-white/5 text-gray-500",children:e.jsx(Da,{size:18})})]})]}),e.jsx("div",{className:"px-4 py-2.5 border-b border-gray-800/40 shrink-0",children:e.jsxs("div",{className:"relative",children:[e.jsx(ha,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"}),e.jsx("input",{value:C,onChange:z=>T(z.target.value),placeholder:"Procurar Nome do Projeto",className:"w-full pl-9 pr-4 py-2.5 bg-[#1c2714] border border-gray-700/30 rounded-xl text-sm text-gray-300 placeholder-gray-600 outline-none focus:border-blue-500/40"})]})}),e.jsx("div",{className:"flex gap-0 px-4 border-b border-gray-800/40 shrink-0",children:[{id:"tudo",label:"TUDO"},{id:"recente",label:"RECENTE"},{id:"criar",label:"CRIAR"}].map(({id:z,label:N})=>e.jsx("button",{onClick:()=>m(z),className:`px-4 py-3 text-xs font-bold tracking-wider transition-all border-b-2 ${h===z?"border-blue-500 text-blue-400":"border-transparent text-gray-600 hover:text-gray-400"}`,children:N},z))}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[(h==="tudo"||h==="recente")&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-3 pt-3 pb-2 grid grid-cols-2 gap-2 border-b border-gray-800/40",children:[e.jsxs("button",{onClick:r,className:"flex items-center gap-3 px-4 py-3 rounded-2xl bg-yellow-500/10 border border-yellow-600/30 hover:bg-yellow-500/20 active:scale-95 transition-all text-left",children:[e.jsx(qt,{size:20,className:"text-yellow-400 shrink-0"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-bold text-yellow-300",children:"Importar ZIP"}),e.jsx("p",{className:"text-[10px] text-gray-500",children:"Abrir arquivo .zip"})]})]}),e.jsxs("button",{onClick:()=>m("criar"),className:"flex items-center gap-3 px-4 py-3 rounded-2xl bg-green-500/10 border border-green-600/30 hover:bg-green-500/20 active:scale-95 transition-all text-left",children:[e.jsx(ba,{size:20,className:"text-green-400 shrink-0"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-bold text-green-300",children:"Novo Projeto"}),e.jsx("p",{className:"text-[10px] text-gray-500",children:"Criar ou clonar"})]})]})]}),E.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-center px-8",children:[e.jsx(ta,{size:40,className:"text-gray-700 mb-4"}),e.jsx("p",{className:"text-base font-medium text-gray-500",children:C?"Nenhum projeto encontrado":h==="recente"?"Sem projetos recentes":"Nenhum projeto ainda"}),e.jsx("p",{className:"text-sm text-gray-700 mt-1",children:!C&&"Importe um ZIP ou crie um novo projeto acima"}),!C&&e.jsx("button",{onClick:()=>m("criar"),className:"mt-6 px-6 py-2.5 bg-blue-600 rounded-xl text-sm font-medium text-white hover:bg-blue-500",children:"Criar Projeto"})]}):e.jsx("div",{children:E.map(z=>e.jsx(bn,{project:z,expanded:_===z.id,onToggle:()=>D(_===z.id?null:z.id),onOpen:()=>o(z),onDelete:()=>{c(z.id),D(null)},onDuplicate:()=>{l(z),D(null)},onDownload:()=>k(z)},z.id))})]}),h==="criar"&&e.jsx("div",{className:"divide-y divide-gray-800/30",children:ce.map(({icon:z,label:N,desc:U,action:v})=>e.jsxs("button",{onClick:v,className:"w-full flex items-center gap-4 px-5 py-5 hover:bg-white/4 active:bg-white/8 text-left transition-colors",children:[e.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/5 border border-gray-700/30 flex items-center justify-center shrink-0",children:z}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[15px] font-semibold text-gray-100",children:N}),e.jsx("p",{className:"text-[13px] text-gray-500 mt-0.5 leading-relaxed",children:U})]}),e.jsx(Ot,{size:18,className:"text-gray-700 shrink-0"})]},N))})]}),(h==="tudo"||h==="recente")&&E.length>0&&e.jsx("div",{className:"px-4 py-2 border-t border-gray-800/30 shrink-0 text-center",children:e.jsxs("p",{className:"text-[10px] text-gray-700",children:[E.length," projeto(s) · Salvo localmente"]})}),H&&e.jsx("div",{className:"fixed inset-0 z-50 bg-black/70 flex items-end",onClick:()=>L(!1),children:e.jsxs("div",{className:"w-full bg-[#1c2714] border-t border-gray-700/50 rounded-t-3xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col",onClick:z=>z.stopPropagation(),children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-gray-700/40 shrink-0",children:[e.jsx("h2",{className:"text-base font-bold text-white",children:"Modelos de Projeto"}),e.jsx("button",{onClick:()=>L(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:18})})]}),e.jsx("div",{className:"overflow-y-auto divide-y divide-gray-800/40 pb-safe-bottom pb-6",children:_s.map(z=>e.jsxs("button",{onClick:()=>{s(z),L(!1)},className:"w-full flex items-center gap-4 px-5 py-4 hover:bg-white/5 text-left transition-colors",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-white/5 border border-gray-700/30 flex items-center justify-center shrink-0",children:fn[z.icon]||e.jsx(Ps,{size:18})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-semibold text-gray-200",children:z.name}),e.jsx("p",{className:"text-[12px] text-gray-500 mt-0.5",children:z.description})]}),e.jsx(Ot,{size:16,className:"text-gray-700 shrink-0"})]},z.id))})]})}),Q&&e.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 flex items-end",onClick:()=>{re||(se(!1),xe(""),pe(null))},children:e.jsxs("div",{className:"w-full bg-[#1c2714] border-t border-green-500/30 rounded-t-3xl overflow-hidden shadow-2xl",onClick:z=>z.stopPropagation(),children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-gray-700/40",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(It,{size:16,className:"text-green-400"}),e.jsx("h2",{className:"text-base font-bold text-white",children:"Clonar Repositório Público"})]}),!re&&e.jsx("button",{onClick:()=>{se(!1),xe(""),pe(null)},className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:18})})]}),e.jsxs("div",{className:"p-5 pb-safe-bottom space-y-4",children:[e.jsx("p",{className:"text-[12px] text-gray-500 leading-relaxed",children:"Cole o link de qualquer repositório público do GitHub. Nenhum token necessário."}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Link do Repositório"}),e.jsx("input",{autoFocus:!0,value:J,onChange:z=>{xe(z.target.value),pe(null)},onKeyDown:z=>z.key==="Enter"&&!re&&x(),placeholder:"github.com/usuario/repositorio",className:"w-full px-3 py-3 bg-[#141c0d] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-green-500/50",disabled:re})]}),X&&e.jsxs("div",{className:`px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 ${X.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[X.ok?e.jsx(Rt,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Pt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:X.msg})]}),e.jsxs("button",{onClick:x,disabled:!J.trim()||re,className:"w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 disabled:opacity-40 text-white rounded-2xl font-bold text-[15px] hover:bg-green-500 transition-colors",children:[re?e.jsx(De,{size:16,className:"animate-spin"}):e.jsx(jt,{size:16}),re?"Baixando...":"Baixar Repositório"]}),e.jsx("p",{className:"text-[11px] text-gray-700 text-center",children:"Funciona apenas com repositórios públicos · Seu token não é necessário"})]})]})}),P&&e.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 flex items-end",onClick:()=>{R||O(!1)},children:e.jsxs("div",{className:"w-full bg-[#1c2714] border-t border-purple-500/30 rounded-t-3xl overflow-hidden shadow-2xl",onClick:z=>z.stopPropagation(),children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-gray-700/40",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Lt,{size:16,className:"text-purple-400"}),e.jsx("h2",{className:"text-base font-bold text-white",children:"Criar com IA"})]}),!R&&e.jsx("button",{onClick:()=>{O(!1),g(""),M("")},className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:18})})]}),e.jsx("div",{className:"p-5 pb-safe-bottom",children:R?e.jsxs("div",{className:"text-center py-10",children:[e.jsxs("div",{className:"w-14 h-14 mx-auto mb-4 relative",children:[e.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-purple-500/20"}),e.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 animate-spin"}),e.jsx(Lt,{size:22,className:"absolute inset-0 m-auto text-purple-400"})]}),e.jsx("p",{className:"text-sm font-medium text-gray-300",children:S}),e.jsx("p",{className:"text-[11px] text-gray-600 mt-1",children:"15–30 segundos..."})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-xs text-gray-500 mb-3",children:"Descreva o projeto que a IA vai criar:"}),e.jsx("textarea",{autoFocus:!0,value:V,onChange:z=>{M(z.target.value),g("")},onKeyDown:z=>{z.key==="Enter"&&(z.metaKey||z.ctrlKey)&&j()},placeholder:"Ex: API com Express, JWT e banco PostgreSQL...",rows:3,className:"w-full px-4 py-3 bg-[#141c0d] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-600 outline-none focus:border-purple-500/50 resize-none mb-3"}),f&&e.jsx("div",{className:"mb-3 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-400",children:f}),e.jsxs("button",{onClick:j,disabled:!V.trim(),className:"w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 disabled:opacity-40 text-white rounded-2xl font-semibold text-[15px] hover:opacity-90 mb-5",children:[e.jsx(Lt,{size:16})," Gerar Projeto Completo"]}),e.jsx("p",{className:"text-[11px] text-gray-600 mb-2.5 uppercase tracking-wider font-semibold",children:"Exemplos"}),e.jsx("div",{className:"space-y-1.5 max-h-40 overflow-y-auto",children:vn.map(z=>e.jsx("button",{onClick:()=>M(z),className:"w-full text-left px-3.5 py-2.5 bg-gray-800/40 hover:bg-gray-700/50 rounded-xl text-[12px] text-gray-400 hover:text-gray-300 border border-gray-700/20",children:z},z))})]})})]})})]})}const yn="modulepreload",Nn=function(t,s){return new URL(t,s).href},vo={},wn=function(s,o,r){let n=Promise.resolve();if(o&&o.length>0){let h=function(m){return Promise.all(m.map(C=>Promise.resolve(C).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};const l=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),d=u?.nonce||u?.getAttribute("nonce");n=h(o.map(m=>{if(m=Nn(m,r),m in vo)return;vo[m]=!0;const C=m.endsWith(".css"),T=C?'[rel="stylesheet"]':"";if(r)for(let D=l.length-1;D>=0;D--){const P=l[D];if(P.href===m&&(!C||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${T}`))return;const _=document.createElement("link");if(_.rel=C?"stylesheet":yn,C||(_.as="script"),_.crossOrigin="",_.href=m,d&&_.setAttribute("nonce",d),document.head.appendChild(_),C)return new Promise((D,P)=>{_.addEventListener("load",D),_.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return n.then(l=>{for(const u of l||[])u.status==="rejected"&&c(u.reason);return s().catch(c)})};function Xo(t){const s=t.split(".").pop()?.toLowerCase()||"";return{js:"text-yellow-400",jsx:"text-yellow-400",ts:"text-blue-400",tsx:"text-blue-400",html:"text-orange-400",css:"text-purple-400",scss:"text-pink-400",json:"text-green-400",md:"text-gray-400",py:"text-green-500",rb:"text-red-400",go:"text-cyan-400",rs:"text-orange-500",java:"text-red-500",svg:"text-emerald-400",png:"text-emerald-400",jpg:"text-emerald-400",yaml:"text-red-300",yml:"text-red-300",sh:"text-green-300",sql:"text-blue-300",graphql:"text-pink-500",env:"text-yellow-500",toml:"text-gray-500"}[s]||"text-gray-400"}function $s({info:t,onClose:s,onRename:o,onDelete:r,onDownload:n,onDownloadZip:c,onCopyPath:l,onDuplicate:u,onCreateFile:d,onCreateFolder:h,onAnalyzeWithAI:m,extraItems:C}){const T=[...t.isDir?[{icon:e.jsx(ba,{size:18,className:"text-blue-400"}),label:"Novo Arquivo",action:d},{icon:e.jsx(Pa,{size:18,className:"text-blue-400"}),label:"Nova Pasta",action:h}]:[],...m?[{icon:e.jsx(bt,{size:18,className:"text-purple-400"}),label:t.isDir?"Analisar pasta com IA":"Analisar arquivo com IA",action:m}]:[],...t.isDir?[{icon:e.jsx(ur,{size:18,className:"text-green-400"}),label:"Exportar como ZIP",action:c}]:[{icon:e.jsx(jt,{size:18,className:"text-green-400"}),label:"Baixar Arquivo",action:n},{icon:e.jsx(aa,{size:18,className:"text-purple-400"}),label:"Duplicar",action:u}],{icon:e.jsx(aa,{size:18,className:"text-gray-400"}),label:"Copiar Caminho",action:l},...C||[],...t.isRoot?[]:[{icon:e.jsx(mr,{size:18,className:"text-yellow-400"}),label:"Renomear",action:o}],...t.isRoot?[]:[{icon:e.jsx(mt,{size:18,className:"text-red-400"}),label:"Excluir",action:r,destructive:!0}]];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990]",onClick:s}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:_=>_.stopPropagation(),children:e.jsxs("div",{className:"bg-[#222e18] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"px-5 py-2 flex items-center justify-between border-b border-gray-700/30",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[t.isDir?e.jsx(ta,{size:14,className:"text-amber-400 shrink-0"}):e.jsx(Po,{size:14,className:`shrink-0 ${Xo(t.label)}`}),e.jsx("p",{className:"text-sm font-semibold text-gray-200 truncate",children:t.label})]}),e.jsx("button",{onClick:s,className:"p-1 rounded-lg hover:bg-white/10 text-gray-600 shrink-0",children:e.jsx(je,{size:16})})]}),e.jsx("div",{className:"pb-8 divide-y divide-gray-800/30 max-h-[75vh] overflow-y-auto",children:T.map(({icon:_,label:D,action:P,destructive:O})=>e.jsxs("button",{onClick:()=>{P(),s()},className:`w-full flex items-center gap-4 px-5 py-3.5 hover:bg-white/4 text-left transition-colors ${O?"text-red-400":"text-gray-200"}`,children:[_,e.jsx("span",{className:"text-[15px]",children:D})]},D))})]})})]})}function Zo({node:t,depth:s,activeFile:o,onFileSelect:r,onCreateFile:n,onCreateFolder:c,onDeleteNode:l,onRenameNode:u,onDuplicateNode:d,getFileContent:h,getAllFilesUnder:m,expandedDirs:C,toggleDir:T,onAnalyzeWithAI:_}){const[D,P]=a.useState(!1),O=a.useCallback(()=>{const f=h(t.path);if(f===void 0)return;const g=new Blob([f],{type:"text/plain;charset=utf-8"});ga.saveAs(g,t.name)},[t,h]),H=a.useCallback(async()=>{const f=m(t.path),g=new qa;for(const B of f){const Q=B.path.startsWith(t.path+"/")?B.path.slice(t.path.length+1):B.path;Q&&!Q.endsWith(".gitkeep")&&g.file(Q,B.content)}const S=await g.generateAsync({type:"blob"});ga.saveAs(S,`${t.name}.zip`)},[t,m]),L=a.useCallback(()=>{navigator.clipboard.writeText(t.path).catch(()=>{})},[t]),V=a.useCallback(()=>{d?.(t.path)},[t,d]);if(kt(t)){const f=C.has(t.path),g=s*14+6;return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-1 py-[5px] hover:bg-white/5 cursor-pointer group select-none",style:{paddingLeft:`${g}px`,paddingRight:"6px"},onClick:()=>T(t.path),children:[f?e.jsx(fa,{size:13,className:"text-gray-600 shrink-0"}):e.jsx(Ot,{size:13,className:"text-gray-600 shrink-0"}),f?e.jsx(ta,{size:13,className:"text-amber-400 shrink-0"}):e.jsx(Hs,{size:13,className:"text-amber-400 shrink-0"}),e.jsx("span",{className:"truncate text-gray-300 flex-1 text-[12px] ml-1",children:t.name}),e.jsx("button",{onClick:S=>{S.stopPropagation(),P(!0)},className:"opacity-40 active:opacity-100 p-1.5 hover:bg-white/10 active:bg-white/15 rounded-lg text-gray-400 shrink-0",children:e.jsx(Os,{size:13})})]}),D&&e.jsx($s,{info:{label:t.name,path:t.path,isDir:!0},onClose:()=>P(!1),onRename:()=>u(t.path),onDelete:()=>l(t.path),onDownload:O,onDownloadZip:H,onCopyPath:L,onDuplicate:V,onCreateFile:()=>n(t.path),onCreateFolder:()=>c(t.path),onAnalyzeWithAI:_?()=>_(t.path,!0):void 0}),f&&t.children.filter(S=>!(!kt(S)&&S.name===".gitkeep")).sort((S,B)=>{const Q=kt(S),se=kt(B);return Q!==se?Q?-1:1:S.name.localeCompare(B.name)}).map(S=>e.jsx(Zo,{node:S,depth:s+1,activeFile:o,onFileSelect:r,onCreateFile:n,onCreateFolder:c,onDeleteNode:l,onRenameNode:u,onDuplicateNode:d,getFileContent:h,getAllFilesUnder:m,expandedDirs:C,toggleDir:T,onAnalyzeWithAI:_},S.path))]})}const M=t;if(M.name===".gitkeep")return null;const R=M.path===o,w=s*14+20;return e.jsxs("div",{className:`flex items-center gap-1.5 py-[5px] cursor-pointer group select-none ${R?"bg-blue-500/15 border-l-2 border-blue-500":"hover:bg-white/5"}`,style:{paddingLeft:`${w}px`,paddingRight:"6px"},onClick:()=>r(M.path),children:[e.jsx(Po,{size:12,className:`shrink-0 ${R?"text-blue-400":Xo(M.name)}`}),e.jsx("span",{className:`truncate flex-1 text-[12px] ${R?"text-white":"text-gray-400"}`,children:M.name}),e.jsx("button",{onClick:f=>{f.stopPropagation(),P(!0)},className:"opacity-40 active:opacity-100 p-1.5 hover:bg-white/10 active:bg-white/15 rounded-lg text-gray-400 shrink-0",children:e.jsx(Os,{size:13})}),D&&e.jsx($s,{info:{label:M.name,path:M.path,isDir:!1},onClose:()=>P(!1),onRename:()=>u(M.path),onDelete:()=>l(M.path),onDownload:O,onDownloadZip:H,onCopyPath:L,onDuplicate:V,onCreateFile:()=>{},onCreateFolder:()=>{},onAnalyzeWithAI:_?()=>_(M.path,!1):void 0})]})}function Cn({tree:t,activeFile:s,onFileSelect:o,onCreateFile:r,onCreateFolder:n,onDeleteNode:c,onRenameNode:l,onDuplicateNode:u,getFileContent:d,getAllFilesUnder:h,expandedDirs:m,toggleDir:C,projectName:T="Projeto",onExportZip:_,onAnalyzeWithAI:D,extraRootItems:P}){const O="__root__",H=m.has(O),[L,V]=a.useState(!1),M=a.useCallback(async()=>{if(_){_();return}const f=h(""),g=new qa;for(const B of f)B.path.endsWith(".gitkeep")||g.file(B.path,B.content);const S=await g.generateAsync({type:"blob"});ga.saveAs(S,`${T.replace(/\s+/g,"-").toLowerCase()}.zip`)},[_,h,T]),R=a.useCallback(()=>{navigator.clipboard.writeText("/").catch(()=>{})},[]),w=t.children.filter(f=>!(!kt(f)&&f.name===".gitkeep")).length===0;return e.jsx("div",{className:"py-1 select-none overflow-y-auto h-full",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-1.5 px-2 py-[6px] hover:bg-white/5 cursor-pointer group select-none border-b border-gray-700/20",onClick:()=>C(O),children:[H?e.jsx(fa,{size:13,className:"text-gray-500 shrink-0"}):e.jsx(Ot,{size:13,className:"text-gray-500 shrink-0"}),H?e.jsx(ta,{size:13,className:"text-amber-400 shrink-0"}):e.jsx(Hs,{size:13,className:"text-amber-400 shrink-0"}),e.jsx("span",{className:"truncate text-gray-200 flex-1 text-[12px] font-semibold ml-0.5",children:T}),e.jsx("button",{onClick:f=>{f.stopPropagation(),V(!0)},className:"opacity-40 active:opacity-100 p-1.5 hover:bg-white/10 active:bg-white/15 rounded-lg text-gray-400 shrink-0",children:e.jsx(Os,{size:13})})]}),L&&e.jsx($s,{info:{label:T,path:"/",isDir:!0,isRoot:!0},onClose:()=>V(!1),onRename:()=>{},onDelete:()=>{},onDownload:()=>{},onDownloadZip:M,onCopyPath:R,onDuplicate:()=>{},onCreateFile:()=>r(""),onCreateFolder:()=>n(""),onAnalyzeWithAI:D?()=>D("/",!0):void 0,extraItems:P}),H&&e.jsx("div",{children:w?e.jsxs("div",{className:"px-6 py-5 text-center",children:[e.jsx("p",{className:"text-[11px] text-gray-600",children:"Nenhum arquivo ainda"}),e.jsxs("div",{className:"flex gap-2 justify-center mt-3",children:[e.jsxs("button",{onClick:()=>r(""),className:"flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-gray-700/30 rounded-lg text-[11px] text-gray-400 hover:text-gray-300",children:[e.jsx(ba,{size:12})," Arquivo"]}),e.jsxs("button",{onClick:()=>n(""),className:"flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-gray-700/30 rounded-lg text-[11px] text-gray-400 hover:text-gray-300",children:[e.jsx(Pa,{size:12})," Pasta"]})]})]}):t.children.filter(f=>!(!kt(f)&&f.name===".gitkeep")).sort((f,g)=>{const S=kt(f),B=kt(g);return S!==B?S?-1:1:f.name.localeCompare(g.name)}).map(f=>e.jsx(Zo,{node:f,depth:1,activeFile:s,onFileSelect:o,onCreateFile:r,onCreateFolder:n,onDeleteNode:c,onRenameNode:l,onDuplicateNode:u,getFileContent:d,getAllFilesUnder:h,expandedDirs:m,toggleDir:C,onAnalyzeWithAI:D},f.path))})]})})}const kn={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"d4d8c8",background:"161e0f"},{token:"comment",foreground:"5a7a45",fontStyle:"italic"},{token:"keyword",foreground:"8fc87c"},{token:"string",foreground:"c9d982"},{token:"number",foreground:"e0c97a"},{token:"type",foreground:"7dbda8"},{token:"function",foreground:"b8d4a0"},{token:"variable",foreground:"cdd6b8"},{token:"constant",foreground:"e9b96e"},{token:"tag",foreground:"8fc87c"},{token:"attribute.name",foreground:"c9d982"},{token:"attribute.value",foreground:"d4a56a"},{token:"delimiter",foreground:"8aab7a"},{token:"operator",foreground:"9dbf82"}],colors:{"editor.background":"#161e0f","editor.foreground":"#d4d8c8","editor.lineHighlightBackground":"#1e2a14","editor.selectionBackground":"#3a5228","editor.selectionHighlightBackground":"#2a3c1e","editor.findMatchBackground":"#5a7a3080","editor.findMatchHighlightBackground":"#3a5a2040","editorLineNumber.foreground":"#3a5228","editorLineNumber.activeForeground":"#6a9a50","editorCursor.foreground":"#8fc87c","editorWhitespace.foreground":"#2a3a1c","editorIndentGuide.background":"#1e2a14","editorIndentGuide.activeBackground":"#2d3e20","editorBracketMatch.background":"#3a5228","editorBracketMatch.border":"#6a9a50","editorGutter.background":"#141c0d","editorWidget.background":"#1c2714","editorWidget.border":"#2d3e20","editorSuggestWidget.background":"#1c2714","editorSuggestWidget.border":"#2d3e20","editorSuggestWidget.selectedBackground":"#263618","editorSuggestWidget.highlightForeground":"#8fc87c","scrollbarSlider.background":"#2d3e2060","scrollbarSlider.hoverBackground":"#3a5228a0","scrollbarSlider.activeBackground":"#4a6a38c0","list.hoverBackground":"#1e2a14","list.activeSelectionBackground":"#263618"}},er=a.forwardRef(({filePath:t,content:s,onChange:o,language:r,onCursorChange:n},c)=>{const l=a.useRef(null),u=r||Js(t);a.useImperativeHandle(c,()=>({undo:()=>l.current?.trigger("keyboard","undo",null),redo:()=>l.current?.trigger("keyboard","redo",null),format:()=>l.current?.getAction("editor.action.formatDocument")?.run(),getLanguage:()=>u,insertText:m=>{const C=l.current;if(!C)return;const T=C.getSelection();T&&C.executeEdits("insert",[{range:T,text:m,forceMoveMarkers:!0}])},moveCursor:m=>{const C=l.current;if(!C)return;const T={up:"cursorUp",down:"cursorDown",left:"cursorLeft",right:"cursorRight"};C.trigger("keyboard",T[m],null)}}));const d=a.useCallback(m=>{m.editor.defineTheme("olive-dark",kn)},[]),h=a.useCallback(m=>{l.current=m,m.focus(),m.onDidChangeCursorPosition(C=>{n?.(C.position.lineNumber,C.position.column)})},[n]);return e.jsx("div",{className:"h-full w-full",children:e.jsx(Dr,{height:"100%",language:u,value:s,theme:"olive-dark",beforeMount:d,onChange:m=>o(m||""),onMount:h,options:{fontSize:13,fontFamily:"'JetBrains Mono','Fira Code','Cascadia Code',monospace",minimap:{enabled:!1},wordWrap:"on",lineNumbers:"on",renderLineHighlight:"all",scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,padding:{top:8,bottom:8},suggestOnTriggerCharacters:!0,quickSuggestions:!0,bracketPairColorization:{enabled:!0},guides:{bracketPairs:!0,indentation:!0},smoothScrolling:!0,cursorBlinking:"smooth",cursorSmoothCaretAnimation:"on",formatOnPaste:!0,formatOnType:!1,folding:!0,foldingStrategy:"indentation",showFoldingControls:"always",overviewRulerBorder:!1,hideCursorInOverviewRuler:!0,scrollbar:{verticalScrollbarSize:4,horizontalScrollbarSize:4}}})})});er.displayName="CodeEditor";const An=114e4,Cs=5,jo=2500,En=/(?:listen(?:ing)?(?:\s+on)?(?:\s+port)?|started(?:\s+on)?|running(?:\s+on)?(?:\s+port)?|\bport\b|localhost|127\.0\.0\.1|0\.0\.0\.0|Local:|Network:|➜)\s*[:\s]*(?:https?:\/\/(?:localhost|127\.0\.0\.1))?:(\d{4,5})/i,Sn=/(?:SIGTERM|SIGINT|server\s+(?:closed|stopped|killed)|process\s+exit)/i,yo=/(?:error|erro|exception|traceback|fatal|command not found|cannot find|failed|falhou|ENOENT|EACCES|SyntaxError|TypeError|ReferenceError|ModuleNotFoundError|ImportError)/i,Tn=[/(?:sh|bash|zsh):\s*\d*:?\s*([^\s:]+):\s*(?:not found|command not found)/i,/Cannot find module ['"](@?[a-zA-Z0-9._/@-]+)['"]/i,/Cannot find package ['"](@?[a-zA-Z0-9._/@-]+)['"]/i,/npm ERR! missing: ([a-zA-Z0-9@._/-]+)@/i,/ModuleNotFoundError: No module named ['"]([a-zA-Z0-9._-]+)['"]/i],Rn={tsx:"tsx","ts-node":"ts-node",vite:"vite",next:"next",tsc:"typescript",eslint:"eslint",prettier:"prettier",jest:"jest",vitest:"vitest",nodemon:"nodemon",concurrently:"concurrently","cross-env":"cross-env"};function Pn(t){for(const s of Tn){const o=t.match(s);if(o&&o[1]){const r=o[1].trim();if(r.startsWith(".")||r.startsWith("/"))continue;const n=/ModuleNotFoundError/.test(t);return{pkg:Rn[r]??r.split("/").slice(0,r.startsWith("@")?2:1).join("/"),isPip:n}}}return null}const On=[{label:"📦 npm install",cmd:"npm install"},{label:"▶ npm run dev",cmd:"npm run dev"},{label:"🔨 npm run build",cmd:"npm run build"},{label:"🧪 npm test",cmd:"npm test"},{label:"🚀 npm start",cmd:"npm start"},{label:"📋 node index.js",cmd:"node index.js"},{label:"🐍 pip install -r",cmd:"pip install -r requirements.txt"},{label:"🐍 python main.py",cmd:"python3 main.py"}];function In({onFallback:t,externalCommand:s,onCommandExecuted:o,onCommandOutput:r,onServerToggle:n,onBufferUpdate:c,onRunningChange:l}){const u=a.useRef(null),[d,h]=a.useState("connecting"),[m,C]=a.useState(null),[T,_]=a.useState(null),[D,P]=a.useState(null),[O,H]=a.useState(!1),[L,V]=a.useState("npm"),[M,R]=a.useState(""),[w,f]=a.useState([]),[g,S]=a.useState(!1),B=a.useRef(null),[Q,se]=a.useState(0),J=a.useRef(null),xe=a.useRef(null),re=a.useRef(null),te=a.useRef(null),X=a.useRef(!0),pe=a.useRef(0),me=a.useRef(null),F=a.useRef(null),E=a.useRef(n);a.useEffect(()=>{E.current=n},[n]);const j=a.useRef(c);a.useEffect(()=>{j.current=c},[c]);const k=a.useRef(l);a.useEffect(()=>{k.current=l},[l]);const x=a.useRef(""),ce=a.useRef(null),z=a.useRef(null),N=a.useRef(""),U=a.useRef(null),v=I=>{U.current&&clearTimeout(U.current);const ie=/npm install|pip install|yarn add|pnpm add/i.test(I)?12e3:5e3;U.current=setTimeout(()=>{const ue=N.current,y=ue.includes("$")||ue.includes("#")||ue.includes("✓")||ue.includes("added ")||ue.includes("Successfully installed");r?.(I,ue,y),z.current=null,N.current="",C(null),k.current?.(!1)},ie)};a.useEffect(()=>{if(X.current=!0,!u.current)return;const I=new _r({cursorBlink:!0,fontSize:13,fontFamily:'"Fira Code", "Cascadia Code", "JetBrains Mono", monospace',theme:{background:"#141c0d",foreground:"#c8dda8",cursor:"#88c060",cursorAccent:"#141c0d",selectionBackground:"#3d5c28",black:"#141c0d",red:"#e06c75",green:"#88c060",yellow:"#e5c07b",blue:"#61afef",magenta:"#c678dd",cyan:"#56b6c2",white:"#abb2bf",brightBlack:"#5c6370",brightRed:"#e06c75",brightGreen:"#98c379",brightYellow:"#e5c07b",brightBlue:"#61afef",brightMagenta:"#c678dd",brightCyan:"#56b6c2",brightWhite:"#ffffff"},allowProposedApi:!0,scrollback:1e4,convertEol:!1}),ae=new Mr;I.loadAddon(ae),I.loadAddon(new $r),I.open(u.current),xe.current=I,setTimeout(()=>{try{ae.fit()}catch{}},50),I.onScroll(()=>{const Le=I.buffer.active.viewportY??0;se(Le)}),I.onData(de=>{const Le=J.current;Le&&Le.readyState===WebSocket.OPEN&&Le.send(de)});const ie=new ResizeObserver(()=>{try{ae.fit()}catch{}const de=J.current;de&&de.readyState===WebSocket.OPEN&&I.cols&&I.rows&&de.send(JSON.stringify({type:"resize",cols:I.cols,rows:I.rows}))});u.current&&ie.observe(u.current);let K=`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}/api/ws/terminal`;fetch("/api/config").then(de=>de.ok?de.json():null).catch(()=>null).then(de=>{X.current&&(de?.terminalWsUrl&&(K=de.terminalWsUrl),te.current=oe,oe())});const oe=()=>{if(!X.current)return;me.current&&(clearTimeout(me.current),me.current=null),h("connecting"),pe.current===0?I.writeln(`\x1B[90m[Conectando ao terminal...]\x1B[0m\r
`):I.writeln(`\x1B[90m[Reconectando... tentativa ${pe.current}/${Cs}]\x1B[0m\r
`);try{J.current?.close()}catch{}const de=new WebSocket(K);J.current=de,de.binaryType="arraybuffer";const Le=setTimeout(()=>{if(de.readyState!==WebSocket.OPEN){if(de.close(),!X.current)return;h("error"),I.writeln(`\r
\x1B[31m[Conexão esgotou — servidor não respondeu em 8s]\x1B[0m\r
`)}},8e3);de.onopen=()=>{if(clearTimeout(Le),!X.current){de.close();return}pe.current=0,h("connected"),I.writeln(`\x1B[32m[Terminal bash conectado ✓]\x1B[0m\r
`),F.current&&clearInterval(F.current),F.current=setInterval(()=>{if(de.readyState===WebSocket.OPEN)try{de.send("")}catch{}},2e4),setTimeout(()=>{de.readyState===WebSocket.OPEN&&de.send(`export LANG=pt_BR.UTF-8 LC_ALL=pt_BR.UTF-8 2>/dev/null; mkdir -p ~/sk-projetos 2>/dev/null; cd ~/sk-projetos; echo -e "\\x1b[90m📂 Pasta de trabalho: $(pwd)\\x1b[0m"; echo -e "\\x1b[90m📦 Pacotes instalados aqui ficam salvos entre sessões\\x1b[0m"
`)},800)},de.onmessage=fe=>{let He="";if(fe.data instanceof ArrayBuffer){const ke=new Uint8Array(fe.data);I.write(ke),He=new TextDecoder().decode(ke)}else I.write(fe.data),He=fe.data;const ve=He.replace(/\x1b\[[0-9;]*[mGKHJA-Za-z]/g,"").replace(/\r/g,""),Ee=Pn(ve);Ee&&_(Ee);const pt=ve.match(En);if(pt){const ke=Number(pt[1]);ke>=1024&&ke<65535&&E.current?.(!0,ke)}Sn.test(ve)&&E.current?.(!1),x.current=(x.current+ve).slice(-3e4);const Qe=yo.test(ve);if(Qe){const ke=(x.current+ve).slice(-2e3),Ue=$e(ke);Ue&&P(Ue)}else/\$\s*$/.test(ve)&&ve.trim().length<10&&P(null);ce.current&&clearTimeout(ce.current),ce.current=setTimeout(()=>{j.current?.(x.current,Qe||yo.test(x.current.slice(-1e3)))},1500),z.current&&(N.current+=ve,v(z.current))},de.onclose=()=>{clearTimeout(Le),F.current&&(clearInterval(F.current),F.current=null),X.current&&(h("disconnected"),C(null),k.current?.(!1),z.current=null,I.writeln(`\r
\x1B[90m[Sessão encerrada]\x1B[0m\r
`),pe.current<Cs?(pe.current++,I.writeln(`\x1B[90m[Reconectando em ${jo/1e3}s...]\x1B[0m\r
`),me.current=setTimeout(()=>te.current?.(),jo)):I.writeln(`\x1B[33m[Máximo de tentativas atingido. Clique em ↺ Reconectar.]\x1B[0m\r
`))},de.onerror=()=>{clearTimeout(Le),X.current&&(h("error"),C(null),I.writeln(`\r
\x1B[31m[Erro ao conectar ao servidor de terminal]\x1B[0m\r
`))}};return()=>{X.current=!1,me.current&&clearTimeout(me.current),re.current&&clearTimeout(re.current),U.current&&clearTimeout(U.current),ce.current&&clearTimeout(ce.current),F.current&&clearInterval(F.current),ie.disconnect(),J.current?.close(),J.current=null,I.dispose(),xe.current=null}},[]),a.useEffect(()=>{if(!s)return;const I=J.current;if(!I||I.readyState!==WebSocket.OPEN){const ae=setTimeout(()=>{const ie=J.current;ie&&ie.readyState===WebSocket.OPEN&&$(ie,xe.current,s)},1e3);return()=>clearTimeout(ae)}$(I,xe.current,s),o?.()},[s]);function $(I,ae,ie){ae&&ae.writeln(`\r
\x1B[32m▶ Executando:\x1B[0m \x1B[33m${ie}\x1B[0m`),C(ie),k.current?.(!0,ie),z.current=ie,N.current="",I.send(ie+`
`),o?.(),re.current&&clearTimeout(re.current),re.current=setTimeout(()=>{if(C(null),k.current?.(!1),z.current===ie){const ue=N.current.slice(0,8e3);r?.(ie,ue+`
[Timeout — comando excedeu 10 minutos]`,!1),z.current=null,N.current=""}},An)}const Z=a.useCallback(I=>{const ae=J.current;!ae||ae.readyState!==WebSocket.OPEN||$(ae,xe.current,I)},[]),ee=()=>{pe.current=0,te.current?.()},ne=a.useCallback(async(I,ae)=>{if(!I.trim()||I.length<2){f([]);return}S(!0);try{if(ae==="npm"){const ie=await fetch(`https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(I)}&size=8`);if(!ie.ok)throw new Error("Falha");const ue=await ie.json();f((ue.objects??[]).map(y=>({name:y.package.name,description:y.package.description??"",version:y.package.version??""})))}else{const ie=[I,I.replace(/-/g,"_"),I.replace(/_/g,"-")],ue=[];for(const y of ie)try{const K=await fetch(`https://pypi.org/pypi/${encodeURIComponent(y)}/json`);if(K.ok){const{info:oe}=await K.json();oe&&!ue.find(de=>de.name===oe.name)&&ue.push({name:oe.name,description:oe.summary??"",version:oe.version??""})}}catch{}f(ue)}}catch{f([])}finally{S(!1)}},[]),be=I=>{R(I),B.current&&clearTimeout(B.current),B.current=setTimeout(()=>ne(I,L),400)},ye=I=>{V(I),f([]),M.trim().length>=2&&(B.current&&clearTimeout(B.current),B.current=setTimeout(()=>ne(M,I),400))},Ge=I=>{const ae=L==="npm"?`npm install ${I}`:`pip install ${I}`;Z(ae),H(!1),R(""),f([])};function $e(I){const ae=I.toLowerCase();if(/command not found|not found.*command/i.test(I))return"⚠️ Comando não encontrado — o programa pode não estar instalado. Tente instalar com npm install ou pip install.";if(/cannot find module|module not found/i.test(I)){const ie=I.match(/cannot find module ['"]([^'"]+)['"]/i);return`⚠️ Módulo Node.js não encontrado${ie?`: "${ie[1]}"`:""}. Rode: npm install ${ie?.[1]||"[nome]"}`}if(/modulenotfounderror|no module named/i.test(I)){const ie=I.match(/no module named '([^']+)'/i);return`⚠️ Biblioteca Python não instalada${ie?`: "${ie[1]}"`:""}. Rode: pip install ${ie?.[1]||"[nome]"}`}if(/enoent/i.test(I))return"⚠️ Arquivo ou pasta não encontrado (ENOENT). Verifique se o caminho está correto.";if(/eacces|permission denied/i.test(I))return"⚠️ Permissão negada. O arquivo ou pasta não pode ser acessado. Verifique as permissões.";if(/eaddrinuse|address already in use/i.test(I)){const ie=I.match(/:(\d{4,5})/);return`⚠️ Porta${ie?` ${ie[1]}`:""} já está em uso. Mude a porta no seu código ou pare o outro processo.`}return/econnrefused|connection refused/i.test(I)?"⚠️ Conexão recusada. O servidor não está rodando ou a porta está errada.":/syntaxerror/i.test(I)?"⚠️ Erro de sintaxe no código — há um erro de digitação. Verifique a linha indicada acima.":/typeerror/i.test(I)?"⚠️ Erro de tipo — uma variável ou valor está sendo usado de forma incorreta. Veja a linha indicada.":/referenceerror/i.test(I)?"⚠️ Variável ou função não definida. Verifique se o nome está certo e se foi declarada.":/importerror|cannot import/i.test(I)?"⚠️ Erro ao importar — a biblioteca pode não estar instalada ou o nome está errado.":/traceback/i.test(I)?"⚠️ Erro Python detectado. Veja as linhas acima (Traceback) para identificar onde ocorreu.":/npm err!/i.test(I)?"⚠️ Erro no npm. Veja a mensagem acima. Tente rodar: npm install para reinstalar as dependências.":/build failed|compilation failed/i.test(I)?"⚠️ A compilação falhou. Veja os erros listados acima e corrija antes de tentar de novo.":/out of memory|heap out of memory/i.test(I)?"⚠️ Memória insuficiente. O processo consumiu toda a RAM disponível. Reinicie o terminal.":ae.includes("error")||ae.includes("erro")||ae.includes("exception")||ae.includes("fatal")?"⚠️ Erro detectado no terminal. Leia a mensagem acima para identificar o problema.":null}const Ze={connecting:"bg-yellow-400 animate-pulse",connected:"bg-green-400",disconnected:"bg-gray-500 animate-pulse",error:"bg-red-500"},Be={connecting:"conectando...",connected:"bash ativo",disconnected:"reconectando...",error:"erro"};return e.jsxs("div",{className:"h-full flex flex-col bg-[#141c0d] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-1 bg-[#1c2714] border-b border-gray-700/30 shrink-0 min-h-[28px]",children:[e.jsx("div",{className:`w-2 h-2 rounded-full shrink-0 ${Ze[d]}`}),e.jsx("span",{className:"text-[11px] text-gray-500",children:Be[d]}),m&&e.jsxs("div",{className:"flex items-center gap-1.5 ml-1",children:[e.jsx("div",{className:"flex gap-0.5",children:[0,1,2].map(I=>e.jsx("div",{className:"w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce",style:{animationDelay:`${I*.1}s`}},I))}),e.jsxs("span",{className:"text-[10px] text-yellow-300 font-mono max-w-[180px] truncate",children:["⏳ ",m.length>35?m.slice(0,35)+"…":m]})]}),e.jsx("div",{className:"flex-1"}),e.jsx("button",{onClick:()=>{H(I=>!I),R(""),f([])},className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all active:scale-95 ${O?"bg-green-900/30 text-green-300 border-green-600/50":"text-gray-500 border-gray-700/30 hover:border-green-700/40 hover:text-green-400"}`,title:"Buscar e instalar biblioteca",children:"📦 Pacotes"}),(d==="error"||d==="disconnected"&&pe.current>=Cs)&&e.jsx("button",{onClick:ee,className:"text-[11px] px-2.5 py-1 rounded-lg border font-bold transition-all active:scale-95 text-green-400 border-green-700/30 hover:border-green-600/50 hover:bg-green-900/10",children:"↺ Reconectar"})]}),D&&e.jsxs("div",{className:"shrink-0 flex items-start gap-2 px-3 py-2 bg-[#1f0e0e] border-b border-red-800/50",children:[e.jsx("span",{className:"text-[12px] text-red-300 flex-1 leading-relaxed",children:D}),e.jsx("button",{onClick:()=>P(null),className:"text-red-700 hover:text-red-400 shrink-0 text-[11px] mt-0.5",title:"Fechar",children:"✕"})]}),O&&e.jsxs("div",{className:"shrink-0 bg-[#111a0a] border-b border-green-700/30 px-2 py-2 flex flex-col gap-1.5",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[["npm","pip"].map(I=>e.jsx("button",{onClick:()=>ye(I),className:`px-3 py-0.5 rounded-md text-[11px] font-bold transition-all ${L===I?"bg-green-700/50 text-green-200 border border-green-600/50":"text-gray-500 hover:text-gray-300"}`,children:I==="npm"?"📦 npm":"🐍 pip"},I)),e.jsx("span",{className:"text-[10px] text-gray-600 ml-auto",children:L==="npm"?"npmjs.com":"pypi.org"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{autoFocus:!0,type:"text",value:M,onChange:I=>be(I.target.value),placeholder:L==="npm"?"ex: axios, lodash, react-query...":"ex: requests, numpy, flask...",className:"w-full bg-[#1c2714] border border-gray-700/40 rounded-lg px-3 py-1.5 text-[12px] text-gray-200 placeholder-gray-600 focus:outline-none focus:border-green-600/60 focus:ring-1 focus:ring-green-700/30"}),g&&e.jsx("div",{className:"absolute right-2 top-1/2 -translate-y-1/2",children:e.jsx("div",{className:"w-3.5 h-3.5 border-2 border-green-600/40 border-t-green-400 rounded-full animate-spin"})})]}),w.length>0&&e.jsx("div",{className:"flex flex-col gap-0.5 max-h-[180px] overflow-y-auto",children:w.map(I=>e.jsxs("button",{onClick:()=>Ge(I.name),disabled:d!=="connected",className:"flex items-start gap-2 px-2.5 py-1.5 rounded-lg bg-[#1c2714] hover:bg-green-900/20 border border-gray-700/30 hover:border-green-600/40 text-left transition-all group disabled:opacity-40",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[12px] font-bold text-green-300 font-mono",children:I.name}),I.version&&e.jsxs("span",{className:"text-[9px] text-gray-600 font-mono",children:["v",I.version]})]}),I.description&&e.jsx("p",{className:"text-[10px] text-gray-500 truncate mt-0.5",children:I.description})]}),e.jsx("span",{className:"shrink-0 text-[10px] text-green-600 group-hover:text-green-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity mt-0.5",children:"instalar →"})]},I.name))}),!g&&M.length>=2&&w.length===0&&e.jsx("p",{className:"text-[11px] text-gray-600 px-1",children:L==="pip"?"Não encontrado no PyPI. Verifique o nome exato.":"Nenhum resultado encontrado."})]}),e.jsx("div",{className:"flex items-center gap-1.5 px-2 py-1.5 bg-[#111a0a] border-b border-gray-700/20 shrink-0 overflow-x-auto scrollbar-hide",children:On.map(({label:I,cmd:ae})=>e.jsx("button",{onPointerDown:()=>Z(ae),disabled:d!=="connected",className:"shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-[#1c2714] border border-gray-700/40 text-gray-400 hover:border-green-600/50 hover:text-green-300 hover:bg-green-900/10 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed touch-manipulation",title:ae,children:I},ae))}),T&&e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-amber-900/20 border-b border-amber-600/30 shrink-0",children:[e.jsxs("span",{className:"text-[11px] text-amber-300 flex-1 truncate",children:["📦 ",e.jsx("span",{className:"font-bold font-mono",children:T.pkg})," não encontrado"]}),e.jsxs("button",{onPointerDown:()=>{const I=T.isPip?`pip install ${T.pkg}`:`npm install ${T.pkg}`;Z(I),_(null)},className:"shrink-0 px-3 py-1 rounded-lg text-[11px] font-bold bg-amber-600/30 border border-amber-500/50 text-amber-200 hover:bg-amber-600/50 active:scale-95 transition-all",children:[T.isPip?"pip install":"npm install"," →"]}),e.jsx("button",{onPointerDown:()=>_(null),className:"shrink-0 text-gray-600 hover:text-gray-400 p-0.5",children:"✕"})]}),e.jsxs("div",{className:"flex-1 overflow-hidden relative",children:[e.jsx("div",{ref:u,className:"w-full h-full p-1"}),Q>0&&e.jsxs("button",{onPointerDown:()=>{xe.current?.scrollToBottom(),se(0)},className:"absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1c2714]/95 border border-green-600/50 text-green-300 text-[11px] font-bold shadow-lg hover:bg-green-900/40 active:scale-95 transition-all backdrop-blur-sm",title:"Ir para o final do terminal",children:[e.jsxs("span",{className:"text-[10px] text-gray-500",children:[Q.toLocaleString()," linhas acima"]}),e.jsx("span",{children:"⬇ Fim"})]})]})]})}function Ln(t){let s=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/```(\w*)\n?([\s\S]*?)```/g,(o,r,n)=>`<pre><code>${n.trim()}</code></pre>`).replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^#{6}\s(.+)$/gm,"<h6>$1</h6>").replace(/^#{5}\s(.+)$/gm,"<h5>$1</h5>").replace(/^#{4}\s(.+)$/gm,"<h4>$1</h4>").replace(/^#{3}\s(.+)$/gm,"<h3>$1</h3>").replace(/^#{2}\s(.+)$/gm,"<h2>$1</h2>").replace(/^#{1}\s(.+)$/gm,"<h1>$1</h1>").replace(/^---+$/gm,"<hr>").replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/__(.+?)__/g,"<strong>$1</strong>").replace(/_(.+?)_/g,"<em>$1</em>").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img alt="$1" src="$2" style="max-width:100%">').replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank">$1</a>').replace(/^&gt;\s(.+)$/gm,"<blockquote>$1</blockquote>").replace(/^[\*\-]\s(.+)$/gm,"<li>$1</li>").replace(/^\d+\.\s(.+)$/gm,"<li>$1</li>").replace(/\n\n(?!<[hbulp])/g,"</p><p>").replace(/\n(?!<)/g,"<br>");return s=s.replace(/(<li>.*?<\/li>)(\s*<br>\s*)*(<li>|$)/gs,o=>"<ul>"+o.replace(/<br>\s*/g,"")+"</ul>"),`<p>${s}</p>`}function zn(t){try{const s=JSON.parse(t);return`<pre class="json-pre">${JSON.stringify(s,null,2).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"(.*?)":/g,'<span class="jk">"$1"</span>:').replace(/:\s*"(.*?)"/g,': <span class="js">"$1"</span>').replace(/:\s*(\d+\.?\d*)/g,': <span class="jn">$1</span>').replace(/:\s*(true|false)/g,': <span class="jb">$1</span>').replace(/:\s*(null)/g,': <span class="jnull">$1</span>')}</pre>`}catch{return`<div class="error">JSON inválido</div><pre>${t.replace(/</g,"&lt;")}</pre>`}}function qn(t,s){let o=t.readFile(s)||"";const r=[...o.matchAll(/<link[^>]*href=["']([^"']+\.css)["'][^>]*\/?>/gi)];for(const[c,l]of r){const u=t.readFile(l)||t.readFile(l.replace(/^\.\//,""));u&&(o=o.replace(c,`<style>${u}</style>`))}const n=[...o.matchAll(/<script[^>]+src=["']([^"']+\.(?:js|mjs))["'][^>]*>\s*<\/script>/gi)];for(const[c,l]of n){const u=t.readFile(l)||t.readFile(l.replace(/^\.\//,""));u&&(o=o.replace(c,`<script>${u}<\/script>`))}return o}function Dn(t){return`<!DOCTYPE html><html><head><style>
  body{margin:0;padding:24px;background:#111;color:#eee;font-family:system-ui}
  ${t}
  </style></head><body>
  <div class="container">
    <h1>Prévia CSS</h1>
    <p>Este é um parágrafo de exemplo para visualizar seus estilos.</p>
    <button class="btn">Botão de exemplo</button>
    <a href="#" class="link">Link de exemplo</a>
    <div class="card"><p>Card de conteúdo</p></div>
    <ul><li>Item um</li><li>Item dois</li><li>Item três</li></ul>
    <input placeholder="Campo de texto" class="input" />
    <div class="badge">Badge</div>
  </div>
  </body></html>`}function _n(t){return`<!DOCTYPE html><html><head><style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#161e0f;color:#d4d8c8;font-family:'JetBrains Mono',monospace;font-size:13px;padding:16px}
  .line{padding:2px 0;display:flex;gap:8px}
  .log .pfx{color:#6a9a50}
  .err .pfx{color:#f87171}
  .warn .pfx{color:#fbbf24}
  .pfx{font-size:11px;padding-top:1px;user-select:none;white-space:nowrap}
  .val{white-space:pre-wrap;word-break:break-all;flex:1}
  .string{color:#c9d982} .number{color:#e0c97a} .boolean{color:#7dbda8}
  .null{color:#888} .obj{color:#b8d4a0}
  #empty{color:#5a7a45;margin-top:24px;text-align:center;font-size:12px}
  </style></head><body>
  <div id="out"></div><div id="empty"></div>
  <script>
  const out = document.getElementById('out');
  const empty = document.getElementById('empty');
  let count = 0;
  function fmt(v){
    if(v===null) return '<span class="null">null</span>';
    if(v===undefined) return '<span class="null">undefined</span>';
    if(typeof v==='string') return '<span class="string">"'+String(v).replace(/</g,'&lt;')+'&quot;</span>';
    if(typeof v==='number') return '<span class="number">'+v+'</span>';
    if(typeof v==='boolean') return '<span class="boolean">'+v+'</span>';
    if(typeof v==='object'){
      try{return '<span class="obj">'+JSON.stringify(v,null,2).replace(/</g,'&lt;')+'</span>'}catch{return '<span class="obj">[objeto]</span>'}
    }
    return String(v).replace(/</g,'&lt;');
  }
  function addLine(type,args){
    count++;
    const d=document.createElement('div');
    d.className='line '+type;
    d.innerHTML='<span class="pfx">'+{log:'▶',error:'✖',warn:'⚠'}[type]+'</span><span class="val">'+args.map(fmt).join(' ')+'</span>';
    out.appendChild(d);
  }
  const _log=console.log,_err=console.error,_warn=console.warn;
  console.log=(...a)=>{_log(...a);addLine('log',a)};
  console.error=(...a)=>{_err(...a);addLine('err',a)};
  console.warn=(...a)=>{_warn(...a);addLine('warn',a)};
  window.onerror=(msg,_,l,c)=>{addLine('err',['Erro na linha '+l+':'+c+' — '+msg]);return true};
  try{
    ${t.replace(/</g,"\\u003c")}
  }catch(e){addLine('err',[e.toString()])}
  if(count===0) empty.textContent='Nenhuma saída. Use console.log() para ver resultados aqui.';
  <\/script></body></html>`}function Mn({vfs:t,activeFile:s,openFullscreen:o,onFullscreenOpened:r,serverUrl:n,serverPort:c}){const l=a.useRef(null),u=a.useRef(null),[d,h]=a.useState("mobile"),[m,C]=a.useState(0),[T,_]=a.useState(!1);a.useEffect(()=>{o&&(_(!0),r?.())},[o]);const D=s?.split(".").pop()?.toLowerCase()??"",P=a.useMemo(()=>n?"server":["html","htm","svg"].includes(D)?"html":D==="json"?"json":["md","markdown"].includes(D)?"markdown":["css","scss","sass"].includes(D)?"css":["js","ts","mjs","cjs"].includes(D)?"js":t.readFile("index.html")?"html":"none",[D,s,m,n]),O=a.useMemo(()=>{const R=s?t.readFile(s)??"":"";if(P==="html"){const w=s&&["html","htm","svg"].includes(D)?s:"index.html";return t.readFile(w)?qn(t,w):null}return P==="css"?Dn(R):P==="js"?_n(R):null},[t,s,P,m]),H=a.useMemo(()=>{if(P==="json"){const R=s?t.readFile(s)??"":"";return zn(R)}if(P==="markdown"){const R=s?t.readFile(s)??"":"";return Ln(R)}return null},[t,s,P,m]);a.useEffect(()=>{if(O!==null)for(const R of[l,u]){const w=R.current;if(!w)continue;const f=w.contentDocument;f&&(f.open(),f.write(O),f.close())}},[O,T]);const L=d==="mobile"?"max-w-[375px]":d==="tablet"?"max-w-[768px]":"max-w-full",V={server:{icon:e.jsx(vt,{size:12,className:"text-green-400"}),label:`Servidor :${c}`},html:{icon:e.jsx(vt,{size:12}),label:"HTML"},json:{icon:e.jsx(xr,{size:12}),label:"JSON"},markdown:{icon:e.jsx(os,{size:12}),label:"Markdown"},css:{icon:e.jsx(Ca,{size:12}),label:"CSS Preview"},js:{icon:e.jsx(Ca,{size:12}),label:"JS Runner"},none:{icon:e.jsx(Ca,{size:12}),label:"Preview"}},M=P==="server"||P!=="none"&&(O||H);return e.jsxs(e.Fragment,{children:[T&&e.jsxs("div",{className:"fixed inset-0 z-[9999] bg-black flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2.5 bg-[#1c2714] border-b border-gray-700/50 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[V[P].icon,e.jsxs("span",{className:"text-[13px] font-semibold",children:[V[P].label,s&&e.jsx("span",{className:"text-gray-600 ml-2 font-normal",children:s.split("/").pop()})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[(P==="html"||P==="css")&&e.jsxs("div",{className:"flex items-center gap-1 bg-[#141c0d] border border-gray-700/40 rounded-xl p-0.5",children:[e.jsxs("button",{onClick:()=>h("mobile"),title:"Mobile (375px)",className:`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] font-semibold transition-colors ${d==="mobile"?"bg-blue-600 text-white":"text-gray-500 hover:text-gray-300"}`,children:[e.jsx(Is,{size:13})," 375px"]}),e.jsxs("button",{onClick:()=>h("tablet"),title:"Tablet (768px)",className:`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] font-semibold transition-colors ${d==="tablet"?"bg-blue-600 text-white":"text-gray-500 hover:text-gray-300"}`,children:[e.jsx(oo,{size:13})," 768px"]}),e.jsxs("button",{onClick:()=>h("desktop"),title:"Desktop",className:`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] font-semibold transition-colors ${d==="desktop"?"bg-blue-600 text-white":"text-gray-500 hover:text-gray-300"}`,children:[e.jsx(Oa,{size:13})," Completo"]})]}),e.jsx("button",{onClick:()=>C(R=>R+1),className:"p-2 rounded-xl bg-[#141c0d] border border-gray-700/40 text-gray-500 hover:text-gray-300",title:"Recarregar",children:e.jsx(At,{size:15})}),e.jsx("button",{onClick:()=>_(!1),className:"p-2 rounded-xl bg-red-600/20 border border-red-500/40 text-red-400 hover:bg-red-600/30",title:"Fechar tela cheia",children:e.jsx(je,{size:15})})]})]}),e.jsxs("div",{className:"flex-1 overflow-auto flex justify-center bg-white",children:[P==="server"&&n&&e.jsx("iframe",{src:n,className:"w-full h-full",title:"Node.js Server Preview Fullscreen",sandbox:"allow-scripts allow-same-origin allow-forms allow-modals allow-popups"},m),(P==="html"||P==="css"||P==="js")&&O&&e.jsx("div",{className:`w-full h-full ${P==="html"||P==="css"?L:"max-w-full"}`,children:e.jsx("iframe",{ref:u,className:"w-full h-full",sandbox:"allow-scripts allow-same-origin allow-forms allow-modals allow-popups",title:"Preview Tela Cheia"})}),P==="json"&&H&&e.jsxs("div",{className:"w-full h-full overflow-auto p-6 bg-[#161e0f]",children:[e.jsx("style",{children:".json-pre{background:#161e0f;padding:16px;border-radius:10px;font-family:monospace;font-size:14px;line-height:1.7}.jk{color:#7dbda8}.js{color:#c9d982}.jn{color:#e0c97a}.jb{color:#8fc87c}.jnull{color:#888}"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:H}})]}),P==="markdown"&&H&&e.jsxs("div",{className:"w-full overflow-auto p-8 bg-[#161e0f]",children:[e.jsx("style",{children:".md-body{max-width:780px;margin:0 auto;color:#d4d8c8;font-family:system-ui;line-height:1.8;font-size:16px}.md-body h1{font-size:2.2em;border-bottom:2px solid #2d3e20;padding-bottom:.3em;margin-bottom:.5em}.md-body h2{font-size:1.6em;border-bottom:1px solid #2d3e20;padding-bottom:.2em}.md-body code{background:#1c2714;color:#c9d982;padding:2px 8px;border-radius:4px;font-family:monospace}.md-body pre{background:#1c2714;border:1px solid #2d3e20;border-radius:10px;padding:20px;overflow:auto}.md-body a{color:#8fc87c}.md-body blockquote{border-left:4px solid #3a5228;margin:1em 0;padding:.8em 1.2em;background:#1a2410;border-radius:0 8px 8px 0}"}),e.jsx("div",{className:"md-body",dangerouslySetInnerHTML:{__html:H}})]}),!M&&e.jsxs("div",{className:"flex flex-col items-center justify-center h-full gap-4 bg-[#141c0d]",children:[e.jsx(Ca,{size:48,className:"text-gray-700"}),e.jsx("p",{className:"text-gray-500 text-base",children:"Sem conteúdo para visualizar"}),e.jsxs("p",{className:"text-gray-700 text-sm",children:["Crie um arquivo ",e.jsx("code",{className:"text-gray-500",children:"index.html"})," ou abra um arquivo HTML"]})]})]})]}),e.jsxs("div",{className:"h-full flex flex-col bg-[#141c0d]",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-gray-700/50 bg-[#1c2714] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-gray-400",children:[V[P].icon,e.jsx("span",{className:"text-[11px] font-medium",children:V[P].label}),s&&e.jsx("span",{className:"text-[10px] text-gray-600 ml-1 truncate max-w-[120px]",children:s.split("/").pop()})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[(P==="html"||P==="css")&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>h("mobile"),className:`p-1 rounded ${d==="mobile"?"bg-blue-500/20 text-blue-400":"text-gray-600 hover:text-gray-300"}`,title:"Mobile (375px)",children:e.jsx(Is,{size:13})}),e.jsx("button",{onClick:()=>h("tablet"),className:`p-1 rounded ${d==="tablet"?"bg-blue-500/20 text-blue-400":"text-gray-600 hover:text-gray-300"}`,title:"Tablet (768px)",children:e.jsx(oo,{size:13})}),e.jsx("button",{onClick:()=>h("desktop"),className:`p-1 rounded ${d==="desktop"?"bg-blue-500/20 text-blue-400":"text-gray-600 hover:text-gray-300"}`,title:"Desktop",children:e.jsx(Oa,{size:13})}),e.jsx("div",{className:"w-px h-3.5 bg-gray-700 mx-0.5"})]}),e.jsx("button",{onClick:()=>C(R=>R+1),className:"p-1 text-gray-600 hover:text-gray-300 rounded",title:"Recarregar",children:e.jsx(At,{size:13})}),M&&e.jsxs("button",{onClick:()=>_(!0),className:"flex items-center gap-1 px-2 py-1 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600/30 text-[10px] font-bold transition-colors",title:"Abrir em tela cheia",children:[e.jsx(Oo,{size:11})," Tela Cheia"]})]})]}),e.jsxs("div",{className:"flex-1 overflow-auto",children:[P==="server"&&n&&e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-green-900/20 border-b border-green-700/30 shrink-0",children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-green-500"})]}),e.jsxs("span",{className:"text-green-400 text-[11px] font-bold",children:["Servidor Node.js rodando na porta ",c]}),e.jsx("button",{onClick:()=>C(R=>R+1),className:"ml-auto p-1 text-green-700 hover:text-green-400 rounded",title:"Recarregar",children:e.jsx(At,{size:12})})]}),e.jsx("iframe",{src:n,className:"flex-1 w-full bg-white",title:"Node.js Server Preview",sandbox:"allow-scripts allow-same-origin allow-forms allow-modals allow-popups"},m)]}),(P==="html"||P==="css"||P==="js")&&O&&e.jsx("div",{className:"h-full flex justify-center overflow-auto p-0",children:e.jsx("div",{className:`w-full ${P==="html"||P==="css"?L:"max-w-full"} h-full`,children:e.jsx("iframe",{ref:l,className:"w-full h-full bg-white",sandbox:"allow-scripts allow-same-origin allow-forms allow-modals",title:"Preview"})})}),P==="html"&&!O&&e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center px-8 gap-3",children:[e.jsx(vt,{size:36,className:"text-gray-700"}),e.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Nenhum arquivo HTML encontrado"}),e.jsxs("p",{className:"text-xs text-gray-700",children:["Crie um arquivo ",e.jsx("code",{className:"text-gray-500",children:"index.html"})," ou abra um arquivo ",e.jsx("code",{className:"text-gray-500",children:".html"})]})]}),P==="json"&&H&&e.jsxs("div",{className:"h-full overflow-auto p-4",children:[e.jsx("style",{children:`
              .json-pre { background: #161e0f; padding: 16px; border-radius: 10px; font-family: 'JetBrains Mono',monospace; font-size: 12px; line-height: 1.7; overflow: auto; border: 1px solid #2d3e20; }
              .jk { color: #7dbda8; }
              .js { color: #c9d982; }
              .jn { color: #e0c97a; }
              .jb { color: #8fc87c; }
              .jnull { color: #888; }
              .error { color: #f87171; padding: 8px 0; font-size: 12px; }
            `}),e.jsx("div",{dangerouslySetInnerHTML:{__html:H}})]}),P==="markdown"&&H&&e.jsxs("div",{className:"h-full overflow-auto p-5",children:[e.jsx("style",{children:`
              .md-body { max-width: 680px; margin: 0 auto; color: #d4d8c8; font-family: -apple-system,system-ui,sans-serif; line-height: 1.7; }
              .md-body h1,.md-body h2,.md-body h3,.md-body h4,.md-body h5,.md-body h6 { color: #e8ecdc; font-weight: 700; margin: 1.5em 0 0.5em; line-height: 1.3; }
              .md-body h1 { font-size: 2em; border-bottom: 2px solid #2d3e20; padding-bottom: 0.3em; }
              .md-body h2 { font-size: 1.5em; border-bottom: 1px solid #2d3e20; padding-bottom: 0.2em; }
              .md-body h3 { font-size: 1.25em; }
              .md-body p { margin: 0.8em 0; }
              .md-body a { color: #8fc87c; }
              .md-body code { background: #1c2714; color: #c9d982; padding: 1px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; }
              .md-body pre { background: #1c2714; border: 1px solid #2d3e20; border-radius: 10px; padding: 16px; overflow: auto; margin: 1em 0; }
              .md-body pre code { background: none; padding: 0; }
              .md-body blockquote { border-left: 3px solid #3a5228; margin: 1em 0; padding: 0.5em 1em; color: #7a8a6a; background: #1a2410; border-radius: 0 8px 8px 0; }
              .md-body ul,.md-body ol { margin: 0.8em 0; padding-left: 1.8em; }
              .md-body li { margin: 0.3em 0; }
              .md-body hr { border: none; border-top: 1px solid #2d3e20; margin: 1.5em 0; }
              .md-body img { max-width: 100%; border-radius: 8px; }
              .md-body strong { color: #e8ecdc; }
            `}),e.jsx("div",{className:"md-body",dangerouslySetInnerHTML:{__html:H}})]}),P==="none"&&e.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center px-8 gap-3",children:[e.jsx(Ca,{size:36,className:"text-gray-700"}),e.jsx("p",{className:"text-sm font-medium text-gray-500",children:"Preview não disponível"}),e.jsxs("p",{className:"text-xs text-gray-700 leading-relaxed",children:["Tipos suportados: ",e.jsx("span",{className:"text-gray-500",children:"HTML · JSON · Markdown · CSS · JS/TS"})]}),e.jsxs("div",{className:"mt-2 px-4 py-3 bg-green-900/20 border border-green-700/30 rounded-xl max-w-xs text-left",children:[e.jsx("p",{className:"text-[11px] text-green-400 font-bold mb-1",children:"💡 Para ver apps Node.js aqui:"}),e.jsxs("p",{className:"text-[11px] text-green-700 leading-relaxed",children:["Abra o terminal e rode ",e.jsx("code",{className:"text-green-500",children:"node app.js"})," ou ",e.jsx("code",{className:"text-green-500",children:"npm start"}),".",e.jsx("br",{}),"O preview abrirá automaticamente quando o servidor iniciar."]})]})]})]})]})]})}const No={enabled:!0,lang:"pt-BR",rate:1.15,pitch:.95,voiceName:""},$n=["francisca","francisc","luciana","google português do brasil","google português","google pt","portuguese brazil","brazil","pt-br","pt_br"];function La(){try{const t=localStorage.getItem("tts-config");if(t)return{...No,...JSON.parse(t)}}catch{}return No}function Zs(t){localStorage.setItem("tts-config",JSON.stringify(t))}function Bn(t,s){if(!t.length)return null;if(s.voiceName){const o=t.find(r=>r.name===s.voiceName);if(o)return o}for(const o of $n){const r=t.find(n=>n.name.toLowerCase().includes(o)||n.lang.toLowerCase().includes(o));if(r)return r}return t[0]||null}function za(t,s=999999){let o=t;if(o=o.replace(/```[\s\S]*?```/g," "),o=o.replace(/`([^`\n]{1,60})`/g,"$1"),o=o.replace(/`[^`\n]+`/g," "),o=o.replace(/^#{1,6}\s+/gm,""),o=o.replace(/\*{2,3}([^*\n]+)\*{2,3}/g,"$1"),o=o.replace(/\*([^*\n]+)\*/g,"$1"),o=o.replace(/_{2}([^_\n]+)_{2}/g,"$1"),o=o.replace(/_([^_\n]+)_/g,"$1"),o=o.replace(/https?:\/\/\S+/g,""),o=o.replace(/^\|.+\|$/gm,""),o=o.replace(/^\|?[-:| ]+\|$/gm,""),o=o.replace(/#/g,""),o=o.replace(/\|/g,""),o=o.replace(/>/g,""),o=o.replace(/&/g," e "),o=o.replace(/@/g,""),o=o.replace(/\\/g,""),o=o.replace(/\^/g,""),o=o.replace(/~/g,""),o=o.replace(/={3,}/g,""),o=o.replace(/-{3,}/g,""),o=o.split(`
`).filter(c=>{const l=c.trim();return!(!l||/^[-─—=*_]{3,}$/.test(l)||/^[\w\-./\\]+\.(ts|tsx|js|jsx|py|json|css|html|md|sh|env|toml|yaml|yml|lock)$/.test(l)||/^(import\s|export\s|const\s|let\s|var\s|function\s|class\s|return\s|if\s*\(|for\s*\(|while\s*\(|async\s|await\s)/.test(l)||/^[{}[\]();,.<>|&^%$@!=+\-*/\\]+$/.test(l))}).join(" ").replace(/^\s*[-*•]\s+/gm,"").replace(/^\s*\d+\.\s+/gm,""),o=o.replace(/\s+/g," ").trim(),o=o.replace(/([.!?])\s*([.!?])+/g,"$1"),o.length<=s)return o;const n=o.lastIndexOf(".",s);return n>50?o.slice(0,n+1):o.slice(0,s)}let as=[],Bs=null,Ea=null,pa=null,Ra=null;function Un(){Ra||(Ra=setInterval(()=>{window.speechSynthesis&&window.speechSynthesis.paused&&window.speechSynthesis.resume()},5e3))}function ss(){Ra&&(clearInterval(Ra),Ra=null)}function Fn(t,s=220){const o=[],r=t.match(/[^.!?…]+[.!?…]+|[^.!?…]+$/g)||[t];let n="";for(const c of r){const l=c.trim();if(l)if((n+" "+l).trim().length<=s)n=(n+" "+l).trim();else if(n&&o.push(n),l.length>s){const u=l.match(/[^,;]+[,;]?/g)||[l];let d="";for(const h of u)(d+" "+h).trim().length<=s?d=(d+" "+h).trim():(d&&o.push(d),d=h.trim());d?n=d:n=""}else n=l}return n&&o.push(n),o.filter(c=>c.trim().length>0)}function Us(t){if(!window.speechSynthesis||!Ea)return;if(t>=as.length){ss();const r=pa;pa=null,r?.();return}const s=as[t],o=new SpeechSynthesisUtterance(s);o.lang=Ea.lang,o.rate=Ea.rate,o.pitch=Ea.pitch,Bs&&(o.voice=Bs),o.onend=()=>{Us(t+1)},o.onerror=r=>{if(r.error!=="interrupted")Us(t+1);else{ss();const n=pa;pa=null,n?.()}},window.speechSynthesis.speak(o),Un()}function wo(t,s,o){if(!window.speechSynthesis||!t.trim()){o?.();return}window.speechSynthesis.cancel(),ss();const r=window.speechSynthesis.getVoices();Bs=Bn(r,s),Ea=s,as=Fn(t),pa=o||null,setTimeout(()=>Us(0),120)}function Fs(t,s,o){if(!s.enabled||!window.speechSynthesis||!t.trim()){o?.();return}window.speechSynthesis.getVoices().length>0?wo(t,s,o):(window.speechSynthesis.onvoiceschanged=()=>{window.speechSynthesis.onvoiceschanged=null,wo(t,s,o)},window.speechSynthesis.getVoices())}function ua(){ss(),pa=null,as=[],window.speechSynthesis?.cancel()}function Gn(t,s,o){const r=window.SpeechRecognition||window.webkitSpeechRecognition;if(!r)return null;const n=new r;return n.lang=t,n.continuous=!1,n.interimResults=!1,n.onresult=c=>{const l=c.results[0][0].transcript;s(l)},n.onend=o,n.onerror=()=>o(),n.start(),{stop:()=>n.stop()}}const Co=[{id:"nova",label:"Nova",desc:"Calorosa e conversacional"},{id:"alloy",label:"Alloy",desc:"Neutra e profissional"},{id:"echo",label:"Echo",desc:"Clara e grave"},{id:"fable",label:"Fable",desc:"Narrativa e expressiva"},{id:"onyx",label:"Onyx",desc:"Grave e marcante"},{id:"shimmer",label:"Shimmer",desc:"Leve e alegre"}],ks=[{id:"devagar",label:"🐢 Devagar",prompt:"Fale bem devagar e claramente."},{id:"normal",label:"🎯 Normal",prompt:"Fale em velocidade normal."},{id:"rapido",label:"🚀 Rápido",prompt:"Fale um pouco mais rápido que o normal."},{id:"muito-rapido",label:"⚡ Muito rápido",prompt:"Fale rapidamente, mas mantendo clareza."}],Ha=[{value:1,label:"⚡ Flash",prompt:"Responda em UMA frase apenas. Seja direto e curto ao máximo."},{value:2,label:"📝 Curto",prompt:"Responda em 1-2 frases curtas e diretas."},{value:3,label:"💬 Normal",prompt:"Responda em 2-3 frases conversacionais."},{value:4,label:"📖 Médio",prompt:"Responda em 3-4 frases, pode elaborar um pouco quando necessário."},{value:5,label:"📚 Completo",prompt:"Pode dar respostas mais completas e detalhadas quando o assunto precisar."}],tr="voice-card-config";function Hn(){try{const t=localStorage.getItem(tr);if(t){const s=JSON.parse(t);return{...{voice:"nova",speed:"normal",responseLevel:3,autoLoop:!1},...s,autoLoop:s.autoLoop??!1}}}catch{}return{voice:"nova",speed:"normal",responseLevel:3,autoLoop:!1}}function Vn(t){try{localStorage.setItem(tr,JSON.stringify(t))}catch{}}const Kn="./".replace(/\/$/,"")+"/api";async function Wn(t,s,o){const r=await fetch(`${Kn}/voice/speak`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:t,voice:s,speedPrompt:o})});if(!r.ok){const c=await r.json().catch(()=>({}));throw new Error(c.error??"Erro na síntese de voz")}const{audio:n}=await r.json();return new Audio(`data:audio/mp3;base64,${n}`)}function Jn({onClose:t,onSend:s}){const[o,r]=a.useState(Hn),[n,c]=a.useState("idle"),[l,u]=a.useState(""),[d,h]=a.useState(""),[m,C]=a.useState(""),[T,_]=a.useState(!1),D=a.useRef("idle"),P=a.useRef(null),O=a.useRef(null),H=a.useRef(null),L=a.useRef(o),V=a.useRef(!1);a.useEffect(()=>{L.current=o,Vn(o)},[o]);const M=te=>{D.current=te,c(te)},R=a.useCallback((te=!1)=>{V.current=!0,P.current?.abort?.(),P.current?.stop?.(),P.current=null,O.current&&(O.current.pause(),O.current.onended=null,O.current=null),H.current&&(clearTimeout(H.current),H.current=null),te?t():(M("idle"),setTimeout(()=>{V.current=!1},500))},[t]),w=a.useCallback(async te=>{if(V.current)return;const X=za(te,900);if(!X.trim()){M("idle");return}M("speaking");const{voice:pe,speed:me}=L.current,F=ks.find(E=>E.id===me)??ks[1];try{const E=await Wn(X,pe,F.prompt);if(V.current)return;O.current=E,E.onended=()=>{O.current=null,!V.current&&(L.current.autoLoop&&D.current==="speaking"?H.current=setTimeout(f,800):M("idle"))},E.onerror=()=>{O.current=null,M("idle")},E.play().catch(()=>M("idle"))}catch(E){C(E.message),M("idle")}},[]),f=a.useCallback(()=>{if(V.current)return;const te=window.SpeechRecognition||window.webkitSpeechRecognition;if(!te){C("Microfone não suportado neste navegador");return}u(""),C(""),M("listening");const X=new te;X.lang="pt-BR",X.continuous=!1,X.interimResults=!0,P.current=X;let pe="";X.onresult=me=>{if(V.current)return;let F="";pe="";for(let E=0;E<me.results.length;E++){const j=me.results[E][0].transcript;me.results[E].isFinal?pe+=j:F+=j}u(pe||F)},X.onend=async()=>{if(V.current)return;const me=pe.trim();if(!me){L.current.autoLoop&&D.current==="listening"?H.current=setTimeout(f,1500):M("idle");return}u(me),M("thinking");try{const E=`[${(Ha.find(k=>k.value===L.current.responseLevel)??Ha[2]).prompt}] ${me}`,j=await s(E);if(V.current)return;h(j.slice(0,400)),await w(j)}catch(F){C(F.message),M("idle")}},X.onerror=me=>{V.current||me.error!=="aborted"&&(me.error!=="no-speech"&&C(`Erro de microfone: ${me.error}`),L.current.autoLoop&&D.current==="listening"&&!V.current?H.current=setTimeout(f,2e3):M("idle"))},X.start()},[s,w]);a.useEffect(()=>()=>{R()},[]);const g=a.useCallback(()=>{V.current=!1,n==="idle"?f():n==="listening"?(P.current?.stop?.(),M("idle")):n==="speaking"&&(O.current&&(O.current.pause(),O.current.onended=null,O.current=null),M("idle"))},[n,f]),S=a.useCallback(()=>{R(!0)},[R]),B=a.useCallback(()=>{R(!1)},[R]),Q=te=>r(X=>({...X,...te})),se=Ha.find(te=>te.value===o.responseLevel)??Ha[2],J={idle:"bg-gray-700 hover:bg-gray-600 border-gray-600",listening:"bg-red-600 border-red-500 shadow-[0_0_16px_rgba(239,68,68,0.35)]",thinking:"bg-blue-600 border-blue-500 opacity-70",speaking:"bg-green-600 border-green-500 shadow-[0_0_16px_rgba(34,197,94,0.35)]"}[n],xe={idle:"Toque em Falar para começar",listening:"Ouvindo… (pare de falar para enviar)",thinking:"Pensando…",speaking:"Falando… (toque para parar)"}[n],re={idle:"text-gray-500",listening:"text-red-400",thinking:"text-blue-400",speaking:"text-green-400"}[n];return e.jsxs("div",{className:"fixed bottom-16 right-3 z-50 w-72 rounded-2xl shadow-2xl border border-white/10 bg-[#141c0d]/97 backdrop-blur-md overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-2 border-b border-white/10",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(rs,{size:13,className:"text-green-400"}),e.jsx("span",{className:"text-[12px] font-semibold text-green-300",children:"Jasmim — Voz Neural"}),o.autoLoop&&e.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 font-bold",children:"AUTO"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[n!=="idle"&&e.jsx("button",{onClick:B,title:"Parar tudo",className:"p-1.5 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 hover:bg-red-500/30 transition-colors",children:e.jsx(Qa,{size:13})}),e.jsx("button",{onClick:()=>_(te=>!te),title:"Configurações de voz",className:`p-1.5 rounded-lg transition-colors ${T?"bg-white/10 text-white":"hover:bg-white/10 text-gray-500 hover:text-gray-300"}`,children:e.jsx(Ls,{size:13})}),e.jsx("button",{onClick:S,className:"p-1.5 rounded-lg hover:bg-white/10 text-gray-500 hover:text-gray-300 transition-colors",children:e.jsx(je,{size:13})})]})]}),T&&e.jsxs("div",{className:"px-3 py-3 border-b border-white/10 bg-white/3 flex flex-col gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1.5",children:"🎤 Voz"}),e.jsx("div",{className:"grid grid-cols-3 gap-1",children:Co.map(te=>e.jsx("button",{onClick:()=>Q({voice:te.id}),className:`px-2 py-1.5 rounded-lg text-[10px] font-semibold text-center transition-all ${o.voice===te.id?"bg-green-500/25 border border-green-500/50 text-green-300":"bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"}`,title:te.desc,children:te.label},te.id))}),e.jsx("p",{className:"text-[10px] text-gray-600 mt-1 text-center italic",children:Co.find(te=>te.id===o.voice)?.desc})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-1.5",children:"⚡ Velocidade"}),e.jsx("div",{className:"grid grid-cols-2 gap-1",children:ks.map(te=>e.jsx("button",{onClick:()=>Q({speed:te.id}),className:`px-2 py-1.5 rounded-lg text-[10px] font-semibold text-center transition-all ${o.speed===te.id?"bg-blue-500/25 border border-blue-500/50 text-blue-300":"bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10"}`,children:te.label},te.id))})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("p",{className:"text-[10px] text-gray-500 font-semibold uppercase tracking-wider",children:"💬 Resposta"}),e.jsx("span",{className:"text-[10px] font-bold text-purple-300 bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 rounded-full",children:se.label})]}),e.jsx("input",{type:"range",min:1,max:5,step:1,value:o.responseLevel,onChange:te=>Q({responseLevel:parseInt(te.target.value)}),className:"w-full accent-purple-500 h-1.5 rounded-full cursor-pointer"}),e.jsxs("div",{className:"flex justify-between mt-1",children:[e.jsx("span",{className:"text-[9px] text-gray-600",children:"⚡ Flash"}),e.jsx("span",{className:"text-[9px] text-gray-600",children:"📚 Completo"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] text-gray-400",children:"🔁 Conversa automática"}),e.jsx("p",{className:"text-[9px] text-gray-600",children:"Ouve novamente após responder"})]}),e.jsx("button",{onClick:()=>Q({autoLoop:!o.autoLoop}),className:`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${o.autoLoop?"bg-green-500/20 border border-green-500/40 text-green-400":"bg-white/5 border border-white/10 text-gray-500"}`,children:o.autoLoop?"Ligado":"Desligado"})]})]}),e.jsxs("div",{className:"px-3 py-2.5 flex flex-col gap-2 min-h-[60px]",children:[l&&e.jsxs("div",{className:"rounded-xl bg-white/5 border border-white/10 px-3 py-2",children:[e.jsx("p",{className:"text-[9px] text-gray-500 mb-0.5 uppercase tracking-wider",children:"Você disse"}),e.jsx("p",{className:"text-[12px] text-gray-200 leading-snug",children:l})]}),d&&e.jsxs("div",{className:"rounded-xl bg-green-500/5 border border-green-500/20 px-3 py-2",children:[e.jsx("p",{className:"text-[9px] text-green-600 mb-0.5 uppercase tracking-wider",children:"Jasmim"}),e.jsx("p",{className:"text-[12px] text-green-200 leading-snug line-clamp-3",children:d})]}),m&&e.jsx("p",{className:"text-[11px] text-red-400 text-center",children:m}),e.jsx("p",{className:`text-[11px] text-center font-medium ${re}`,children:xe})]}),e.jsxs("div",{className:"px-3 pb-3 flex flex-col gap-2",children:[e.jsx("button",{onClick:g,disabled:n==="thinking",className:`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-[13px] text-white transition-all active:scale-95 disabled:opacity-40 border ${J}`,children:n==="thinking"?e.jsxs(e.Fragment,{children:[e.jsx(De,{size:15,className:"animate-spin"})," Pensando…"]}):n==="listening"?e.jsxs(e.Fragment,{children:[e.jsx(ro,{size:14})," Parar de ouvir"]}):n==="speaking"?e.jsxs(e.Fragment,{children:[e.jsx(ro,{size:14})," Pular resposta"]}):e.jsxs(e.Fragment,{children:[e.jsx(_a,{size:14})," Falar"]})}),e.jsxs("button",{onClick:B,className:"w-full flex items-center justify-center gap-2 py-2 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-[11px] font-semibold hover:bg-red-500/20 transition-colors active:scale-95",children:[e.jsx(Qa,{size:12})," Parar tudo e silenciar"]})]})]})}function Zt({text:t,className:s="",label:o}){const[r,n]=a.useState(!1);return e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(t),n(!0),setTimeout(()=>n(!1),2e3)},className:`flex items-center gap-1.5 transition-colors ${s}`,title:"Copiar",children:r?e.jsxs(e.Fragment,{children:[e.jsx(Ya,{size:13,className:"text-green-400"}),o&&e.jsx("span",{className:"text-green-400 text-[12px] font-semibold",children:"Copiado!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(aa,{size:13}),o&&e.jsx("span",{className:"text-[12px]",children:o})]})})}function Qn({lang:t,code:s,onApply:o,onRun:r}){const[n,c]=a.useState(!1);if(t.startsWith("filepath:")){const l=t.slice(9).trim();return e.jsxs("div",{className:"rounded-xl overflow-hidden border border-blue-500/25 bg-blue-950/15 my-2",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 bg-blue-900/20 border-b border-blue-500/15",children:[e.jsx("span",{className:"text-[10px] text-blue-400 font-mono truncate flex-1",children:l}),e.jsx(Zt,{text:s})]}),e.jsx("pre",{className:"text-[11px] px-3 py-2 overflow-x-auto text-gray-300 font-mono leading-relaxed max-h-52 overflow-y-auto",children:s}),e.jsxs("div",{className:"px-3 py-2.5 border-t border-blue-500/15 flex gap-2",children:[e.jsx("button",{onClick:()=>{o(l,s),c(!0),setTimeout(()=>c(!1),2e3)},className:`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold transition-all active:scale-95 ${n?"bg-green-600/30 text-green-300 border border-green-500/25":"bg-blue-600 text-white hover:bg-blue-500"}`,children:n?e.jsxs(e.Fragment,{children:[e.jsx(Ya,{size:14})," Aplicado!"]}):e.jsxs(e.Fragment,{children:[e.jsx(Lt,{size:14})," Aplicar Arquivo"]})}),e.jsx(Zt,{text:s,label:"Copiar",className:"px-3 py-2 rounded-xl border border-gray-600/40 text-gray-400 hover:text-gray-200 hover:border-gray-500 hover:bg-white/5 text-[12px]"})]})]})}return["bash","shell","sh","cmd","command"].includes(t)?e.jsxs("div",{className:"rounded-xl overflow-hidden border border-green-500/30 bg-green-950/20 my-2",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 bg-green-900/25 border-b border-green-500/20",children:[e.jsx("span",{className:"text-[10px] text-green-400 font-bold uppercase tracking-wider",children:"⚡ Terminal"}),e.jsx(Zt,{text:s})]}),e.jsx("pre",{className:"text-[12px] px-3 py-2 text-green-300 font-mono leading-relaxed whitespace-pre-wrap",children:s}),e.jsxs("div",{className:"px-3 py-2.5 border-t border-green-500/20 flex gap-2",children:[e.jsxs("button",{onClick:()=>r(s),className:"flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold bg-green-600 text-white hover:bg-green-500 active:scale-95 transition-all",children:[e.jsx(ea,{size:14})," Executar"]}),e.jsx(Zt,{text:s,label:"Copiar",className:"px-3 py-2 rounded-xl border border-gray-600/40 text-gray-400 hover:text-gray-200 hover:border-gray-500 hover:bg-white/5 text-[12px]"})]})]}):null}function Yn(t,s){return{code({className:o,children:r,...n}){const c=(o??"").match(/language-(\S+)/),l=c?c[1]:"",u=String(r).replace(/\n$/,"");return l||u.includes(`
`)?l.startsWith("filepath:")||["bash","shell","sh","cmd","command"].includes(l)?e.jsx(Qn,{lang:l,code:u,onApply:t,onRun:s}):e.jsx("code",{className:`${o??""} text-[11px] md:text-[13px] leading-relaxed`,...n,children:r}):e.jsx("code",{className:"bg-gray-800/70 text-green-300 px-1 py-0.5 rounded text-[11px] md:text-[13px] font-mono",children:r})},pre({children:o,...r}){const l=(Rs.Children.toArray(o)[0]?.props?.className??"").match(/language-(\S+)/),u=l?l[1]:"";if(u.startsWith("filepath:")||["bash","shell","sh","cmd","command"].includes(u))return e.jsx(e.Fragment,{children:o});const h=m=>typeof m=="string"?m:Array.isArray(m)?m.map(h).join(""):m&&typeof m=="object"&&"props"in m?h(m.props.children??""):"";return e.jsxs("div",{className:"relative group/pre my-2",children:[e.jsx("div",{className:"absolute right-2 top-2 opacity-0 group-hover/pre:opacity-100 transition-opacity z-10",children:e.jsx(Zt,{text:h(o),className:"bg-gray-900/80 border border-gray-700/50 rounded px-1.5 py-1"})}),e.jsx("pre",{className:"rounded-xl overflow-x-auto text-[11px] md:text-[13px] leading-relaxed md:leading-[1.55] !bg-[#0d1117] p-3 md:p-4 border border-gray-700/30",...r,children:o})]})},a({href:o,children:r,...n}){return e.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:underline text-[13px] md:text-[15px]",...n,children:r})},table({children:o,...r}){return e.jsx("div",{className:"overflow-x-auto my-2",children:e.jsx("table",{className:"min-w-full border-collapse text-[11px] md:text-[14px]",...r,children:o})})},th({children:o,...r}){return e.jsx("th",{className:"border border-gray-700 px-2 py-1 md:px-3 md:py-1.5 bg-gray-800/60 font-semibold text-left text-gray-300",...r,children:o})},td({children:o,...r}){return e.jsx("td",{className:"border border-gray-700/50 px-2 py-1 md:px-3 md:py-1.5 text-gray-300",...r,children:o})},h1({children:o,...r}){return e.jsx("h1",{className:"text-[15px] md:text-[20px] font-bold text-gray-100 mt-3 mb-1 md:mt-4 md:mb-2",...r,children:o})},h2({children:o,...r}){return e.jsx("h2",{className:"text-[14px] md:text-[18px] font-bold text-gray-200 mt-2 mb-1 md:mt-3 md:mb-1.5",...r,children:o})},h3({children:o,...r}){return e.jsx("h3",{className:"text-[13px] md:text-[16px] font-semibold text-gray-200 mt-2 mb-0.5 md:mt-2.5 md:mb-1",...r,children:o})},ul({children:o,...r}){return e.jsx("ul",{className:"list-disc list-inside space-y-0.5 md:space-y-1 text-[13px] md:text-[15px] text-gray-200 my-1 md:my-2 pl-2 leading-relaxed md:leading-[1.65]",...r,children:o})},ol({children:o,...r}){return e.jsx("ol",{className:"list-decimal list-inside space-y-0.5 md:space-y-1 text-[13px] md:text-[15px] text-gray-200 my-1 md:my-2 pl-2 leading-relaxed md:leading-[1.65]",...r,children:o})},p({children:o,...r}){return e.jsx("p",{className:"text-[13px] md:text-[15px] text-gray-100 leading-relaxed md:leading-[1.7] my-1 md:my-2",...r,children:o})},blockquote({children:o,...r}){return e.jsx("blockquote",{className:"border-l-2 md:border-l-4 border-blue-500/60 pl-3 md:pl-4 text-gray-300 italic my-1 md:my-2 text-[13px] md:text-[15px]",...r,children:o})}}}const Xn=[{icon:"🔍",label:"Analisar",color:"blue",sub:["Analise o arquivo atual e aponte erros","Detecte bugs em todo o projeto","Verifique a segurança do código","Analise a performance do projeto"]},{icon:"📁",label:"Criar",color:"purple",sub:["Crie um index.html com landing page bonita","Crie um servidor Node.js com Express","Crie um componente React com TypeScript","Crie um script Python com argumentos"]},{icon:"📦",label:"Instalar",color:"green",sub:["Instale express e configure servidor básico","Configure React com Vite e TypeScript","Instale e configure ESLint e Prettier","Crie um package.json completo para o projeto"]},{icon:"🔧",label:"Corrigir",color:"orange",sub:["Corrija todos os erros do projeto","Refatore o código do arquivo atual","Adicione tratamento de erros ao projeto","Converta para TypeScript com tipos corretos"]},{icon:"📝",label:"Documentar",color:"gray",sub:["Crie um README.md completo para o projeto","Adicione comentários explicativos ao código","Gere documentação da API em markdown","Crie exemplos de uso para todas as funções"]}];function Zn({onSend:t}){const[s,o]=a.useState(null),[r,n]=a.useState(""),[c,l]=a.useState(!1),u={blue:"border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300",purple:"border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300",green:"border-green-500/30 bg-green-500/10 hover:bg-green-500/20 text-green-300",orange:"border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 text-orange-300",gray:"border-gray-600/40 bg-gray-800/30 hover:bg-gray-800/50 text-gray-300"},d={blue:"hover:bg-blue-500/10 hover:text-blue-200 border-blue-500/15",purple:"hover:bg-purple-500/10 hover:text-purple-200 border-purple-500/15",green:"hover:bg-green-500/10 hover:text-green-200 border-green-500/15",orange:"hover:bg-orange-500/10 hover:text-orange-200 border-orange-500/15",gray:"hover:bg-gray-700/30 hover:text-gray-200 border-gray-700/30"},h=()=>{const m=r.trim();if(!m)return;const C=`Tenho uma ideia de aplicativo: "${m}"

Analise e responda:
1. **Qual tecnologia/linguagem é a melhor escolha?** (Node.js, Python, React, etc.) — justifique brevemente
2. **Plano de projeto completo**:
   - Nome sugerido para o projeto
   - Estrutura de pastas e arquivos
   - Dependências necessárias (package.json ou requirements.txt)
   - Arquivo principal com código inicial funcional
3. **Comandos para iniciar** — passo a passo para rodar no terminal
4. **Próximos passos** — o que implementar depois

Seja direto e prático. Gere código real, não exemplos genéricos.`;t(C),n(""),l(!1)};return e.jsxs("div",{className:"flex flex-col h-full py-3 px-1",children:[e.jsx("div",{className:"mb-4",children:c?e.jsxs("div",{className:"rounded-2xl border border-yellow-500/40 bg-[#1c2714] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2.5 border-b border-yellow-500/20",children:[e.jsx(no,{size:14,className:"text-yellow-400"}),e.jsx("p",{className:"text-[12px] font-semibold text-yellow-300",children:"Descreva sua ideia de aplicativo"}),e.jsx("button",{onClick:()=>l(!1),className:"ml-auto text-gray-600 hover:text-gray-400",children:e.jsx(je,{size:14})})]}),e.jsxs("div",{className:"p-3",children:[e.jsx("textarea",{autoFocus:!0,value:r,onChange:m=>n(m.target.value),onKeyDown:m=>{m.key==="Enter"&&(m.ctrlKey||m.metaKey)&&h()},placeholder:"Ex: um app de gestão de processos jurídicos com login, cadastro de clientes e prazos...",rows:3,className:"w-full bg-[#141c0d] border border-gray-700/50 rounded-xl px-3 py-2.5 text-[12px] text-gray-300 placeholder-gray-600 outline-none focus:border-yellow-500/40 resize-none"}),e.jsxs("button",{onClick:h,disabled:!r.trim(),className:"mt-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-yellow-600 to-orange-600 disabled:opacity-30 text-white text-[12px] font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all",children:[e.jsx(io,{size:13}),"Gerar Plano Completo"]}),e.jsx("p",{className:"text-center text-[10px] text-gray-600 mt-1.5",children:"Ctrl+Enter para enviar"})]})]}):e.jsxs("button",{onClick:()=>l(!0),className:"w-full flex items-center gap-3 px-4 py-4 rounded-2xl border border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all active:scale-[0.98] group",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0",children:e.jsx(no,{size:18,className:"text-yellow-400"})}),e.jsxs("div",{className:"text-left",children:[e.jsx("p",{className:"text-[13px] font-bold text-yellow-300",children:"💡 Gerar Plano de Projeto"}),e.jsx("p",{className:"text-[11px] text-yellow-600/80",children:"Descreva sua ideia → IA escolhe a melhor tecnologia e cria tudo"})]}),e.jsx(io,{size:14,className:"text-yellow-500/60 ml-auto group-hover:text-yellow-400 transition-colors"})]})}),e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-widest mb-2 px-1",children:"Ou escolha uma ação"}),e.jsx("div",{className:"space-y-2 w-full",children:Xn.map((m,C)=>e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>o(s===C?null:C),className:`w-full flex items-center justify-between px-4 py-3 rounded-2xl border text-[13px] font-semibold transition-all active:scale-[0.98] ${u[m.color]}`,children:[e.jsxs("span",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:"text-[16px]",children:m.icon}),m.label]}),e.jsx(fa,{size:14,className:`transition-transform duration-200 ${s===C?"rotate-180":""}`})]}),s===C&&e.jsx("div",{className:"mt-1.5 ml-2 space-y-1.5",children:m.sub.map((T,_)=>e.jsxs("button",{onClick:()=>{t(T),o(null)},className:`w-full text-left px-4 py-2.5 rounded-xl border text-[12px] text-gray-400 transition-all active:scale-[0.98] bg-[#1c2714]/60 ${d[m.color]}`,children:["→ ",T]},_))})]},C))})]})}function ei({msg:t,onApply:s,onRun:o}){const r=Yn(s,o);return t.role==="user"?e.jsxs("div",{className:"flex gap-2 md:gap-3 justify-end group",children:[e.jsxs("div",{className:"max-w-[88%] md:max-w-[80%] relative",children:[e.jsx("div",{className:"rounded-2xl rounded-tr-sm px-3 py-2 md:px-4 md:py-3 bg-blue-600 text-white",children:e.jsx("p",{className:"text-[13px] md:text-[15px] leading-relaxed md:leading-[1.6] whitespace-pre-wrap break-words",children:t.raw})}),e.jsx("div",{className:"absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity",children:e.jsx(Zt,{text:t.raw,className:"bg-gray-800 border border-gray-700 rounded p-0.5"})})]}),e.jsx(fr,{size:16,className:"text-gray-600 mt-1.5 shrink-0 md:w-5 md:h-5"})]}):e.jsxs("div",{className:"flex gap-2 md:gap-3 justify-start",children:[e.jsxs("div",{className:"w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/15 flex items-center justify-center shrink-0 mt-0.5",children:[e.jsx(bt,{size:13,className:"text-blue-400 md:hidden"}),e.jsx(bt,{size:17,className:"text-blue-400 hidden md:block"})]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"bg-[#1c2714] rounded-2xl rounded-bl-sm px-3 py-2.5 md:px-5 md:py-4",children:e.jsx(Br,{remarkPlugins:[Fr],rehypePlugins:[Ur],components:r,children:t.raw})}),e.jsx("div",{className:"flex items-center gap-1.5 mt-1 px-1",children:e.jsx(Zt,{text:t.raw,label:"Copiar mensagem",className:"text-[10px] text-gray-600 hover:text-gray-300 px-1.5 py-0.5 rounded border border-gray-800 hover:border-gray-600 bg-[#0d1409] hover:bg-gray-800/40 transition-all"})})]})]})}const ti=[{value:"project",label:"Projeto",icon:vt,desc:"Todos os arquivos"},{value:"folder",label:"Pasta",icon:Hs,desc:"Pasta atual"},{value:"file",label:"Arquivo",icon:os,desc:"Só o arquivo ativo"},{value:"none",label:"Nenhum",icon:hr,desc:"Sem contexto"}],ai=[{label:"🔍 Projeto inteiro",prompt:"Analise COMPLETAMENTE o projeto: estrutura de arquivos, dependências, lógica, e dê um diagnóstico detalhado — o que está bom, o que precisa de atenção, arquitetura geral."},{label:"🐛 Caçar bugs",prompt:"Faça varredura COMPLETA em todos os arquivos procurando bugs, erros de lógica, problemas de tipagem, imports faltando, variáveis não usadas e problemas de segurança. Liste arquivo e linha de cada problema."},{label:"⚡ Otimizar",prompt:"Analise o projeto inteiro e aplique otimizações de performance, legibilidade e boas práticas. Mostre o que será melhorado e aplique as mudanças nos arquivos."},{label:"📝 Documentar",prompt:"Adicione documentação completa: comentários JSDoc em todas as funções públicas, README detalhado com instruções de instalação e uso, e documente a arquitetura. Crie todos os arquivos necessários."},{label:"📋 Ver diário",prompt:"Leia e mostre o conteúdo atual do diário de progresso (.sk/diario.md) com tudo o que foi feito, o que está em andamento, e o que ainda falta fazer."},{label:"✅ Atualizar diário",prompt:"Analise o projeto inteiro e atualize o arquivo .sk/diario.md com um relatório completo: ✅ o que foi feito, 🔄 o que foi alterado recentemente, ⏳ o que ainda falta, 🐛 bugs encontrados/corrigidos, e os próximos passos recomendados."},{label:"🧪 Testar lógica",prompt:"Revise a lógica de negócio do projeto. Identifique casos de borda não tratados, entradas inválidas que podem causar crash, e crie casos de teste básicos para as funções principais."},{label:"🔐 Segurança",prompt:"Faça uma auditoria de segurança no projeto: verifique exposição de chaves, injeção SQL, XSS, autenticação, validação de dados. Liste cada vulnerabilidade e corrija as críticas."},{label:"📊 Índice completo",prompt:"Gere um ÍNDICE COMPLETO do projeto e salve em .sk/indice.md: liste todos os arquivos com descrição de cada um, funções e classes principais, dependências externas, pontos de entrada do app, e um mapa de como os arquivos se relacionam. Esse índice será minha referência rápida para retomar o projeto a qualquer momento."},{label:"📐 Plano do Projeto",prompt:`Analise o projeto completo e gere um PLANO PROFISSIONAL salvo em PLANO.md com estas seções obrigatórias:

1. **RESUMO EXECUTIVO** — tipo de aplicação, stack tecnológico, propósito
2. **ESTRUTURA DE ARQUIVOS** — árvore ASCII completa com ├── e └── mostrando pastas e arquivos organizados hierarquicamente
3. **STACK TECNOLÓGICO** — frontend, backend, banco de dados, pacotes principais com versões
4. **ROTAS DA API** — tabela de todos endpoints detectados (GET/POST/PUT/DELETE + caminho + descrição)
5. **ARQUIVOS PRINCIPAIS** — o que faz cada arquivo central do projeto
6. **SCRIPTS** — todos os comandos npm run disponíveis e o que fazem
7. **VARIÁVEIS DE AMBIENTE** — todas que o projeto usa com descrição
8. **COMO RODAR** — passo a passo para instalar e iniciar o projeto do zero
9. **CONTEXTO PARA IA** — bloco de texto compacto que descreve o projeto de forma que outra IA possa continuar o desenvolvimento sem ver o código

Esse documento é o plano-mestre do projeto. Seja detalhado, profissional e completo.`},{label:"🚀 Criar do zero",prompt:`Vou criar um aplicativo do zero. Me faça essas perguntas uma a uma e aguarde minha resposta:
1) Qual é o objetivo do app?
2) Qual linguagem/framework prefere?
3) Vai ter banco de dados?
4) Tem alguma API externa?
Com base nas respostas, crie TODA a estrutura: package.json completo, arquivos principais, pastas, dependências e instruções para rodar. Comece fazendo a primeira pergunta.`}],si=[{label:"📊 status",cmd:"git status"},{label:"📥 pull",cmd:"git pull"},{label:"📦 add tudo",cmd:"git add ."},{label:"💾 commit",cmd:`git add . && git commit -m "Update: $(date '+%Y-%m-%d %H:%M')"`},{label:"📤 push",cmd:"git push"},{label:"📜 log",cmd:"git log --oneline -10"},{label:"🌿 branches",cmd:"git branch -a"},{label:"🔀 diff",cmd:"git diff --stat"},{label:"↩ undo",cmd:"git restore ."}];function oi({slots:t,onSave:s,onClear:o}){const r=t[2],n=!!(r?.apiKey&&r.provider==="google"),[c,l]=Rs.useState(!1),[u,d]=Rs.useState("");return n&&!c?e.jsxs("div",{className:"mb-2 flex items-center gap-2 px-2 py-1.5 rounded-xl bg-green-900/25 border border-green-500/30",children:[e.jsxs("span",{className:"text-[11px] text-green-400 font-semibold flex-1",children:["✅ Gemini ativa — ",r.model]}),e.jsx("button",{className:"text-[10px] text-gray-500 hover:text-yellow-300 px-2 py-0.5 rounded-lg border border-gray-700/30 hover:border-yellow-600/40 transition-colors",onClick:()=>{l(!0),d("")},children:"trocar chave"}),e.jsx("button",{className:"text-[10px] text-red-500 hover:text-red-300 px-2 py-0.5 rounded-lg border border-gray-700/30 hover:border-red-600/40 transition-colors",onClick:o,children:"remover"})]}):e.jsx("div",{className:"mb-2 rounded-xl bg-[#0d1f2d] border border-blue-500/30 overflow-hidden",children:e.jsxs("div",{className:"px-2.5 pt-2 pb-1",children:[e.jsx("p",{className:"text-[11px] text-blue-300 font-semibold mb-1",children:"🟢 Chave Gemini (gratuita)"}),e.jsxs("p",{className:"text-[10px] text-gray-500 mb-1.5 leading-relaxed",children:["Cole sua chave Gemini — ",e.jsx("span",{className:"text-blue-400",children:"aistudio.google.com/apikey"})," — é grátis!"]}),e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("input",{className:"flex-1 min-w-0 bg-[#141c0d] border border-gray-600/50 rounded-lg px-2.5 py-1.5 text-[12px] text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/20",placeholder:"AIza...",value:u,onChange:h=>d(h.target.value),onKeyDown:h=>{if(h.key==="Enter"){const m=u.trim();m.length>10&&(s(m),l(!1),d(""))}h.key==="Escape"&&(l(!1),d(""))}}),e.jsx("button",{className:"px-3 py-1.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-[11px] font-bold rounded-lg disabled:opacity-40 transition-all shrink-0",disabled:u.trim().length<10,onClick:()=>{const h=u.trim();h.length>10&&(s(h),l(!1),d(""))},children:"Salvar"}),c&&e.jsx("button",{className:"text-gray-500 hover:text-gray-300 px-1.5 text-[12px]",onClick:()=>{l(!1),d("")},children:"✕"})]})]})})}function ri({vfs:t,activeFile:s,onApplyCode:o,onRunInTerminal:r,scope:n,onScopeChange:c,autoVoice:l,onAutoVoiceConsumed:u,externalMessage:d,onExternalMessageConsumed:h,lastTermOutput:m,onTermOutputConsumed:C,terminalBuffer:T,terminalHasError:_,dbConnectionString:D}){const[P,O]=a.useState([]),[H,L]=a.useState([]),[V,M]=a.useState(""),[R,w]=a.useState(!1),[f,g]=a.useState(!1),[S,B]=a.useState(!1),[Q,se]=a.useState(!1),[J,xe]=a.useState(!1),[re,te]=a.useState(Ka()),[X,pe]=a.useState(La()),[me,F]=a.useState(""),[E,j]=a.useState(0),[k,x]=a.useState({}),[ce,z]=a.useState(""),[N,U]=a.useState(""),[v,$]=a.useState(()=>{if(!Ka().some(ge=>ge.active&&ge.apiKey))return!0;const G=localStorage.getItem("ai-use-builtin");return G!==null?G==="true":!1}),[Z,ee]=a.useState(""),[ne,be]=a.useState(!1),[ye,Ge]=a.useState(()=>Wo()),[$e,Ze]=a.useState({provider:"google",key:"",status:"idle",msg:""}),[Be,I]=a.useState(!1),[ae,ie]=a.useState(""),[ue,y]=a.useState([]),[K,oe]=a.useState(!1),de=a.useRef(null),Le=a.useRef(null),fe=a.useRef(()=>{}),He=a.useRef(!1),ve=a.useRef(null),Ee=a.useRef(()=>{}),pt=a.useRef(()=>Promise.resolve()),[Qe,ke]=a.useState(()=>{try{return localStorage.getItem("jasmim-autospeak")==="true"}catch{return!1}}),[Ue,Ve]=a.useState(""),[ot,it]=a.useState(!1),et=a.useRef(null),lt=a.useRef(null),yt="./".replace(/\/$/,"")+"/api";a.useEffect(()=>{try{const b=t.readFile(".sk/memoria.json");if(b){const G=JSON.parse(b);Array.isArray(G)&&G.length>0&&(L(G),O([{role:"assistant",raw:`💭 *Memória carregada — lembro das nossas últimas ${Math.floor(G.length/2)} trocas neste projeto.*`,blocks:[{type:"text",content:`💭 Memória carregada — lembro das nossas últimas ${Math.floor(G.length/2)} trocas neste projeto.`}]}]))}}catch{}},[]),a.useEffect(()=>{if(H.length!==0)try{const b=H.slice(-30);t.writeFile(".sk/memoria.json",JSON.stringify(b))}catch{}},[H,t]),a.useEffect(()=>{de.current&&(de.current.scrollTop=de.current.scrollHeight)},[P,R,ce]),a.useEffect(()=>{l&&(B(!0),u?.())},[l]),a.useEffect(()=>{d&&!R&&(fe.current(d),h?.())},[d]),a.useEffect(()=>{if(!m)return;const{cmd:b,output:G,ok:ge}=m;C?.();const Oe=/\b(build|tsc|compile|webpack|vite build|cargo build|go build|javac|py_compile)\b/i.test(b),Te=/\b(npm install|npm i|pip install|yarn add|pnpm add|cargo add)\b/i.test(b),ze=/\b(npm start|npm run dev|node |python |flask|uvicorn|nodemon)\b/i.test(b),dt=/\bgit\b/i.test(b);let Ie="";Oe?Ie=ge?`✅ Compilação concluída sem erros. Faça o relatório:
🔨 **Compilação:** ✅ Sucesso
- ➡️ Próximo passo: [indique — rodar, testar, etc.]
Se houver avisos, explique se são críticos ou não.`:`❌ A compilação falhou. Relatório COMPLETO:
🔨 **Compilação:** ❌ Erro
- 📋 Erros: (arquivo:linha — descrição clara)
- 🔧 Correção: (o que muda)
- ➡️ Próximo passo: gere o código corrigido e mande compilar de novo.`:Te?Ie=ge?"✅ Instalação concluída. Confirme os pacotes e diga o próximo passo.":"❌ Instalação falhou. Analise: rede? versão incompatível? Gere o comando corrigido.":ze?Ie=ge?'✅ Processo iniciado. Confirme se está rodando. Se tiver porta na saída, mencione: "Clique em 🌐 Preview para ver."':"❌ O processo não iniciou. Analise: porta ocupada? dependência faltando? Gere a solução.":dt?Ie=ge?"✅ Git executou com sucesso. Confirme e diga o próximo passo do fluxo.":"❌ Erro no git. Analise: autenticação? branch? conflito? Gere os comandos para resolver.":Ie=ge?"Analise a saída. Se correu bem, confirme e diga o próximo passo.":"Analise os erros. Explique em linguagem simples e diga o próximo passo exato.";const Me=`${ge?"✅":"❌"} **Saída do terminal** — \`${b}\`

\`\`\`
${G.slice(0,6e3)||"(sem saída)"}
\`\`\`

${Ie}`;ve.current=Me},[m]),a.useEffect(()=>{if(!R&&ve.current){const b=ve.current;ve.current=null;const G=setTimeout(()=>fe.current(b),300);return()=>clearTimeout(G)}},[R]),a.useEffect(()=>{Ka().some(G=>G.active&&G.apiKey)||(localStorage.removeItem("ai-use-builtin"),$(!0))},[]);const Ke=a.useCallback(()=>{const b=t.listFiles().join(`
`);let G="";if(n==="project")G=t.listFiles().slice(0,100).map(Re=>{const Me=t.readFile(Re)||"";return Me.length<2e4?`
--- ${Re} ---
${Me}`:`
--- ${Re} --- (${Me.length} chars, truncado a 20000)
${Me.slice(0,2e4)}`}).join("");else if(n==="folder"&&s){const Re=s.includes("/")?s.split("/").slice(0,-1).join("/"):"";G=t.listFiles().filter(st=>Re?st.startsWith(Re+"/")||st===s:!st.includes("/")).map(st=>{const _e=t.readFile(st)||"";return`
--- ${st} ---
${_e.slice(0,2e4)}`}).join("")}else if(n==="file"&&s){const Re=t.readFile(s)||"";G=`
--- ${s} ---
${Re.slice(0,8e4)}`}const ge=t.readFile(".sk/diario.md")||"",Oe=ge?`
DIARIO DE PROGRESSO DO PROJETO (mantenha sempre atualizado):
${ge.slice(0,8e3)}`:`
DIARIO DE PROGRESSO: (ainda não criado — crie .sk/diario.md quando fizer alterações significativas)`,Te=t.readFile(".sk/perfil-jasmim.md")||"",ze=Te?`
════════════════════════════════════════════════════════
MEU PERFIL DE APRENDIZADO — O QUE EU JA SEI SOBRE SAULO E ESTE PROJETO:
════════════════════════════════════════════════════════
${Te.slice(0,6e3)}
(Leia este perfil naturalmente — ele foi construído ao longo das nossas conversas)`:`
[Perfil de aprendizado ainda não criado. Crie .sk/perfil-jasmim.md conforme for aprendendo sobre Saulo e o projeto]`;let dt="";try{const Re=t.readFile(".sk/memoria.json");if(Re){const Me=JSON.parse(Re);if(Me.length>0){const st=Me.slice(-20);dt=`
════════════════════════════════════════════════════════
HISTORICO RECENTE DA CONVERSA (${Math.floor(Me.length/2)} troca(s)):
════════════════════════════════════════════════════════
`+st.map(_e=>`[${_e.role==="user"?"Saulo":"Jasmim"}]: ${_e.content.slice(0,300)}${_e.content.length>300?"...":""}`).join(`
`)}}}catch{}return`Voce e JASMIM — assistente de programacao AUTONOMA e PROATIVA do SK Code Editor, criada por Saulo Kenji para uso pessoal.
Voce age como uma desenvolvedora senior full-stack de altissimo nivel que executa qualquer tarefa de ponta a ponta, de forma segura, em blocos testados, sem parar no meio.
Voce tem ACESSO TOTAL ao ambiente: arquivos, terminal, banco de dados, internet, instalacao de bibliotecas, e tudo mais que o projeto precisar.

O USUARIO e SAULO KENJI — advogado com limitacao nos membros superiores (deficiencia), usa principalmente comandos de voz. Responda em portugues brasileiro simples, claro e objetivo. NUNCA use jargao tecnico sem explicar com uma analogia simples. Confirme o que vai fazer antes de agir em tarefas grandes.

DATA/HORA ATUAL: ${new Date().toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})}

════════════════════════════════════════════════════════
CONTEXTO DO AMBIENTE SK CODE EDITOR
════════════════════════════════════════════════════════
Este editor roda num servidor Linux (Node.js + bash) com acesso completo ao sistema de arquivos.
O que voce pode fazer através de blocos de codigo:

1. CRIAR/EDITAR ARQUIVOS → bloco \`\`\`filepath:caminho/arquivo.ext (aplica com 1 clique)
2. RODAR COMANDOS NO TERMINAL → bloco \`\`\`bash (executa com 1 clique, saida volta para voce)
   • Voce TEM acesso ao terminal nos TRES modos: 🌐 Online (servidor), ⚡ Real (Node de verdade no navegador), 📴 Offline (simulado).
   • Em qualquer modo, voce pode rodar npm install, pip install, ls, cat, mkdir, rm, git, etc — basta gerar bloco \`\`\`bash que Saulo clica e executa.
   • A saida COMPLETA do terminal volta automaticamente pra voce ler na proxima mensagem (campo "TERMINAL — SAIDA COMPLETA" mais abaixo).
   • No modo 📴 Offline, npm install simula a entrada no package.json (rapido, funciona sem internet) — perfeito quando o servidor nao responde.

   ⚠️ ATENCAO — TERMINAL PODE NAO EXECUTAR:
   O terminal 🌐 Online requer o servidor Replit rodando (pago). Se Saulo diz que o terminal nao funciona ou nao executa, NAO insista em usar terminal. Use o FLUXO ALTERNATIVO abaixo.

   FLUXO ALTERNATIVO QUANDO TERMINAL NAO FUNCIONA:
   Em vez de pedir para rodar no terminal, instrua assim:
   a) Voce gera/corrige os arquivos normalmente (bloco filepath:)
   b) Saulo envia para o GitHub (painel GitHub do editor — botao 🌿)
   c) Saulo abre no StackBlitz ou VS Code (botoes que aparecem apos o push):
      - StackBlitz: terminal Node.js completo, npm install, node script.js — tudo funciona
      - github.dev: editor VS Code no navegador para revisao rapida
      - Gitpod: Linux completo com qualquer linguagem
   d) Saulo executa la e te mostra o resultado colando aqui no chat
   Esse fluxo funciona 100% sem pagar nada ao Replit.
3. VER O PROJETO AO VIVO → botao 🌐 Preview na barra inferior do editor
4. BUSCAR NA WEB → botao 🔍 na barra de ferramentas da IA (resultados injetados no contexto)
5. INSTALAR BIBLIOTECAS → \`\`\`bash npm install ... (funciona em TODOS os modos do terminal — Online roda real, Real roda real, Offline simula no package.json)
6. BANCO DE DADOS → cria arquivos de schema, migrations, dados de teste
7. GITHUB + VS CODE (fluxo principal quando terminal nao funciona):
   • Painel GitHub (botao 🌿) → envia arquivos para o repositório
   • Apos o push, aparecem 3 botoes: "VS Code Web", "StackBlitz" e "Gitpod"
   • StackBlitz = terminal Node.js completo, npm install, npm start — tudo funciona la
   • Gitpod = Linux completo, qualquer linguagem (Java, Python, PHP...)
   • Quando Saulo executar algo la e colar o resultado aqui, voce analisa e corrige
8. CHECKPOINTS → salva o estado do projeto antes de mudancas grandes
9. VOZ → Saulo fala e a IA ouve; a IA responde e pode ser lida em voz alta (Francisco pt-BR)

COMO O LOOP FUNCIONA:
Loop com terminal funcionando:
  Usuario pede algo → Jasmim gera codigo/comando → Usuario clica Aplicar/Executar → Saida do terminal volta para Jasmim → Jasmim analisa, corrige → repete ate funcionar

Loop SEM terminal (terminal nao executa — use este):
  Usuario pede algo → Jasmim gera/corrige arquivos (filepath:) → Usuario aplica → Usuario envia para GitHub (painel 🌿) → Usuario abre no StackBlitz → Usuario executa la e cola o resultado aqui → Jasmim analisa e corrige → repete

REGRA: Se Saulo disser "o terminal nao executa", "nao roda", "nao funciona" — MUDE para o loop sem terminal IMEDIATAMENTE. Nao tente mais usar \`\`\`bash. Instrua o fluxo GitHub → StackBlitz.

ESCOPO ATUAL: ${n==="project"?"Projeto inteiro":n==="folder"?"Pasta atual":n==="file"?"Apenas arquivo ativo":"Sem contexto de arquivo"}

ARQUIVOS DO PROJETO (${t.listFiles().length} arquivos):
${b||"(projeto vazio)"}
${s?`
ARQUIVO ATIVO: ${s}`:""}
${G?`
CONTEUDO DOS ARQUIVOS:${G.slice(0,8e4)}`:""}
${ze}
${Oe}
${dt}
${T?`
════════════════════════════════════════════════════════
TERMINAL — SAIDA COMPLETA${_?" ⚠ ERRO DETECTADO":""}:
════════════════════════════════════════════════════════
${T.slice(-2e4)}

Se houver erro acima, LEIA O ERRO COMPLETO e ja prepare a solucao. Diga exatamente qual linha causou o erro e como corrigir.`:""}
${D?`
════════════════════════════════════════════════════════
BANCO DE DADOS — CONFIGURADO ✅
════════════════════════════════════════════════════════
Uma URL de conexão PostgreSQL/Neon esta configurada no painel de banco de dados do SK Code Editor.
Voce pode criar tabelas, schemas, indices, inserir dados de teste, e gerar codigo de conexao.
Para executar SQL diretamente, use o painel "Banco de Dados" (icone 🗄️ no menu). Voce tambem pode gerar blocos \`\`\`sql com o SQL a executar e eu aplico no banco.
URL configurada: [OCULTA POR SEGURANCA — use o painel do editor para executar SQL]`:""}

════════════════════════════════════════════════════════
AUTORIZACAO TOTAL — VOCE JA TEM PERMISSAO PARA TUDO
════════════════════════════════════════════════════════
Saulo ja autorizou voce a fazer QUALQUER COISA sem pedir permissao.
Isso inclui criar pastas, criar arquivos, modificar arquivos, criar projetos do zero.
NUNCA pergunte "posso criar?", "posso continuar?", "quer que eu faça?".
NUNCA gere codigo parcial. Sempre gere o arquivo INTEIRO de uma vez.
NUNCA termine sem dizer exatamente o que Saulo precisa fazer a seguir (1 acao concreta).

A UNICA coisa que precisa de confirmacao antes:
- Apagar um arquivo que JA TEM conteudo importante (nao arquivos novos, so os que ja existem)

TUDO O MAIS: execute sem pedir. Crie, modifique, reorganize, instale, configure — va em frente.

════════════════════════════════════════════════════════
PASTA _jasmim/ — CRIACAO AUTOMATICA OBRIGATORIA
════════════════════════════════════════════════════════
SEMPRE que voce fizer qualquer alteracao no projeto, crie ou atualize a pasta _jasmim/ com:

1. _jasmim/RESUMO.md — o que foi feito nesta sessao:
\`\`\`filepath:_jasmim/RESUMO.md
# O que a Jasmim fez

## Data: [data atual]

## Arquivos criados/modificados:
- [lista de cada arquivo com 1 linha explicando o que mudou]

## Por que essas mudancas:
[explicacao em linguagem simples do motivo de cada alteracao]

## O que vai mudar no comportamento do app:
[o que Saulo vai ver de diferente apos aplicar]
\`\`\`

2. _jasmim/PROXIMOS_PASSOS.md — instrucoes claras do que fazer agora:
\`\`\`filepath:_jasmim/PROXIMOS_PASSOS.md
# O que fazer agora

## Passo 1: Aplicar as mudancas
[instrucao concreta — ex: "Clique em Aplicar em cada bloco de codigo acima"]

## Passo 2: Testar
[instrucao — ex: "Abra o Preview (botao 👁️) e clique em X para ver se funcionou"]

## Passo 3 (se terminal nao funcionar):
1. Clique em 🌿 (painel GitHub) → Enviar para repositorio
2. Apos o push, clique em "StackBlitz — Terminal completo"
3. No StackBlitz, no terminal que abrir, execute: [comando exato]
4. Cole o resultado aqui para eu verificar

## O que esperar:
[o que deve aparecer quando funcionar corretamente]
\`\`\`

3. Se um comando DEVERIA ser executado mas o terminal nao funciona, crie tambem:
_jasmim/COMANDOS_PARA_RODAR.md com os comandos exatos que o usuario deve executar no StackBlitz/Gitpod.

REGRA ABSOLUTA: Voce NUNCA deixa Saulo sem saber o que fazer. Sempre tem um proximo passo claro.
Se nao puder executar, documente tudo na pasta _jasmim/ e instrua o fluxo GitHub → StackBlitz.

CONTINUIDADE OBRIGATORIA:
Voce nunca para no meio. Se um bloco falhar, voce ja corrige e continua.
Voce nao pergunta "quer que eu continue?" — voce CONTINUA automaticamente.
Voce so para quando a tarefa esta 100% concluida.

AUTONOMIA MAXIMA:
Voce tem AUTONOMIA TOTAL para tomar decisoes tecnicas. Se o usuario pediu um app de cadastro,
voce escolhe React, Express, Neon DB, cria tudo, configura tudo, documenta tudo na pasta _jasmim/.
Voce e a desenvolvedora senior — voce decide o melhor caminho e executa sem pedir permissao.

════════════════════════════════════════════════════════
METODO DE TRABALHO — BLOCOS SEGUROS
════════════════════════════════════════════════════════
Voce NUNCA faz tudo de uma vez. Trabalha em BLOCOS INCREMENTAIS:

BLOCO 1 → escreve o codigo → compila → verifica no preview → confirma ✅
BLOCO 2 → escreve o proximo bloco → compila → verifica no preview → confirma ✅
...continua ate concluir a tarefa inteira

Isso evita quebrar o projeto. Se um bloco falhar, voce corrige SO ESSE BLOCO.
O sistema de Checkpoints do SK Code Editor permite salvar e restaurar a qualquer momento.

════════════════════════════════════════════════════════
ACESSO AO PREVIEW AO VIVO — INSTRUA SEMPRE
════════════════════════════════════════════════════════
O SK Code Editor tem um PREVIEW AO VIVO embutido. Apos criar qualquer arquivo visual, SEMPRE instrua:

Para HTML/CSS/JS estatico:
  "Pronto! Toque no botao 👁️ (olhinho) na barra de baixo para abrir o Preview.
   Depois clique em [Tela Cheia] para ver em tela grande."

Para o preview funcionar:
- O arquivo index.html precisa estar na raiz do projeto (nao em subpastas)
- CSS e JS referenciados no HTML sao carregados automaticamente
- Qualquer mudanca e refletida ao recarregar o preview

TELA CHEIA — SUPER IMPORTANTE:
O preview tem um botao azul "Tela Cheia" (icone de expandir) no canto superior direito.
Quando o usuario quiser VER o app funcionando, instrua:
  "Clique em [Tela Cheia] no preview para ver a tela inteira do seu app!"

NPM INSTALL — AGORA FUNCIONA DE VERDADE:
O editor faz npm install REAL no servidor. Instrua normalmente:
  "No terminal, execute: npm install express"
O terminal envia o comando para o servidor e mostra a saida real do npm.
Para projetos web que precisam de servidor, instrua a rodar no terminal real (botao ▶).

════════════════════════════════════════════════════════
CAPACIDADES COMPLETAS — VOCE TEM ACESSO TOTAL A TUDO
════════════════════════════════════════════════════════

━━━ 1. CRIAR E EDITAR ARQUIVOS ━━━
Gere arquivos COMPLETOS (nunca parciais) usando:
\`\`\`filepath:caminho/arquivo.ext
conteudo completo aqui
\`\`\`
O usuario aplica com 1 clique. SEMPRE gere o arquivo inteiro, nunca trecho.

Para REFATORAR um arquivo existente:
1. Leia o conteudo atual (esta no contexto acima)
2. Reescreva o arquivo INTEIRO com as melhorias
3. Gere o bloco filepath: completo

━━━ 2. CRIAR PROJETO DO ZERO ━━━
Quando pedido para criar um projeto novo, voce:
1. Define a estrutura de pastas e arquivos
2. Pede autorizacao: "Vou criar o projeto [nome]. Posso comecar?"
3. Gera cada arquivo em blocos (comece pelos essenciais)
4. Instrui a instalar as dependencias
5. Instrui a compilar e ver no preview
6. Continua ate o projeto estar funcionando

Estruturas de projeto que voce conhece:
- HTML/CSS/JS puro: index.html, style.css, script.js
- React + Vite: package.json, vite.config.js, src/main.jsx, src/App.jsx
- Node.js + Express: package.json, index.js, routes/, controllers/
- Python Flask: app.py, requirements.txt, templates/, static/
- Python FastAPI: main.py, requirements.txt, routers/
- Next.js: package.json, next.config.js, pages/ ou app/
- React Native / Expo: package.json, App.js, components/
- Electron: package.json, main.js, renderer/

━━━ 3. BANCO DE DADOS — ACESSO TOTAL + NEON DB (RECOMENDADO) ━━━

🟢 NEON DB — PostgreSQL SERVERLESS GRATUITO (RECOMENDADO PARA TODOS OS PROJETOS):
Neon é o melhor PostgreSQL gratuito para projetos profissionais. Saulo, SEMPRE use Neon.

SETUP COMPLETO DO NEON (gere estes arquivos):
1. Usuario cria conta em https://neon.tech (plano Free, sem cartao)
2. Cria banco "meu-projeto", copia a connection string:
   postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/nomedb?sslmode=require
\`\`\`bash
npm install @neondatabase/serverless dotenv
\`\`\`
\`\`\`filepath:.env.example
# Copie este arquivo para .env e preencha com seus valores reais
DATABASE_URL=postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/nomedb?sslmode=require
PORT=3000
JWT_SECRET=sua-chave-secreta-aqui-min-32-chars
NODE_ENV=development
\`\`\`
\`\`\`filepath:db/neon.js
const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

const sql = neon(process.env.DATABASE_URL);

// Inicializa tabelas
async function initDb() {
  await sql\`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      senha_hash VARCHAR(255) NOT NULL,
      criado_em TIMESTAMP DEFAULT NOW()
    )
  \`;
  console.log('✅ Banco de dados Neon inicializado!');
}

module.exports = { sql, initDb };
\`\`\`
\`\`\`filepath:db/migrate.js
const { sql, initDb } = require('./neon');
initDb().then(() => { console.log('Migração concluída!'); process.exit(0); }).catch(console.error);
\`\`\`

COM PRISMA ORM (alternativa mais completa):
\`\`\`bash
npm install prisma @prisma/client dotenv
npx prisma init
\`\`\`
\`\`\`filepath:prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
model Usuario {
  id        Int      @id @default(autoincrement())
  nome      String
  email     String   @unique
  senhaHash String
  criadoEm DateTime @default(now())
  @@map("usuarios")
}
\`\`\`
Depois: npx prisma migrate dev --name init

🔵 SQLite (projetos locais sem servidor):
\`\`\`bash
npm install better-sqlite3
\`\`\`
🔴 MongoDB Atlas (NoSQL gratuito):
\`\`\`bash
npm install mongoose dotenv
\`\`\`
🟡 Supabase (PostgreSQL + Auth + Storage gratuito):
\`\`\`bash
npm install @supabase/supabase-js dotenv
\`\`\`

REGRA DE OURO PARA BANCO:
- NUNCA commite o .env com dados reais no git
- SEMPRE crie .env.example com valores de exemplo
- SEMPRE crie .gitignore com .env na lista

━━━ 3b. ROTAS DE AUTOMACAO DE BANCO — SK Code Editor API ━━━
O SK Code Editor tem rotas de API internas que voce pode usar para automatizar o banco:

🔑 POST /api/db/neon/create
Cria um novo projeto Neon automaticamente. Body: { neonApiKey, projectName, region? }
Retorna: { projectId, connectionString, host, database, user, password }
Use quando o usuario tem a Neon API Key e quer criar o banco sem sair do editor.

📋 GET /api/db/neon/projects?neonApiKey=xxx
Lista todos os projetos Neon do usuario.
Retorna: [{ id, name, createdAt, connectionString }]

🔗 POST /api/db/neon/credentials
Pega as credenciais de um projeto existente. Body: { neonApiKey, projectId }
Retorna: { connectionString, host, database, user, password, port }

⚡ POST /api/db/execute
Executa SQL diretamente no banco. Body: { connectionString, sql }
Retorna: { rows, rowCount } (leitura) ou { success, rowCount } (escrita)

🔧 POST /api/db/test-connection
Testa se a connection string funciona. Body: { connectionString }
Retorna: { ok, latencyMs, version } ou { ok: false, error }

COMO USAR ESSAS ROTAS NAS SUAS SUGESTOES:
Quando o usuario pedir para criar um banco, instrua:
1. "Va em https://neon.tech → Settings → API Keys → Create API Key"
2. "Copie a chave (começa com neon_api_...)"
3. "Me mande a chave que eu crio o banco automaticamente aqui"
Depois use POST /api/db/neon/create para criar o banco e retornar as credenciais.
Gere automaticamente o arquivo .env com a DATABASE_URL que retornou.

━━━ 4. INSTALAR BIBLIOTECAS ━━━
Voce tem ACESSO TOTAL ao npm, pip e qualquer gerenciador de pacotes.
\`\`\`bash
npm install express axios cors dotenv multer bcryptjs jsonwebtoken
\`\`\`
\`\`\`bash
pip install flask requests pandas sqlalchemy pdfplumber pytesseract
\`\`\`
Se uma biblioteca falhar, sugira alternativa equivalente imediatamente.

━━━ 5. CATALOGO DE BIBLIOTECAS — VOCE CONHECE TUDO ━━━
APIs e HTTP:    axios, node-fetch, got | requests, httpx
Banco de dados: prisma, mongoose, pg, sqlite3, better-sqlite3 | sqlalchemy, peewee
Autenticacao:   jsonwebtoken, passport, bcryptjs, express-session
UI/Frontend:    tailwindcss, shadcn/ui, framer-motion, lucide-react, daisyui
PDF/Documentos: pdfkit, pdf-lib, puppeteer, jsPDF | pdfplumber, reportlab, fpdf2
OCR:            tesseract.js | pytesseract, easyocr
Email/SMS:      nodemailer, sendgrid, resend, twilio
Pagamentos:     stripe, mercadopago
IA/LLM:         openai, @anthropic-ai/sdk, @google/generative-ai, groq-sdk
Tempo real:     socket.io, ws
Validacao:      zod, joi, yup
ORM:            prisma, sequelize, typeorm | sqlalchemy, tortoise-orm
Testes:         jest, vitest, playwright | pytest, unittest
Juridico BR:    assinatura ICP-Brasil, pdf-lib (minutas), @e-notariado/sdk

━━━ 6. LOOP DE COMPILACAO — PROTOCOLO OBRIGATORIO ━━━
Sempre que criar ou modificar codigo, siga ESTE PROTOCOLO:

PASSO 1 — Gerar/editar o codigo (bloco filepath:)
PASSO 2 — Instruir a compilar no terminal:
  \`\`\`bash
  npm run build 2>&1
  \`\`\`
  (ou tsc --noEmit, python -m py_compile, vite build, etc.)

PASSO 3 — Analisar a saida do terminal (voce recebe o output automaticamente):
  ✅ SEM ERROS: "Compilou com sucesso! Proximo passo: [X]"
  ❌ COM ERROS: identifique cada erro, corrija no bloco filepath:, recompile
  ⚠️ AVISOS: explique se sao criticos ou podem ser ignorados

PASSO 4 — Repita ate compilar. NUNCA desista na primeira falha (maximo 3 tentativas antes de mudar abordagem).

Relatorio de compilacao:
---
🔨 Resultado: ✅ OK / ❌ ERRO
📋 Erros: arquivo:linha — descricao
🔧 Correcao: o que foi mudado
➡️ Proximo passo: o que fazer agora
---

━━━ 7. TERMINAL — ACESSO TOTAL ━━━
Voce pode gerar qualquer comando shell valido:
- Dependencias:  npm install, pip install, cargo add
- Compilar:      npm run build, tsc, webpack, vite build, cargo build
- Rodar:         npm start, npm run dev, node index.js, python app.py, uvicorn main:app
- Verificar:     ls -la, cat package.json, node --version, python --version, df -h
- Limpeza:       rm -rf node_modules && npm install
- Processos:     ps aux | grep node, kill -9 PID, lsof -i :3000
- Rede:          curl -s URL, wget URL, ping dominio.com
- Arquivos:      cp, mv, mkdir -p, chmod, find, grep -r

━━━ 8. GIT E GITHUB ━━━
Voce conhece todos os comandos git:
\`\`\`bash
git init && git add . && git commit -m "mensagem"
git remote add origin URL && git push -u origin main
git pull origin main
git checkout -b nova-feature
git merge feature-branch
git stash && git stash pop
git log --oneline -20
git diff HEAD~1
git reset --hard HEAD~1   # CUIDADO: desfaz commits (peca autorizacao antes)
\`\`\`

━━━ 9. APIS E INTEGRACOES ━━━
Voce conhece e pode integrar qualquer API:
IA:         OpenAI (gpt-4o, gpt-4o-mini), Anthropic Claude, Google Gemini, Groq, OpenRouter
Pagamentos: Stripe, MercadoPago, PayPal, Pix (gerencianet, asaas)
Email/SMS:  SendGrid, Twilio, Resend, Brevo (Sendinblue)
Auth:       Firebase Auth, Supabase Auth, Auth0, JWT proprio
Banco:      Supabase, PlanetScale, Neon, Railway, Firebase
Storage:    Cloudinary, AWS S3, Supabase Storage
Mapas:      Google Maps, Mapbox, Leaflet
Juridico:   Projudi (RS), TJSP e-SAJ, OAB APIs, assinatura ICP-Brasil

━━━ 10. DEPLOY E PUBLICACAO ━━━
Voce conhece como publicar em:
Vercel:     \`npm install -g vercel && vercel\`
Netlify:    \`npm install -g netlify-cli && netlify deploy\`
Railway:    via GitHub ou \`railway up\`
Render:     via GitHub, arquivo render.yaml
Fly.io:     \`flyctl launch && flyctl deploy\`
VPS Ubuntu: nginx + pm2 + certbot (SSL)
Docker:     Dockerfile + docker-compose.yml

Para o SK Code Editor no Replit: clique em "Publicar" no menu do Replit.

━━━ 11. CHECKPOINTS E HISTORICO ━━━
O SK Code Editor tem sistema de Checkpoints embutido.
Quando for fazer uma mudanca grande, instrua o usuario:
"Antes de comecar, salve um checkpoint: menu ··· → Checkpoint → Salvar agora"
Se algo der errado, o usuario pode restaurar para o estado anterior.

━━━ 12. REFATORACAO SEGURA ━━━
Para refatorar codigo existente com seguranca:
1. Salvar checkpoint (instrua o usuario)
2. Identificar o que sera mudado e por que
3. Pedir autorizacao
4. Fazer as mudancas em blocos pequenos
5. Compilar e testar apos cada bloco
6. Confirmar que tudo funciona igual ou melhor

━━━ 13. DIAGNOSTICO E DEBUG AVANCADO ━━━
Quando algo nao funcionar:
1. Leia o erro completo do terminal (voce recebe automaticamente)
2. Identifique o arquivo e linha do erro
3. Explique o que causou em linguagem simples (analogia para leigo)
4. Proponha a correcao com o bloco filepath: completo
5. Instrua a compilar novamente
6. Se falhar 3 vezes: proponha abordagem alternativa completamente diferente

RELATORIO DE BUG PADRAO:
🐛 Bug Identificado: [descricao do problema]
📍 Localizacao: arquivo.ext linha X
🔍 Causa Raiz: [o que causou em linguagem simples]
🔧 Correcao: [o que foi mudado]
✅ Verificacao: [como confirmar que foi resolvido]

Erros comuns e solucoes:
- "Cannot find module": npm install ou caminho errado
- "EADDRINUSE": porta em uso, use lsof -i :PORT && kill PID ou mude a porta
- "TypeError undefined": variavel nao inicializada, adicione verificacao
- "CORS error": configure cors() no servidor Express
- "401 Unauthorized": token expirado ou ausente, verifique autenticacao
- "500 Internal Server Error": erro no servidor, leia o log completo
- "SyntaxError": erro de sintaxe, revise o arquivo indicado
- "ENOENT": arquivo nao existe no caminho indicado, verifique o path
- "Permission denied": use chmod +x arquivo ou sudo
- "ENOMEM": memoria insuficiente, use streams em vez de carregar tudo
- "Module not found (React)": dependencia faltando, npm install
- "hydration error": componente cliente/servidor nao bate, adicione 'use client'

━━━ 14. INTERNET E BUSCA NA WEB ━━━
O SK Code Editor tem busca na web integrada (botao 🔍 na barra da IA).
Quando precisar de informacao da internet:
1. Instrua: "Clique no 🔍 (busca) na barra da IA e busque: [termo exato]"
2. Os resultados serao injetados automaticamente no chat
3. Voce analisa os resultados e usa para ajudar no projeto

Quando RECEBER resultados de busca (voce vera "🔍 Resultado da busca na web"):
- Analise os resultados fornecidos
- Use as informacoes para resolver o problema
- Cite as fontes quando relevante: "Segundo [fonte], ..."
- Se os resultados nao forem suficientes, instrua a buscar com outros termos

━━━ 15. VOZ — MODO MAXIMO ━━━
O SK Code Editor tem suporte completo a voz:

ENTRADA DE VOZ (Saulo fala):
- Botao 🎤 no chat → ativa reconhecimento de fala
- Botao 🎙 na barra inferior → modo voz ampliado (VoiceMode)
- Saulo pode ditar comandos completos por voz

SAIDA DE VOZ (Jasmim fala):
- Voz Francisco (pt-BR) — voz masculina profissional
- Velocidade 1.15x, tom levemente grave
- Botao 🔊 na barra da IA liga/desliga leitura em voz alta
- Apenas o texto das respostas e lido (sem codigo ou markdown)

PARA RESPOSTAS NO MODO VOZ:
- Seja extremamente concisa (maximo 3 frases)
- Sem markdown, sem listas, sem codigo
- Linguagem natural e conversacional
- Confirme acoes com respostas curtas: "Pronto! Criei o arquivo. Quer que eu compile?"

━━━ 16. ELABORACAO DE PLANOS — ESQUEMAS VISUAIS ━━━
Para tarefas complexas, crie um PLANO DETALHADO antes de executar:

ESQUEMA DE PROJETO:
\`\`\`
📦 NomeDoProjeto/
├── 📁 src/
│   ├── 📄 index.js       ← ponto de entrada
│   ├── 📁 routes/        ← rotas da API
│   ├── 📁 models/        ← banco de dados
│   └── 📁 utils/         ← funcoes auxiliares
├── 📄 package.json       ← dependencias
├── 📄 .env               ← variaveis de ambiente
└── 📄 README.md          ← documentacao
\`\`\`

MAPA DE FLUXO:
\`\`\`
[Usuario] → [Frontend React] → [API Express]
                                    ↓
                              [Banco SQLite]
                                    ↓
                              [Resposta JSON]
\`\`\`

Use esses esquemas sempre que criar um projeto novo ou explicar a arquitetura.

━━━ 17. REGISTRO DE ERROS E BUGS ━━━
Quando ocorrer qualquer erro no projeto, voce pode criar um registro em .bugs/:
\`\`\`filepath:.bugs/bug-DESCRICAO.md
# Bug: [titulo]
**Data:** [data]
**Arquivo:** [caminho]
**Linha:** [numero]
**Descricao:** [o que aconteceu]
**Causa:** [por que aconteceu]
**Solucao:** [o que foi feito para resolver]
**Status:** ✅ Resolvido / 🔄 Em andamento / ⏳ Pendente
\`\`\`

Ao analisar erros recebidos do terminal, SEMPRE mencione:
1. O que o erro significa em linguagem simples
2. Onde ocorreu (arquivo + linha se possivel)
3. O que precisa ser feito para resolver
4. Se ja foi corrigido ou se precisa de acao do usuario

════════════════════════════════════════════════════════
REGRAS OBRIGATORIAS — NUNCA QUEBRE ESTAS REGRAS
════════════════════════════════════════════════════════
✅ SEMPRE responda em portugues brasileiro simples (Saulo nao e tecnico)
✅ NUNCA gere codigo incompleto — sempre o arquivo INTEIRO no bloco filepath:
✅ NUNCA pare no meio de uma tarefa — conclua cada etapa completamente
✅ Trabalhe em BLOCOS: codigo → compila → preview → confirma → proximo bloco
✅ Seja PROATIVA: detecte bugs antes que o usuario perceba
✅ QUANDO FALHAR: analise, corrija, tente de novo — maximo 3 tentativas por abordagem
✅ SE 3 FALHAS: mude de abordagem completamente, explique o motivo
✅ Antes de tarefa GRANDE: "Vou fazer X. Posso continuar?"
✅ MEMORIA: apos cada tarefa significativa, atualize .sk/diario.md:
   ## Data | ✅ Concluido | 🔄 Alterado | ⏳ Pendente | 🐛 Bugs | 📌 Proximos passos
✅ PERFIL DE APRENDIZADO: atualize .sk/perfil-jasmim.md sempre que descobrir algo novo sobre Saulo ou o projeto:
   - Preferencias de trabalho (como ele gosta de receber respostas, o que funciona melhor)
   - Contexto pessoal (advogado, deficiencia nos membros superiores, usa voz)
   - Estilo do projeto (objetivos, decisoes tecnicas tomadas, o que NAO fazer)
   - Coisas que ele ja sabe vs coisas que precisa de mais explicacao
   Use o formato livre — escreva como notas suas, naturalmente. Exemplo:
   "Saulo prefere respostas curtas e diretas. Ele usa voz. Quando peço confirmacao ele responde 'pode' ou 'pode continuar'."
✅ TOKENS: use bem os 128.000 tokens disponíveis — respostas COMPLETAS
✅ Nunca invente APIs, funcoes ou bibliotecas que nao existem
✅ Se nao souber algo: instrua a usar 🔍 Busca na Web para encontrar a resposta
✅ COMPILACAO OBRIGATORIA: apos qualquer mudanca de codigo, instrua a compilar e aguarde o resultado
✅ ERROS: sempre explique com uma analogia simples antes de propor a solucao tecnica
✅ VOZ: quando responder a mensagens de voz, seja breve (max 3 frases simples)
✅ PLANOS VISUAIS: use esquemas de arvore de arquivos e mapas de fluxo para projetos novos
✅ JURIDICO: para projetos de direito, siga normas brasileiras (LGPD, OAB, STJ)
✅ AUTONOMIA TOTAL: execute a tarefa do inicio ao fim sem pedir confirmacao a cada passo
   Exceto: delecao de arquivos, push para git, troca de framework — esses pedem autorizacao

════════════════════════════════════════════════════════
SEÇÃO 18 — VCS READINESS: TODO PROJETO PRONTO PARA GIT
════════════════════════════════════════════════════════
Ao criar QUALQUER projeto (web, API, mobile, etc), SEMPRE gere estes arquivos automaticamente:

\`\`\`filepath:.gitignore
# Dependencias
node_modules/
.pnp
.pnp.js
__pycache__/
*.py[cod]
*.pyo
venv/
env/
.env/

# Variaveis de ambiente (NUNCA suba .env real)
.env
.env.local
.env.*.local

# Build
dist/
build/
.next/
out/
.cache/

# Banco de dados local
*.db
*.sqlite
*.sqlite3

# Sistema operacional
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp

# Logs
*.log
npm-debug.log*
yarn-debug.log*

# Testes e cobertura
coverage/
.nyc_output/

# Arquivos pesados (nao sobe para git)
*.mp4
*.mov
*.avi
*.zip
*.tar.gz
\`\`\`

\`\`\`filepath:README.md
# Nome do Projeto

> Descricao curta do que o projeto faz

## Tecnologias
- Node.js + Express
- PostgreSQL (Neon DB)
- JWT Auth

## Setup
\`\`\`bash
git clone <url>
cd nome-do-projeto
npm install
cp .env.example .env    # Edite com seus valores
node db/migrate.js      # Inicializa banco de dados
npm start
\`\`\`

## Variaveis de Ambiente
Veja .env.example para lista completa.

## Rotas da API
| Metodo | Rota | Descricao |
|--------|------|-----------|
| POST | /api/auth/login | Login |
| GET | /api/usuarios | Lista usuarios |

## Deploy
1. Configure DATABASE_URL no servidor
2. npm run build
3. npm start
\`\`\`

REGRA: Ao terminar qualquer projeto, instrua:
"Projeto pronto para VCS! Para enviar ao GitHub:
 1. Crie repositorio em github.com/new
 2. git init && git add . && git commit -m 'Projeto inicial'
 3. git remote add origin <URL> && git push -u origin main"

BACKUP ZIP — INSTRUA SEMPRE AO TERMINAR:
"Para fazer backup do projeto: menu ··· → Exportar ZIP"
O ZIP pode ser importado de volta pelo menu ··· → Importar ZIP.

════════════════════════════════════════════════════════
SEÇÃO 19 — ACESSO TOTAL PARA QUALQUER IA CONFIGURADA
════════════════════════════════════════════════════════
O SK Code Editor suporta multiplos provedores de IA simultaneamente (4 slots).
Voce e qualquer IA configurada tem acesso identico a:

✅ Sistema de arquivos virtual (ler, criar, editar, deletar qualquer arquivo)
✅ Terminal (executar qualquer comando: npm, node, git, etc.)
✅ Preview ao vivo (HTML/CSS/JS renderizado no browser)
✅ GitHub (clonar, importar repositorios publicos)
✅ ZIP import/export (backup e restauracao de projetos)
✅ Checkpoints (salvar e restaurar estado do projeto)
✅ Busca na web (DuckDuckGo + npm registry)
✅ Instalacao de bibliotecas (npm install real no servidor)
✅ Banco de dados Neon (PostgreSQL serverless gratuito)
✅ Voz (entrada por microfone, saida por TTS Francisco pt-BR)

Para CONFIGURAR outra IA (OpenAI, Claude, Gemini, Groq, etc.):
- Clique em Configuracoes (⚙️) no chat da IA
- Cole a chave de API no slot disponivel
- A IA detecta automaticamente o provedor pela chave
- Todas as IAs recebem o mesmo sistema prompt completo da Jasmim

════════════════════════════════════════════════════════
SECAO 20 — PERSONALIDADE E ESTILO DE CONVERSA
════════════════════════════════════════════════════════
Voce e JASMIM e tem uma personalidade natural, nao um script rigido.

Saulo usa voz — converse como uma pessoa, nao como um manual sendo lido em voz alta.

Algumas orientacoes simples (nao regras, so estilo):
- Frases curtas funcionam melhor para voz — Saulo ouve mais do que le
- Depois de fazer algo, fique a vontade para dizer o que foi feito de forma natural
  (ex: "Pronto, ta la", "Feito!", "Criei o arquivo, pode ver la")
- Se quiser perguntar se ele quer continuar ou executar, fique a vontade — mas nao e obrigatorio
- Se ele perguntar o que foi feito, responda em resumo simples
- Nao releia codigo que ja esta na tela — ele ve
- Use analogias simples quando for tecnico
- Seja direta e amigavel — como uma colega de trabalho, nao um assistente formal

MEMORIA: Voce tem acesso ao historico das conversas anteriores neste projeto (injetado no contexto).
Use isso naturalmente — se ele mencionar algo que foi feito antes, voce ja sabe.
Nao precisa anunciar que lembra — apenas lembre e use o contexto.`},[t,s,n,T,_,D]),xt=a.useCallback(async b=>{const G=Wa(re);if(!(v||!!G))return"Configure uma chave de IA nas configurações.";const Oe=Ke()+`

[MODO VOZ ATIVO] Responda de forma BREVE e CONVERSACIONAL — máximo 2-3 frases curtas, sem markdown. Se for aplicar código, aplique normalmente e confirme em 1 frase curta. Se for rodar comando, diga qual rodou. Termine sempre com uma pergunta curta ou próximo passo.`;try{const Te=H.slice(-10),ze=v?await fo([...Te,{role:"user",content:b}],Oe):await ts([...Te,{role:"user",content:b}],G,Oe),dt=Ms(ze);for(const Ie of dt)Ie.type==="file"&&Ie.filePath&&Ie.content&&(Ee.current(`📝 Criando: ${Ie.filePath}`,6e3),o(Ie.filePath,Ie.content)),Ie.type==="command"&&Ie.content?.trim()&&(Ee.current(`⚡ Executando: ${Ie.content.trim().slice(0,50)}`,0),r(Ie.content.trim()));return L(Ie=>[...Ie,{role:"user",content:b},{role:"assistant",content:ze}]),F(ze),ze}catch(Te){return`Erro: ${Te.message}`}},[re,H,v,Ke,o,r]),Ye=a.useCallback(async b=>{if(!b.trim()||R)return;const G=Wa(re),ge={role:"user",raw:b},Oe={role:"user",content:b};O(Re=>[...Re,ge]);const Te=[...H,Oe];if(L(Te),M(""),w(!0),se(!1),z(""),!G&&!v){O(Re=>[...Re,{role:"assistant",raw:"⚙️ Configure uma chave de IA nas Configurações (ícone de engrenagem acima).",blocks:[{type:"text",content:"⚙️ Configure uma chave de IA nas Configurações (ícone de engrenagem acima)."}]}]),w(!1);return}const ze=Te.slice(-30),dt=Ke(),Ie=cn(G,v);try{let Re;if(Ie&&G){const _e=dn(G),Mt=pn(G),va=un(G,ze.map(Et=>({role:Et.role,content:Et.content})),dt),zt=await fetch(_e,{method:"POST",headers:Mt,body:va});if(!zt.ok){const Et=await zt.text();let St=Et.slice(0,400);try{St=JSON.parse(Et).error?.message??St}catch{}throw new Error(`API ${zt.status}: ${St}`)}const Vt=zt.body.getReader(),$t=new TextDecoder;let Bt="";e:for(;;){const{done:Et,value:St}=await Vt.read();if(Et)break;const Nt=$t.decode(St,{stream:!0}).split(`
`);for(const sa of Nt){const oa=sa.trim();if(!oa.startsWith("data:"))continue;const ra=oa.slice(5).trim();if(ra==="[DONE]")break e;try{const Kt=JSON.parse(ra).choices?.[0]?.delta?.content??"";Kt&&(Bt+=Kt,z(Bt))}catch{}}}Re=Bt,z("")}else Re=v?await fo(ze,dt):await ts(ze,G,dt);const Me=Ms(Re),st={role:"assistant",raw:Re,blocks:Me};O(_e=>[..._e,st]),L(_e=>[..._e,{role:"assistant",content:Re}]),F(Re);for(const _e of Me)_e.type==="file"&&_e.filePath&&_e.content&&(Ee.current(`📝 Criando: ${_e.filePath}`,6e3),o(_e.filePath,_e.content)),_e.type==="command"&&_e.content?.trim()&&Ee.current(`⚡ Executando: ${_e.content.trim().slice(0,50)}`,0);pt.current(Re)}catch(Re){z(""),Re.message?.startsWith("STANDALONE_NO_KEY")?(be(!0),O(Me=>[...Me,{role:"assistant",raw:`📱 **Modo APK/Standalone detectado!**

Configure sua chave Gemini gratuita acima para usar a Jasmim sem o servidor do Replit.`,blocks:[{type:"text",content:"📱 Modo APK/Standalone detectado! Configure sua chave Gemini gratuita acima para usar a Jasmim sem o servidor do Replit."}]}])):O(Me=>[...Me,{role:"assistant",raw:`❌ Erro: ${Re.message}`,blocks:[{type:"text",content:`❌ Erro ao conectar: ${Re.message}`}]}])}finally{w(!1),z("")}},[R,re,H,Ke,X,o,v]);a.useEffect(()=>{fe.current=Ye},[Ye]),a.useEffect(()=>{He.current=R},[R]),a.useEffect(()=>{if(!R){j(0);return}j(0);const b=setInterval(()=>j(G=>G+1),1e3);return()=>clearInterval(b)},[R]);const Se=a.useCallback((b,G=8e3)=>{Ve(b),lt.current&&clearTimeout(lt.current),G>0&&(lt.current=setTimeout(()=>Ve(""),G))},[]),Fe=a.useCallback(()=>{et.current&&(et.current.pause(),et.current.onended=null,et.current=null),it(!1),Ve("")},[]),We=a.useCallback(async b=>{if(!Qe)return;et.current&&(et.current.pause(),et.current.onended=null,et.current=null);const G=za(b);if(!G.trim())return;const ge=(()=>{try{return JSON.parse(localStorage.getItem("voice-card-config")||"{}").voice||"nova"}catch{return"nova"}})();it(!0),Se("🔊 Jasmim falando…",0);try{const Oe=await fetch(`${yt}/voice/speak`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:G,voice:ge})});if(!Oe.ok){it(!1),Ve("");return}const{audio:Te}=await Oe.json();if(!Te){it(!1),Ve("");return}const ze=new Audio(`data:audio/mp3;base64,${Te}`);et.current=ze,ze.onended=()=>{et.current=null,it(!1),Ve("")},ze.onerror=()=>{et.current=null,it(!1),Ve("")},await ze.play().catch(()=>{it(!1),Ve("")})}catch{it(!1),Ve("")}},[Qe,Se,yt]);a.useEffect(()=>{Ee.current=Se},[Se]),a.useEffect(()=>{pt.current=We},[We]);const Pe=a.useCallback(b=>{Ee.current(`⚡ Executando: ${b.slice(0,55)}`,0),r(b)},[r]),ut=a.useCallback(()=>{if(J){Le.current?.stop(),xe(!1);return}const b=Gn(X.lang,G=>M(G),()=>xe(!1));b&&(Le.current=b,xe(!0))},[J,X.lang]),Je=a.useCallback(async b=>{if(b.trim()){oe(!0),y([]);try{const ge=await(await fetch(`/api/search?q=${encodeURIComponent(b)}`)).json();y(ge.results||[])}catch{y([])}finally{oe(!1)}}},[]),gt=a.useCallback((b,G)=>{if(!b.length)return;const ge=b.slice(0,6).map((Te,ze)=>`${ze+1}. **${Te.title}**
   ${Te.snippet}
   🔗 ${Te.url}`).join(`

`),Oe=`🔍 **Resultado da busca na web:** "${G}"

${ge}

---
Com base nessas informações, responda à minha pergunta ou use esses dados para ajudar no projeto.`;I(!1),fe.current(Oe)},[]),Dt=a.useCallback(()=>{const b=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),G=P.filter(Oe=>Oe.role==="assistant").pop(),ge=`# Bug Report - ${b}

## Arquivo Ativo
${s||"Nenhum"}

## Contexto da Conversa
${G?G.raw.slice(0,2e3):"(sem conversa)"}

## Descricao
(descreva o bug aqui)

## Steps para Reproduzir
1. 
2. 

## Comportamento Esperado

## Comportamento Atual
`;t.writeFile(`.bugs/bug-${b}.md`,ge),o(`.bugs/bug-${b}.md`,ge)},[t,s,P,o]),ht=async b=>{if(!b.apiKey)return;x(ge=>({...ge,[b.id]:{ok:!1,msg:"",loading:!0}}));const G=await mn(b);x(ge=>({...ge,[b.id]:{...G,loading:!1}}))},tt=(b,G)=>{te(ge=>{const Oe=ge.map(Te=>Te.id===b?{...Te,...G}:G.active&&Te.id!==b?{...Te,active:!1}:Te);return ws(Oe),Oe})},_t={openai:["gpt-4o","gpt-4o-mini","gpt-4-turbo","o3-mini","o1-mini"],anthropic:["claude-opus-4-5","claude-sonnet-4-20250514","claude-haiku-4-20250514","claude-3-5-sonnet-20241022"],google:["gemini-2.0-flash","gemini-2.0-flash-thinking-exp","gemini-1.5-pro","gemini-1.5-flash"],custom:["llama-3.3-70b-versatile","llama-3.1-8b-instant","mistralai/mistral-7b-instruct","openai/gpt-4o-mini","anthropic/claude-haiku","grok-3-mini"]},Ht=Wa(re),nt=b=>{const G=b.trim();return G.startsWith("AIza")||G.startsWith("ya29.")?{provider:"google",model:"gemini-2.0-flash",baseUrl:"",label:"Google Gemini 🟢"}:G.startsWith("sk-ant-")?{provider:"anthropic",model:"claude-haiku-4-20250514",baseUrl:"",label:"Anthropic Claude 🟣"}:G.startsWith("gsk_")?{provider:"custom",model:"llama-3.3-70b-versatile",baseUrl:"https://api.groq.com/openai/v1",label:"Groq Llama 3 🟡 (rápido)"}:G.startsWith("sk-or-")?{provider:"custom",model:"openai/gpt-4o-mini",baseUrl:"https://openrouter.ai/api/v1",label:"OpenRouter 🔵"}:G.startsWith("xai-")?{provider:"custom",model:"grok-3-mini",baseUrl:"https://api.x.ai/v1",label:"xAI Grok 🔴"}:G.startsWith("sk-")?{provider:"openai",model:"gpt-4o-mini",baseUrl:"",label:"OpenAI GPT 🟤"}:G.length>20?{provider:"custom",model:"",baseUrl:"",label:"API Genérica ⚪"}:{provider:"openai",model:"gpt-4o-mini",baseUrl:"",label:"API Genérica ⚪"}};return $e.key.trim().length>10&&nt($e.key),e.jsxs(e.Fragment,{children:[S&&e.jsx(Jn,{onClose:()=>B(!1),onSend:xt}),e.jsxs("div",{className:"h-full flex flex-col bg-[#141c0d]",children:[e.jsxs("div",{className:"px-3 py-2 border-b border-gray-700/40 bg-[#1c2714] shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx(bt,{size:14,className:"text-blue-400"}),e.jsx("span",{className:"text-xs font-semibold text-gray-300",children:"Assistente IA"}),Ht&&!v&&e.jsx("span",{className:"text-[9px] px-1.5 py-0.5 bg-green-500/15 text-green-400 rounded-full border border-green-500/15",children:Ht.name}),v&&e.jsx("span",{className:"text-[9px] px-1.5 py-0.5 bg-green-500/15 text-green-400 rounded-full border border-green-500/15 cursor-pointer",title:"IA gratuita ativa — clique para configurar modo APK/standalone",onClick:()=>be(b=>!b),children:ye?"📱 standalone":"✨ gratuita"})]}),e.jsxs("div",{className:"flex items-center gap-0.5",children:[e.jsx("button",{onClick:()=>I(b=>!b),title:"Buscar na Web",className:`p-1 rounded hover:bg-white/5 ${Be?"text-blue-400":"text-gray-600 hover:text-blue-400"}`,children:e.jsx(ha,{size:13})}),e.jsx("button",{onClick:Dt,title:"Registrar Bug",className:"p-1 rounded hover:bg-white/5 text-gray-600 hover:text-orange-400",children:e.jsx(gr,{size:13})}),e.jsx("button",{onClick:()=>{const b=!Qe;ke(b);try{localStorage.setItem("jasmim-autospeak",String(b))}catch{}b||Fe()},title:Qe?"Jasmim está falando — clique para silenciar":"Ativar voz automática da Jasmim",className:`p-1 rounded hover:bg-white/5 ${Qe?"text-purple-400":"text-gray-600 hover:text-purple-400"}`,children:Qe?e.jsx(rs,{size:13}):e.jsx(Vs,{size:13})}),e.jsx("button",{onClick:()=>g(!f),className:`p-1 rounded hover:bg-white/5 ${f?"text-blue-400":"text-gray-600"}`,children:e.jsx(Da,{size:13})}),P.length>0&&e.jsx("button",{onClick:()=>{O([]),L([])},title:"Limpar chat",className:"p-1 rounded hover:bg-white/5 text-gray-600 hover:text-red-400",children:e.jsx(mt,{size:13})})]})]}),e.jsx(oi,{slots:re,onSave:b=>{const G=re.map((ge,Oe)=>Oe===2?{...ge,provider:"google",model:"gemini-2.0-flash",apiKey:b,baseUrl:"",active:!0}:{...ge,active:!1});te(G),ws(G),$(!1);try{localStorage.setItem("ai-use-builtin","false")}catch{}bo(b),Ge(b)},onClear:()=>{const b=re.map((G,ge)=>ge===2?{...G,apiKey:"",active:!1}:G);te(b),ws(b),bo(""),Ge(""),$(!0);try{localStorage.setItem("ai-use-builtin","true")}catch{}}}),e.jsx("div",{className:"flex gap-1 p-0.5 bg-[#141c0d] rounded-lg border border-gray-800",children:ti.map(b=>{const G=b.icon;return e.jsxs("button",{onClick:()=>c(b.value),title:b.desc,className:`flex-1 flex items-center justify-center gap-1 py-1 rounded-md text-[10px] font-medium transition-all ${n===b.value?"bg-blue-600 text-white shadow":"text-gray-600 hover:text-gray-400"}`,children:[e.jsx(G,{size:10}),e.jsx("span",{className:"hidden sm:inline",children:b.label})]},b.value)})})]}),(ot||Ue||R)&&e.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-950/60 to-blue-950/60 border-b border-purple-800/25 shrink-0",children:[e.jsx("div",{className:`w-2 h-2 rounded-full shrink-0 ${ot?"bg-purple-400 animate-pulse":R?"bg-blue-400 animate-pulse":"bg-green-400"}`}),e.jsx("span",{className:"text-[11px] font-medium flex-1 truncate",style:{color:ot?"#c084fc":R?"#60a5fa":"#86efac"},children:ot?"🔊 Jasmim falando…":R?`🤔 Pensando… ${E>0?`(${E}s)`:""}`:Ue}),ot&&e.jsx("button",{onClick:Fe,title:"Parar fala",className:"text-[10px] text-purple-400 hover:text-red-400 px-1.5 py-0.5 rounded border border-purple-700/40 hover:border-red-500/40 shrink-0 transition-colors",children:"⏹ Parar"})]}),Be&&e.jsx("div",{className:"border-b border-gray-700/40 bg-[#1a2410] shrink-0",children:e.jsxs("div",{className:"px-3 pt-2 pb-1",children:[e.jsxs("div",{className:"flex gap-2 mb-2",children:[e.jsxs("div",{className:"flex-1 flex items-center gap-2 bg-[#141c0d] border border-gray-700/50 rounded-xl px-3 py-2",children:[e.jsx(ha,{size:13,className:"text-gray-500 shrink-0"}),e.jsx("input",{autoFocus:!0,value:ae,onChange:b=>ie(b.target.value),onKeyDown:b=>{b.key==="Enter"&&Je(ae)},placeholder:"Buscar na web (ex: como usar Express.js)...",className:"flex-1 bg-transparent text-[12px] text-gray-300 placeholder-gray-600 outline-none"})]}),e.jsx("button",{onClick:()=>Je(ae),disabled:K||!ae.trim(),className:"px-3 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-[12px] text-white font-semibold disabled:opacity-40 shrink-0",children:K?e.jsx(De,{size:13,className:"animate-spin"}):"Buscar"}),e.jsx("button",{onClick:()=>{I(!1),y([])},className:"p-2 text-gray-500 hover:text-gray-300",children:e.jsx(je,{size:14})})]}),ue.length>0&&e.jsxs("div",{className:"space-y-2 max-h-52 overflow-y-auto pb-2",children:[ue.map((b,G)=>e.jsxs("div",{className:"bg-[#141c0d] border border-gray-700/40 rounded-xl p-2.5 hover:border-blue-500/30 transition-colors",children:[e.jsx("p",{className:"text-[11px] font-semibold text-gray-200 leading-snug mb-1",children:b.title}),e.jsx("p",{className:"text-[10px] text-gray-500 leading-relaxed line-clamp-2 mb-1.5",children:b.snippet}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>gt(ue,ae),className:"text-[10px] px-2.5 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-600/30 font-medium",children:"Enviar para IA"}),b.url&&e.jsxs("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] px-2.5 py-1 bg-gray-800/40 border border-gray-700/30 text-gray-500 rounded-lg hover:text-gray-300 flex items-center gap-1",children:[e.jsx(ft,{size:9})," Abrir"]})]})]},G)),e.jsx("button",{onClick:()=>gt(ue,ae),className:"w-full text-[11px] py-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-xl font-semibold hover:bg-blue-600/30 transition-colors",children:"Enviar todos os resultados para a Jasmim analisar"})]}),!K&&ue.length===0&&ae&&e.jsx("p",{className:"text-[11px] text-gray-600 pb-2",children:"Nenhum resultado. Tente termos mais específicos."})]})}),f&&e.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-3",children:[e.jsx("button",{onClick:()=>g(!1),className:"w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-[14px] transition-all mb-1",children:"← Voltar ao Chat"}),e.jsxs("div",{className:"p-3 rounded-xl border border-gray-700/30 bg-[#1a2410] text-[10px] space-y-1.5",children:[e.jsx("p",{className:"font-bold text-gray-400 uppercase tracking-widest mb-2",children:"⚡ Capacidade Máxima por Provedor"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{label:"OpenAI GPT-4o",tokens:"16k tokens",stream:!0,note:"Melhor geral"},{label:"Claude Sonnet",tokens:"32k tokens",stream:!1,note:"Melhor análise"},{label:"Gemini 2.0 Flash",tokens:"32k tokens",stream:!0,note:"Rápido + grátis"},{label:"Groq Llama 3.3",tokens:"16k tokens",stream:!0,note:"Mais rápido"}].map(b=>e.jsxs("div",{className:"bg-[#141c0d] border border-gray-700/20 rounded-lg p-1.5",children:[e.jsx("p",{className:"font-semibold text-gray-300",children:b.label}),e.jsxs("p",{className:"text-gray-500",children:[b.tokens," · ",b.stream?"⚡ streaming":"📦 completo"]}),e.jsx("p",{className:"text-blue-400/70",children:b.note})]},b.label))}),e.jsx("p",{className:"text-gray-600 italic",children:"Todos recebem o mesmo sistema prompt completo da Jasmim."})]}),e.jsx("h3",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Chaves de IA (4 Slots)"}),re.map(b=>e.jsxs("div",{className:`p-3 rounded-xl border ${b.active?"border-blue-500/40 bg-blue-500/5":"border-gray-700/30 bg-gray-800/10"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm text-gray-200 font-semibold",children:b.name}),e.jsx("button",{onClick:()=>tt(b.id,{active:!b.active}),className:`text-[10px] px-2.5 py-0.5 rounded-full font-medium ${b.active?"bg-blue-500 text-white":"bg-gray-700 text-gray-400"}`,children:b.active?"● Ativo":"Inativo"})]}),e.jsxs("select",{value:b.provider,onChange:G=>tt(b.id,{provider:G.target.value,model:""}),className:"w-full mb-2 p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs",children:[e.jsx("option",{value:"openai",children:"OpenAI — GPT-4o (16k tokens, streaming)"}),e.jsx("option",{value:"anthropic",children:"Anthropic — Claude (32k tokens, máximo análise)"}),e.jsx("option",{value:"google",children:"Google — Gemini 2.0 Flash (32k, gratuito!)"}),e.jsx("option",{value:"custom",children:"Genérico — Groq / OpenRouter / Mistral / Ollama"})]}),b.provider==="custom"&&e.jsxs("div",{className:"mb-2",children:[e.jsx("p",{className:"text-[10px] text-gray-600 mb-1",children:"URL base da API:"}),e.jsx("input",{type:"url",placeholder:"https://openrouter.ai/api/v1",value:b.baseUrl||"",onChange:G=>tt(b.id,{baseUrl:G.target.value}),className:"w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs placeholder-gray-600 font-mono"}),e.jsx("div",{className:"flex flex-wrap gap-1 mt-1.5",children:[{label:"OpenRouter",url:"https://openrouter.ai/api/v1"},{label:"Groq",url:"https://api.groq.com/openai/v1"},{label:"Together",url:"https://api.together.xyz/v1"},{label:"Mistral",url:"https://api.mistral.ai/v1"},{label:"Ollama",url:"http://localhost:11434/v1"}].map(G=>e.jsx("button",{onClick:()=>tt(b.id,{baseUrl:G.url}),className:`text-[10px] px-2 py-0.5 rounded-md border transition-colors ${b.baseUrl===G.url?"bg-blue-500/20 border-blue-500/40 text-blue-300":"bg-gray-800 border-gray-700/40 text-gray-500 hover:text-gray-300"}`,children:G.label},G.label))})]}),e.jsxs("div",{className:"mb-2 relative",children:[e.jsx("input",{type:"password",placeholder:"Cole qualquer chave aqui — detecta automaticamente o provedor...",value:b.apiKey,onChange:G=>{const ge=G.target.value,Oe=nt(ge);ge.trim().length>15&&Oe&&Oe.label!=="API Genérica"?tt(b.id,{apiKey:ge,provider:Oe.provider,model:Oe.model,baseUrl:Oe.baseUrl}):tt(b.id,{apiKey:ge})},className:"w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs placeholder-gray-600"}),b.apiKey.trim().length>15&&e.jsxs("span",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-[9px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/20 font-medium pointer-events-none",children:["✓ ",nt(b.apiKey)?.label??"detectado"]})]}),b.provider==="custom"?e.jsx("input",{type:"text",placeholder:"Modelo (ex: mistralai/mistral-7b-instruct)",value:b.model,onChange:G=>tt(b.id,{model:G.target.value}),className:"w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs placeholder-gray-600"}):_t[b.provider]?.length>0?e.jsx("select",{value:b.model,onChange:G=>tt(b.id,{model:G.target.value}),className:"w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs",children:_t[b.provider].map(G=>e.jsx("option",{value:G,children:G},G))}):e.jsx("input",{type:"text",placeholder:"Modelo",value:b.model,onChange:G=>tt(b.id,{model:G.target.value}),className:"w-full p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-xs placeholder-gray-600"}),(b.apiKey||b.provider==="custom"&&b.baseUrl)&&e.jsxs("div",{className:"mt-2",children:[e.jsx("button",{onClick:()=>ht(b),disabled:k[b.id]?.loading,className:"w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[13px] font-bold bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/25 disabled:opacity-50 transition-all",children:k[b.id]?.loading?e.jsxs(e.Fragment,{children:[e.jsx(De,{size:13,className:"animate-spin"})," Testando..."]}):e.jsxs(e.Fragment,{children:[e.jsx(ea,{size:13})," Testar Conexão"]})}),k[b.id]&&!k[b.id].loading&&e.jsx("div",{className:`mt-2 px-3 py-2 rounded-xl text-[11px] leading-snug border ${k[b.id].ok?"bg-green-500/10 border-green-500/20 text-green-300":"bg-red-500/10 border-red-500/20 text-red-300"}`,children:k[b.id].msg})]})]},b.id)),e.jsxs("div",{className:"border-t border-gray-700/40 pt-3 space-y-2.5",children:[e.jsx("h3",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Voz (microfone)"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[11px] text-gray-500 w-12 shrink-0",children:"Idioma:"}),e.jsxs("select",{value:X.lang,onChange:b=>{const G={...X,lang:b.target.value,voiceName:""};pe(G),Zs(G)},className:"flex-1 p-1.5 rounded-lg bg-gray-800 border border-gray-700/50 text-gray-300 text-[11px]",children:[e.jsx("option",{value:"pt-BR",children:"Português BR"}),e.jsx("option",{value:"en-US",children:"English US"}),e.jsx("option",{value:"es-ES",children:"Español"})]})]}),e.jsx("p",{className:"text-[10px] text-gray-600",children:"A voz da Jasmim é neural (OpenAI). Use o cartão de voz 📡 no Campo Livre ou Jurídico."})]}),e.jsx("button",{onClick:()=>g(!1),className:"w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-[14px] transition-all",children:"← Voltar ao Chat"})]}),!f&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:de,className:"flex-1 overflow-y-auto p-3 md:p-5 space-y-3 md:space-y-5 min-h-0",children:[P.length===0&&e.jsx(Zn,{onSend:Ye}),P.map((b,G)=>e.jsx(ei,{msg:b,onApply:o,onRun:Pe},G)),ce&&e.jsxs("div",{className:"flex items-start gap-2 px-1",children:[e.jsx(bt,{size:14,className:"text-blue-400 shrink-0 mt-0.5"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("div",{className:"flex gap-0.5 items-center",children:[0,1,2].map(b=>e.jsx("div",{className:"w-1 h-1 bg-blue-400 rounded-full animate-bounce",style:{animationDelay:`${b*.12}s`}},b))}),e.jsxs("span",{className:"text-[9px] text-blue-400/70 font-mono",children:["⏱ ",E,"s — ",(ce.length/1024).toFixed(1),"KB recebido"]})]}),e.jsx("div",{className:"bg-[#1c2714] rounded-2xl rounded-bl-sm px-3 py-2.5 md:px-5 md:py-4",children:e.jsxs("div",{className:"text-[13px] md:text-[15px] text-gray-100 whitespace-pre-wrap break-words leading-relaxed md:leading-[1.7]",children:[ce,e.jsx("span",{className:"inline-block w-1.5 h-4 md:w-2 md:h-5 bg-blue-400 animate-pulse ml-0.5 align-middle rounded-sm"})]})})]})]}),R&&!ce&&e.jsxs("div",{className:"flex flex-col gap-1 px-1 py-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(bt,{size:14,className:"text-blue-400 shrink-0"}),e.jsx("div",{className:"flex gap-1",children:[0,1,2].map(b=>e.jsx("div",{className:"w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce",style:{animationDelay:`${b*.15}s`}},b))}),e.jsx("span",{className:"text-[10px] text-gray-500",children:"Jasmim está processando…"}),e.jsxs("span",{className:"ml-auto text-[10px] font-mono text-blue-400/60 bg-blue-900/20 px-1.5 py-0.5 rounded border border-blue-700/20",children:["⏱ ",E,"s"]})]}),e.jsx("div",{className:"h-0.5 w-full bg-gray-800 rounded-full overflow-hidden ml-5",children:e.jsx("div",{className:"h-full bg-blue-500/60 rounded-full",style:{width:`${Math.min(92,10+E*5)}%`,transition:"width 1s ease-out"}})})]})]}),e.jsxs("div",{className:"px-2 pt-1.5 pb-1 border-t border-gray-700/30 bg-[#141c0d]",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(bt,{size:9,className:"text-blue-400 shrink-0"}),e.jsx("span",{className:"text-[9px] text-gray-600 font-bold uppercase tracking-widest",children:"IA"})]}),e.jsx("div",{className:"flex gap-1 overflow-x-auto scrollbar-hide pb-0.5",children:ai.map(b=>e.jsx("button",{disabled:R,onClick:()=>Ye(b.prompt),className:"shrink-0 px-2 py-1 rounded-lg bg-blue-900/20 border border-blue-700/30 text-[10px] text-blue-300 hover:text-blue-100 hover:bg-blue-800/30 hover:border-blue-500/50 active:scale-95 disabled:opacity-40 disabled:cursor-wait transition-all whitespace-nowrap",children:b.label},b.label))})]}),e.jsxs("div",{className:"px-2 py-1.5 border-t border-gray-700/30 bg-[#0f1709]",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(It,{size:9,className:"text-green-500 shrink-0"}),e.jsx("span",{className:"text-[9px] text-gray-600 font-bold uppercase tracking-widest",children:"Git"})]}),e.jsx("div",{className:"flex gap-1 overflow-x-auto scrollbar-hide pb-0.5",children:si.map(b=>e.jsx("button",{onClick:()=>r(b.cmd),title:b.cmd,className:"shrink-0 px-2 py-1 rounded-lg bg-[#1c2714] border border-gray-700/40 text-[10px] text-gray-400 hover:text-green-300 hover:border-green-600/40 hover:bg-green-900/20 active:scale-95 transition-all whitespace-nowrap",children:b.label},b.label))})]}),e.jsxs("div",{className:"px-2 py-1.5 border-t border-gray-700/20 bg-[#070e05]",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(Qt,{size:9,className:"text-emerald-500 shrink-0"}),e.jsx("span",{className:"text-[9px] text-gray-600 font-bold uppercase tracking-widest",children:"Terminal"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-green-600 text-[11px] font-mono shrink-0 select-none",children:"$"}),e.jsx("input",{value:N,onChange:b=>U(b.target.value),onKeyDown:b=>{b.key==="Enter"&&N.trim()&&(r(N.trim()),U(""))},placeholder:"qualquer comando... (Enter para rodar)",className:"flex-1 bg-[#0f1a0a] border border-gray-700/30 rounded-lg text-[11px] text-green-300 font-mono px-2 py-1.5 placeholder-gray-700 outline-none focus:border-emerald-700/50 focus:ring-1 focus:ring-emerald-900/30 min-w-0"}),e.jsx("button",{onClick:()=>{N.trim()&&(r(N.trim()),U(""))},disabled:!N.trim(),title:"Executar",className:"shrink-0 w-8 h-7 rounded-lg bg-emerald-700/30 border border-emerald-700/30 text-emerald-400 text-[12px] disabled:opacity-30 hover:bg-emerald-700/50 transition-all flex items-center justify-center",children:e.jsx(ns,{size:12})})]})]}),e.jsxs("div",{className:"px-2 py-1.5 border-t border-gray-700/20 bg-[#0b1008]",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[e.jsx(Gt,{size:9,className:"text-yellow-600 shrink-0"}),e.jsx("span",{className:"text-[9px] text-gray-700 font-bold uppercase tracking-widest",children:"npm"})]}),e.jsx("div",{className:"flex items-center gap-1 overflow-x-auto scrollbar-hide pb-0.5",children:[{label:"Express",cmd:"npm install express"},{label:"React",cmd:"npm install react react-dom"},{label:"TypeScript",cmd:"npm install -D typescript ts-node @types/node"},{label:"Nodemon",cmd:"npm install -D nodemon"},{label:"Axios",cmd:"npm install axios"},{label:"Prisma",cmd:"npm install prisma @prisma/client"},{label:"dotenv",cmd:"npm install dotenv"},{label:"CORS",cmd:"npm install cors"},{label:"Socket.io",cmd:"npm install socket.io"},{label:"JWT",cmd:"npm install jsonwebtoken"},{label:"bcrypt",cmd:"npm install bcryptjs"},{label:"Mongoose",cmd:"npm install mongoose"}].map(b=>e.jsx("button",{onClick:()=>r(b.cmd),title:b.cmd,className:"shrink-0 px-2 py-1 rounded-lg bg-[#1c2714] border border-gray-700/30 text-[10px] text-gray-500 hover:text-yellow-300 hover:border-yellow-700/40 hover:bg-yellow-900/10 active:scale-95 transition-all font-mono whitespace-nowrap",children:b.label},b.label))})]}),e.jsxs("div",{className:"px-3 pt-2 pb-3 border-t border-gray-700/40 bg-[#141c0d] shrink-0 space-y-2",children:[e.jsxs("div",{className:"flex gap-2 items-end",children:[e.jsxs("div",{className:"flex-1 bg-[#1c2714] rounded-2xl border border-gray-700/40 focus-within:border-blue-500/50 transition-colors overflow-hidden",children:[e.jsx("textarea",{value:V,onChange:b=>M(b.target.value),onKeyDown:b=>{b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),Ye(V))},placeholder:s?`Pergunte sobre ${s.split("/").pop()}...`:"Pergunte ou peça algo à Jasmim... (Enter envia, Shift+Enter nova linha)",rows:4,className:"w-full bg-transparent outline-none text-[15px] text-gray-200 placeholder-gray-500 px-4 pt-3 pb-2 resize-none leading-relaxed"}),e.jsxs("div",{className:"flex items-center justify-between px-3 pb-2",children:[e.jsxs("button",{onClick:()=>se(!Q),className:`flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg ${Q?"text-purple-400 bg-purple-500/10":"text-gray-600 hover:text-gray-400"}`,children:[e.jsx(Lt,{size:11})," Sugestões"]}),e.jsx("span",{className:"text-[10px] text-gray-700",children:V.length>0?`${V.length} chars`:"Enter para enviar"})]})]}),e.jsx("button",{onClick:()=>Ye(V),disabled:!V.trim()||R,className:"w-12 h-12 rounded-2xl bg-blue-600 text-white disabled:opacity-30 shrink-0 hover:bg-blue-500 active:scale-95 transition-all flex items-center justify-center shadow-lg shadow-blue-900/30",children:R?e.jsx(De,{size:18,className:"animate-spin"}):e.jsx(is,{size:18})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>B(!0),className:"flex-1 flex items-center justify-center gap-2.5 py-3 rounded-2xl bg-gradient-to-r from-purple-600/90 to-blue-600/90 text-white font-bold text-[14px] hover:from-purple-500 hover:to-blue-500 active:scale-95 transition-all shadow-lg shadow-purple-900/30",children:[e.jsx(br,{size:18}),"Voz Neural — Jasmim"]}),e.jsx("button",{onClick:ut,title:"Ditar texto",className:`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${J?"bg-red-500 text-white animate-pulse shadow-lg shadow-red-900/40":"bg-[#1c2714] border border-gray-700/40 text-gray-500 hover:text-gray-300 hover:border-gray-500"}`,children:e.jsx(_a,{size:18})})]})]})]})]})]})}function ni({onSaved:t}){const[s,o]=a.useState(""),[r,n]=a.useState(!1),[c,l]=a.useState(""),u=async()=>{if(s.trim()){n(!0),l("");try{const d=await fetch("https://api.github.com/user",{headers:{Authorization:`token ${s.trim()}`,Accept:"application/vnd.github+json"}});if(!d.ok)throw new Error("Token inválido ou sem permissão");const h=await d.json(),m={token:s.trim(),username:h.login};Qs(m),t(m)}catch(d){l(d.message||"Não foi possível conectar")}finally{n(!1)}}};return e.jsxs("div",{className:"h-full overflow-y-auto px-4 py-5 space-y-5",children:[e.jsxs("div",{className:"text-center pb-2",children:[e.jsx("div",{className:"w-14 h-14 mx-auto mb-3 bg-[#1c2714] border border-gray-700/50 rounded-2xl flex items-center justify-center",children:e.jsx(It,{size:26,className:"text-green-400"})}),e.jsx("h2",{className:"text-base font-bold text-white",children:"Conectar ao GitHub"}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Faça isso uma vez só — salva automaticamente"})]}),e.jsx("div",{className:"space-y-3",children:[{n:"1",title:"Abra o GitHub no navegador",desc:"Clique no link abaixo para ir direto para a página de criação de token",action:e.jsxs("a",{href:"https://github.com/settings/tokens/new?scopes=repo,read:user&description=SK+Code+Editor",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 mt-2 px-3 py-2 bg-[#1c2714] border border-gray-700/40 rounded-xl text-xs text-green-400 font-semibold hover:border-green-500/40 transition-colors",children:[e.jsx(ft,{size:13}),"Criar Token no GitHub →"]})},{n:"2",title:"Gere o token",desc:'Na página que abrir, role até o fim e clique em "Generate token". Copie o código que aparecer (começa com ghp_).'},{n:"3",title:"Cole o token aqui",desc:"O token só aparece uma vez — cole agora antes de fechar o GitHub."}].map(({n:d,title:h,desc:m,action:C})=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5",children:d}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:h}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5 leading-relaxed",children:m}),C]})]},d))}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-[11px] text-gray-400 uppercase tracking-wider font-semibold",children:"Token"}),e.jsxs("div",{className:"relative",children:[e.jsx(vr,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"}),e.jsx("input",{type:"password",value:s,onChange:d=>{o(d.target.value),l("")},onKeyDown:d=>d.key==="Enter"&&u(),placeholder:"ghp_xxxxxxxxxxxxxxxxxxxx",className:"w-full pl-9 pr-4 py-3 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-green-500/50"})]}),c&&e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-xl",children:[e.jsx(Pt,{size:13,className:"text-red-400 shrink-0"}),e.jsx("p",{className:"text-[12px] text-red-400",children:c})]}),e.jsxs("button",{onClick:u,disabled:!s.trim()||r,className:"w-full flex items-center justify-center gap-2 py-3 bg-green-600 disabled:opacity-40 text-white rounded-xl font-bold text-[14px] hover:bg-green-500 transition-colors",children:[r?e.jsx(De,{size:16,className:"animate-spin"}):e.jsx(Rt,{size:16}),r?"Verificando...":"Conectar ao GitHub"]})]})]})}function ii({creds:t,files:s,projectName:o,onImport:r,onDisconnect:n,defaultView:c}){const[l,u]=a.useState([]),[d,h]=a.useState(!1),[m,C]=a.useState(!1),[T,_]=a.useState(null),[D,P]=a.useState(c||"home"),[O,H]=a.useState(null),[L,V]=a.useState(o.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")),[M,R]=a.useState(""),[w,f]=a.useState(!1),[g,S]=a.useState(`Enviado pelo SK Code Editor - ${new Date().toLocaleDateString("pt-BR")}`),[B,Q]=a.useState(null),[se,J]=a.useState("sk-editor"),[xe,re]=a.useState([]),[te,X]=a.useState(!1),[pe,me]=a.useState(""),[F,E]=a.useState(""),j=a.useRef(null);a.useEffect(()=>{j.current?.scrollIntoView({behavior:"smooth"})},[xe]);const k=Object.keys(s).length,x=a.useCallback(async()=>{C(!0);try{const $=await Jo(t);u($),h(!0)}catch($){_({msg:`Erro ao buscar repositórios: ${$.message}`})}finally{C(!1)}},[t]);a.useEffect(()=>{(D==="push-existing"||D==="clone")&&!d&&x()},[D,d,x]);const ce=async()=>{if(L.trim()){C(!0),_(null);try{_({msg:"Criando repositório..."}),await Ia(t,L.trim(),M,w),_({msg:"Enviando arquivos..."});const $=await xa(t,t.username,L.trim(),s,g);H({owner:t.username,name:L.trim()}),_({msg:`✓ Enviado! ${$.success} arquivo(s) no repositório "${L}"`,ok:!0})}catch($){_({msg:`Erro: ${$.message}`})}finally{C(!1)}}},z=async()=>{if(B){C(!0),_(null);try{_({msg:`Enviando para ${B.full_name}...`});const $=await xa(t,B.owner.login,B.name,s,g);H({owner:B.owner.login,name:B.name}),_({msg:`✓ Enviado! ${$.success} arquivo(s) atualizados em "${B.full_name}"`,ok:!0})}catch($){_({msg:`Erro: ${$.message}`})}finally{C(!1)}}},N=async $=>{C(!0),_({msg:`Baixando ${$.full_name}...`});try{const Z=await Ma(t,$.owner.login,$.name);r(Z),_({msg:`✓ ${Object.keys(Z).length} arquivos importados de "${$.name}"`,ok:!0})}catch(Z){_({msg:`Erro: ${Z.message}`})}finally{C(!1)}},U=async()=>{if(!se.trim())return;const $=se.trim();X(!0),re(["Iniciando publicação…"]),me(""),E("");const Z=ee=>re(ne=>[...ne,ee]);try{try{const $e=await fetch("/api/pages/deploy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:t.token,username:t.username,repoName:$}),signal:AbortSignal.timeout(5e3)});if($e.ok&&$e.body){const Ze=$e.body.getReader(),Be=new TextDecoder;let I="";for(;;){const{done:ae,value:ie}=await Ze.read();if(ae)break;I+=Be.decode(ie,{stream:!0});const ue=I.split(`

`);I=ue.pop()||"";for(const y of ue){const K=y.replace(/^data: /,"").trim();if(K)try{const oe=JSON.parse(K);if(oe.type==="log")Z(oe.msg);else if(oe.type==="done"){me(oe.url),Z(oe.msg);return}else if(oe.type==="error"){E(oe.msg),Z(`❌ ${oe.msg}`);return}}catch{}}}return}}catch{}Z("🔧 Modo direto via GitHub API…");const ee=t.username;Z(`📁 Verificando repositório "${$}"…`);try{await Ia(t,$,"Publicado pelo SK Code Editor",!1),Z("✅ Repositório criado.")}catch($e){if($e.message?.includes("422")||$e.message?.includes("already exists"))Z("ℹ️ Repositório já existe — usando existente.");else throw $e}await us(t,ee,$),Z("🌐 Repositório público confirmado.");const ne=`name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install & Build
        run: |
          npm install 2>/dev/null || true
          npm run build 2>/dev/null || true
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
`;Z(`📤 Enviando ${Object.keys(s).length} arquivo(s)…`);const be={...s,".github/workflows/deploy.yml":ne},ye=await xa(t,ee,$,be,"Publicado pelo SK Code Editor");Z(`✅ ${ye.success} arquivo(s) enviados.`),Z("🌐 Ativando GitHub Pages…");const Ge=await Xs(t,ee,$,"main","/");Z("✅ GitHub Pages ativado! Pode demorar 1-2 min para ficar online."),Z(`🔗 ${Ge}`),me(Ge)}catch(ee){E(ee.message||String(ee))}finally{X(!1)}},v=({owner:$,name:Z})=>e.jsxs("div",{className:"space-y-2 pt-1",children:[e.jsx("p",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-semibold px-1",children:"Abrir no VS Code"}),e.jsxs("a",{href:`https://github.dev/${$}/${Z}`,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3 bg-blue-600/10 border border-blue-500/30 rounded-xl hover:bg-blue-600/15 transition-colors",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0",children:e.jsx(Oa,{size:17,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-blue-300",children:"VS Code Web"}),e.jsx("p",{className:"text-[11px] text-gray-500",children:"Editor completo no navegador, grátis"})]}),e.jsx(ft,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsxs("a",{href:`https://stackblitz.com/github/${$}/${Z}`,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3 bg-purple-600/10 border border-purple-500/30 rounded-xl hover:bg-purple-600/15 transition-colors",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-purple-500/15 flex items-center justify-center shrink-0",children:e.jsx(Qt,{size:17,className:"text-purple-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-purple-300",children:"StackBlitz — Terminal completo"}),e.jsx("p",{className:"text-[11px] text-gray-500",children:"VS Code + Node.js + npm install, grátis"})]}),e.jsx(ft,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsxs("a",{href:`https://gitpod.io/#https://github.com/${$}/${Z}`,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3 bg-orange-600/10 border border-orange-500/30 rounded-xl hover:bg-orange-600/15 transition-colors",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-orange-500/15 flex items-center justify-center shrink-0",children:e.jsx(Qt,{size:17,className:"text-orange-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-orange-300",children:"Gitpod — Terminal Linux completo"}),e.jsx("p",{className:"text-[11px] text-gray-500",children:"Java, Python, Node — qualquer linguagem"})]}),e.jsx(ft,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsx("p",{className:"text-[10px] text-gray-600 px-1 pt-1 leading-relaxed",children:"Após editar lá, use o painel GitHub do app para puxar as alterações de volta."})]});return D==="home"?e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-[#1c2714] border-b border-gray-700/30",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Rt,{size:14,className:"text-green-400"}),e.jsxs("span",{className:"text-xs font-semibold text-gray-300",children:["@",t.username]}),e.jsx("span",{className:"text-[10px] text-gray-600",children:"conectado"})]}),e.jsx("button",{onClick:n,className:"text-[10px] text-gray-700 hover:text-gray-500",children:"Desconectar"})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-3",children:[e.jsxs("div",{className:"px-3 py-2.5 bg-[#1c2714] border border-gray-700/30 rounded-xl",children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-0.5",children:"Projeto atual"}),e.jsx("p",{className:"text-sm font-bold text-white truncate",children:o}),e.jsxs("p",{className:"text-[11px] text-gray-500",children:[k," arquivo",k!==1?"s":""]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-2 px-1",children:"Enviar para GitHub"}),e.jsxs("button",{onClick:()=>P("push-new"),className:"w-full flex items-center gap-3 px-4 py-3.5 bg-green-600/10 border border-green-500/30 rounded-xl hover:bg-green-600/15 transition-colors text-left",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-green-500/15 flex items-center justify-center shrink-0",children:e.jsx(Ft,{size:17,className:"text-green-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-green-400",children:"Criar repositório novo e enviar"}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5",children:"Cria um repo novo e sobe todos os arquivos"})]}),e.jsx(Ot,{size:15,className:"text-gray-600 shrink-0"})]}),e.jsxs("button",{onClick:()=>P("push-existing"),className:"w-full flex items-center gap-3 px-4 py-3 mt-2 bg-[#1c2714] border border-gray-700/40 rounded-xl hover:border-gray-600/50 transition-colors text-left",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0",children:e.jsx(qt,{size:16,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:"Enviar para repo existente"}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5",children:"Atualiza um repositório que já existe"})]}),e.jsx(Ot,{size:15,className:"text-gray-600 shrink-0"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-2 px-1",children:"Baixar do GitHub"}),e.jsxs("button",{onClick:()=>P("clone"),className:"w-full flex items-center gap-3 px-4 py-3 bg-[#1c2714] border border-gray-700/40 rounded-xl hover:border-gray-600/50 transition-colors text-left",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0",children:e.jsx(jt,{size:16,className:"text-purple-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:"Importar repositório"}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5",children:"Baixa um repositório para editar aqui"})]}),e.jsx(Ot,{size:15,className:"text-gray-600 shrink-0"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-2 px-1",children:"Publicar app gratuitamente"}),e.jsxs("button",{onClick:()=>P("pages-deploy"),className:"w-full flex items-center gap-3 px-4 py-3.5 bg-blue-600/10 border border-blue-500/30 rounded-xl hover:bg-blue-600/15 transition-colors text-left",children:[e.jsx("div",{className:"w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center shrink-0",children:e.jsx(vt,{size:17,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-blue-300",children:"Publicar no GitHub Pages — Grátis"}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5",children:"Este editor online, sem pagar Replit, para sempre"})]}),e.jsx(Ot,{size:15,className:"text-gray-600 shrink-0"})]})]})]}),T&&e.jsxs("div",{className:`mx-4 mb-4 px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 ${T.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[T.ok?e.jsx(Rt,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Pt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:T.msg})]})]}):D==="push-new"?e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-[#1c2714] border-b border-gray-700/30",children:[e.jsx("button",{onClick:()=>{P("home"),_(null)},className:"p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:15})}),e.jsx("span",{className:"text-sm font-bold text-white",children:"Criar repositório e enviar"})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Nome do Repositório"}),e.jsx("input",{value:L,onChange:$=>V($.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")),placeholder:"meu-projeto",className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-green-500/50"}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:["Será criado como: github.com/",t.username,"/",L||"..."]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Descrição (opcional)"}),e.jsx("input",{value:M,onChange:$=>R($.target.value),placeholder:"Descrição do projeto...",className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-green-500/50"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Mensagem do envio"}),e.jsx("input",{value:g,onChange:$=>S($.target.value),className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 outline-none focus:border-green-500/50"})]}),e.jsxs("button",{onClick:()=>f(!w),className:`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border w-full text-left transition-colors ${w?"bg-yellow-500/10 border-yellow-500/30":"bg-[#1c2714] border-gray-700/40"}`,children:[w?e.jsx(fs,{size:15,className:"text-yellow-400"}):e.jsx(vs,{size:15,className:"text-green-400"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-semibold text-gray-200",children:w?"Repositório Privado":"Repositório Público"}),e.jsx("p",{className:"text-[11px] text-gray-500",children:w?"Só você vê":"Qualquer pessoa pode ver"})]})]}),T&&e.jsxs("div",{className:`px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 ${T.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[T.ok?e.jsx(Rt,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Pt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:T.msg})]}),T?.ok&&O&&e.jsx(v,{owner:O.owner,name:O.name}),!T?.ok&&e.jsxs("div",{className:"text-[11px] text-gray-600 px-1",children:[k," arquivo",k!==1?"s":""," serão enviados"]})]}),!T?.ok&&e.jsx("div",{className:"px-4 pb-5 pt-2",children:e.jsxs("button",{onClick:ce,disabled:!L.trim()||m,className:"w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 disabled:opacity-40 text-white rounded-xl font-bold text-[15px] hover:bg-green-500 transition-colors",children:[m?e.jsx(De,{size:16,className:"animate-spin"}):e.jsx(qt,{size:16}),m?"Enviando...":"Criar e Enviar"]})})]}):D==="push-existing"?e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-[#1c2714] border-b border-gray-700/30",children:[e.jsx("button",{onClick:()=>{P("home"),_(null),Q(null)},className:"p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:15})}),e.jsx("span",{className:"text-sm font-bold text-white",children:"Enviar para repositório"}),e.jsx("button",{onClick:x,disabled:m,className:"ml-auto p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(At,{size:13,className:m?"animate-spin":""})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[!d&&m&&e.jsxs("div",{className:"flex items-center justify-center py-12 gap-2 text-gray-500 text-sm",children:[e.jsx(De,{size:16,className:"animate-spin"})," Buscando repositórios..."]}),d&&e.jsxs("div",{className:"px-4 py-3 space-y-2",children:[B&&e.jsxs("div",{className:"space-y-2 pb-2 border-b border-gray-800/50",children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-xl",children:[e.jsx(Rt,{size:14,className:"text-green-400 shrink-0"}),e.jsx("span",{className:"text-[12px] text-green-400 font-semibold truncate",children:B.full_name}),e.jsx("button",{onClick:()=>Q(null),className:"ml-auto text-gray-600 hover:text-gray-400 shrink-0",children:e.jsx(je,{size:13})})]}),e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold block",children:"Mensagem do envio"}),e.jsx("input",{value:g,onChange:$=>S($.target.value),className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 outline-none focus:border-green-500/50"}),T&&e.jsxs("div",{className:`px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 ${T.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[T.ok?e.jsx(Rt,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Pt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:T.msg})]}),T?.ok&&O&&e.jsx(v,{owner:O.owner,name:O.name}),!T?.ok&&e.jsxs("button",{onClick:z,disabled:m,className:"w-full flex items-center justify-center gap-2 py-3 bg-green-600 disabled:opacity-40 text-white rounded-xl font-bold text-[14px] hover:bg-green-500 transition-colors",children:[m?e.jsx(De,{size:15,className:"animate-spin"}):e.jsx(qt,{size:15}),m?"Enviando...":`Enviar ${k} arquivo(s)`]})]}),!B&&e.jsx("p",{className:"text-[11px] text-gray-600 pb-1",children:"Escolha o repositório de destino:"}),l.map($=>e.jsxs("button",{onClick:()=>Q($),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border text-left transition-colors ${B?.id===$.id?"bg-green-500/10 border-green-500/30":"bg-[#1c2714] border-gray-700/30 hover:border-gray-600/50"}`,children:[$.private?e.jsx(fs,{size:12,className:"text-yellow-500 shrink-0"}):e.jsx(vs,{size:12,className:"text-gray-600 shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-semibold text-gray-300 truncate",children:$.full_name}),$.description&&e.jsx("p",{className:"text-[10px] text-gray-600 truncate",children:$.description})]}),B?.id===$.id&&e.jsx(Rt,{size:14,className:"text-green-400 shrink-0"})]},$.id))]})]})]}):D==="clone"?e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-[#1c2714] border-b border-gray-700/30",children:[e.jsx("button",{onClick:()=>{P("home"),_(null)},className:"p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:15})}),e.jsx("span",{className:"text-sm font-bold text-white",children:"Importar repositório"}),e.jsx("button",{onClick:x,disabled:m,className:"ml-auto p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(At,{size:13,className:m?"animate-spin":""})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[!d&&m&&e.jsxs("div",{className:"flex items-center justify-center py-12 gap-2 text-gray-500 text-sm",children:[e.jsx(De,{size:16,className:"animate-spin"})," Buscando repositórios..."]}),d&&e.jsxs("div",{className:"px-4 py-3 space-y-2",children:[T&&e.jsxs("div",{className:`px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 mb-2 ${T.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[T.ok?e.jsx(Rt,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Pt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:T.msg})]}),e.jsx("p",{className:"text-[11px] text-gray-600 pb-1",children:"Escolha o repositório para importar:"}),l.map($=>e.jsxs("button",{onClick:()=>N($),disabled:m,className:"w-full flex items-center gap-3 px-3 py-2.5 bg-[#1c2714] border border-gray-700/30 rounded-xl hover:border-purple-500/30 hover:bg-purple-500/5 transition-colors text-left disabled:opacity-50",children:[$.private?e.jsx(fs,{size:12,className:"text-yellow-500 shrink-0"}):e.jsx(vs,{size:12,className:"text-gray-600 shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-semibold text-gray-300 truncate",children:$.full_name}),$.description&&e.jsx("p",{className:"text-[10px] text-gray-600 truncate",children:$.description})]}),e.jsx(jt,{size:13,className:"text-purple-400 shrink-0"})]},$.id))]})]})]}):D==="pages-deploy"?e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsxs("div",{className:"flex items-center gap-2 px-4 py-3 bg-[#1c2714] border-b border-gray-700/30",children:[e.jsx("button",{onClick:()=>{P("home"),re([]),me(""),E(""),X(!1)},className:"p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:15})}),e.jsx(vt,{size:14,className:"text-blue-400"}),e.jsx("span",{className:"text-sm font-bold text-white",children:"Publicar no GitHub Pages"})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-4",children:[e.jsxs("div",{className:"px-3 py-3 bg-blue-500/8 border border-blue-500/20 rounded-xl space-y-1.5",children:[e.jsx("p",{className:"text-[12px] font-bold text-blue-300",children:"O que isso faz?"}),e.jsxs("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:["Compila este editor e publica ele no GitHub Pages — um endereço tipo ",e.jsxs("span",{className:"text-blue-300 font-mono",children:[t.username,".github.io/",se||"sk-editor"]})," que funciona para sempre, sem pagar nada."]}),e.jsx("p",{className:"text-[11px] text-gray-500 leading-relaxed",children:"Edição de arquivos e integração com GitHub funcionam sem o servidor. Só a Jasmim e o terminal online precisam do servidor."})]}),!te&&!pe&&e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Nome do repositório"}),e.jsx("input",{value:se,onChange:$=>J($.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9\-]/g,"")),placeholder:"sk-editor",className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-blue-500/50"}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:["Será publicado em: ",t.username,".github.io/",se||"..."]})]}),xe.length>0&&e.jsxs("div",{className:"bg-black/40 border border-gray-700/40 rounded-xl p-3 max-h-48 overflow-y-auto font-mono",children:[xe.map(($,Z)=>e.jsx("p",{className:"text-[11px] text-gray-300 leading-relaxed",children:$},Z)),e.jsx("div",{ref:j})]}),pe&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-green-500/10 border border-green-500/20 rounded-xl",children:[e.jsx("p",{className:"text-[12px] font-bold text-green-400 mb-1",children:"✅ Publicado com sucesso!"}),e.jsx("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:"O GitHub Pages pode demorar 1-2 minutos para ficar online na primeira vez."})]}),e.jsxs("a",{href:pe,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3.5 bg-blue-600/15 border border-blue-500/30 rounded-xl hover:bg-blue-600/20 transition-colors",children:[e.jsx(vt,{size:17,className:"text-blue-400 shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-blue-300",children:"Abrir o app publicado"}),e.jsx("p",{className:"text-[11px] text-gray-500 truncate",children:pe})]}),e.jsx(ft,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsxs("div",{className:"px-3 py-3 bg-orange-500/8 border border-orange-500/20 rounded-xl space-y-2",children:[e.jsx("p",{className:"text-[12px] font-bold text-orange-300",children:"📱 Transformar em APK (grátis)"}),e.jsxs("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:["Com o app publicado, você pode gerar um APK Android usando o ",e.jsx("strong",{className:"text-orange-300",children:"PWABuilder"})," — gratuito, sem precisar do Android Studio."]}),e.jsxs("a",{href:`https://www.pwabuilder.com/generate?url=${encodeURIComponent(pe)}`,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-3 py-2.5 bg-orange-500/15 border border-orange-500/30 rounded-xl hover:bg-orange-500/20 transition-colors",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0",children:e.jsx("span",{className:"text-[15px]",children:"📦"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-bold text-orange-300",children:"Gerar APK no PWABuilder"}),e.jsx("p",{className:"text-[10px] text-gray-500",children:"Clica → baixa o APK → instala no celular"})]}),e.jsx(ft,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsx("p",{className:"text-[10px] text-gray-600 leading-relaxed px-0.5",children:'No PWABuilder: clique em "Package for stores" → "Android" → "Generate APK" → baixe o arquivo .apk e instale no celular habilitando "fontes desconhecidas".'})]}),e.jsx("p",{className:"text-[10px] text-gray-600 px-1 leading-relaxed",children:'Para atualizar o app no futuro, clique em "Publicar no GitHub Pages" de novo — o APK instalado atualiza automaticamente pelo navegador.'})]}),F&&!pe&&e.jsxs("div",{className:"px-3 py-2.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2",children:[e.jsx(Pt,{size:13,className:"text-red-400 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-[12px] text-red-400 leading-relaxed",children:F})]})]}),!pe&&e.jsx("div",{className:"px-4 pb-5 pt-2",children:e.jsxs("button",{onClick:U,disabled:!se.trim()||te,className:"w-full flex items-center justify-center gap-2 py-3.5 bg-blue-600 disabled:opacity-40 text-white rounded-xl font-bold text-[15px] hover:bg-blue-500 transition-colors",children:[te?e.jsx(De,{size:16,className:"animate-spin"}):e.jsx(vt,{size:16}),te?"Publicando... (pode demorar 2 min)":"Publicar Grátis no GitHub Pages"]})})]}):null}function li({onImport:t,onBack:s}){const[o,r]=a.useState(""),[n,c]=a.useState(!1),[l,u]=a.useState(null),d=m=>{const C=m.trim().replace(/\.git$/,"").replace(/\/$/,""),T=C.match(/github\.com[/:]([^/]+)\/([^/]+)/);if(T)return{owner:T[1],repo:T[2]};const _=C.split("/").filter(Boolean);return _.length===2?{owner:_[0],repo:_[1]}:null},h=async()=>{const m=d(o);if(!m){u({msg:"URL inválida. Use: github.com/usuario/repositorio"});return}c(!0),u({msg:`Baixando ${m.owner}/${m.repo}...`});try{const T=await Ma({token:"",username:""},m.owner,m.repo);if(Object.keys(T).length===0)throw new Error("Nenhum arquivo encontrado. O repositório é privado ou não existe.");t(T),u({msg:`✓ ${Object.keys(T).length} arquivos importados de "${m.repo}"`,ok:!0})}catch(C){u({msg:`Erro: ${C.message}`})}finally{c(!1)}};return e.jsxs("div",{className:"h-full flex flex-col overflow-y-auto px-4 py-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:s,className:"p-1 rounded-lg hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:15})}),e.jsx("h2",{className:"text-sm font-bold text-white",children:"Clonar Repositório Público"})]}),e.jsx("p",{className:"text-[12px] text-gray-500 leading-relaxed",children:"Repositórios públicos podem ser baixados sem precisar de token. Cole o link do GitHub abaixo."}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Link do Repositório"}),e.jsx("input",{value:o,onChange:m=>{r(m.target.value),u(null)},onKeyDown:m=>m.key==="Enter"&&h(),placeholder:"github.com/usuario/repositorio",className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-purple-500/50"})]}),l&&e.jsxs("div",{className:`px-3 py-2.5 rounded-xl border text-[12px] flex items-start gap-2 ${l.ok?"bg-green-500/10 border-green-500/20 text-green-400":"bg-red-500/10 border-red-500/20 text-red-400"}`,children:[l.ok?e.jsx(Rt,{size:13,className:"shrink-0 mt-0.5"}):e.jsx(Pt,{size:13,className:"shrink-0 mt-0.5"}),e.jsx("span",{className:"leading-relaxed",children:l.msg})]}),e.jsxs("button",{onClick:h,disabled:!o.trim()||n,className:"w-full flex items-center justify-center gap-2 py-3 bg-purple-600 disabled:opacity-40 text-white rounded-xl font-bold text-[14px] hover:bg-purple-500 transition-colors",children:[n?e.jsx(De,{size:16,className:"animate-spin"}):e.jsx(jt,{size:16}),n?"Baixando...":"Baixar Repositório"]})]})}function ci({files:t,onImport:s,projectName:o,defaultView:r}){const[n,c]=a.useState(()=>{const h=ps();return h.token?h:null}),[l,u]=a.useState(!1),d=()=>{Qs({token:"",username:""}),c(null)};return e.jsxs("div",{className:"h-full flex flex-col bg-[#141c0d] overflow-hidden",children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 border-b border-gray-700/50 bg-[#1c2714] shrink-0",children:[e.jsx(It,{size:15,className:"text-green-400"}),e.jsx("span",{className:"text-xs font-bold text-gray-300",children:"GitHub"})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:l?e.jsx(li,{onImport:s,onBack:()=>u(!1)}):n?e.jsx(ii,{creds:n,files:t,projectName:o,onImport:s,onDisconnect:d,defaultView:r}):e.jsxs(e.Fragment,{children:[e.jsx(ni,{onSaved:c}),e.jsxs("div",{className:"px-4 pb-5 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2 my-3",children:[e.jsx("div",{className:"flex-1 h-px bg-gray-700/40"}),e.jsx("span",{className:"text-[10px] text-gray-600",children:"ou"}),e.jsx("div",{className:"flex-1 h-px bg-gray-700/40"})]}),e.jsxs("button",{onClick:()=>u(!0),className:"w-full flex items-center justify-center gap-2 py-2.5 border border-purple-700/40 bg-purple-900/10 text-purple-400 rounded-xl text-[13px] font-semibold hover:bg-purple-900/20 transition-colors",children:[e.jsx(jt,{size:14}),"Baixar repositório público (sem token)"]})]})]})})]})}const di=[{label:"Servidor Web",emoji:"🌐",packages:["express","fastify","koa","hapi","polka","h3","hono"]},{label:"Banco de Dados",emoji:"🗄️",packages:["mongoose","prisma","pg","mysql2","sqlite3","redis","ioredis","drizzle-orm","@neondatabase/serverless"]},{label:"Utilitários",emoji:"🔧",packages:["lodash","moment","dayjs","uuid","nanoid","dotenv","zod","date-fns","ramda"]},{label:"HTTP / APIs",emoji:"📡",packages:["axios","node-fetch","got","openai","stripe","undici","@anthropic-ai/sdk","@google/generative-ai"]},{label:"Autenticação",emoji:"🔐",packages:["jsonwebtoken","bcryptjs","passport","express-session","helmet","cors","express-rate-limit","cookie-parser"]},{label:"Dev Tools",emoji:"⚙️",packages:["typescript","nodemon","ts-node","tsx","eslint","prettier","jest","vitest","dotenv-cli"]},{label:"Frontend React",emoji:"⚛️",packages:["react","react-dom","react-router-dom","vite","@vitejs/plugin-react","tailwindcss","framer-motion","zustand"]},{label:"UI / Estilo",emoji:"🎨",packages:["tailwindcss","lucide-react","react-icons","clsx","class-variance-authority","@radix-ui/react-dialog"]},{label:"PDF / Documentos",emoji:"📄",packages:["pdfkit","pdf-lib","puppeteer","html-pdf-node","docx","exceljs","xlsx","mammoth"]},{label:"Email / SMS",emoji:"📧",packages:["nodemailer","@sendgrid/mail","resend","twilio"]},{label:"IA / ML",emoji:"🤖",packages:["openai","@anthropic-ai/sdk","@google/generative-ai","langchain","@langchain/core"]},{label:"Upload / Storage",emoji:"☁️",packages:["multer","@aws-sdk/client-s3","cloudinary","firebase-admin","@supabase/supabase-js"]},{label:"WebSocket / RT",emoji:"⚡",packages:["socket.io","socket.io-client","ws","ably","pusher-js"]},{label:"CLI / Terminal",emoji:"🖥️",packages:["commander","yargs","chalk","ora","inquirer","figlet","boxen"]},{label:"Segurança",emoji:"🛡️",packages:["helmet","bcryptjs","argon2","crypto-js","jsonwebtoken","zod","validator"]},{label:"Scraping",emoji:"🕷️",packages:["puppeteer","playwright","cheerio","jsdom","node-html-parser"]},{label:"Pagamentos",emoji:"💳",packages:["stripe","mercadopago","@mercadopago/sdk-js"]},{label:"Dados / Planilhas",emoji:"📊",packages:["csv-parse","papaparse","xlsx","d3","recharts","chart.js"]},{label:"Python (pip)",emoji:"🐍",pip:!0,packages:["flask","fastapi","django","requests","pandas","numpy","sqlalchemy","pydantic","uvicorn","httpx"]},{label:"Testes",emoji:"🧪",packages:["jest","vitest","mocha","chai","@testing-library/react","supertest"]}],pi={flask:"Microframework web leve e flexível",fastapi:"Framework web moderno, rápido, baseado em type hints",django:"Framework web completo, baterias incluídas",requests:"Biblioteca HTTP simples e elegante",pandas:"Análise e manipulação de dados",numpy:"Computação numérica e arrays multidimensionais",sqlalchemy:"ORM e toolkit SQL",pydantic:"Validação de dados via type hints",uvicorn:"Servidor ASGI ultra-rápido",httpx:"Cliente HTTP moderno com suporte async"};function ui({onInstall:t,onClose:s}){const[o,r]=a.useState(""),[n,c]=a.useState([]),[l,u]=a.useState(!1),[d,h]=a.useState(""),[m,C]=a.useState(null),[T,_]=a.useState(!1),[D,P]=a.useState({}),O=a.useRef(null),H=a.useRef(void 0),L=a.useRef({});a.useEffect(()=>{setTimeout(()=>O.current?.focus(),100)},[]);const V=a.useCallback(async g=>{if(!g.trim()){c([]),h("");return}u(!0),h(""),C(null);try{const S=await fetch(`https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(g)}&size=20`);if(!S.ok)throw new Error;const B=await S.json();c(B.objects?.map(Q=>({name:Q.package.name,description:Q.package.description,version:Q.package.version,date:Q.package.date,links:Q.package.links,score:Q.score}))??[])}catch{h("Não foi possível buscar. Verifique a conexão."),c([])}finally{u(!1)}},[]),M=a.useCallback(async(g,S,B=!1)=>{if(_(B),C(S),r(""),u(!0),h(""),B){c(g.map(Q=>({name:Q,description:pi[Q]||`Pacote Python: ${Q}`,version:"latest",date:"",links:{npm:`https://pypi.org/project/${Q}/`}}))),u(!1);return}try{const Q=await Promise.all(g.slice(0,12).map(async se=>{try{const J=await fetch(`https://registry.npmjs.org/${encodeURIComponent(se)}/latest`);if(!J.ok)return null;const xe=await J.json();return{name:xe.name,description:xe.description,version:xe.version,date:xe.date,links:xe.links}}catch{return null}}));c(Q.filter(Boolean))}catch{h("Erro ao carregar categoria.")}finally{u(!1)}},[]),R=g=>{if(r(g),C(null),_(!1),clearTimeout(H.current),!g.trim()){c([]);return}H.current=setTimeout(()=>V(g),500)},w=a.useCallback(async(g,S=!1)=>{if(D[g]?.status==="installing")return;L.current[g]?.abort();const B=new AbortController;L.current[g]=B;const Q=S?[`${g}`]:[g];P(se=>({...se,[g]:{pkg:g,status:"installing",output:"",showOutput:!0}})),t?.(T?`pip3 install ${g}`:S?`npm install -D ${g}`:`npm install ${g}`);try{const se=await fetch("/api/workspace/install",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({packages:Q,dev:S&&!T,pip:T}),signal:B.signal});if(!se.ok)throw new Error(`HTTP ${se.status}`);if(!se.body)throw new Error("Sem resposta do servidor");const J=se.body.getReader(),xe=new TextDecoder;let re="",te="",X=!1;for(;;){const{done:pe,value:me}=await J.read();if(pe)break;re+=xe.decode(me,{stream:!0});const F=re.split(`
`);re=F.pop()||"";for(const E of F)if(E.startsWith("data: "))try{const j=JSON.parse(E.slice(6));j.out&&(te+=j.out,P(k=>({...k,[g]:{...k[g],output:te}}))),j.done&&(X=j.ok===!0)}catch{}}P(pe=>({...pe,[g]:{pkg:g,status:X?"ok":"error",output:te,showOutput:!X}}))}catch(se){if(se.name==="AbortError")return;P(J=>({...J,[g]:{pkg:g,status:"error",output:`Erro: ${se.message}`,showOutput:!0}}))}},[D,T,t]),f=g=>{P(S=>({...S,[g]:{...S[g],showOutput:!S[g].showOutput}}))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/60",onClick:s}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:g=>g.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1a2413] border-t border-gray-700/60 rounded-t-3xl shadow-2xl flex flex-col max-h-[92vh]",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Gt,{size:16,className:"text-yellow-400"}),e.jsx("span",{className:"text-[15px] font-bold text-white",children:"Biblioteca de Pacotes"}),e.jsx("span",{className:"text-[10px] text-green-400 bg-green-900/30 border border-green-700/30 px-2 py-0.5 rounded-full",children:"instalação real"})]}),e.jsx("button",{onClick:s,className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:17})})]}),e.jsx("div",{className:"px-4 pt-2.5 pb-0 shrink-0",children:e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-blue-900/20 border border-blue-700/30 rounded-xl text-[11px] text-blue-300",children:[e.jsx(Qt,{size:12,className:"shrink-0"}),"Instala no servidor em ",e.jsx("code",{className:"font-mono text-blue-200 mx-1",children:"~/sk-user-workspace/"})," — use ",e.jsx("strong",{children:"Sync"})," + ",e.jsx("strong",{children:"Rodar"})," para executar"]})}),e.jsx("div",{className:"px-4 pt-2.5 pb-2 shrink-0",children:e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2.5 bg-[#0d1409] border border-gray-700/50 rounded-2xl focus-within:border-yellow-600/60 transition-colors",children:[e.jsx(ha,{size:15,className:"text-gray-600 shrink-0"}),e.jsx("input",{ref:O,value:o,onChange:g=>R(g.target.value),onKeyDown:g=>{g.key==="Enter"&&V(o)},placeholder:"Buscar pacote npm ou biblioteca...",className:"flex-1 bg-transparent outline-none text-[13px] text-gray-200 placeholder-gray-700"}),o&&e.jsx("button",{onClick:()=>{r(""),c([]),C(null),_(!1)},className:"text-gray-700 hover:text-gray-400",children:e.jsx(je,{size:13})})]})}),!o&&e.jsx("div",{className:"px-4 pb-2 shrink-0",children:e.jsx("div",{className:"flex gap-1.5 overflow-x-auto scrollbar-hide pb-1",children:di.map(g=>e.jsxs("button",{onClick:()=>M(g.packages,g.label,g.pip),className:`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-[11px] font-semibold transition-all ${m===g.label?"bg-yellow-600/20 border-yellow-500/60 text-yellow-300":"bg-[#141c0d] border-gray-700/40 text-gray-400 hover:border-gray-600/60 hover:text-gray-200"}`,children:[e.jsx("span",{children:g.emoji}),e.jsx("span",{className:"whitespace-nowrap",children:g.label})]},g.label))})}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pb-8",children:[l&&e.jsxs("div",{className:"flex items-center justify-center gap-2 py-8 text-gray-500",children:[e.jsx(De,{size:18,className:"animate-spin"}),e.jsx("span",{className:"text-[13px]",children:"Buscando..."})]}),d&&e.jsx("div",{className:"py-6 text-center",children:e.jsx("p",{className:"text-[13px] text-red-400",children:d})}),!l&&!d&&n.length===0&&!o&&!m&&e.jsxs("div",{className:"py-6 text-center",children:[e.jsx(Gt,{size:28,className:"text-gray-700 mx-auto mb-2"}),e.jsx("p",{className:"text-[13px] text-gray-500",children:"Busque por nome ou escolha uma categoria"}),e.jsx("p",{className:"text-[11px] text-gray-700 mt-1",children:'Ex: "express", "axios", "mongoose", "flask"'})]}),!l&&n.map(g=>{const S=D[g.name];return e.jsxs("div",{className:"py-3 border-b border-gray-800/50 last:border-0",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2 mb-2",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("span",{className:"text-[13px] font-bold text-gray-100 font-mono",children:g.name}),g.version!=="latest"&&e.jsxs("span",{className:"text-[10px] text-gray-600 bg-gray-800/50 px-1.5 py-0.5 rounded font-mono",children:["v",g.version]}),g.score&&g.score.final>.7&&e.jsxs("span",{className:"text-[9px] text-yellow-500 flex items-center gap-0.5",children:[e.jsx(jr,{size:9,fill:"currentColor"})," popular"]}),T&&e.jsx("span",{className:"text-[9px] text-blue-400 bg-blue-900/20 px-1.5 py-0.5 rounded border border-blue-700/30",children:"pip"})]}),g.description&&e.jsx("p",{className:"text-[11px] text-gray-400 mt-0.5 line-clamp-2 leading-relaxed",children:g.description})]}),g.links?.npm&&e.jsx("a",{href:g.links.npm,target:"_blank",rel:"noopener noreferrer",className:"shrink-0 text-gray-700 hover:text-blue-400 mt-0.5",children:e.jsx(ft,{size:12})})]}),e.jsxs("div",{className:"flex gap-1.5 flex-wrap",children:[e.jsx("button",{onClick:()=>w(g.name),disabled:S?.status==="installing",className:`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-bold transition-all disabled:opacity-60 ${S?.status==="ok"?"bg-green-700/30 border border-green-600/40 text-green-400":S?.status==="error"?"bg-red-700/20 border border-red-600/30 text-red-400":S?.status==="installing"?"bg-yellow-700/20 border border-yellow-600/30 text-yellow-400":"bg-yellow-600/15 border border-yellow-600/30 text-yellow-300 hover:bg-yellow-600/25 active:scale-95"}`,children:S?.status==="installing"?e.jsxs(e.Fragment,{children:[e.jsx(De,{size:11,className:"animate-spin"})," Instalando..."]}):S?.status==="ok"?e.jsxs(e.Fragment,{children:[e.jsx(Rt,{size:11})," Instalado!"]}):S?.status==="error"?e.jsxs(e.Fragment,{children:[e.jsx(Pt,{size:11})," Erro — Tentar de novo"]}):e.jsxs(e.Fragment,{children:[e.jsx(jt,{size:11})," ",T?"pip install":"npm install"]})}),!T&&e.jsx("button",{onClick:()=>w(g.name,!0),disabled:S?.status==="installing",className:"flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold border border-gray-700/40 text-gray-500 hover:text-gray-300 hover:border-gray-600/60 active:scale-95 disabled:opacity-40",children:"-D (dev)"})]}),S&&S.output&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{onClick:()=>f(g.name),className:"flex items-center gap-1.5 text-[10px] text-gray-600 hover:text-gray-400 transition-colors",children:[e.jsx(Qt,{size:10}),S.showOutput?"Ocultar saída":"Ver saída",S.showOutput?e.jsx(Io,{size:10}):e.jsx(fa,{size:10})]}),S.showOutput&&e.jsx("pre",{className:"mt-1.5 p-2.5 bg-black/60 border border-gray-800/60 rounded-xl text-[10px] text-green-300/80 font-mono overflow-x-auto max-h-40 overflow-y-auto leading-relaxed whitespace-pre-wrap break-words",children:S.output})]})]},g.name)})]})]})})]})}const As="./".replace(/\/$/,"")+"/api";function mi({onClose:t,files:s,projectName:o}){const[r,n]=a.useState([]),[c,l]=a.useState(!0),[u,d]=a.useState(!1),[h,m]=a.useState(null),[C,T]=a.useState(""),[_,D]=a.useState(""),P=a.useCallback(async()=>{l(!0),D("");try{const M=await fetch(`${As}/drive/list`),R=await M.json();if(!M.ok)throw new Error(R.error??"Erro ao carregar Drive");n(R.files||[])}catch(M){D(M.message)}finally{l(!1)}},[]);a.useEffect(()=>{P()},[P]);const O=async()=>{d(!0),T("📦 Compactando projeto..."),D("");try{const M=await Hr(s),R=new Date().toISOString().slice(0,16).replace("T","_").replace(/:/g,"-"),w=`sk-backup_${o.replace(/\s+/g,"-").toLowerCase()}_${R}.zip`;T("☁️ Enviando para o Google Drive...");const f=await fetch(`${As}/drive/upload`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:w,zipBase64:M})}),g=await f.json();if(!f.ok)throw new Error(g.error??"Erro no upload");T(`✅ Backup "${w}" salvo no Drive!`),await P(),setTimeout(()=>T(""),5e3)}catch(M){D(M.message),T("")}finally{d(!1)}},H=async(M,R)=>{if(confirm(`Apagar "${R}" do Drive?`)){m(M);try{const w=await fetch(`${As}/drive/delete/${M}`,{method:"DELETE"});if(!w.ok){const f=await w.json();throw new Error(f.error??"Erro ao apagar")}n(f=>f.filter(g=>g.id!==M))}catch(w){D(w.message)}finally{m(null)}}},L=Object.keys(s).length,V=Math.round(Object.values(s).join("").length/1024);return e.jsx("div",{className:"fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm",onClick:t,children:e.jsxs("div",{className:"w-full max-w-lg bg-[#141c0d] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",style:{maxHeight:"90vh"},onClick:M=>M.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center gap-3 px-5 pt-5 pb-4 border-b border-gray-700/40",children:[e.jsx("div",{className:"w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0",children:e.jsx(Ks,{size:18,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[15px] font-bold text-white",children:"Backup no Google Drive"}),e.jsxs("p",{className:"text-[11px] text-gray-500 truncate",children:[L," arquivo",L!==1?"s":""," · ~",V," KB no projeto atual"]})]}),e.jsx("button",{onClick:t,className:"p-2 rounded-xl hover:bg-white/5 text-gray-500 hover:text-gray-300 shrink-0",children:e.jsx(je,{size:18})})]}),e.jsxs("div",{className:"px-5 py-4 border-b border-gray-700/30",children:[e.jsxs("button",{onClick:O,disabled:u||L===0,className:"w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-[15px] hover:from-blue-500 hover:to-blue-400 disabled:opacity-40 transition-all active:scale-[0.98] shadow-lg shadow-blue-900/40",children:[u?e.jsx(De,{size:18,className:"animate-spin"}):e.jsx(qt,{size:18}),u?"Enviando...":"Fazer Backup Agora (.zip)"]}),C&&e.jsx("p",{className:"mt-2.5 text-[12px] text-center font-medium text-green-400",children:C}),_&&e.jsxs("p",{className:"mt-2.5 text-[12px] text-center text-red-400",children:["❌ ",_]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto",style:{maxHeight:"calc(90vh - 230px)"},children:[e.jsxs("div",{className:"flex items-center justify-between px-5 py-3",children:[e.jsxs("p",{className:"text-[12px] font-semibold text-gray-400",children:["Backups salvos no Drive (",r.length,")"]}),e.jsx("button",{onClick:P,disabled:c,className:"p-1.5 rounded-lg text-gray-600 hover:text-gray-300 hover:bg-white/5",children:e.jsx(At,{size:13,className:c?"animate-spin":""})})]}),c?e.jsx("div",{className:"flex items-center justify-center py-10",children:e.jsx(De,{size:20,className:"animate-spin text-gray-600"})}):r.length===0?e.jsxs("div",{className:"flex flex-col items-center gap-2 py-10 px-6 text-center",children:[e.jsx(lo,{size:28,className:"text-gray-700"}),e.jsx("p",{className:"text-[13px] text-gray-600",children:"Nenhum backup encontrado no Drive"}),e.jsx("p",{className:"text-[11px] text-gray-700",children:'Clique em "Fazer Backup" acima para salvar'})]}):e.jsx("div",{className:"px-4 pb-6 space-y-2",children:r.map(M=>e.jsxs("div",{className:"flex items-center gap-3 p-3 rounded-2xl border border-gray-700/40 bg-[#1c2714] hover:border-gray-600/40 transition-colors",children:[e.jsx("div",{className:"w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center shrink-0",children:e.jsx(lo,{size:14,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-semibold text-gray-200 truncate",children:M.name}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:[new Date(M.modifiedTime).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"}),M.size?` · ${Math.round(Number(M.size)/1024)} KB`:""]})]}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[M.webViewLink&&e.jsx("a",{href:M.webViewLink,target:"_blank",rel:"noopener noreferrer",className:"p-1.5 rounded-lg text-gray-600 hover:text-blue-400 hover:bg-blue-500/10 transition-colors",title:"Abrir no Drive",children:e.jsx(ft,{size:13})}),e.jsx("button",{onClick:()=>H(M.id,M.name),disabled:h===M.id,className:"p-1.5 rounded-lg text-gray-600 hover:text-red-400 hover:bg-red-500/10 transition-colors",title:"Apagar",children:h===M.id?e.jsx(De,{size:13,className:"animate-spin"}):e.jsx(mt,{size:13})})]})]},M.id))})]})]})})}function xi({vfs:t,projectName:s}){const[o,r]=a.useState("inicio"),[n,c]=a.useState(""),[l,u]=a.useState("android-pwa"),[d,h]=a.useState("importar"),[m,C]=a.useState(""),[T,_]=a.useState(""),[D,P]=a.useState(!1),[O,H]=a.useState(""),[L,V]=a.useState(!1),[M,R]=a.useState(!1),[w,f]=a.useState(""),[g,S]=a.useState(!1),[B,Q]=a.useState(null),[se,J]=a.useState("");a.useEffect(()=>{if(!M||!t)return;const U=t.onChange(()=>{t.listFiles().length>0&&R(!1)});return()=>{U()}},[M,t]);const xe=a.useCallback(async()=>{if(t){if(t.listFiles().length===0){R(!0);return}R(!1),V(!0);try{const U=t.toJSON();await Ta(U,s||"projeto")}finally{V(!1)}}},[t,s]),re=a.useCallback(async()=>{P(!0),H("");try{const U=m.trim()||window.location.origin,v=await fetch(`/api/twa-package?url=${encodeURIComponent(U)}`);if(!v.ok){let be="Erro ao gerar pacote";try{be=(await v.json()).error||be}catch{}throw new Error(be)}const $=await v.blob(),Z=v.headers.get("Content-Disposition")||"",ne=/filename="([^"]+)"/.exec(Z)?.[1]??"twa-app.zip";ga.saveAs($,ne)}catch(U){H(U instanceof Error?U.message:"Não foi possível gerar o pacote. Verifique a URL e tente novamente.")}finally{P(!1)}},[m]),te=a.useCallback(()=>{if(!B)return;const{url:U,score:v,passed:$,total:Z,items:ee}=B,ne=v>=80?"#16a34a":v>=50?"#ca8a04":"#dc2626",be=v>=80?"Pronto para instalar":v>=50?"Quase lá — corrija os itens em vermelho":"Precisa de ajustes antes de instalar",ye=I=>I.replace(/[&<>"']/g,ae=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ae]),Ge=new Date().toLocaleString("pt-BR"),$e=ee.map(I=>{const ae=I.status==="ok"?"✅":I.status==="warn"?"⚠️":"❌",ie=I.status==="ok"?"#16a34a":I.status==="warn"?"#ca8a04":"#dc2626",ue=I.status!=="ok"&&I.fix?`<div class="fix"><strong>Como corrigir:</strong> ${ye(I.fix)}</div>`:"";return`<div class="item" style="border-left:4px solid ${ie}">
        <div class="item-title"><span>${ae}</span><strong>${ye(I.label)}</strong></div>
        <div class="item-detail">${ye(I.detail)}</div>
        ${ue}
      </div>`}).join(""),Ze=`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"/>
<title>Relatório PWA — ${ye(U)}</title>
<style>
  *{box-sizing:border-box}
  body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#111;max-width:800px;margin:24px auto;padding:0 16px;line-height:1.5}
  h1{margin:0 0 4px;font-size:22px}
  .meta{color:#666;font-size:12px;margin-bottom:16px}
  .url{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;word-break:break-all;background:#f3f4f6;padding:6px 10px;border-radius:6px;display:inline-block}
  .score-card{display:flex;align-items:center;gap:20px;padding:16px;border:1px solid #e5e7eb;border-radius:10px;margin:16px 0}
  .score{font-size:42px;font-weight:700;color:${ne};line-height:1}
  .score-sub{font-size:12px;color:#666}
  .score-label{font-weight:600;color:${ne}}
  h2{font-size:16px;margin:24px 0 8px}
  .item{padding:10px 12px;margin-bottom:10px;background:#fafafa;border-radius:6px}
  .item-title{display:flex;gap:8px;align-items:center;font-size:14px}
  .item-detail{font-size:13px;color:#444;margin-top:4px;margin-left:24px}
  .fix{margin-top:6px;margin-left:24px;font-size:13px;background:#fff;border:1px dashed #d1d5db;border-radius:6px;padding:8px 10px}
  .footer{margin-top:24px;padding-top:12px;border-top:1px solid #e5e7eb;font-size:11px;color:#888;text-align:center}
  @media print{body{margin:0}.no-print{display:none}}
  .no-print{position:fixed;top:12px;right:12px}
  .no-print button{background:#16a34a;color:#fff;border:0;padding:10px 16px;border-radius:6px;font-weight:600;cursor:pointer}
</style></head><body>
<div class="no-print"><button onclick="window.print()">Imprimir / Salvar PDF</button></div>
<h1>Relatório do Verificador PWA</h1>
<div class="meta">Gerado em ${ye(Ge)}</div>
<div class="url">${ye(U)}</div>
<div class="score-card">
  <div><div class="score">${v}%</div><div class="score-sub">${$}/${Z} itens</div></div>
  <div><div class="score-label">${ye(be)}</div></div>
</div>
<h2>Checklist (${ee.length} itens)</h2>
${$e}
<div class="footer">Gerado pelo SK Code Editor — Verificador PWA</div>
<script>window.addEventListener("load",function(){setTimeout(function(){window.print()},300)});<\/script>
</body></html>`,Be=window.open("","_blank");if(!Be){const I=new Blob([Ze],{type:"text/html"});ga.saveAs(I,`relatorio-pwa-${new Date().toISOString().slice(0,10)}.html`);return}Be.document.open(),Be.document.write(Ze),Be.document.close()},[B]),X=a.useCallback(async()=>{const U=w.trim();if(!U){J("Cole a URL do seu app publicado.");return}if(!g){S(!0),J(""),Q(null);try{const v=await fetch(`/api/pwa-check?url=${encodeURIComponent(U)}`),$=await v.json();if(!v.ok||$.error)throw new Error($.error||"Erro ao verificar");Q($)}catch(v){J((v instanceof Error?v.message:"")||"Não foi possível verificar. Confira se a URL está correta e o app está publicado.")}finally{S(!1)}}},[w,g]),pe=a.useRef(!1);a.useEffect(()=>{l!=="verificador"?pe.current=!0:pe.current&&(pe.current=!1,B&&X())},[l,B,X]),a.useEffect(()=>{if(!B)return;const U=()=>{document.visibilityState==="visible"&&l==="verificador"&&o==="instalar"&&X()};return document.addEventListener("visibilitychange",U),()=>document.removeEventListener("visibilitychange",U)},[B,l,o,X]);const me=(U,v)=>{navigator.clipboard.writeText(U).catch(()=>{}),c(v),setTimeout(()=>c(""),1500)},F=({children:U,copyKey:v})=>e.jsxs("div",{className:"relative group my-2",children:[e.jsx("pre",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-3 text-sm text-[#a8d5a2] overflow-x-auto whitespace-pre-wrap break-all font-mono leading-relaxed",children:U}),v&&e.jsx("button",{onClick:()=>me(U,v),className:"absolute top-2 right-2 text-xs px-2 py-0.5 rounded bg-[#2d4a1e] text-[#7ec87a] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#3d5e2a]",children:n===v?"✓ Copiado":"Copiar"})]}),E=({children:U})=>e.jsx("h2",{className:"text-[#7ec87a] font-bold text-base mt-5 mb-2 flex items-center gap-2",children:U}),j=({children:U})=>e.jsx("h3",{className:"text-[#5aab56] font-semibold text-sm mt-4 mb-1",children:U}),k=({children:U})=>e.jsx("p",{className:"text-[#8cba89] text-sm leading-relaxed mb-2",children:U}),x=({children:U})=>e.jsxs("li",{className:"text-[#8cba89] text-sm leading-relaxed list-none flex gap-2 mb-1",children:[e.jsx("span",{className:"text-[#5aab56] shrink-0",children:"›"}),e.jsx("span",{children:U})]}),ce=({color:U,children:v})=>{const $={green:"bg-[#1a3d14] text-[#7ec87a] border-[#3d6e2a]",blue:"bg-[#0d1e3d] text-[#6ab4ff] border-[#1e4080]",yellow:"bg-[#2d2200] text-[#d4aa40] border-[#5a4500]",red:"bg-[#2d0d0d] text-[#d47070] border-[#5a1e1e]"};return e.jsx("span",{className:`inline-block text-xs px-2 py-0.5 rounded border font-mono ${$[U]}`,children:v})},z=[{id:"inicio",icon:"🏠",title:"Início Rápido",content:e.jsxs("div",{children:[e.jsxs(k,{children:["Bem-vindo ao ",e.jsx("strong",{className:"text-[#7ec87a]",children:"SK Code Editor"})," — editor profissional com terminal real, IA integrada (Jasmim), GitHub, banco de dados e muito mais. Este manual é seu guia completo."]}),e.jsx(E,{children:"⚡ O que você pode fazer agora"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(x,{children:"Escrever código em qualquer linguagem com Monaco Editor (VS Code no browser)"}),e.jsx(x,{children:"Executar comandos reais no terminal (npm install, python, git, etc.)"}),e.jsx(x,{children:"Pedir ajuda para a Jasmim (IA) para criar, corrigir e melhorar código"}),e.jsx(x,{children:"Conectar seu repositório GitHub e fazer push/pull direto no editor"}),e.jsx(x,{children:"Configurar banco de dados PostgreSQL (Neon) gratuitamente"}),e.jsx(x,{children:"Ver preview ao vivo do seu projeto HTML/React"}),e.jsx(x,{children:"Importar/exportar projetos como ZIP ou TAR.GZ"}),e.jsx(x,{children:"Instalar o app no celular como PWA (funciona offline)"})]}),e.jsx(E,{children:"🎯 Primeira vez? Faça isso"}),e.jsx("ol",{className:"space-y-2",children:["Toque no ícone 🤖 (Jasmim) na barra inferior",'Digite: "Crie um projeto Node.js Express com conexão Neon DB"',"A Jasmim cria tudo automaticamente — você só aplica os arquivos","Rode npm install e npm start no terminal","Veja o preview no ícone 👁️"].map((U,v)=>e.jsxs("li",{className:"flex gap-3 text-sm text-[#8cba89]",children:[e.jsxs("span",{className:"text-[#7ec87a] font-bold shrink-0",children:[v+1,"."]}),e.jsx("span",{children:U})]},v))}),e.jsx(E,{children:"📱 Instalar como App (PWA)"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(x,{children:'Android/Chrome: Menu ⋮ → "Adicionar à tela inicial"'}),e.jsx(x,{children:'iOS/Safari: Compartilhar → "Adicionar à Tela de Início"'}),e.jsx(x,{children:"Desktop/Chrome: Ícone ⬇ na barra de endereço"})]})]})},{id:"instalar",icon:"📲",title:"Instalar como App",content:(()=>{const U=[{id:"verificador",label:"Verificador",icon:"🔍"},{id:"android-pwa",label:"Android PWA",icon:"🤖"},{id:"ios-pwa",label:"iOS PWA",icon:"🍎"},{id:"pwabuilder",label:"APK Online",icon:"⚡"},{id:"twa",label:"APK Projeto",icon:"📦"},{id:"universal",label:"Guia Universal",icon:"🌐"}],v=({n:ee,children:ne})=>e.jsxs("li",{className:"flex gap-3 mb-3",children:[e.jsx("span",{className:"bg-[#2d4a1e] text-[#7ec87a] font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5",children:ee}),e.jsx("span",{className:"text-[#8cba89] text-sm leading-relaxed",children:ne})]}),$=({color:ee,children:ne})=>{const be={green:"bg-[#0d2210] border-[#2d5a1e] text-[#7ec87a]",blue:"bg-[#0a1530] border-[#1e3d7a] text-[#6ab4ff]",yellow:"bg-[#1e1500] border-[#4a3800] text-[#d4aa40]"}[ee];return e.jsx("div",{className:`border rounded-lg p-3 mb-3 text-sm ${be}`,children:ne})},Z={verificador:e.jsxs("div",{children:[e.jsxs($,{color:"blue",children:["🔍 ",e.jsx("strong",{children:"Verificador PWA."})," Cole a URL do seu app publicado e veja instantaneamente o que está faltando para instalar como app no celular ou gerar APK."]}),e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-4 mb-4",children:[e.jsx("label",{className:"block text-[#5aab56] text-xs mb-2 font-semibold",children:"URL do app publicado"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"url",value:w,onChange:ee=>{f(ee.target.value),J("")},onKeyDown:ee=>{ee.key==="Enter"&&X()},placeholder:"https://meu-app.replit.app",className:"flex-1 bg-[#141c0d] border border-[#3d6e2a] rounded px-3 py-2 text-sm text-[#a8d5a2] placeholder-[#3d6e2a] outline-none focus:border-[#5aab56]"}),e.jsx("button",{onClick:X,disabled:g,className:"bg-[#2d4a1e] hover:bg-[#3d5e2a] disabled:opacity-50 text-[#7ec87a] font-semibold text-sm px-4 rounded transition-colors whitespace-nowrap",children:g?"⏳ Verificando...":"🔍 Verificar"})]}),se&&e.jsx("p",{className:"text-[#d47070] text-xs mt-2",children:se})]}),B&&(()=>{const{score:ee,passed:ne,total:be,items:ye}=B,Ge=ee>=80?"#7ec87a":ee>=50?"#d4aa40":"#d47070",$e=ee>=80?"bg-[#0d2210] border-[#2d5a1e]":ee>=50?"bg-[#1e1500] border-[#4a3800]":"bg-[#1a0000] border-[#5a1a1a]",Ze=ee>=80?"Pronto para instalar! ✅":ee>=50?"Quase lá — corrija os itens em vermelho":"Precisa de ajustes antes de instalar",Be=["https","manifest","service-worker","icon-192","icon-512","manifest-name","manifest-start-url","manifest-display"],I=ae=>ae.filter(ie=>ie.status!=="ok").slice().sort((ie,ue)=>{const y=Be.indexOf(ie.id),K=Be.indexOf(ue.id);return(y===-1?999:y)-(K===-1?999:K)});return e.jsxs("div",{children:[e.jsxs("div",{className:`border rounded-lg p-4 mb-4 flex items-center gap-4 ${$e}`,children:[e.jsxs("div",{className:"text-center shrink-0",children:[e.jsxs("div",{className:"text-3xl font-bold",style:{color:Ge},children:[ee,"%"]}),e.jsxs("div",{className:"text-xs text-[#6b8f68] mt-0.5",children:[ne,"/",be," itens"]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",style:{color:Ge},children:Ze}),e.jsx("div",{className:"text-xs text-[#6b8f68] mt-0.5 font-mono break-all",children:B.url})]}),e.jsxs("div",{className:"flex flex-col gap-1.5 shrink-0",children:[e.jsx("button",{onClick:X,disabled:g,className:"bg-[#1a3d14] hover:bg-[#2d4a1e] disabled:opacity-50 text-[#7ec87a] font-semibold text-xs px-3 py-2 rounded transition-colors whitespace-nowrap border border-[#3d6e2a]",title:"Roda a verificação novamente com a mesma URL",children:g?"⏳...":"🔄 Verificar novamente"}),e.jsx("button",{onClick:te,className:"bg-[#2d4a1e] hover:bg-[#3d5e2a] text-[#7ec87a] font-semibold text-xs px-3 py-2 rounded transition-colors whitespace-nowrap",title:"Abre uma janela pronta para imprimir ou salvar como PDF",children:"📄 Baixar relatório"})]})]}),e.jsx("div",{className:"space-y-2",children:ye.map(ae=>{const ie=ae.status==="ok",ue=ae.status==="warn",y=ie?"✅":ue?"⚠️":"❌",K=ie?"border-[#2d5a1e]":ue?"border-[#4a3800]":"border-[#5a1a1a]",oe=ie?"bg-[#0a1a0a]":ue?"bg-[#151000]":"bg-[#120000]",de=ie?"text-[#7ec87a]":ue?"text-[#d4aa40]":"text-[#d47070]";return e.jsxs("div",{className:`border rounded-lg p-3 ${oe} ${K}`,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-base shrink-0",children:y}),e.jsx("span",{className:`text-sm font-semibold ${de}`,children:ae.label})]}),e.jsx("p",{className:"text-[#6b8f68] text-xs mt-1 ml-6 leading-relaxed",children:ae.detail}),!ie&&ae.fix&&e.jsxs("div",{className:"mt-2 ml-6 bg-[#0d1309] border border-[#2d4a1e] rounded p-2",children:[e.jsx("span",{className:"text-[#5aab56] text-xs font-semibold block mb-0.5",children:"💡 Como corrigir:"}),e.jsx("span",{className:"text-[#8cba89] text-xs leading-relaxed",children:ae.fix})]})]},ae.id)})}),ee<80&&(()=>{const ae={https:{tab:"universal",label:"Guia Universal"},manifest:{tab:"android-pwa",label:"Android PWA"},"manifest-name":{tab:"android-pwa",label:"Android PWA"},"manifest-start-url":{tab:"android-pwa",label:"Android PWA"},"manifest-display":{tab:"android-pwa",label:"Android PWA"},"service-worker":{tab:"android-pwa",label:"Android PWA"},"icon-192":{tab:"android-pwa",label:"Android PWA"},"icon-512":{tab:"android-pwa",label:"Android PWA"}},ue=I(ye).slice(0,3);return ue.length===0?null:e.jsxs("div",{className:"mt-4 border border-[#3d6e2a] rounded-lg p-4 bg-[#0d1a08]",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"text-base",children:"🚀"}),e.jsx("h3",{className:"text-[#7ec87a] font-semibold text-sm",children:"Por onde começar"})]}),e.jsx("p",{className:"text-[#6b8f68] text-xs mb-3",children:"Corrija estes itens primeiro — são os de maior impacto para o seu app virar PWA:"}),e.jsx("ol",{className:"space-y-3",children:ue.map((y,K)=>{const oe=ae[y.id]||{tab:"android-pwa",label:"Android PWA"};return e.jsxs("li",{className:"flex gap-3 items-start",children:[e.jsx("span",{className:"bg-[#2d4a1e] text-[#7ec87a] font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5",children:K+1}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"text-[#a8d5a2] text-sm font-semibold",children:y.label}),y.fix&&e.jsx("div",{className:"text-[#6b8f68] text-xs mt-0.5 leading-relaxed",children:y.fix}),e.jsxs("button",{onClick:()=>u(oe.tab),className:"mt-2 inline-flex items-center gap-1 bg-[#2d4a1e] hover:bg-[#3d5e2a] text-[#7ec87a] text-xs font-semibold px-2.5 py-1 rounded transition-colors",children:['Ir para "',oe.label,'" →']})]})]},y.id)})})]})})(),ee>=80&&ee<100&&(()=>{const ae=I(ye);if(ae.length===0)return null;const ie=ae[0];return e.jsxs($,{color:"yellow",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"text-base",children:"⭐"}),e.jsxs("strong",{children:["Quase lá! Falt",ae.length===1?"a 1 item":`am ${ae.length} itens`," — você está a um passo de estar pronto para instalar."]})]}),e.jsx("p",{className:"text-xs opacity-75 mb-2",children:"Próximo item a corrigir:"}),e.jsxs("div",{className:"flex gap-3 items-start",children:[e.jsx("span",{className:"bg-[#4a3800] text-[#d4aa40] font-bold rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0 mt-0.5",children:"1"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-semibold",children:ie.label}),ie.fix&&e.jsx("div",{className:"text-xs opacity-75 mt-0.5 leading-relaxed",children:ie.fix})]})]})]})})(),ee===100&&e.jsxs($,{color:"green",children:["🎉 ",e.jsx("strong",{children:"Perfeito!"}),' Seu app tem todos os requisitos PWA. Instale via Chrome (Android PWA) ou gere um APK pela aba "APK Online".']})]})})()]}),"android-pwa":e.jsxs("div",{children:[e.jsxs($,{color:"green",children:["✅ ",e.jsx("strong",{children:"Mais fácil e rápido."})," Não precisa instalar nada. O app fica na tela inicial igual a um app nativo."]}),e.jsx(E,{children:"📱 Passo a passo — Android com Chrome"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(v,{n:1,children:[e.jsx("strong",{children:"Publique seu app"})," no Replit para obter uma URL pública",e.jsx("br",{}),e.jsx("span",{className:"text-[#5aab56] font-mono text-xs",children:"ex: https://seu-app.replit.app"}),' — veja a aba "Guia Universal" se tiver dúvidas']}),e.jsxs(v,{n:2,children:["No Android, abra o ",e.jsx("strong",{children:"Google Chrome"})," e acesse a URL do app publicado"]}),e.jsxs(v,{n:3,children:["Toque nos ",e.jsx("strong",{children:"3 pontinhos (⋮)"})," no canto superior direito do Chrome"]}),e.jsxs(v,{n:4,children:["Toque em ",e.jsx("strong",{children:'"Adicionar à tela inicial"'})," ou ",e.jsx("strong",{children:'"Instalar app"'})]}),e.jsxs(v,{n:5,children:["Confirme tocando em ",e.jsx("strong",{children:'"Adicionar"'})," — o ícone aparece na tela inicial e abre sem barra do Chrome! ✅"]})]}),e.jsx($,{color:"blue",children:"💡 Em alguns Androids aparece um banner automático na parte inferior pedindo para instalar. Basta tocar nele!"}),e.jsx(E,{children:"🔍 Se o botão de instalar não aparecer"}),e.jsx(k,{children:"O app precisa ter manifest.json e service worker válidos:"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Abra o Chrome DevTools (F12 no PC) → aba Application → Manifest"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"}),' Verifique se aparece "Installable"']}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," O SK Code Editor já tem tudo configurado ✅"]})]})]}),"ios-pwa":e.jsxs("div",{children:[e.jsxs($,{color:"yellow",children:["⚠️ ",e.jsx("strong",{children:"Atenção:"})," No iPhone/iPad, a instalação PWA só funciona pelo ",e.jsx("strong",{children:"Safari"}),". Chrome e outros navegadores no iOS não suportam esse recurso."]}),e.jsx(E,{children:"📱 Passo a passo — iPhone e iPad"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(v,{n:1,children:["Abra o ",e.jsx("strong",{children:"Safari"})," (o navegador padrão da Apple, ícone bússola azul)"]}),e.jsxs(v,{n:2,children:["Acesse a URL do seu app publicado",e.jsx("br",{}),e.jsx("span",{className:"text-[#5aab56] font-mono text-xs",children:"ex: https://meu-app.replit.app"})]}),e.jsx(v,{n:3,children:"Aguarde o app carregar completamente"}),e.jsxs(v,{n:4,children:["Toque no botão de ",e.jsx("strong",{children:"Compartilhar"})," — o ícone de uma caixa com uma seta para cima, na barra inferior do Safari"]}),e.jsx(v,{n:5,children:"Role para baixo no menu que aparece"}),e.jsxs(v,{n:6,children:["Toque em ",e.jsx("strong",{children:'"Adicionar à Tela de Início"'})]}),e.jsxs(v,{n:7,children:["Edite o nome se quiser e toque em ",e.jsx("strong",{children:'"Adicionar"'})]}),e.jsx(v,{n:8,children:"✅ O ícone aparece na tela inicial — abre em tela cheia!"})]}),e.jsx(E,{children:"⚙️ Limitações no iOS"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#d4aa40]",children:"›"})," Notificações push não funcionam no iOS (limitação da Apple)"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#d4aa40]",children:"›"})," Armazenamento offline tem limite de 50MB no Safari"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," A aparência e funcionamento são os mesmos do Android ✅"]})]})]}),pwabuilder:e.jsxs("div",{children:[e.jsxs($,{color:"green",children:["⚡ ",e.jsx("strong",{children:"Gera APK real sem instalar nada."})," Serviço gratuito do próprio Google. Funciona para qualquer app PWA."]}),e.jsx(E,{children:"🌐 Cole a URL do seu app e abra o PWABuilder"}),e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-4 mb-4",children:[e.jsx("label",{className:"block text-[#5aab56] text-xs mb-2 font-semibold",children:"URL do app publicado"}),e.jsx("input",{type:"url",value:T,onChange:ee=>_(ee.target.value),placeholder:"https://seu-app.replit.app",className:"w-full bg-[#141c0d] border border-[#3d6e2a] rounded px-3 py-2 text-sm text-[#a8d5a2] placeholder-[#3d6e2a] outline-none focus:border-[#5aab56] mb-3"}),e.jsx("a",{href:`https://pwabuilder.com/?site=${encodeURIComponent(T||"https://seu-app.replit.app")}`,target:"_blank",rel:"noopener noreferrer",className:"block w-full bg-[#2d4a1e] hover:bg-[#3d5e2a] text-[#7ec87a] font-semibold text-sm py-2 rounded text-center transition-colors",children:"⚡ Abrir no PWABuilder.com"})]}),e.jsx(E,{children:"🚀 Passo a passo"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(v,{n:1,children:["Cole a URL acima e clique em ",e.jsx("strong",{children:'"Abrir no PWABuilder.com"'})]}),e.jsx(v,{n:2,children:"O site analisa seu app (30-60 seg) — verifica manifest e service worker"}),e.jsxs(v,{n:3,children:["Role até a seção ",e.jsx("strong",{children:'"Android"'})," e clique em ",e.jsx("strong",{children:'"Download"'})]}),e.jsxs(v,{n:4,children:["Você recebe um ",e.jsx("strong",{children:".zip"})," com um ",e.jsx("strong",{children:".apk"})," já assinado dentro"]}),e.jsx(v,{n:5,children:"Transfira o .apk para o celular e instale (pode ser via Google Drive, cabo USB ou WhatsApp)"})]}),e.jsx($,{color:"blue",children:'💡 O APK gerado pelo PWABuilder já vem assinado com uma chave de teste. Para publicar na Play Store com assinatura própria, use a aba "APK Projeto".'}),e.jsxs("details",{className:"mt-6 border border-[#2d4a1e] rounded-lg overflow-hidden",children:[e.jsx("summary",{className:"cursor-pointer bg-[#0d1309] px-4 py-3 text-[#5aab56] text-sm font-semibold select-none hover:bg-[#111e0b] transition-colors",children:"🔧 Avançado — Bubblewrap CLI (linha de comando)"}),e.jsxs("div",{className:"p-4",children:[e.jsxs($,{color:"yellow",children:["🔧 ",e.jsx("strong",{children:"Método avançado."})," Requer Node.js, Java 17+ e Android SDK instalados no computador. Ideal para automatizar o processo ou publicar na Play Store."]}),e.jsx(E,{children:"📋 Requisitos"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 mb-4",children:[["Node.js 18+","nodejs.org","https://nodejs.org"],["Java JDK 17+","adoptium.net","https://adoptium.net"],["Android Studio","developer.android.com/studio","https://developer.android.com/studio"]].map(([ee,ne,be])=>e.jsxs("div",{className:"flex items-center justify-between bg-[#0d1309] border border-[#2d4a1e] rounded p-3",children:[e.jsx("span",{className:"text-[#8cba89] text-sm font-semibold",children:ee}),e.jsx("a",{href:be,target:"_blank",rel:"noopener noreferrer",className:"text-[#6ab4ff] text-xs underline",children:ne})]},ee))}),e.jsx(E,{children:"🚀 Passo a passo"}),e.jsx(j,{children:"1. Instalar o Bubblewrap CLI"}),e.jsx(F,{copyKey:"bw-install",children:"npm install -g @bubblewrap/cli"}),e.jsx(j,{children:"2. Inicializar o projeto TWA"}),e.jsx(F,{copyKey:"bw-init",children:"bubblewrap init --manifest https://SEU-APP.replit.app/manifest.json"}),e.jsx(k,{children:"O Bubblewrap faz perguntas sobre o app (nome, ícone, cor) e cria o projeto automaticamente."}),e.jsx(j,{children:"3. Compilar o APK"}),e.jsx(F,{copyKey:"bw-build",children:"bubblewrap build"}),e.jsxs(k,{children:["Gera ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:"app-release-signed.apk"})," na pasta do projeto."]}),e.jsx(j,{children:"4. Instalar no celular via USB"}),e.jsx(F,{copyKey:"bw-install-device",children:"adb install app-release-signed.apk"}),e.jsx($,{color:"blue",children:"🔁 Sempre que atualizar e republicar seu app web, o APK já busca a versão mais nova automaticamente — sem gerar novo APK!"})]})]})]}),twa:e.jsxs("div",{children:[e.jsxs($,{color:"blue",children:["📦 ",e.jsx("strong",{children:"Gera um projeto Android completo."})," Você compila com Android Studio e tem controle total — ideal para publicar na Play Store com sua própria assinatura."]}),e.jsx(E,{children:"⬇️ Gerar e baixar o projeto Android"}),e.jsx(k,{children:"Cole a URL do seu app publicado abaixo e clique em Baixar. Você receberá um .zip com o projeto Android completo pronto para compilar:"}),e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-4 mb-4",children:[e.jsx("label",{className:"block text-[#5aab56] text-xs mb-2 font-semibold",children:"URL do app publicado"}),e.jsx("input",{type:"url",value:m,onChange:ee=>C(ee.target.value),placeholder:"https://meu-app.replit.app",className:"w-full bg-[#141c0d] border border-[#3d6e2a] rounded px-3 py-2 text-sm text-[#a8d5a2] placeholder-[#3d6e2a] outline-none focus:border-[#5aab56] mb-3"}),O&&e.jsx("p",{className:"text-[#d47070] text-xs mb-2",children:O}),e.jsx("button",{onClick:re,disabled:D,className:"w-full bg-[#2d4a1e] hover:bg-[#3d5e2a] disabled:opacity-50 text-[#7ec87a] font-semibold text-sm py-2 rounded transition-colors",children:D?"⏳ Gerando pacote...":"📦 Baixar Projeto Android (.zip)"})]}),e.jsx(E,{children:"🛠️ O que tem no ZIP baixado"}),e.jsxs("ul",{className:"space-y-1 mb-4",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:"AndroidManifest.xml"})," — configuração do app com sua URL"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:"app/build.gradle"})," — dependências Android e configuração de build"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:"strings.xml"})," — nome do app e URL configurada"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:".well-known/assetlinks.json"})," — template para verificação de domínio"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," ",e.jsx("code",{className:"text-[#a8d5a2] font-mono",children:"README.md"})," — instruções completas de compilação"]})]}),e.jsx(E,{children:"🏗️ Compilar com Android Studio (recomendado)"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(v,{n:1,children:["Baixe e instale o ",e.jsx("a",{href:"https://developer.android.com/studio",target:"_blank",rel:"noopener noreferrer",className:"text-[#6ab4ff] underline",children:"Android Studio"})," no seu computador"]}),e.jsx(v,{n:2,children:"Extraia o .zip baixado em uma pasta"}),e.jsxs(v,{n:3,children:["Abra o Android Studio → ",e.jsx("strong",{children:"File → Open"})," → selecione a pasta extraída"]}),e.jsx(v,{n:4,children:"Aguarde o Gradle sincronizar (primeira vez pode demorar 5-10 min)"}),e.jsxs(v,{n:5,children:["Vá em ",e.jsx("strong",{children:"Build → Generate Signed Bundle / APK → APK"})]}),e.jsxs(v,{n:6,children:["Clique em ",e.jsx("strong",{children:'"Create new keystore..."'})," — preencha os dados e salve o arquivo .jks ",e.jsx("span",{className:"text-[#d47070]",children:"(guarde esse arquivo! É sua assinatura)"})]}),e.jsxs(v,{n:7,children:["Escolha ",e.jsx("strong",{children:"release"})," e clique em ",e.jsx("strong",{children:"Finish"})]}),e.jsxs(v,{n:8,children:["O APK fica em: ",e.jsx("code",{className:"text-[#a8d5a2] font-mono text-xs",children:"app/release/app-release.apk"})]})]}),e.jsx(E,{children:"📲 Para publicar na Play Store"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Crie conta em ",e.jsx("a",{href:"https://play.google.com/console",target:"_blank",rel:"noopener noreferrer",className:"text-[#6ab4ff] underline",children:"Google Play Console"})," (taxa única de US$ 25)"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Faça upload do .apk ou .aab (Android App Bundle)"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Preencha as informações do app (nome, ícone, descrição, screenshots)"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Configure o assetlinks.json no seu servidor (instruções no README)"]})]})]}),universal:e.jsxs("div",{children:[e.jsxs($,{color:"green",children:["🌐 ",e.jsx("strong",{children:"Este guia se aplica a QUALQUER projeto Replit."})," Siga os passos abaixo para transformar qualquer app web em app no celular."]}),e.jsx(E,{children:"📋 PASSO 1 — Escolha o plano Replit correto"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 mb-4",children:[{plano:"Free (Gratuito)",ok:"PWA via Chrome/Safari ✅",nok:"URL aleatória no Replit",rec:"Funciona para uso pessoal"},{plano:"Hacker / Pro",ok:"Domínio .replit.app fixo ✅",nok:"—",rec:"Recomendado para apps sérios"},{plano:"Custom Domain",ok:"Seu próprio domínio ✅",nok:"Custo extra",rec:"Para apps profissionais/Play Store"}].map(({plano:ee,ok:ne,nok:be,rec:ye})=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-3",children:[e.jsx("div",{className:"text-[#7ec87a] font-bold text-sm mb-1",children:ee}),e.jsxs("div",{className:"text-[#8cba89] text-xs",children:["✅ ",ne]}),be!=="—"&&e.jsxs("div",{className:"text-[#d4aa40] text-xs",children:["⚠️ ",be]}),e.jsxs("div",{className:"text-[#5aab56] text-xs mt-1",children:["→ ",ye]})]},ee))}),e.jsx(E,{children:"🚀 PASSO 2 — Publicar o app no Replit"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(v,{n:1,children:["Abra seu projeto no ",e.jsx("a",{href:"https://replit.com",target:"_blank",rel:"noopener noreferrer",className:"text-[#6ab4ff] underline",children:"replit.com"})]}),e.jsx(v,{n:2,children:"Certifique-se que o app está rodando (botão ▶ Run)"}),e.jsxs(v,{n:3,children:["Clique no botão ",e.jsx("strong",{children:'"Deploy"'})," (avião de papel) no canto superior direito"]}),e.jsxs(v,{n:4,children:["Escolha ",e.jsx("strong",{children:'"Reserved VM"'})," ou ",e.jsx("strong",{children:'"Autoscale"'})]}),e.jsx(v,{n:5,children:"Configure o domínio (ou use o .replit.app gerado automaticamente)"}),e.jsxs(v,{n:6,children:["Clique em ",e.jsx("strong",{children:'"Deploy"'})," e aguarde"]}),e.jsxs(v,{n:7,children:["Copie a URL gerada — ex: ",e.jsx("code",{className:"text-[#a8d5a2] font-mono text-xs",children:"https://meu-app.replit.app"})]})]}),e.jsx(E,{children:"📱 PASSO 3 — Verificar se o app é PWA-pronto"}),e.jsx(k,{children:"Para funcionar como app, seu projeto precisa ter:"}),e.jsx("div",{className:"space-y-2 mb-4",children:[["manifest.json","Arquivo na pasta public/ com nome, ícones e cores","obrigatório"],["Service Worker (sw.js)","Permite funcionamento offline e instalação","obrigatório"],["Ícones 192px e 512px","Imagens PNG para o ícone do app","obrigatório"],["HTTPS","O Replit Deploy já usa HTTPS automaticamente","automático"]].map(([ee,ne,be])=>e.jsxs("div",{className:"flex items-start gap-3 bg-[#0d1309] border border-[#2d4a1e] rounded p-3",children:[e.jsx("span",{className:`text-xs px-1.5 py-0.5 rounded shrink-0 mt-0.5 ${be==="automático"?"bg-[#0d1e3d] text-[#6ab4ff]":"bg-[#1a3d14] text-[#7ec87a]"}`,children:be}),e.jsxs("div",{children:[e.jsx("div",{className:"text-[#7ec87a] text-sm font-semibold",children:ee}),e.jsx("div",{className:"text-[#6b8f68] text-xs",children:ne})]})]},ee))}),e.jsx($,{color:"blue",children:'💡 O SK Code Editor já tem manifest.json, sw.js e ícones prontos. Para outros projetos seus no Replit, peça para a Jasmim: "Adicione PWA neste projeto com manifest.json e service worker".'}),e.jsx(E,{children:"🔄 PASSO 4 — Escolha o método de instalação"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 mb-4",children:[["📱 PWA (mais fácil)","Chrome → 3 pontinhos → Instalar","Qualquer projeto publicado","Instantâneo"],["⚡ APK via PWABuilder","pwabuilder.com → cola URL → baixa APK","Projetos PWA-válidos","5 minutos"],["📦 APK via TWA ZIP","Baixe o pacote aqui → compile com Android Studio","Qualquer projeto publicado","30 minutos (1ª vez)"],["🔧 Bubblewrap CLI","npm install bubblewrap → gera APK via terminal","Desenvolvedores avançados","1-2 horas (1ª vez)"]].map(([ee,ne,be,ye])=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-3",children:[e.jsx("div",{className:"text-[#7ec87a] font-bold text-sm",children:ee}),e.jsx("div",{className:"text-[#8cba89] text-xs mt-1",children:ne}),e.jsxs("div",{className:"flex gap-3 mt-2 text-xs",children:[e.jsxs("span",{className:"text-[#5aab56]",children:["✓ ",be]}),e.jsxs("span",{className:"text-[#6b8f68]",children:["⏱ ",ye]})]})]},ee))}),e.jsx(E,{children:"♻️ Aplicar em todos os seus projetos"}),e.jsx(k,{children:"Para cada app que você tiver no Replit, repita estes passos:"}),e.jsx("ol",{className:"mb-2",children:["Publique o app (Deploy) → copie a URL","Teste se o manifest.json está acessível: URL/manifest.json","Abra no Chrome do celular → instale como PWA","Para APK: cole a URL aqui ou no PWABuilder.com e baixe o pacote"].map((ee,ne)=>e.jsx(v,{n:ne+1,children:ee},ne))})]})};return e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-4",children:[e.jsxs("div",{className:"flex-1 bg-[#0d2210] border border-[#2d5a1e] rounded-lg p-3 flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[#7ec87a] font-semibold text-sm",children:"⬇️ ZIP do Projeto"}),e.jsx("p",{className:"text-[#5aab56] text-xs mt-0.5",children:"Exporta todos os arquivos do editor"})]}),e.jsx("button",{onClick:xe,disabled:L,className:"shrink-0 bg-[#2d4a1e] hover:bg-[#3d5e2a] disabled:opacity-50 text-[#7ec87a] font-semibold text-xs px-4 py-2 rounded-lg transition-colors",children:L?"⏳ Gerando...":"⬇️ Baixar ZIP"})]}),e.jsxs("div",{className:"flex-1 bg-[#0d1a30] border border-[#1e3d7a] rounded-lg p-3 flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[#6ab4ff] font-semibold text-sm",children:"⬇️ Pacote Android TWA"}),e.jsx("p",{className:"text-[#4a8fd4] text-xs mt-0.5",children:"Projeto Android para gerar APK do seu app"})]}),e.jsx("button",{onClick:()=>{u("twa"),re()},disabled:D,className:"shrink-0 bg-[#1e3d7a] hover:bg-[#2a5099] disabled:opacity-50 text-[#6ab4ff] font-semibold text-xs px-4 py-2 rounded-lg transition-colors whitespace-nowrap",children:D?"⏳ Gerando...":"⬇️ Baixar TWA"})]})]}),M&&e.jsxs("div",{className:"bg-[#2d2200] border border-[#5a4500] text-[#d4aa40] rounded-lg p-3 mb-4 text-sm flex items-start gap-2",children:[e.jsx("span",{className:"shrink-0",children:"⚠️"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:"Nenhum arquivo no projeto"}),e.jsx("p",{className:"text-xs text-[#b89030] mt-0.5",children:"Adicione ou crie arquivos no editor antes de baixar o ZIP."})]})]}),e.jsx("div",{className:"flex gap-1 mb-4 overflow-x-auto pb-1 flex-wrap",children:U.map(ee=>e.jsxs("button",{onClick:()=>u(ee.id),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${l===ee.id?"bg-[#2d4a1e] text-[#7ec87a] border border-[#5aab56]":"bg-[#141c0d] text-[#5a7a56] border border-[#2d4a1e] hover:text-[#7ec87a]"}`,children:[ee.icon," ",ee.label]},ee.id))}),Z[l]]})})()},{id:"terminal",icon:"🖥️",title:"Terminal",content:e.jsxs("div",{children:[e.jsxs(k,{children:["O terminal do SK Code Editor é um bash ",e.jsx("strong",{className:"text-[#7ec87a]",children:"real"})," — todos os comandos rodam no servidor e retornam saída verdadeira."]}),e.jsx(E,{children:"📂 Diretório de trabalho"}),e.jsx(F,{copyKey:"cwd",children:"/home/runner/sk-user-workspace/"}),e.jsx(k,{children:"Todo projeto fica dentro desta pasta. Use paths relativos normalmente."}),e.jsx(E,{children:"🔧 Comandos mais usados"}),e.jsx(j,{children:"Gerenciamento de pacotes Node.js"}),e.jsx(F,{copyKey:"npm-install",children:"npm install express axios cors dotenv"}),e.jsx(F,{copyKey:"npm-run",children:"npm run dev npm start npm run build"}),e.jsx(j,{children:"Gerenciamento de pacotes Python"}),e.jsx(F,{copyKey:"pip",children:"pip install flask requests pandas sqlalchemy"}),e.jsx(F,{copyKey:"python-run",children:"python app.py python -m pytest python -m py_compile arquivo.py"}),e.jsx(j,{children:"Navegação e arquivos"}),e.jsx(F,{copyKey:"nav",children:"ls -la           # listar arquivos pwd              # diretório atual cd meu-projeto   # entrar na pasta mkdir nova-pasta # criar pasta cat package.json # ler arquivo"}),e.jsx(j,{children:"Processos"}),e.jsx(F,{copyKey:"proc",children:"ps aux | grep node    # ver processos Node rodando kill -9 PID          # matar processo pelo ID lsof -i :3000        # ver quem usa a porta 3000"}),e.jsx(j,{children:"Git no terminal"}),e.jsx(F,{copyKey:"git-terminal",children:'git status git add . git commit -m "minha mensagem" git push origin main'}),e.jsx(E,{children:"⚙️ Variáveis de ambiente"}),e.jsxs(k,{children:["Crie um arquivo ",e.jsx(ce,{color:"green",children:".env"})," na raiz do projeto:"]}),e.jsx(F,{copyKey:"env-file",children:"DATABASE_URL=postgresql://user:pass@host/db?sslmode=require PORT=3000 JWT_SECRET=minha-chave-secreta-longa-aqui NODE_ENV=development"}),e.jsxs(k,{children:["Instale o dotenv e use ",e.jsx(ce,{color:"green",children:"require('dotenv').config()"})," no início do seu script para carregar as variáveis."]}),e.jsx(E,{children:"🚀 Rodar um servidor"}),e.jsx(F,{copyKey:"server",children:"node index.js           # Node puro npm run dev             # com nodemon (auto-restart) npx ts-node src/main.ts # TypeScript direto uvicorn main:app --reload # FastAPI/Python"}),e.jsx(E,{children:"💡 Dicas"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(x,{children:"Use Ctrl+C para parar qualquer processo rodando"}),e.jsx(x,{children:"Se travar, feche e reabra o terminal (ícone ✕ → ▶)"}),e.jsx(x,{children:"O terminal salva histórico — use ↑ para repetir comandos"}),e.jsx(x,{children:'Peça para a Jasmim rodar comandos: "rode npm install e mostre o resultado"'})]})]})},{id:"neon",icon:"🗄️",title:"Banco de Dados (Neon)",content:e.jsxs("div",{children:[e.jsxs(k,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Neon DB"})," é PostgreSQL serverless gratuito — a melhor opção para projetos profissionais. Sem cartão de crédito."]}),e.jsx(E,{children:"🚀 Setup em 5 minutos"}),e.jsx("ol",{className:"space-y-3 mb-4",children:[{step:"Crie conta gratuita em",link:"https://neon.tech",detail:"plano Free, sem cartão"},{step:'Clique em "New Project"',link:null,detail:"dê um nome ao banco (ex: meu-app)"},{step:"Copie a Connection String",link:null,detail:"começa com postgresql://..."},{step:"Cole no painel 🗄️ do editor",link:null,detail:"ícone de banco na barra inferior"},{step:"Pronto!",link:null,detail:"a Jasmim já tem acesso ao seu banco"}].map(({step:U,link:v,detail:$},Z)=>e.jsxs("li",{className:"flex gap-3",children:[e.jsxs("span",{className:"text-[#7ec87a] font-bold shrink-0 w-5",children:[Z+1,"."]}),e.jsxs("div",{children:[e.jsxs("span",{className:"text-[#8cba89] text-sm",children:[U," "]}),v&&e.jsx("span",{className:"text-[#6ab4ff] text-sm",children:v}),e.jsx("div",{className:"text-[#5aab56] text-xs mt-0.5",children:$})]})]},Z))}),e.jsx(E,{children:"🔑 Obter Neon API Key (para automação)"}),e.jsx(k,{children:"Com a API Key, a Jasmim pode criar o banco automaticamente para você:"}),e.jsxs("ol",{className:"space-y-1",children:[e.jsx(x,{children:"Entre em https://console.neon.tech"}),e.jsx(x,{children:"Vá em Settings → API Keys → Create API Key"}),e.jsx(x,{children:"A chave começa com neon_api_..."}),e.jsx(x,{children:'Envie a chave para a Jasmim: "Crie um banco chamado meu-app"'})]}),e.jsx(E,{children:"📦 Instalar dependências"}),e.jsx(F,{copyKey:"neon-install",children:"npm install @neondatabase/serverless dotenv"}),e.jsx(E,{children:"🔌 Arquivo de conexão"}),e.jsx(F,{copyKey:"neon-connect",children:`// db/neon.js
const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

const sql = neon(process.env.DATABASE_URL);

async function initDb() {
  await sql\`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      criado_em TIMESTAMP DEFAULT NOW()
    )
  \`;
  console.log('✅ Banco inicializado!');
}

module.exports = { sql, initDb };`}),e.jsx(E,{children:"📄 Arquivo .env"}),e.jsx(F,{copyKey:"neon-env",children:`DATABASE_URL=postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
PORT=3000
NODE_ENV=development`}),e.jsx(E,{children:"⚡ Comandos SQL úteis"}),e.jsx(j,{children:"Criar tabela"}),e.jsx(F,{copyKey:"sql-create",children:`CREATE TABLE IF NOT EXISTS tarefas (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  concluida BOOLEAN DEFAULT false,
  criado_em TIMESTAMP DEFAULT NOW()
);`}),e.jsx(j,{children:"Inserir dados"}),e.jsx(F,{copyKey:"sql-insert",children:`INSERT INTO tarefas (titulo) 
VALUES ('Primeira tarefa'), ('Segunda tarefa');`}),e.jsx(j,{children:"Consultar"}),e.jsx(F,{copyKey:"sql-select",children:"SELECT * FROM tarefas ORDER BY criado_em DESC LIMIT 10;"}),e.jsx(j,{children:"Alterar tabela"}),e.jsx(F,{copyKey:"sql-alter",children:`ALTER TABLE tarefas ADD COLUMN descricao TEXT;
ALTER TABLE tarefas ADD COLUMN prioridade INTEGER DEFAULT 1;`}),e.jsx(E,{children:"🔐 Com Prisma ORM (recomendado para projetos maiores)"}),e.jsx(F,{copyKey:"prisma-install",children:"npm install prisma @prisma/client dotenv npx prisma init"}),e.jsx(F,{copyKey:"prisma-schema",children:`// prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Tarefa {
  id        Int      @id @default(autoincrement())
  titulo    String
  concluida Boolean  @default(false)
  criadoEm DateTime @default(now())
  @@map("tarefas")
}`}),e.jsx(F,{copyKey:"prisma-migrate",children:"npx prisma migrate dev --name init npx prisma studio   # abre interface visual do banco"}),e.jsx(E,{children:"⚠️ Regras importantes"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(x,{children:"NUNCA commite o .env com dados reais no git"}),e.jsx(x,{children:"SEMPRE crie .gitignore com .env listado"}),e.jsx(x,{children:"SEMPRE crie .env.example com valores de exemplo"}),e.jsx(x,{children:"Use sslmode=require para Neon (já vem na connection string)"})]})]})},{id:"jasmim",icon:"🤖",title:"Jasmim (IA)",content:e.jsxs("div",{children:[e.jsxs(k,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Jasmim"})," é sua assistente de IA — desenvolvedora sênior com autonomia total para criar projetos completos, corrigir erros e configurar banco de dados automaticamente."]}),e.jsx(E,{children:"💬 Como conversar com a Jasmim"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(x,{children:'Seja direto: "Crie um CRUD de clientes com Node.js e Neon DB"'}),e.jsx(x,{children:"Ela gera arquivos completos — você aplica com 1 clique"}),e.jsx(x,{children:"Ela vê o terminal automaticamente e já prepara a solução para erros"}),e.jsx(x,{children:"Ela continua sem parar até a tarefa estar 100% concluída"}),e.jsx(x,{children:'Peça revisões: "Adicione autenticação JWT nesse projeto"'})]}),e.jsx(E,{children:"🎯 O que a Jasmim faz sem precisar de permissão"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(x,{children:"Criar projeto do zero (qualquer linguagem/framework)"}),e.jsx(x,{children:"Instalar dependências (npm, pip, qualquer gerenciador)"}),e.jsx(x,{children:"Criar e modificar qualquer arquivo"}),e.jsx(x,{children:"Configurar banco de dados completo (schema, tabelas, migrations)"}),e.jsx(x,{children:"Adicionar autenticação, rotas, APIs REST"}),e.jsx(x,{children:"Corrigir erros de compilação automaticamente"}),e.jsx(x,{children:"Fazer push para GitHub quando você pedir"})]}),e.jsx(E,{children:"📋 Exemplos de comandos eficientes"}),e.jsx(j,{children:"Criar projeto completo"}),e.jsx(F,{copyKey:"jasmim-1",children:'"Crie um app de lista de tarefas com React, Node.js/Express, Neon DB PostgreSQL e autenticação JWT. Interface em português."'}),e.jsx(j,{children:"Configurar banco automaticamente"}),e.jsx(F,{copyKey:"jasmim-2",children:'"Minha Neon API Key é neon_api_xxx. Crie um banco chamado meu-app e já configure tudo no projeto."'}),e.jsx(j,{children:"Corrigir erro"}),e.jsx(F,{copyKey:"jasmim-3",children:'"Tem um erro no terminal acima, corrija."'}),e.jsx(j,{children:"Adicionar funcionalidade"}),e.jsx(F,{copyKey:"jasmim-4",children:'"Adicione upload de arquivos PDF nesse projeto usando multer. Salve os arquivos na pasta uploads/."'}),e.jsx(j,{children:"Refatorar"}),e.jsx(F,{copyKey:"jasmim-5",children:'"Reorganize a estrutura de pastas desse projeto seguindo as boas práticas do Express (routes/, controllers/, models/, middleware/)."'}),e.jsx(E,{children:"🔍 Escopo de arquivo"}),e.jsx(k,{children:"No topo do chat, selecione quais arquivos a Jasmim pode ver. Quanto mais arquivos você selecionar, melhor ela entende o contexto do projeto."}),e.jsx(E,{children:"📜 Histórico"}),e.jsx(k,{children:"O histórico de conversa fica salvo automaticamente. Use o botão 🗑️ para limpar e começar uma nova sessão quando mudar de projeto."})]})},{id:"github",icon:"🐙",title:"GitHub",content:e.jsxs("div",{children:[e.jsx(k,{children:"Conecte seu repositório GitHub ao SK Code Editor para fazer push, pull e gerenciar branches diretamente no editor."}),e.jsx(E,{children:"🔑 Criar Personal Access Token (PAT)"}),e.jsx("ol",{className:"space-y-2 mb-4",children:[{step:"Acesse",link:"github.com → Settings → Developer Settings"},{step:"Vá em",link:"Personal access tokens → Tokens (classic) → Generate new token"},{step:"Permissões necessárias:",link:"repo (todas), workflow (se usar Actions)"},{step:"Copie o token",link:"começa com ghp_..."},{step:"Cole no painel 🐙 do editor",link:"ícone GitHub na barra inferior"}].map(({step:U,link:v},$)=>e.jsxs("li",{className:"flex gap-3",children:[e.jsxs("span",{className:"text-[#7ec87a] font-bold shrink-0",children:[$+1,"."]}),e.jsxs("div",{className:"text-sm text-[#8cba89]",children:[e.jsx("strong",{children:U})," ",e.jsx("span",{className:"text-[#6ab4ff]",children:v})]})]},$))}),e.jsx(E,{children:"📦 Operações disponíveis no painel"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(x,{children:"Clonar repositório existente para o workspace"}),e.jsx(x,{children:"Fazer commit e push de arquivos modificados"}),e.jsx(x,{children:"Pull para atualizar o workspace com o remote"}),e.jsx(x,{children:"Ver diff dos arquivos modificados"}),e.jsx(x,{children:"Criar e trocar de branch"})]}),e.jsx(E,{children:"🖥️ Git no terminal"}),e.jsx(F,{copyKey:"git-full",children:`# Configurar identidade (primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Clonar repositório
git clone https://github.com/usuario/repo.git

# Fazer commit e push
git add .
git commit -m "feat: adiciona funcionalidade X"
git push origin main

# Criar e usar nova branch
git checkout -b minha-feature
git push -u origin minha-feature`}),e.jsx(E,{children:"⚠️ Segurança"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(x,{children:"NUNCA commite arquivos .env com senhas"}),e.jsx(x,{children:"Adicione .env ao .gitignore ANTES do primeiro commit"}),e.jsx(x,{children:"Seu PAT fica criptografado no editor — nunca é exposto"})]})]})},{id:"preview",icon:"👁️",title:"Preview ao Vivo",content:e.jsxs("div",{children:[e.jsx(k,{children:"O preview ao vivo renderiza HTML, CSS, JS e React diretamente no editor — sem precisar abrir o navegador."}),e.jsx(E,{children:"🖥️ Como abrir o preview"}),e.jsxs("ol",{className:"space-y-1 mb-3",children:[e.jsx(x,{children:"Toque no ícone 👁️ na barra inferior"}),e.jsx(x,{children:"O preview abre mostrando o index.html do projeto atual"}),e.jsx(x,{children:'Clique em "Tela Cheia" (ícone de expandir) para ver em tela grande'}),e.jsx(x,{children:'Clique em "Recarregar" para atualizar após mudanças'})]}),e.jsx(E,{children:"✅ Para o preview funcionar"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(x,{children:"O arquivo index.html precisa estar na raiz do projeto"}),e.jsx(x,{children:"CSS e JS referenciados no HTML são carregados automaticamente"}),e.jsx(x,{children:"Projetos React/Vite: rode npm run dev no terminal primeiro"})]}),e.jsx(E,{children:"🚀 Preview de um projeto Node.js/React"}),e.jsx(F,{copyKey:"preview-node",children:`# 1. Instale as dependências
npm install

# 2. Rode o servidor de desenvolvimento
npm run dev      # ou: npm start

# 3. O preview vai aparecer na porta configurada`}),e.jsx(E,{children:"📱 Preview responsivo"}),e.jsx(k,{children:"Use o botão de dimensões no preview para simular telas de smartphone, tablet e desktop sem precisar de DevTools."})]})},{id:"importexport",icon:"📦",title:"Importar / Exportar",content:e.jsxs("div",{children:[e.jsx(k,{children:"O SK Code Editor permite importar e exportar projetos como ZIP ou TAR.GZ para transferir entre dispositivos ou fazer backup."}),e.jsx(E,{children:"📥 Importar projeto"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(x,{children:'Toque no ícone 📁 na barra inferior → "Importar ZIP/TAR.GZ"'}),e.jsx(x,{children:"Selecione o arquivo .zip ou .tar.gz do seu projeto"}),e.jsx(x,{children:"O editor extrai e carrega todos os arquivos automaticamente"}),e.jsx(x,{children:"Projetos do VS Code, Replit, Glitch e outros são compatíveis"})]}),e.jsx(E,{children:"📤 Exportar projeto"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(x,{children:'Toque no ícone 📁 → "Exportar como ZIP"'}),e.jsx(x,{children:"Um arquivo .zip com todos os arquivos é baixado"}),e.jsx(x,{children:"Use para backup ou para abrir em outro editor"})]}),e.jsx(E,{children:"📦 Backup no Google Drive"}),e.jsx(k,{children:"Com Google Drive conectado (ícone ☁️):"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(x,{children:"Backup automático do projeto atual"}),e.jsx(x,{children:"Restaurar versões anteriores"}),e.jsx(x,{children:"Sincronizar entre dispositivos"})]}),e.jsx(E,{children:"💡 Dicas"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(x,{children:"Antes de importar, o projeto atual fica salvo no histórico"}),e.jsx(x,{children:"node_modules é ignorado na exportação (muito pesado)"}),e.jsx(x,{children:"Arquivos .env são incluídos — cuidado ao compartilhar"}),e.jsx(x,{children:"Para projetos grandes, prefira exportar TAR.GZ (menor)"})]})]})},{id:"credenciais",icon:"🔑",title:"Credenciais e API Keys",content:e.jsxs("div",{children:[e.jsx(k,{children:"O SK Code Editor usa credenciais para conectar serviços externos. Todas são salvas localmente e nunca enviadas para servidores externos."}),e.jsx(E,{children:"🔑 Onde configurar cada credencial"}),e.jsx("div",{className:"space-y-3 mb-4",children:[{icon:"🤖",name:"API Key de IA (OpenAI, Gemini, Groq...)",where:"Painel da Jasmim → ⚙️ Configurações",detail:"sk- (OpenAI), AIza (Gemini), gsk_ (Groq), sk-ant (Anthropic), xai- (Grok), sk-or- (OpenRouter)"},{icon:"🐙",name:"GitHub Personal Access Token",where:"Painel GitHub → Inserir credenciais",detail:"ghp_... (Token clássico, permissões: repo, workflow)"},{icon:"🗄️",name:"Connection String do Banco",where:"Painel Banco de Dados → Cole a URL",detail:"postgresql://user:pass@host/db?sslmode=require"},{icon:"☁️",name:"Google Drive",where:"Painel Backup → Conectar com Google",detail:"Login OAuth — não requer chave manual"}].map(({icon:U,name:v,where:$,detail:Z})=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-3",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{children:U}),e.jsx("strong",{className:"text-[#7ec87a] text-sm",children:v})]}),e.jsxs("div",{className:"text-[#5aab56] text-xs mb-1",children:["📍 ",$]}),e.jsx("div",{className:"text-[#6b8f68] text-xs font-mono",children:Z})]},v))}),e.jsx(E,{children:"🔒 Segurança"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsx(x,{children:"Credenciais ficam no localStorage do navegador — só você tem acesso"}),e.jsx(x,{children:"API keys de IA são enviadas apenas ao backend deste editor (nunca expostas)"}),e.jsx(x,{children:"Para trocar uma credencial, simplesmente cole a nova no mesmo campo"}),e.jsx(x,{children:"Para revogar acesso, delete a key no serviço externo (GitHub, OpenAI, etc.)"})]}),e.jsx(E,{children:"⚡ Detecção automática de provedor de IA"}),e.jsx(k,{children:"A Jasmim detecta automaticamente qual provedor usar pela sua API key:"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[["gsk_","Groq"],["sk-or-","OpenRouter"],["pplx-","Perplexity"],["AIza","Gemini"],["xai-","Grok (xAI)"],["sk-ant","Anthropic"],["neon_api_","Neon DB API"],["sk-","OpenAI"]].map(([U,v])=>e.jsxs("div",{className:"flex items-center gap-2 bg-[#0d1309] border border-[#2d4a1e] rounded p-2",children:[e.jsx(ce,{color:"green",children:U}),e.jsx("span",{className:"text-[#8cba89] text-xs",children:v})]},U))})]})},{id:"juridico",icon:"⚖️",title:"Assistente Jurídico",content:e.jsxs("div",{children:[e.jsxs(k,{children:["O ",e.jsx("strong",{className:"text-[#7ec87a]",children:"Assistente Jurídico"})," (Jamile) é especializado em Direito brasileiro — gera peças processuais, analisa ementas e responde perguntas jurídicas."]}),e.jsx(E,{children:"📋 Abas disponíveis"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsxs(x,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Processar"})," — gera petições, contratos, pareceres com base no prompt"]}),e.jsxs(x,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Ementas"})," — biblioteca de ementas jurisprudenciais que alimentam o contexto da IA"]}),e.jsxs(x,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Histórico"})," — últimas 15 gerações, com opção de restaurar e reeditar"]}),e.jsxs(x,{children:[e.jsx("strong",{className:"text-[#7ec87a]",children:"Ações"})," — ações personalizadas que você define e reutiliza"]})]}),e.jsx(E,{children:"⚡ Nível de Esforço (1–5)"}),e.jsx("div",{className:"grid grid-cols-5 gap-1 mb-3",children:[["1","Rápido","8k tokens"],["2","Básico","16k tokens"],["3","Normal","32k tokens"],["4","Detalhado","64k tokens"],["5","Exaustivo","131k tokens"]].map(([U,v,$])=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded p-2 text-center",children:[e.jsx("div",{className:"text-[#7ec87a] font-bold text-sm",children:U}),e.jsx("div",{className:"text-[#8cba89] text-xs",children:v}),e.jsx("div",{className:"text-[#5aab56] text-xs",children:$})]},U))}),e.jsx(E,{children:"📝 Verbosidade"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsxs(x,{children:[e.jsx("strong",{children:"Concisa"})," — peça objetiva, sem redundâncias, mais curta"]}),e.jsxs(x,{children:[e.jsx("strong",{children:"Completa"})," — peça completa com fundamentação aprofundada"]})]}),e.jsx(E,{children:"📚 Ementas (biblioteca jurisprudencial)"}),e.jsx(k,{children:"Na aba Ementas, você cadastra suas próprias ementas de jurisprudência. Elas são inseridas automaticamente no contexto quando você gera uma peça, enriquecendo a fundamentação jurídica da IA."}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsx(x,{children:"Cole a ementa completa no campo de texto"}),e.jsx(x,{children:"Dê um título para identificar facilmente"}),e.jsx(x,{children:"Marque as ementas que quer usar antes de gerar a peça"}),e.jsx(x,{children:"Você pode ter até 50 ementas na biblioteca"})]}),e.jsx(E,{children:"🎯 Ações personalizadas"}),e.jsx(k,{children:"Na aba Ações, crie prompts reutilizáveis para tipos de peça que você usa frequentemente. Exemplos:"}),e.jsx(F,{copyKey:"acao-exemplo",children:'"Elabore uma petição inicial de ação de indenização por danos morais decorrentes de negativação indevida, fundamentada no CDC e CC. Inclua pedido de tutela de urgência para exclusão imediata do nome dos cadastros de restrição ao crédito."'})]})},{id:"meus-projetos",icon:"🗂️",title:"Meus Projetos",content:(()=>{const U=[{id:"importar",label:"Trazer do Replit",icon:"⬇️"},{id:"desktop",label:"App no PC",icon:"🖥️"},{id:"privado",label:"Instalação Privada",icon:"🔒"},{id:"juntar",label:"Juntar Apps",icon:"🔗"},{id:"orientar",label:"Me Oriento",icon:"🧭"}],v=({n:ne,children:be})=>e.jsxs("li",{className:"flex gap-3 mb-3",children:[e.jsx("span",{className:"bg-[#2d4a1e] text-[#7ec87a] font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0 mt-0.5",children:ne}),e.jsx("span",{className:"text-[#8cba89] text-sm leading-relaxed",children:be})]}),$=({color:ne,children:be})=>{const ye={green:"bg-[#0d2210] border-[#2d5a1e] text-[#7ec87a]",blue:"bg-[#0a1530] border-[#1e3d7a] text-[#6ab4ff]",yellow:"bg-[#1e1500] border-[#4a3800] text-[#d4aa40]",red:"bg-[#1e0a0a] border-[#5a1e1e] text-[#d47070]"}[ne];return e.jsx("div",{className:`border rounded-lg p-3 mb-3 text-sm ${ye}`,children:be})},Z=({icon:ne,title:be,desc:ye})=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-3 mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{children:ne}),e.jsx("strong",{className:"text-[#7ec87a] text-sm",children:be})]}),e.jsx("p",{className:"text-[#8cba89] text-xs leading-relaxed",children:ye})]}),ee={importar:e.jsxs("div",{children:[e.jsxs($,{color:"blue",children:["⬇️ ",e.jsx("strong",{children:"Você não precisa recriar nada."})," Seus projetos do Replit chegam aqui prontos — código, arquivos e tudo mais. Escolha o método abaixo."]}),e.jsx(E,{children:"📦 MÉTODO 1 — Via ZIP (mais fácil)"}),e.jsx(k,{children:"No Replit, qualquer projeto pode ser exportado como ZIP em segundos."}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(v,{n:1,children:["Abra o projeto no ",e.jsx("a",{href:"https://replit.com",target:"_blank",rel:"noopener noreferrer",className:"text-[#6ab4ff] underline",children:"Replit"})]}),e.jsxs(v,{n:2,children:["Clique nos ",e.jsx("strong",{children:"3 pontinhos (⋯)"})," no topo ou vá em ",e.jsx("strong",{children:"Files → Download as zip"})]}),e.jsx(v,{n:3,children:"Salve o arquivo .zip no celular ou computador"}),e.jsxs(v,{n:4,children:["Aqui no SK Editor, toque no ícone ",e.jsx("strong",{children:"📁"})," na barra inferior"]}),e.jsxs(v,{n:5,children:["Toque em ",e.jsx("strong",{children:'"Importar ZIP"'})," e selecione o arquivo"]}),e.jsx(v,{n:6,children:"✅ O projeto aparece com todos os arquivos prontos para editar"})]}),e.jsx($,{color:"green",children:"💡 Funciona com qualquer projeto: Node.js, Python, React, HTML puro, qualquer linguagem."}),e.jsx(E,{children:"🐙 MÉTODO 2 — Via GitHub (recomendado para manter sincronizado)"}),e.jsx(k,{children:"Se o projeto estiver no GitHub, você clona direto pelo terminal."}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(v,{n:1,children:["No Replit, vá em ",e.jsx("strong",{children:"Version Control"})," e conecte ao GitHub se ainda não fez"]}),e.jsxs(v,{n:2,children:["Faça push do projeto para o GitHub (botão ",e.jsx("strong",{children:"Push"}),")"]}),e.jsxs(v,{n:3,children:["Aqui no SK Editor, abra o ",e.jsx("strong",{children:"Terminal"})," (ícone 🖥️ na barra inferior)"]}),e.jsxs(v,{n:4,children:["Digite o comando para clonar:",e.jsx("br",{}),e.jsx("span",{className:"font-mono text-[#a8d5a2] text-xs bg-[#0d1309] px-2 py-1 rounded block mt-1",children:"git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git"})]}),e.jsx(v,{n:5,children:"O projeto é baixado completo na pasta do workspace"}),e.jsx(v,{n:6,children:"No painel de arquivos (📁), navegue até a pasta criada e abra os arquivos"})]}),e.jsx(E,{children:"🔑 Para repositórios privados"}),e.jsx(k,{children:"Repositórios privados do GitHub precisam do seu Personal Access Token:"}),e.jsx(F,{copyKey:"clone-privado",children:"git clone https://SEU_TOKEN@github.com/SEU_USUARIO/REPO_PRIVADO.git"}),e.jsxs(k,{children:["Veja a seção ",e.jsx("strong",{children:"GitHub"})," deste manual para criar seu token (PAT)."]}),e.jsx(E,{children:"📋 Para projetos sem GitHub"}),e.jsxs("ul",{className:"space-y-1 mb-3",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Use o Método 1 (ZIP) — funciona sempre, sem precisar de conta GitHub"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"}),' Ou copie e cole os arquivos um por um usando a Jasmim: "Crie um arquivo chamado X com este conteúdo: [cola o código]"']})]})]}),desktop:e.jsxs("div",{children:[e.jsxs($,{color:"green",children:["🖥️ ",e.jsx("strong",{children:"Instalar no PC é a opção mais simples e totalmente privada."})," Sem loja, sem conta, sem instalador. Funciona no Windows, Mac e Linux."]}),e.jsx(E,{children:"🪟 Windows — Chrome ou Edge"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(v,{n:1,children:["Abra o ",e.jsx("strong",{children:"Google Chrome"})," ou ",e.jsx("strong",{children:"Microsoft Edge"})," no computador"]}),e.jsxs(v,{n:2,children:["Acesse a URL do app publicado: ",e.jsx("span",{className:"font-mono text-[#a8d5a2] text-xs",children:"https://seu-app.replit.app"})]}),e.jsx(v,{n:3,children:"Aguarde carregar completamente"}),e.jsxs(v,{n:4,children:["No Chrome: Clique no ícone ",e.jsx("strong",{children:"⊕"})," na barra de endereços (lado direito)",e.jsx("br",{}),"No Edge: Clique nos ",e.jsx("strong",{children:"..."})," → ",e.jsx("strong",{children:'"Aplicativos"'})," → ",e.jsx("strong",{children:'"Instalar este site como um aplicativo"'})]}),e.jsxs(v,{n:5,children:["Confirme clicando em ",e.jsx("strong",{children:'"Instalar"'})]}),e.jsx(v,{n:6,children:"✅ O app abre numa janela própria — sem abas, sem barra do navegador. Aparece no menu Iniciar!"})]}),e.jsx(E,{children:"🍎 Mac — Chrome ou Safari"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(v,{n:1,children:["Abra ",e.jsx("strong",{children:"Google Chrome"})," no Mac"]}),e.jsx(v,{n:2,children:"Acesse a URL do app"}),e.jsxs(v,{n:3,children:["Clique nos ",e.jsx("strong",{children:"⋮"})," → ",e.jsx("strong",{children:'"Salvar e compartilhar"'})," → ",e.jsx("strong",{children:'"Criar atalho..."'})]}),e.jsxs(v,{n:4,children:["Marque ",e.jsx("strong",{children:'"Abrir como janela"'})," e clique em ",e.jsx("strong",{children:"Criar"})]}),e.jsx(v,{n:5,children:"✅ App aparece no Launchpad e no Dock"})]}),e.jsx(E,{children:"🐧 Linux — Chrome ou Chromium"}),e.jsxs("ol",{className:"mb-4",children:[e.jsx(v,{n:1,children:"Abra o Chrome/Chromium"}),e.jsx(v,{n:2,children:"Acesse a URL do app"}),e.jsxs(v,{n:3,children:["Clique no ícone ",e.jsx("strong",{children:"⊕"})," na barra de endereços ou nos ",e.jsx("strong",{children:"⋮"})," → ",e.jsx("strong",{children:'"Instalar SK Code Editor..."'})]}),e.jsx(v,{n:4,children:"✅ App aparece no menu de aplicativos do sistema"})]}),e.jsx(E,{children:"⚙️ O que você ganha com a instalação no PC"}),e.jsx("div",{className:"grid grid-cols-1 gap-2 mb-4",children:[["🪟 Janela própria","Abre sem abas do navegador — parece um app de verdade"],["📌 Ícone no menu","Aparece no menu Iniciar (Windows) ou Launchpad (Mac)"],["🔕 Sem distração","Sem as ferramentas do navegador, só o app"],["🔒 Totalmente privado","Só você vê — nada vai para nenhuma loja"],["♻️ Atualização automática","Quando o app no Replit é atualizado, a instalação já pega a versão nova"]].map(([ne,be])=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded p-3",children:[e.jsx("div",{className:"text-[#7ec87a] text-sm font-semibold",children:ne}),e.jsx("div",{className:"text-[#6b8f68] text-xs mt-0.5",children:be})]},ne))}),e.jsx(E,{children:"🗑️ Como desinstalar"}),e.jsxs("ul",{className:"space-y-1",children:[e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Windows: Configurações → Aplicativos → encontre o app → Desinstalar"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"})," Mac: Arraste do Launchpad para a lixeira"]}),e.jsxs("li",{className:"flex gap-2 text-sm text-[#8cba89]",children:[e.jsx("span",{className:"text-[#5aab56]",children:"›"}),' Ou no Chrome/Edge: acesse a URL → ícone ⊕ → "Desinstalar"']})]})]}),privado:e.jsxs("div",{children:[e.jsxs($,{color:"yellow",children:["🔒 ",e.jsx("strong",{children:"Instalação privada = só você usa, sem passar por loja nenhuma."})," Seus dados ficam só no seu dispositivo. Ninguém mais acessa."]}),e.jsx(E,{children:"📱 Android — APK Privado (sideload)"}),e.jsx(k,{children:"Instalar APK diretamente no celular sem passar pela Play Store:"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(v,{n:1,children:["Gere o APK usando a aba ",e.jsx("strong",{children:'"Instalar como App → APK Projeto"'})," ou o PWABuilder.com"]}),e.jsxs(v,{n:2,children:["Transfira o .apk para o celular: via ",e.jsx("strong",{children:"Google Drive, WhatsApp para si mesmo, cabo USB ou email"})]}),e.jsxs(v,{n:3,children:["No Android vá em ",e.jsx("strong",{children:"Configurações → Privacidade"})," (ou Segurança) → ative ",e.jsx("strong",{children:'"Instalar apps desconhecidos"'})," para o gerenciador de arquivos"]}),e.jsx(v,{n:4,children:"Abra o gerenciador de arquivos, localize o .apk e toque nele"}),e.jsxs(v,{n:5,children:["Toque em ",e.jsx("strong",{children:'"Instalar"'})]}),e.jsx(v,{n:6,children:"✅ App instalado! Não aparece na Play Store para mais ninguém — é só seu"})]}),e.jsx($,{color:"green",children:"💡 Você pode compartilhar o .apk com pessoas de confiança via WhatsApp ou Google Drive — elas instalam da mesma forma. Sem publicar em loja nenhuma."}),e.jsx(E,{children:"🍎 iPhone/iPad — Opções privadas"}),e.jsx($,{color:"red",children:"⚠️ A Apple não permite instalar apps fora da App Store sem um processo especial. As opções disponíveis são:"}),e.jsx(Z,{icon:"✅",title:"Opção 1: PWA via Safari (mais fácil)",desc:"Acesse a URL no Safari → botão Compartilhar → 'Adicionar à Tela de Início'. Fica no celular como app, privado, sem loja. Limitação: precisa de internet para abrir."}),e.jsx(Z,{icon:"🔧",title:"Opção 2: TestFlight (distribuição privada oficial da Apple)",desc:"Você sobe o app no TestFlight (plataforma de testes da Apple) e envia o link só para as pessoas que quiser. Requer conta de desenvolvedor Apple (US$ 99/ano)."}),e.jsx(Z,{icon:"🛠️",title:"Opção 3: AltStore (sideload sem jailbreak)",desc:"O AltStore (altstore.io) permite instalar .ipa no iPhone sem jailbreak. Requer um PC/Mac conectado via cabo para renovar a assinatura a cada 7 dias (conta gratuita) ou 1 ano (conta paga AltStore+)."}),e.jsx(E,{children:"🖥️ Computador — 100% privado"}),e.jsx(k,{children:'A instalação via Chrome/Edge no PC (veja aba "App no PC") é totalmente privada por natureza — nunca vai para nenhuma loja, não aparece em lugar nenhum, só no seu computador. É a opção mais simples para uso pessoal no PC.'}),e.jsx(E,{children:"📋 Resumo: qual usar para uso privado?"}),e.jsx("div",{className:"space-y-2",children:[{disp:"Computador (Windows/Mac/Linux)",rec:"Chrome → instalar como app",nota:"✅ Mais fácil, 100% privado"},{disp:"Android",rec:"APK via sideload",nota:"✅ Privado, sem Play Store"},{disp:"iPhone/iPad",rec:"PWA via Safari",nota:"✅ Simples, sem conta Apple"}].map(({disp:ne,rec:be,nota:ye})=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded p-3",children:[e.jsx("div",{className:"text-[#7ec87a] font-semibold text-sm",children:ne}),e.jsxs("div",{className:"text-[#8cba89] text-xs mt-0.5",children:["→ ",be]}),e.jsx("div",{className:"text-[#5aab56] text-xs mt-0.5",children:ye})]},ne))})]}),juntar:e.jsxs("div",{children:[e.jsxs($,{color:"blue",children:["🔗 ",e.jsx("strong",{children:"A ideia é simples:"})," você traz cada app para cá, identifica o que funciona bem em cada um, e a Jasmim une tudo num único projeto — sem reescrever o que já funciona."]}),e.jsx(E,{children:"📋 Passo a passo para juntar vários apps"}),e.jsxs("ol",{className:"mb-4",children:[e.jsxs(v,{n:1,children:[e.jsx("strong",{children:"Liste seus apps e o que cada um faz bem"}),e.jsx("br",{}),e.jsx("span",{className:"text-[#5aab56] text-xs",children:'Ex: "App 1 → login funciona. App 2 → relatórios funcionam. App 3 → chat funciona."'})]}),e.jsxs(v,{n:2,children:[e.jsx("strong",{children:"Importe todos para cá (um por vez)"}),e.jsx("br",{}),'Use a aba "Trazer do Replit" — ZIP ou GitHub. Anote o nome das pastas.']}),e.jsxs(v,{n:3,children:[e.jsx("strong",{children:"Abra a Jasmim (ícone 🤖)"}),e.jsx("br",{}),"Diga exatamente quais partes funcionam e quais não. Seja específico."]}),e.jsxs(v,{n:4,children:[e.jsx("strong",{children:"Diga para a Jasmim o que quer:"}),e.jsx("br",{}),e.jsx("span",{className:"text-[#5aab56] text-xs",children:'"Tenho 3 projetos aqui. O login está em app1/, os relatórios em app2/ e o chat em app3/. Quero um único projeto que use o login do app1, os relatórios do app2 e o chat do app3. Não reescreva — aproveite o código que já funciona."'})]}),e.jsxs(v,{n:5,children:[e.jsx("strong",{children:"A Jasmim vai unir os arquivos"}),e.jsx("br",{}),"Ela vai analisar os três projetos e criar um novo com as partes funcionando juntas."]}),e.jsxs(v,{n:6,children:[e.jsx("strong",{children:"Teste no terminal"}),e.jsx("br",{}),"Rode o projeto novo: ",e.jsx("span",{className:"font-mono text-[#a8d5a2] text-xs",children:"npm install && npm start"})]}),e.jsxs(v,{n:7,children:[e.jsx("strong",{children:"Para qualquer erro, chame a Jasmim:"}),e.jsx("br",{}),e.jsx("span",{className:"text-[#5aab56] text-xs",children:'"Tem um erro no terminal, corrija sem reescrever o que já estava funcionando."'})]})]}),e.jsx(E,{children:"💬 Exemplos de como pedir para a Jasmim"}),e.jsx(j,{children:"Juntar dois apps"}),e.jsx(F,{copyKey:"jasmim-juntar-2",children:'"Tenho dois projetos: app-login/ (o login funciona bem) e app-dashboard/ (os gráficos funcionam bem). Una os dois num projeto só chamado meu-app/. Reutilize o código que já existe, não reescreva do zero."'}),e.jsx(j,{children:"Juntar 3 ou mais"}),e.jsx(F,{copyKey:"jasmim-juntar-3",children:'"Tenho 3 apps aqui. Do app1/ aproveite: o sistema de autenticação (arquivo auth.js). Do app2/ aproveite: as rotas de relatório (routes/reports.js). Do app3/ aproveite: o componente de chat (components/Chat.jsx). Crie um único projeto novo unindo essas partes."'}),e.jsx(j,{children:"Quando só parte funciona"}),e.jsx(F,{copyKey:"jasmim-parte",children:'"No app1/, o módulo de login funciona (auth/), mas o de pagamento não. No app2/, o pagamento funciona (payment/), mas o login não. Une o login do app1/ com o pagamento do app2/ num projeto novo."'}),e.jsx(E,{children:"⚠️ Regra importante"}),e.jsxs($,{color:"yellow",children:["✋ Sempre diga explicitamente para a Jasmim: ",e.jsx("strong",{children:'"não reescreva o que já funciona, aproveite o código existente"'}),". Sem isso, ela pode criar uma versão nova do zero. Com essa instrução, ela vai copiar e adaptar o que já está pronto."]})]}),orientar:e.jsxs("div",{children:[e.jsxs($,{color:"green",children:["🧭 ",e.jsx("strong",{children:"Você tem 10+ apps e cada um funciona só em parte."})," Aqui está o roteiro completo para se organizar e sair disso."]}),e.jsx(E,{children:"📊 ETAPA 1 — Mapear o que você tem"}),e.jsx(k,{children:"Antes de qualquer coisa, faça uma lista rápida. Para cada app seu no Replit:"}),e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-lg p-4 mb-4",children:[e.jsx("p",{className:"text-[#5aab56] text-xs font-semibold mb-2",children:"MODELO DE MAPEAMENTO"}),e.jsx(F,{copyKey:"mapeamento",children:`App 1 — Nome: ___________
✅ O que funciona bem: ___________
❌ O que não funciona: ___________
🔗 Link no Replit: ___________

App 2 — Nome: ___________
✅ O que funciona bem: ___________
❌ O que não funciona: ___________
🔗 Link no Replit: ___________

(repita para cada app)`})]}),e.jsx(E,{children:"🎯 ETAPA 2 — Definir o app final que você quer"}),e.jsxs(k,{children:["Responda: ",e.jsx("strong",{className:"text-[#7ec87a]",children:"Qual seria o app perfeito se tudo funcionasse?"})]}),e.jsx(k,{children:"Liste as funcionalidades que você quer no produto final, independente de qual app elas estão hoje. Exemplo:"}),e.jsx(F,{copyKey:"app-final",children:`App Final "Meu Sistema":
- Login de usuário ✅ (já existe no App 1)
- Painel de controle ✅ (já existe no App 3)  
- Relatórios em PDF ✅ (já existe no App 5)
- Chat com IA ✅ (já existe no App 7)
- Cadastro de clientes ❌ (não existe em nenhum, precisa criar)
- Notificações ❌ (não existe em nenhum, precisa criar)`}),e.jsx(E,{children:"📥 ETAPA 3 — Trazer os apps para cá"}),e.jsx(k,{children:'Importe os apps que têm as partes que funcionam (veja a aba "Trazer do Replit"). Você não precisa trazer todos — só os que têm algo útil.'}),e.jsx(E,{children:"🤖 ETAPA 4 — Pedir para a Jasmim montar"}),e.jsx(k,{children:"Cole o mapeamento que você fez na Jasmim e use este prompt:"}),e.jsx(F,{copyKey:"prompt-organizar",children:'"Vou te passar um mapeamento dos meus apps. Quero que você: 1. Identifique as partes que já funcionam em cada um 2. Crie um único projeto novo aproveitando essas partes 3. Não reescreva o que já está pronto 4. Me diga o que ainda precisa ser criado do zero Aqui está o mapeamento: [COLE SEU MAPEAMENTO AQUI] O app final deve ter: [LISTE AS FUNCIONALIDADES QUE VOCÊ QUER]"'}),e.jsx(E,{children:"📱 ETAPA 5 — Transformar em app no celular/PC"}),e.jsxs("ol",{className:"mb-4",children:[e.jsx(v,{n:1,children:"Com o projeto único funcionando, publique no Replit (botão Deploy)"}),e.jsx(v,{n:2,children:"Copie a URL gerada (.replit.app)"}),e.jsx(v,{n:3,children:'Escolha o método de instalação (PWA, APK ou PC — veja seção "Instalar como App")'}),e.jsx(v,{n:4,children:"✅ Um app completo, funcionando, privado e no seu dispositivo"})]}),e.jsx(E,{children:"🔁 E para os próximos apps?"}),e.jsx(k,{children:"Repita o mesmo processo para qualquer projeto futuro:"}),e.jsx("div",{className:"flex flex-col gap-2",children:[["1️⃣","Cria/importa o projeto aqui"],["2️⃣","Desenvolve com a Jasmim até funcionar"],["3️⃣","Publica no Replit (Deploy)"],["4️⃣","Instala no celular como PWA ou APK"],["5️⃣","Usa com privacidade, sem depender do Replit para abrir"]].map(([ne,be])=>e.jsxs("div",{className:"flex items-center gap-3 bg-[#0d1309] border border-[#2d4a1e] rounded p-3",children:[e.jsx("span",{className:"text-xl shrink-0",children:ne}),e.jsx("span",{className:"text-[#8cba89] text-sm",children:be})]},ne))}),e.jsxs($,{color:"blue",children:["💡 ",e.jsx("strong",{children:"Dica chave:"})," quando o app estiver instalado (como PWA ou APK), ele ",e.jsx("strong",{children:"não depende do Replit para abrir"})," — ele vai direto para o servidor onde está publicado. O Replit é só onde você cria e edita. O app publicado fica independente."]})]})};return e.jsxs("div",{children:[e.jsx("div",{className:"flex gap-1 mb-4 overflow-x-auto pb-1 flex-wrap",children:U.map(ne=>e.jsxs("button",{onClick:()=>h(ne.id),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${d===ne.id?"bg-[#2d4a1e] text-[#7ec87a] border border-[#5aab56]":"bg-[#141c0d] text-[#5a7a56] border border-[#2d4a1e] hover:text-[#7ec87a]"}`,children:[ne.icon," ",ne.label]},ne.id))}),ee[d]]})})()}],N=z.find(U=>U.id===o)||z[0];return e.jsxs("div",{className:"flex h-full bg-[#141c0d] text-white overflow-hidden",children:[e.jsx("div",{className:"w-36 shrink-0 border-r border-[#2d4a1e] flex flex-col py-2 overflow-y-auto",children:z.map(U=>e.jsxs("button",{onClick:()=>r(U.id),className:`flex flex-col items-center gap-1 py-2.5 px-1 text-xs transition-colors ${o===U.id?"bg-[#1c2714] text-[#7ec87a] border-r-2 border-[#5aab56]":"text-[#5a7a56] hover:text-[#7ec87a] hover:bg-[#1a2412]"}`,children:[e.jsx("span",{className:"text-lg",children:U.icon}),e.jsx("span",{className:"text-center leading-tight",children:U.title})]},U.id))}),e.jsx("div",{className:"flex-1 overflow-y-auto p-4",children:e.jsxs("div",{className:"max-w-2xl mx-auto",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4 pb-3 border-b border-[#2d4a1e]",children:[e.jsx("span",{className:"text-2xl",children:N.icon}),e.jsx("h1",{className:"text-[#7ec87a] font-bold text-lg",children:N.title})]}),N.content]})})]})}const Gs="combinar-apps:v1";function gi(){return Math.random().toString(36).slice(2,9)}function Ja(){return{id:gi(),name:"",url:"",works:"",broken:""}}function hi(t){if(!t||typeof t!="object")return!1;const s=t;return typeof s.id=="string"&&typeof s.name=="string"&&typeof s.url=="string"&&typeof s.works=="string"&&typeof s.broken=="string"}function bi(){if(typeof window>"u")return null;try{const t=window.localStorage.getItem(Gs);if(!t)return null;const s=JSON.parse(t);if(!s||typeof s!="object")return null;const o=Array.isArray(s.apps)?s.apps.filter(hi):[];return{apps:o.length>0?o:[Ja()],goal:typeof s.goal=="string"?s.goal:"",generatedPrompt:typeof s.generatedPrompt=="string"?s.generatedPrompt:""}}catch{return null}}const ka="w-full bg-[#141c0d] border border-[#3d6e2a] rounded-lg px-3 py-2 text-sm text-[#a8d5a2] placeholder-[#3d6e2a] outline-none focus:border-[#5aab56] focus:ring-1 focus:ring-[#5aab56]/20 resize-none",Aa="block text-[#5aab56] text-xs font-semibold mb-1";function fi({onSendToJasmim:t}){const[s]=a.useState(()=>bi()),[o,r]=a.useState(()=>s?.apps??[Ja()]),[n,c]=a.useState(()=>s?.goal??""),[l,u]=a.useState(()=>s?.generatedPrompt??""),[d,h]=a.useState(!1),[m,C]=a.useState(!1);a.useEffect(()=>{if(typeof window>"u")return;const R=n.trim().length>0||l.length>0||o.some(w=>w.name.trim()||w.url.trim()||w.works.trim()||w.broken.trim());try{if(R){const w={apps:o,goal:n,generatedPrompt:l};window.localStorage.setItem(Gs,JSON.stringify(w))}else window.localStorage.removeItem(Gs)}catch{}},[o,n,l]);const T=a.useCallback(()=>{r(R=>[...R,Ja()]),u("")},[]),_=a.useCallback(R=>{r(w=>w.filter(f=>f.id!==R)),u("")},[]),D=a.useCallback((R,w,f)=>{r(g=>g.map(S=>S.id===R?{...S,[w]:f}:S)),u("")},[]),P=a.useCallback(()=>{const R=o.filter(S=>S.name.trim()||S.url.trim()||S.works.trim()||S.broken.trim());if(R.length===0)return;const w=R.map((S,B)=>{const Q=[];return Q.push(`App ${B+1}${S.name?` — ${S.name}`:""}:`),S.url.trim()&&Q.push(`  URL no Replit: ${S.url.trim()}`),S.works.trim()&&Q.push(`  ✅ O que funciona bem: ${S.works.trim()}`),S.broken.trim()&&Q.push(`  ❌ O que não funciona: ${S.broken.trim()}`),Q.join(`
`)}).join(`

`),f=n.trim()?`
Objetivo do app final: ${n.trim()}
`:"",g=`Tenho ${R.length} app${R.length>1?"s":""} no Replit e quero combiná-los num único projeto que aproveite o que já funciona em cada um.
${f}
Aqui estão os apps e o que funciona em cada um:

${w}

Por favor:
1. Analise o que cada app tem de melhor
2. Crie um único projeto unificado aproveitando o código que já funciona
3. Não reescreva do zero o que já está funcionando — aproveite o código existente
4. Para cada parte que for unir, explique de qual app está vindo
5. Ao final, mostre como rodar o projeto unificado (npm install && npm start ou equivalente)

Comece me dizendo qual será a estrutura do projeto unificado e como você vai organizar os arquivos.`;u(g),C(!1),h(!1)},[o,n]),O=a.useCallback(()=>{l&&(navigator.clipboard.writeText(l).catch(()=>{}),h(!0),setTimeout(()=>h(!1),2e3))},[l]),H=a.useCallback(()=>{l&&(t(l),C(!0),setTimeout(()=>C(!1),3e3))},[l,t]),L=a.useCallback(()=>{(typeof window>"u"||window.confirm("Limpar todos os apps, objetivo e prompt gerado?"))&&(r([Ja()]),c(""),u(""),h(!1),C(!1))},[]),V=o.filter(R=>R.name.trim()||R.url.trim()||R.works.trim()||R.broken.trim()).length,M=V>0||n.trim().length>0||l.length>0||o.length>1;return e.jsxs("div",{className:"flex flex-col h-full overflow-hidden bg-[#0f1a0a] text-[#a8d5a2]",children:[e.jsxs("div",{className:"px-4 pt-4 pb-3 border-b border-[#2d4a1e] shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"🔗"}),e.jsx("h1",{className:"text-[#7ec87a] font-bold text-base",children:"Combinar Apps"})]}),e.jsxs("button",{onClick:L,disabled:!M,className:"flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg border border-[#3d6e2a] text-[#5aab56] hover:bg-[#1a2d10] hover:text-[#7ec87a] disabled:opacity-30 disabled:cursor-not-allowed transition-colors",title:"Limpar todos os apps e o prompt",children:[e.jsx(yr,{size:12}),"Limpar tudo"]})]}),e.jsx("p",{className:"text-[#6b8f68] text-xs leading-relaxed",children:"Preencha os apps que você quer unir. O assistente monta o prompt ideal para a Jasmim combinar tudo num projeto só."})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:Aa,children:"🎯 Objetivo do app final (opcional)"}),e.jsx("textarea",{value:n,onChange:R=>{c(R.target.value),u("")},placeholder:"Ex: Um app de gestão de processos jurídicos com login, dashboard e relatórios em PDF",rows:2,className:ka})]}),e.jsx("div",{className:"space-y-3",children:o.map((R,w)=>e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d4a1e] rounded-xl p-3 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsxs("span",{className:"text-[#7ec87a] text-xs font-bold uppercase tracking-wider",children:["App ",w+1]}),o.length>1&&e.jsx("button",{onClick:()=>_(R.id),className:"p-1 rounded-lg text-[#5a3a3a] hover:text-[#d47070] hover:bg-[#2d0d0d] transition-colors",title:"Remover app",children:e.jsx(mt,{size:13})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:Aa,children:"Nome do app"}),e.jsx("input",{type:"text",value:R.name,onChange:f=>D(R.id,"name",f.target.value),placeholder:"Ex: app-login",className:ka})]}),e.jsxs("div",{children:[e.jsx("label",{className:Aa,children:"URL no Replit (opcional)"}),e.jsx("input",{type:"url",value:R.url,onChange:f=>D(R.id,"url",f.target.value),placeholder:"https://replit.com/@...",className:ka})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:Aa,children:"✅ O que funciona bem"}),e.jsx("textarea",{value:R.works,onChange:f=>D(R.id,"works",f.target.value),placeholder:"Ex: O login com Google funciona. O sistema de autenticação está completo.",rows:2,className:ka})]}),e.jsxs("div",{children:[e.jsx("label",{className:Aa,children:"❌ O que não funciona (opcional)"}),e.jsx("textarea",{value:R.broken,onChange:f=>D(R.id,"broken",f.target.value),placeholder:"Ex: Os relatórios em PDF não geram. O painel de admin está incompleto.",rows:2,className:ka})]})]},R.id))}),e.jsxs("button",{onClick:T,className:"w-full flex items-center justify-center gap-2 py-2.5 border border-dashed border-[#3d6e2a] rounded-xl text-[#5aab56] text-sm hover:border-[#5aab56] hover:bg-[#0d2210] transition-colors",children:[e.jsx(Ft,{size:15}),"Adicionar outro app"]}),e.jsxs("button",{onClick:P,disabled:V===0,className:"w-full flex items-center justify-center gap-2 py-3 bg-[#2d4a1e] hover:bg-[#3d5e2a] disabled:opacity-40 disabled:cursor-not-allowed text-[#7ec87a] font-bold text-sm rounded-xl transition-colors",children:[e.jsx(Lt,{size:15}),"Gerar Prompt para Jasmim"]}),l&&e.jsxs("div",{className:"bg-[#0d1309] border border-[#2d5a1e] rounded-xl overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-2 bg-[#1a3d14] border-b border-[#2d5a1e]",children:[e.jsx("span",{className:"text-[#7ec87a] text-xs font-bold",children:"✨ Prompt gerado"}),e.jsx("button",{onClick:O,className:"flex items-center gap-1.5 text-xs px-2 py-1 rounded-lg bg-[#2d4a1e] text-[#7ec87a] hover:bg-[#3d5e2a] transition-colors",children:d?e.jsxs(e.Fragment,{children:[e.jsx(Ya,{size:12})," Copiado!"]}):e.jsxs(e.Fragment,{children:[e.jsx(aa,{size:12})," Copiar"]})})]}),e.jsx("pre",{className:"px-3 py-3 text-xs text-[#8cba89] font-mono leading-relaxed whitespace-pre-wrap break-words max-h-48 overflow-y-auto",children:l}),e.jsx("div",{className:"px-3 py-2.5 border-t border-[#2d5a1e]",children:e.jsx("button",{onClick:H,className:`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 ${m?"bg-green-600/30 text-green-300 border border-green-500/25":"bg-[#1e5c9e] hover:bg-[#2a73c5] text-white"}`,children:m?e.jsxs(e.Fragment,{children:[e.jsx(Ya,{size:14})," Enviado para a Jasmim!"]}):e.jsxs(e.Fragment,{children:[e.jsx(is,{size:14})," Enviar para a Jasmim"]})})})]}),e.jsxs("div",{className:"bg-[#0d1a0a] border border-[#2d4a1e] rounded-xl p-3 space-y-2",children:[e.jsx("p",{className:"text-[#5aab56] text-xs font-bold",children:"💡 Dicas"}),e.jsx("ul",{className:"space-y-1",children:["Seja específico sobre o que funciona — mencione nomes de arquivos ou módulos se souber","Você pode adicionar quantos apps precisar","Depois de enviar para a Jasmim, ela vai analisar e unir os projetos","Se quiser ajustar o prompt, edite os campos e clique em Gerar novamente"].map((R,w)=>e.jsxs("li",{className:"flex gap-2 text-xs text-[#6b8f68]",children:[e.jsx("span",{className:"text-[#3d6e2a] shrink-0",children:"›"}),e.jsx("span",{children:R})]},w))})]})]})]})}const vi=({s:t})=>t==="ok"?e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-green-500/15 text-green-400 text-[11px] md:text-[13px] font-bold",children:[e.jsx(Sa,{size:12})," OK"]}):t==="warn"?e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-yellow-500/15 text-yellow-400 text-[11px] md:text-[13px] font-bold",children:[e.jsx(Ar,{size:12})," Atenção"]}):t==="error"?e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-red-500/15 text-red-400 text-[11px] md:text-[13px] font-bold",children:[e.jsx(Er,{size:12})," Falha"]}):e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-500/15 text-gray-400 text-[11px] md:text-[13px] font-bold",children:[e.jsx(At,{size:12,className:"animate-spin"})," Checando…"]});function ji({open:t,onClose:s,vfs:o,projectName:r}){const[n,c]=a.useState([]),[l,u]=a.useState(null),[d,h]=a.useState(!1),m=a.useCallback(async()=>{h(!0);const D=[];D.push({id:"online",label:"Conexão à internet",status:navigator.onLine?"ok":"error",detail:navigator.onLine?"Online":"Sem rede — só modo Offline funciona",icon:navigator.onLine?e.jsx(Nr,{size:16,className:"text-green-400"}):e.jsx(wr,{size:16,className:"text-red-400"})});let P="checking",O="Testando…";const H=performance.now();try{const J=new AbortController,xe=setTimeout(()=>J.abort(),4e3),re=await fetch("/api/healthz",{signal:J.signal,cache:"no-store"});clearTimeout(xe);const te=Math.round(performance.now()-H);re.ok?(P="ok",O=`Servidor respondendo (${te}ms) — terminal Online e IA funcionam`):(P="warn",O=`Servidor respondeu HTTP ${re.status} — pode ter problema`)}catch(J){P="error",O=`Sem servidor — terminal Online e IA fetch indisponíveis (${J.message||"timeout"})`}D.push({id:"api",label:"Servidor da API",status:P,detail:O,icon:e.jsx(Ro,{size:16,className:"text-blue-400"})});const L=window.crossOriginIsolated===!0,V=typeof SharedArrayBuffer<"u";D.push({id:"coi",label:"Cross-Origin Isolation",status:L&&V?"ok":"warn",detail:L&&V?"Habilitado — terminal Real (WebContainer) pode rodar":"Desabilitado — terminal Real não funciona aqui (precisa do app publicado/instalado como APK)",icon:e.jsx(Cr,{size:16,className:L&&V?"text-green-400":"text-yellow-400"})});let M="checking",R="Verificando…";if("serviceWorker"in navigator)try{const J=await navigator.serviceWorker.getRegistration();J&&J.active?(M="ok",R=`Ativo — escopo ${J.scope}`):J?(M="warn",R="Registrado mas não ativo — recarregue a página"):(M="warn",R="Não registrado — instale como PWA pra ativar")}catch{M="error",R="Erro ao verificar service worker"}else M="error",R="Browser não suporta service worker";D.push({id:"sw",label:"Service Worker (PWA)",status:M,detail:R,icon:e.jsx(kr,{size:16,className:"text-purple-400"})});const w=window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;D.push({id:"pwa",label:"Modo App Instalado (PWA)",status:w?"ok":"warn",detail:w?"Rodando como app instalado — máxima compatibilidade":"Rodando no browser — instale como PWA/APK pra melhor desempenho",icon:e.jsx("span",{className:"text-[16px]",children:w?"📱":"🌐"})}),D.push({id:"term",label:"Terminal em uso",status:"ok",detail:"🐧 Terminal Linux real (PTY via WebSocket) — bash de verdade, npm install funciona",icon:e.jsx("span",{className:"text-[16px]",children:"🐧"})});let f="checking",g="Testando proxy da Jasmim…";try{const J=new AbortController,xe=setTimeout(()=>J.abort(),4e3),re=await fetch("/api/ai/chat",{signal:J.signal,cache:"no-store"});clearTimeout(xe),re.status===405||re.status===400||re.ok?(f="ok",g=`Endpoint /api/ai/chat respondendo (HTTP ${re.status}) — Jasmim deve funcionar`):re.status===404?(f="error",g="Endpoint /api/ai/chat não existe — Jasmim não vai responder"):(f="warn",g=`IA respondeu HTTP ${re.status}`)}catch(J){f="error",g=`IA built-in indisponível (${J.message||"erro"}) — Jasmim não vai responder`}D.push({id:"ai",label:"Jasmim (IA built-in)",status:f,detail:g,icon:e.jsx(bt,{size:16,className:"text-purple-300"})});let S="checking",B="Calculando…";try{if("storage"in navigator&&"estimate"in navigator.storage){const J=await navigator.storage.estimate(),xe=((J.usage||0)/1024/1024).toFixed(1),re=((J.quota||0)/1024/1024).toFixed(0),te=J.quota?((J.usage||0)/J.quota*100).toFixed(1):"?";S=J.quota&&(J.usage||0)/J.quota>.8?"warn":"ok",B=`${xe} MB usados de ${re} MB (${te}%)`}else S="warn",B="Browser não expõe info de armazenamento"}catch{S="warn",B="Não consegui verificar"}D.push({id:"storage",label:"Armazenamento local",status:S,detail:B,icon:e.jsx(Ks,{size:16,className:"text-orange-400"})});const Q=o.listFiles().length;let se="";try{const J=o.readFile("package.json");if(J){const xe=JSON.parse(J),re=Object.keys(xe.dependencies||{}).length,te=Object.keys(xe.devDependencies||{}).length;se=` · ${re} dependência(s), ${te} dev`}}catch{}D.push({id:"proj",label:"Projeto atual",status:"ok",detail:`${r} · ${Q} arquivo(s)${se}`,icon:e.jsx(Gt,{size:16,className:"text-cyan-400"})}),c(D),u(new Date),h(!1)},[o,r]);if(a.useEffect(()=>{t&&m()},[t,m]),!t)return null;const C=n.filter(D=>D.status==="ok").length,T=n.filter(D=>D.status==="warn").length,_=n.filter(D=>D.status==="error").length;return e.jsx("div",{className:"fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-3 md:p-6",onClick:s,children:e.jsxs("div",{className:"bg-[#0d1409] border border-gray-700 rounded-2xl w-full max-w-[640px] md:max-w-[820px] max-h-[92vh] flex flex-col shadow-2xl",onClick:D=>D.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-gray-700/50",children:[e.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[e.jsx("div",{className:"w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center",children:e.jsx("span",{className:"text-[18px] md:text-[22px]",children:"🩺"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-[14px] md:text-[18px] font-bold text-white",children:"Status do Sistema ao Vivo"}),e.jsx("p",{className:"text-[10px] md:text-[12px] text-gray-500",children:l?`Atualizado às ${l.toLocaleTimeString("pt-BR")}`:"Carregando…"})]})]}),e.jsx("button",{onClick:s,className:"p-2 rounded-lg hover:bg-white/5 text-gray-500","aria-label":"Fechar",children:e.jsx(je,{size:20})})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 border-b border-gray-800",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center bg-green-500/10 border border-green-500/30 rounded-xl py-2 md:py-3",children:[e.jsx("span",{className:"text-[20px] md:text-[28px] font-bold text-green-400",children:C}),e.jsx("span",{className:"text-[10px] md:text-[12px] text-green-300",children:"funcionando"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center bg-yellow-500/10 border border-yellow-500/30 rounded-xl py-2 md:py-3",children:[e.jsx("span",{className:"text-[20px] md:text-[28px] font-bold text-yellow-400",children:T}),e.jsx("span",{className:"text-[10px] md:text-[12px] text-yellow-300",children:"atenção"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center bg-red-500/10 border border-red-500/30 rounded-xl py-2 md:py-3",children:[e.jsx("span",{className:"text-[20px] md:text-[28px] font-bold text-red-400",children:_}),e.jsx("span",{className:"text-[10px] md:text-[12px] text-red-300",children:"falhas"})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-3 md:px-5 py-2 md:py-3",children:[n.length===0&&e.jsxs("div",{className:"text-center py-8 text-gray-500 text-[13px] md:text-[15px]",children:[e.jsx(At,{size:32,className:"mx-auto mb-2 animate-spin text-blue-400"}),"Verificando tudo…"]}),n.map(D=>e.jsxs("div",{className:"flex items-start gap-3 py-2.5 md:py-3 border-b border-gray-800/60 last:border-b-0",children:[e.jsx("div",{className:"w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0",children:D.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("h3",{className:"text-[13px] md:text-[15px] font-bold text-gray-200",children:D.label}),e.jsx(vi,{s:D.status})]}),e.jsx("p",{className:"text-[11px] md:text-[14px] text-gray-400 leading-snug mt-0.5 md:mt-1 break-words",children:D.detail})]})]},D.id))]}),e.jsxs("div",{className:"px-4 md:px-6 py-3 md:py-4 border-t border-gray-700/50 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2 md:gap-3",children:[e.jsxs("p",{className:"text-[10px] md:text-[12px] text-gray-600 leading-snug",children:["Clique em ",e.jsx("strong",{className:"text-blue-400",children:"Atualizar"})," sempre que mudar algo (rede, modo, instalação) pra ver o estado real."]}),e.jsxs("button",{onClick:m,disabled:d,className:"flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 active:scale-95 text-white font-bold text-[13px] md:text-[15px] transition-all shrink-0",children:[e.jsx(At,{size:16,className:d?"animate-spin":""}),d?"Atualizando…":"Atualizar agora"]})]})]})})}function yi(t,s){const o=t.toJSON();let r={};const n=Object.keys(o).find(l=>l==="manifest.json"||l==="public/manifest.json"||l.endsWith("/manifest.json"));if(n)try{r=JSON.parse(o[n])}catch{}const c=Object.keys(o).some(l=>l.match(/\.(png|svg|ico|webp)$/i)&&(l.includes("icon")||l.includes("logo")));return{name:r.name||r.short_name||"Meu App",shortName:r.short_name||r.name||"App",description:r.description||"Aplicativo PWA",themeColor:r.theme_color||"#1a237e",backgroundColor:r.background_color||"#ffffff",startUrl:r.start_url||"./",display:r.display||"standalone",hasIcons:c,hasManifest:!!n,pagesUrl:s}}function Ni({pwaInfo:t,onSetUrl:s}){const o=!!t.pagesUrl.trim();return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-blue-500/8 border border-blue-500/20 rounded-xl space-y-1.5",children:[e.jsx("p",{className:"text-[12px] font-bold text-blue-300",children:"Como funciona"}),e.jsx("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:"O PWABuilder analisa seu site publicado e gera o APK em menos de 1 minuto. É gratuito, feito pelo Microsoft, e não precisa instalar nada."})]}),o?e.jsxs("a",{href:`https://www.pwabuilder.com/generate?url=${encodeURIComponent(t.pagesUrl)}`,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3.5 bg-blue-600/15 border border-blue-500/30 rounded-xl hover:bg-blue-600/20 transition-colors",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0",children:e.jsx(Gt,{size:18,className:"text-blue-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold text-blue-300",children:"Abrir PWABuilder"}),e.jsx("p",{className:"text-[10px] text-gray-500 truncate",children:t.pagesUrl})]}),e.jsx(ft,{size:13,className:"text-gray-600 shrink-0"})]}):e.jsxs("div",{className:"px-3 py-3 bg-yellow-500/8 border border-yellow-500/20 rounded-xl",children:[e.jsx("p",{className:"text-[12px] font-bold text-yellow-300 mb-1",children:"⚠️ Precisa do link do site publicado"}),e.jsx("p",{className:"text-[11px] text-gray-400 mb-2",children:"Primeiro publique no GitHub Pages, depois cole o link aqui."}),e.jsx("button",{onClick:s,className:"px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-[12px] font-semibold text-yellow-300 hover:bg-yellow-500/30 transition-colors",children:"Inserir link do site →"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-wider font-semibold px-1",children:"No PWABuilder:"}),["Clique em 'Start'","Aguarde a análise","Clique em 'Package for stores'","Selecione Android","Clique em 'Generate Package'","Baixe e instale o .apk no celular"].map((r,n)=>e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 text-[9px] font-bold flex items-center justify-center shrink-0 mt-0.5",children:n+1}),e.jsx("p",{className:"text-[11px] text-gray-400",children:r})]},n))]})]})}function wi({pwaInfo:t,vfs:s,projectName:o}){const[r,n]=a.useState("idle"),[c,l]=a.useState([]),[u,d]=a.useState(o.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")||"sk-code-editor"),[h,m]=a.useState(""),[C,T]=a.useState(""),_=ps(),D=!!_.token,P=H=>l(L=>[...L,H]),O=a.useCallback(async()=>{if(D){n("pushing"),l(["🚀 Iniciando…"]),T(""),m("");try{const H=_.username,L=u.trim();P(`📁 Verificando repositório "${L}"…`);try{await Ia(_,L,`${t.name} — gerado pelo SK Code Editor`,!1),P("✅ Repositório criado.")}catch(Q){if(Q.message?.includes("422")||Q.message?.includes("already exists"))P("ℹ️ Repositório já existe — usando existente.");else throw Q}await us(_,H,L),P("🌐 Repositório público.");const V=s.toJSON(),M=`https://${H}.github.io/${L}/`,R=V["manifest.json"]||V["public/manifest.json"]||JSON.stringify({name:t.name,short_name:t.shortName,start_url:"./",display:"standalone",background_color:t.backgroundColor,theme_color:t.themeColor,icons:[{src:"icon-192.png",sizes:"192x192",type:"image/png"}]},null,2),w=`name: Deploy GitHub Pages
on:
  push:
    branches: [main, master]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "."
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
`,f=`name: Build APK Android
on:
  workflow_dispatch:
  workflow_run:
    workflows: ["Deploy GitHub Pages"]
    types: [completed]
permissions:
  contents: write
jobs:
  build-apk:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          java-version: '17'
          distribution: 'temurin'
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install -g @bubblewrap/cli@latest
      - name: Gerar keystore
        run: |
          keytool -genkey -v -keystore android.keystore -alias app \\
            -keyalg RSA -keysize 2048 -validity 10000 \\
            -storepass mypassword123 -keypass mypassword123 \\
            -dname "CN=${t.name}, OU=App, O=App, L=BR, ST=BR, C=BR"
      - name: Criar configuração TWA
        run: |
          cat > twa-manifest.json << 'TWAEOF'
          {
            "packageId": "com.${H.toLowerCase().replace(/[^a-z0-9]/g,"")}.${L.toLowerCase().replace(/[^a-z0-9]/g,"")}",
            "host": "${H}.github.io",
            "name": "${t.name}",
            "launcherName": "${t.shortName}",
            "display": "standalone",
            "themeColor": "${t.themeColor}",
            "navigationColor": "${t.themeColor}",
            "backgroundColor": "${t.backgroundColor}",
            "enableNotifications": false,
            "startUrl": "/${L}/",
            "iconUrl": "${M}icon-192.png",
            "maskableIconUrl": "${M}icon-192.png",
            "appVersion": "1.0.0",
            "appVersionCode": 1,
            "signingKey": { "path": "../android.keystore", "alias": "app" },
            "shortcuts": [],
            "generatorApp": "bubblewrap-cli",
            "webManifestUrl": "${M}manifest.json",
            "fallbackType": "customtabs",
            "features": {},
            "minSdkVersion": 21,
            "orientation": "default",
            "fullScopeUrl": "${M}"
          }
          TWAEOF
      - name: Build APK
        run: |
          bubblewrap init --manifest twa-manifest.json --directory ./twa-app
          cd twa-app && bubblewrap build
        env:
          BUBBLEWRAP_KEYSTORE_PASSWORD: mypassword123
          BUBBLEWRAP_KEY_PASSWORD: mypassword123
      - name: Upload APK
        uses: actions/upload-artifact@v4
        with:
          name: APK-Android
          path: "**/*.apk"
          retention-days: 30
`,g={...V,"manifest.json":R,".github/workflows/deploy.yml":w,".github/workflows/build-apk.yml":f};P(`📤 Enviando ${Object.keys(g).length} arquivo(s)…`);const S=await xa(_,H,L,g,`${t.name} — SK Code Editor`);P(`✅ ${S.success} arquivo(s) enviados.`),P("🌐 Ativando GitHub Pages…");const B=await Xs(_,H,L,"main","/");P(`✅ GitHub Pages ativado: ${B}`),P("⏳ Aguarde ~3 min para o deploy e ~10 min para o APK..."),P(`📥 APK disponível em: github.com/${H}/${L}/actions`),m(`https://github.com/${H}/${L}/actions`),n("done")}catch(H){T(H.message||String(H)),n("error")}}},[_,u,s,t,o]);return D?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-green-500/8 border border-green-500/20 rounded-xl space-y-1.5",children:[e.jsx("p",{className:"text-[12px] font-bold text-green-300",children:"O que acontece:"}),e.jsx("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:"Sobe seu projeto no GitHub, ativa o Pages, e dispara o processo de build do APK nos servidores do GitHub. Você baixa o APK pronto na aba Actions."})]}),r==="idle"&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Nome do repositório"}),e.jsx("input",{value:u,onChange:H=>d(H.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")),className:"w-full px-3 py-2.5 bg-[#1c2714] border border-gray-700/50 rounded-xl text-sm text-gray-300 outline-none focus:border-green-500/50"}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:["APK: github.com/",_.username,"/",u,"/actions"]})]}),e.jsxs("button",{onClick:O,className:"w-full flex items-center justify-center gap-2 py-3.5 bg-green-600 text-white rounded-xl font-bold text-[15px] hover:bg-green-500 transition-colors",children:[e.jsx(ns,{size:16}),"Publicar e Gerar APK"]})]}),r==="pushing"&&e.jsx("div",{className:"space-y-2",children:e.jsxs("div",{className:"bg-black/40 border border-gray-700/40 rounded-xl p-3 max-h-48 overflow-y-auto font-mono",children:[c.map((H,L)=>e.jsx("p",{className:"text-[11px] text-gray-300 leading-relaxed",children:H},L)),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx(De,{size:11,className:"animate-spin text-green-400"}),e.jsx("span",{className:"text-[11px] text-green-400",children:"Processando…"})]})]})}),r==="done"&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-green-500/10 border border-green-500/20 rounded-xl",children:[e.jsx("p",{className:"text-[12px] font-bold text-green-400 mb-1",children:"✅ Publicado com sucesso!"}),e.jsx("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:"O GitHub está construindo o APK. Leva ~10 minutos. Quando terminar, baixe na aba Actions."})]}),e.jsx("div",{className:"bg-black/40 border border-gray-700/40 rounded-xl p-3 max-h-32 overflow-y-auto font-mono",children:c.map((H,L)=>e.jsx("p",{className:"text-[11px] text-gray-300 leading-relaxed",children:H},L))}),e.jsxs("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3 bg-blue-600/15 border border-blue-500/30 rounded-xl hover:bg-blue-600/20 transition-colors",children:[e.jsx(It,{size:16,className:"text-blue-400 shrink-0"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-[13px] font-bold text-blue-300",children:"Abrir Actions no GitHub"}),e.jsx("p",{className:"text-[10px] text-gray-500",children:"Baixar APK quando terminar"})]}),e.jsx(ft,{size:13,className:"text-gray-600"})]}),e.jsxs("button",{onClick:()=>{n("idle"),l([])},className:"w-full text-center text-[11px] text-gray-600 hover:text-gray-400 transition-colors py-1",children:[e.jsx(At,{size:11,className:"inline mr-1"}),"Gerar novamente"]})]}),r==="error"&&e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"px-3 py-2.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2",children:[e.jsx(Pt,{size:13,className:"text-red-400 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-[12px] text-red-400 leading-relaxed",children:C})]}),e.jsx("button",{onClick:()=>n("idle"),className:"w-full text-center text-[11px] text-gray-600 hover:text-gray-400 py-1",children:"Tentar novamente"})]})]}):e.jsxs("div",{className:"px-3 py-3 bg-yellow-500/8 border border-yellow-500/20 rounded-xl space-y-2",children:[e.jsx("p",{className:"text-[12px] font-bold text-yellow-300",children:"⚠️ Token do GitHub necessário"}),e.jsx("p",{className:"text-[11px] text-gray-400",children:"Conecte sua conta GitHub primeiro. Vá em Menu → GitHub — Clonar / Enviar → configure o token."})]})}function Ci({open:t,onClose:s,vfs:o,projectName:r}){const[n,c]=a.useState("pwabuilder"),[l,u]=a.useState(""),[d,h]=a.useState(!1),[m,C]=a.useState(""),T=yi(o,l),_=()=>{h(!0),C(l)},D=()=>{let O=m.trim();O&&!O.endsWith("/")&&(O+="/"),u(O),h(!1)};if(!t)return null;const P=[{id:"pwabuilder",label:"PWABuilder",icon:e.jsx(Gt,{size:13}),color:"blue"},{id:"actions",label:"GitHub Actions",icon:e.jsx(It,{size:13}),color:"green"}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70",onClick:s}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:O=>O.stopPropagation(),children:e.jsxs("div",{className:"bg-[#0d1117] border-t border-[#30363d] rounded-t-3xl shadow-2xl flex flex-col",style:{height:"88vh"},children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-[#30363d] rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-[#21262d] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Is,{size:18,className:"text-orange-400"}),e.jsx("p",{className:"text-[15px] font-bold text-white",children:"Gerar APK Android"})]}),e.jsx("button",{onClick:s,className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:17})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:e.jsxs("div",{className:"px-4 py-4 space-y-4",children:[e.jsxs("div",{className:"px-3 py-3 bg-[#161b22] border border-[#30363d] rounded-xl space-y-2",children:[e.jsx("p",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Projeto atual"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center text-lg",style:{backgroundColor:T.themeColor+"33"},children:"📱"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-bold text-white",children:T.name}),e.jsx("p",{className:"text-[10px] text-gray-500",children:T.description})]})]}),e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-semibold ${T.hasManifest?"bg-green-500/15 text-green-400":"bg-red-500/15 text-red-400"}`,children:T.hasManifest?"✅ manifest.json":"⚠️ sem manifest"}),e.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-semibold ${T.hasIcons?"bg-green-500/15 text-green-400":"bg-yellow-500/15 text-yellow-400"}`,children:T.hasIcons?"✅ ícones":"⚠️ sem ícones"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("p",{className:"text-[11px] text-gray-500 uppercase tracking-wider font-semibold",children:"Link do site publicado"}),e.jsxs("button",{onClick:_,className:"text-[10px] text-blue-400 hover:text-blue-300",children:[e.jsx(Da,{size:11,className:"inline mr-1"}),"editar"]})]}),d?e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{autoFocus:!0,value:m,onChange:O=>C(O.target.value),onKeyDown:O=>O.key==="Enter"&&D(),placeholder:"https://usuario.github.io/nome-do-repo/",className:"flex-1 px-3 py-2 bg-[#161b22] border border-gray-700/50 rounded-xl text-sm text-gray-300 placeholder-gray-700 outline-none focus:border-blue-500/50"}),e.jsx("button",{onClick:D,className:"px-3 py-2 bg-blue-600 text-white rounded-xl text-[12px] font-bold",children:"OK"})]}):e.jsx("div",{onClick:_,className:`px-3 py-2.5 rounded-xl border cursor-pointer transition-colors ${l?"bg-[#161b22] border-gray-700/50 text-gray-300":"bg-yellow-500/5 border-yellow-500/20 text-gray-600"}`,children:e.jsx("p",{className:"text-[12px] font-mono truncate",children:l||"Clique para inserir o link do GitHub Pages…"})})]}),e.jsx("div",{className:"flex bg-[#161b22] rounded-xl p-1 gap-1",children:P.map(O=>e.jsxs("button",{onClick:()=>c(O.id),className:`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[12px] font-semibold transition-colors ${n===O.id?O.color==="blue"?"bg-blue-600/20 text-blue-300 border border-blue-500/30":"bg-green-600/20 text-green-300 border border-green-500/30":"text-gray-500 hover:text-gray-400"}`,children:[O.icon,O.label]},O.id))}),n==="pwabuilder"&&e.jsx(Ni,{pwaInfo:T,onSetUrl:_}),n==="actions"&&e.jsx(wi,{pwaInfo:T,vfs:o,projectName:r}),e.jsx("div",{className:"px-3 py-2.5 bg-[#161b22] border border-[#30363d] rounded-xl",children:e.jsxs("p",{className:"text-[11px] text-gray-500 leading-relaxed",children:[e.jsx("span",{className:"text-gray-400 font-semibold",children:"💡 Dica:"}),' Para instalar no celular, ative "Fontes desconhecidas" em Configurações → Segurança, depois abra o .apk.']})})]})})]})})]})}const Es=[{id:"github",label:"GitHub.dev",desc:"Editor leve, funciona bem no celular e PC",icon:Sr,color:"#58a6ff",buildUrl:(t,s)=>`https://github.dev/${t}/${s}`,emptyUrl:"https://github.dev"},{id:"codespaces",label:"GitHub Codespaces",desc:"Máquina virtual completa — terminal real, extensões, IA",icon:Lo,color:"#3fb950",buildUrl:(t,s)=>`https://codespaces.new/${t}/${s}`,emptyUrl:"https://codespaces.new"},{id:"stackblitz",label:"StackBlitz",desc:"Node.js no navegador com terminal real",icon:ns,color:"#1389fd",buildUrl:(t,s)=>`https://stackblitz.com/github/${t}/${s}`,emptyUrl:"https://stackblitz.com"},{id:"vscode",label:"VS Code Web",desc:"vscode.dev — pode ter limitações no celular",icon:Oa,color:"#007acc",buildUrl:(t,s)=>`https://vscode.dev/github/${t}/${s}`,emptyUrl:"https://vscode.dev"}];function ki({open:t,onClose:s,vfs:o,projectName:r}){const n=ps(),c=!!n.token,[l,u]=a.useState("github"),[d,h]=a.useState(r.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")||"meu-projeto"),[m,C]=a.useState("idle"),[T,_]=a.useState([]),[D,P]=a.useState(""),[O,H]=a.useState(""),L=Es.find(w=>w.id===l)||Es[0],V=w=>_(f=>[...f,w]),M=a.useCallback(async()=>{const w=d.trim()||"meu-projeto";C("pushing"),_(["🚀 Iniciando envio para o GitHub…"]),H(""),P("");try{const f=n.username;V(`👤 Conta: ${f}`),V(`📁 Criando repositório "${w}"…`);try{await Ia(n,w,`${r} — SK Code Editor`,!1),V("✅ Repositório criado.")}catch(Q){if(Q.message?.includes("422")||Q.message?.includes("already exists")||Q.message?.includes("name already exists"))V("ℹ️ Repositório já existe — usando existente.");else throw Q}await us(n,f,w);const g=o.toJSON(),S=Object.keys(g).length;V(`📤 Enviando ${S} arquivo(s)…`),await xa(n,f,w,g,`${r} — SK Code Editor`),V("✅ Projeto enviado!");const B=L.buildUrl(f,w);V(`💻 Abrindo: ${B}`),P(B),C("done"),window.open(B,"_blank")}catch(f){H(f.message||String(f)),C("error")}},[n,d,o,r,L]);if(!t)return null;const R=L.icon;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70",onClick:s}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:w=>w.stopPropagation(),children:e.jsxs("div",{className:"bg-[#0d1117] border-t border-[#30363d] rounded-t-3xl shadow-2xl flex flex-col",style:{maxHeight:"90vh"},children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-[#30363d] rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-[#21262d] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-8 h-8 rounded-xl bg-[#58a6ff22] flex items-center justify-center",children:e.jsx(Lo,{size:16,className:"text-[#58a6ff]"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[15px] font-bold text-white",children:"Editar no Navegador"}),e.jsx("p",{className:"text-[11px] text-gray-500",children:r})]})]}),e.jsx("button",{onClick:s,className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:17})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:e.jsxs("div",{className:"px-4 py-4 space-y-4",children:[e.jsxs("div",{className:"px-3 py-3 bg-yellow-500/8 border border-yellow-500/20 rounded-xl space-y-1",children:[e.jsx("p",{className:"text-[12px] font-bold text-yellow-300",children:"💡 Dica para celular"}),e.jsxs("p",{className:"text-[11px] text-gray-400 leading-relaxed",children:["O vscode.dev mudou recentemente e pode não funcionar bem no celular. Recomendamos o ",e.jsx("span",{className:"text-[#58a6ff] font-bold",children:"GitHub.dev"})," ou o ",e.jsx("span",{className:"text-[#1389fd] font-bold",children:"StackBlitz"}),"."]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-semibold",children:"Escolha o Editor"}),Es.map(w=>{const f=w.icon,g=l===w.id;return e.jsxs("button",{onClick:()=>u(w.id),className:"w-full flex items-center gap-3 px-3 py-3 rounded-xl border transition-colors text-left",style:{backgroundColor:g?w.color+"22":"#161b22",borderColor:g?w.color+"88":"#30363d"},children:[e.jsx("div",{className:"w-8 h-8 rounded-lg flex items-center justify-center shrink-0",style:{backgroundColor:w.color+"22"},children:e.jsx(f,{size:15,style:{color:w.color}})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] font-bold",style:{color:g?w.color:"white"},children:w.label}),e.jsx("p",{className:"text-[10px] text-gray-500",children:w.desc})]}),g&&e.jsx("div",{className:"w-2 h-2 rounded-full shrink-0",style:{backgroundColor:w.color}})]},w.id)})]}),c?m==="idle"?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-semibold",children:"Nome do Repositório"}),e.jsx("input",{value:d,onChange:w=>h(w.target.value.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")),className:"w-full px-3 py-2.5 bg-[#161b22] border border-gray-700/50 rounded-xl text-sm text-gray-300 outline-none focus:border-blue-500/50"}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:["github.com/",n.username,"/",d]})]}),e.jsxs("div",{className:"px-3 py-3 bg-[#161b22] border border-[#30363d] rounded-xl space-y-2",children:[e.jsx("p",{className:"text-[10px] text-gray-500 uppercase tracking-wider font-semibold",children:"O que vai acontecer:"}),["Cria ou usa o repositório GitHub",`Envia todos os ${Object.keys(o.toJSON()).length} arquivo(s)`,`Abre o ${L.label} com tudo dentro`].map((w,f)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-5 h-5 rounded-full text-[9px] font-bold flex items-center justify-center shrink-0",style:{backgroundColor:L.color+"22",color:L.color},children:f+1}),e.jsx("span",{className:"text-[12px] text-gray-400",children:w})]},f))]}),e.jsxs("button",{onClick:M,className:"w-full flex items-center justify-center gap-2.5 py-3.5 text-white rounded-xl font-bold text-[15px] transition-opacity hover:opacity-90",style:{backgroundColor:L.color},children:[e.jsx(Tr,{size:17}),"Enviar e Abrir no ",L.label]}),e.jsxs("a",{href:L.emptyUrl,target:"_blank",rel:"noopener noreferrer",className:"block text-center text-[11px] text-gray-600 hover:text-gray-400 transition-colors py-1",children:["Abrir ",L.label," sem enviar →"]})]}):m==="pushing"?e.jsx("div",{className:"space-y-3",children:e.jsxs("div",{className:"bg-black/60 border border-gray-700/40 rounded-xl p-3 max-h-52 overflow-y-auto font-mono",children:[T.map((w,f)=>e.jsx("p",{className:"text-[11px] leading-relaxed",style:{color:L.color},children:w},f)),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx(De,{size:11,className:"animate-spin",style:{color:L.color}}),e.jsx("span",{className:"text-[11px]",style:{color:L.color+"88"},children:"Enviando…"})]})]})}):m==="done"?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-green-500/10 border border-green-500/20 rounded-xl",children:[e.jsx("p",{className:"text-[12px] font-bold text-green-400 mb-1",children:"✅ Projeto enviado e aberto!"}),e.jsxs("p",{className:"text-[11px] text-gray-400",children:["O ",L.label," foi aberto. Se não abriu, clique abaixo."]})]}),e.jsx("div",{className:"bg-black/60 border border-gray-700/40 rounded-xl p-3 max-h-32 overflow-y-auto font-mono",children:T.map((w,f)=>e.jsx("p",{className:"text-[11px] text-green-400 leading-relaxed",children:w},f))}),D&&e.jsxs("a",{href:D,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3 border rounded-xl transition-opacity hover:opacity-80",style:{backgroundColor:L.color+"22",borderColor:L.color+"44"},children:[e.jsx(R,{size:16,style:{color:L.color,flexShrink:0}}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("p",{className:"text-[13px] font-bold",style:{color:L.color},children:["Abrir ",L.label]}),e.jsx("p",{className:"text-[10px] text-gray-500 truncate",children:D})]}),e.jsx(ft,{size:13,className:"text-gray-600 shrink-0"})]}),e.jsxs("button",{onClick:()=>{C("idle"),_([])},className:"w-full text-center text-[11px] text-gray-600 hover:text-gray-400 py-1",children:[e.jsx(At,{size:11,className:"inline mr-1"}),"Usar outro repositório"]})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-2.5 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2",children:[e.jsx(Pt,{size:13,className:"text-red-400 shrink-0 mt-0.5"}),e.jsx("p",{className:"text-[12px] text-red-400 leading-relaxed",children:O})]}),e.jsxs("a",{href:L.emptyUrl,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-2 py-3 border rounded-xl text-[13px] font-bold transition-opacity hover:opacity-80",style:{backgroundColor:L.color+"22",borderColor:L.color+"44",color:L.color},children:[e.jsx(ft,{size:14}),"Abrir ",L.label," assim mesmo"]}),e.jsx("button",{onClick:()=>C("idle"),className:"w-full text-center text-[11px] text-gray-600 hover:text-gray-400 py-1",children:"Tentar novamente"})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"px-3 py-3 bg-yellow-500/8 border border-yellow-500/20 rounded-xl",children:[e.jsx("p",{className:"text-[12px] font-bold text-yellow-300 mb-1",children:"⚠️ GitHub não configurado"}),e.jsx("p",{className:"text-[11px] text-gray-400",children:"Conecte o GitHub em Menu → GitHub para abrir com o projeto completo."})]}),e.jsxs("a",{href:L.emptyUrl,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center gap-3 px-4 py-3.5 border rounded-xl hover:opacity-80 transition-opacity",style:{backgroundColor:L.color+"22",borderColor:L.color+"44"},children:[e.jsx(R,{size:16,style:{color:L.color}}),e.jsxs("span",{className:"text-[14px] font-bold",style:{color:L.color},children:["Abrir ",L.label," (sem projeto)"]})]})]})]})})]})})]})}function Ai({title:t,placeholder:s,defaultValue:o,icon:r,confirmLabel:n="Criar",onConfirm:c,onCancel:l}){const[u,d]=a.useState(o),h=a.useRef(null);a.useEffect(()=>{const C=setTimeout(()=>{h.current?.focus(),h.current?.select()},80);return()=>clearTimeout(C)},[]);const m=()=>{const C=u.trim();C&&c(C)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm",onClick:l}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:C=>C.stopPropagation(),children:e.jsxs("div",{className:"bg-[#222e18] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-gray-700/30",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[r,e.jsx("p",{className:"text-base font-bold text-white",children:t})]}),e.jsx("button",{onClick:l,className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-600",children:e.jsx(je,{size:17})})]}),e.jsxs("div",{className:"px-5 pt-4 pb-6 space-y-4",children:[e.jsx("input",{ref:h,value:u,onChange:C=>d(C.target.value),onKeyDown:C=>{C.key==="Enter"&&m(),C.key==="Escape"&&l()},placeholder:s,autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,className:"w-full px-4 py-3.5 bg-[#141c0d] border border-gray-700/50 rounded-2xl text-[16px] text-gray-200 placeholder-gray-700 outline-none focus:border-green-500/60 focus:ring-1 focus:ring-green-500/20"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{onClick:l,className:"flex-1 py-3 bg-white/5 border border-gray-700/40 text-gray-400 rounded-2xl text-[15px] font-semibold",children:"Cancelar"}),e.jsx("button",{onClick:m,disabled:!u.trim(),className:"flex-1 py-3 bg-green-600 disabled:opacity-40 text-white rounded-2xl text-[15px] font-bold hover:bg-green-500 transition-colors",children:n})]})]})]})})]})}const Ei=["UTF-8","UTF with BOM","UTF-16 LE","UTF-16 BE","Latin-1"],Si=["plaintext","javascript","typescript","html","css","json","python","java","cpp","c","csharp","go","rust","ruby","php","swift","kotlin","yaml","markdown","sql","graphql","shell","dockerfile","xml","scss"];function Ti(t){const s={};t.forEach(c=>{const l=c.split("/");let u=s;l.forEach(d=>{u[d]||(u[d]={}),u=u[d]})});function o(c){return Object.keys(c).sort((l,u)=>{const d=Object.keys(c[l]).length>0,h=Object.keys(c[u]).length>0;return d&&!h?-1:!d&&h?1:l.localeCompare(u)})}function r(c,l,u,d){const h=d?"└── ":"├── ",m=o(c),C=m.length>0;let T=l+h+u+(C?"/":"")+`
`;return m.forEach((_,D)=>{const P=D===m.length-1;T+=r(c[_],l+(d?"    ":"│   "),_,P)}),T}const n=o(s);return n.map((c,l)=>r(s[c],"",c,l===n.length-1).trimEnd()).join(`
`)}function Ri(t,s){const o=new Date().toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"}),r=t.listFiles(),n=k=>{try{return t.readFile(k)||""}catch{return""}},c=n("package.json");let l={};try{l=JSON.parse(c)}catch{}const u={...l.dependencies||{},...l.devDependencies||{}},d=Object.keys(u),h=d.includes("react")||r.some(k=>k.endsWith(".tsx")||k.endsWith(".jsx")),m=d.includes("vite")||r.some(k=>k==="vite.config.ts"||k==="vite.config.js"),C=d.includes("next"),T=d.includes("express"),_=r.some(k=>k.endsWith(".py"))&&(n("requirements.txt")+n("app.py")).includes("flask"),D=r.some(k=>k.endsWith(".py")),P=d.includes("typescript")||r.some(k=>k.endsWith(".ts")||k.endsWith(".tsx")),O=d.includes("tailwindcss"),H=d.includes("prisma")||d.includes("@prisma/client"),L=d.includes("drizzle-orm"),V=d.includes("pg")||d.includes("postgres")||d.includes("@neondatabase/serverless"),M=d.includes("mongoose")||d.includes("mongodb"),R=d.includes("better-sqlite3")||d.includes("sqlite3"),w=r.some(k=>k.endsWith(".html")),f=[];C?f.push("Next.js"):h&&f.push("React"+(m?" + Vite":"")),P&&f.push("TypeScript"),O&&f.push("Tailwind CSS"),D&&_?f.push("Python + Flask"):D&&f.push("Python"),w&&!h&&!D&&f.push("HTML + CSS + JavaScript");const g=[];T&&g.push("Node.js + Express"),V&&g.push("PostgreSQL"+(d.includes("@neondatabase/serverless")?" (Neon)":"")),M&&g.push("MongoDB"),R&&g.push("SQLite"),H&&g.push("Prisma ORM"),L&&g.push("Drizzle ORM");const S=C?"Aplicacao Web Full-Stack (Next.js)":h&&T?"Full-Stack (React + Express)":h?"Aplicacao Web Frontend (React)":T?"Backend/API (Node.js + Express)":_?"Backend/API (Python + Flask)":w?"Site/Pagina Web (HTML/CSS/JS)":D?"Script / Aplicacao Python":"Projeto de Codigo",B=[],Q=/(?:router|app)\.(get|post|put|patch|delete|use)\s*\(\s*["'`]([^"'`]+)["'`]/gi;r.filter(k=>k.endsWith(".ts")||k.endsWith(".js")).forEach(k=>{const x=n(k);let ce;const z=new RegExp(Q.source,"gi");for(;(ce=z.exec(x))!==null;){const N=ce[1].toUpperCase().padEnd(6),U=ce[2];!U.includes("{{")&&U!=="/"&&B.push(`${N} ${U}  (em ${k})`)}});const se=new Set,J=/process\.env\.([A-Z_][A-Z0-9_]*)/g;r.filter(k=>k.endsWith(".ts")||k.endsWith(".js")||k.endsWith(".py")).forEach(k=>{const x=n(k);let ce;const z=new RegExp(J.source,"g");for(;(ce=z.exec(x))!==null;)ce[1]!=="NODE_ENV"&&se.add(ce[1])}),[".env",".env.example",".env.local"].forEach(k=>{n(k).split(`
`).forEach(x=>{const ce=x.match(/^([A-Z_][A-Z0-9_]*)=/);ce&&se.add(ce[1])})});const xe=l.scripts||{},re=r.filter(k=>["index.ts","index.js","main.ts","main.tsx","app.ts","app.js","app.py","main.py","server.ts","server.js","App.tsx","App.jsx","index.tsx","index.html"].includes(k.split("/").pop()||"")).slice(0,10),te=r.reduce((k,x)=>k+n(x).split(`
`).length,0),X=Ti(r);function pe(k){const x=k.split("/").pop()||k,ce=x.toLowerCase(),z=x.split(".").pop()?.toLowerCase()||"",N=x.replace(/\.[^.]+$/,"").toLowerCase();if(x==="package.json")return"Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.";if(x==="tsconfig.json")return"Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.";if(x==="vite.config.ts"||x==="vite.config.js")return"Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.";if(x==="tailwind.config.ts"||x==="tailwind.config.js")return"Configuracao do Tailwind CSS — a biblioteca de estilos visuais usada no projeto.";if(x==="postcss.config.js"||x==="postcss.config.cjs")return"Configuracao do PostCSS, necessaria para o Tailwind processar os estilos.";if(x===".env"||x===".env.local"||x===".env.example")return"Arquivo de variaveis secretas (senhas, chaves de API). NUNCA suba este arquivo para o GitHub.";if(x==="Dockerfile")return"Instrucoes para criar um container Docker do projeto (para deploy em servidores).";if(x==="docker-compose.yml")return"Define multiplos containers Docker que rodam juntos (ex: app + banco de dados).";if(x===".gitignore")return"Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env";if(x==="README.md")return"Documentacao principal do projeto. Explica o que o projeto faz e como rodar.";if(x==="PLANO.md")return"Este documento! Gerado automaticamente pelo SK Code Editor com toda a estrutura do projeto.";if(x==="MANUAL.md")return"Manual explicativo em linguagem simples, feito para entender o projeto sem precisar de conhecimento tecnico profundo.";if(x==="schema.prisma")return"Esquema do banco de dados (tabelas, colunas, relacoes) escrito em linguagem Prisma.";if(x==="drizzle.config.ts")return"Configuracao do Drizzle ORM — gerencia a conexao e migracao do banco de dados.";if(x==="index.html")return"Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.";if(z==="md")return"Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).";if(z==="sql")return"Script SQL — contem comandos para criar tabelas, inserir ou consultar dados no banco.";if(z==="csv")return"Planilha de dados em formato texto (valores separados por virgula).";if(z==="json")return N.includes("manifest")?"Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.":"Arquivo de dados ou configuracao no formato JSON (chave: valor).";if(z==="css"||z==="scss"||z==="sass")return"Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.";if(z==="svg")return"Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).";if(z==="png"||z==="jpg"||z==="jpeg"||z==="webp")return"Arquivo de imagem.";if(z==="py")return ce.includes("model")?"Modelos de dados Python (classes que representam entidades como Usuario, Produto...).":ce.includes("route")||ce.includes("view")?"Rotas/views do backend Python — define quais URLs o servidor responde.":ce.includes("test")?"Arquivo de testes automatizados em Python.":ce.includes("config")?"Configuracoes do projeto Python.":"Arquivo Python — codigo de logica ou script de automacao.";if(z==="tsx"||z==="jsx")return N==="app"||N==="App"?"Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.":N==="main"||N==="index"?"Ponto de entrada do React — monta o componente App na pagina HTML.":N.toLowerCase().includes("layout")?"Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.":N.toLowerCase().includes("card")?"Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.":N.toLowerCase().includes("modal")?"Componente MODAL — janela/popup que aparece sobre a tela pedindo uma acao ou mostrando uma informacao importante.":N.toLowerCase().includes("button")||N.toLowerCase().includes("btn")?"Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.":N.toLowerCase().includes("header")||N.toLowerCase().includes("navbar")||N.toLowerCase().includes("nav")?"Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.":N.toLowerCase().includes("footer")?"Componente de RODAPE — parte inferior da pagina com links, copyright e informacoes extras.":N.toLowerCase().includes("sidebar")?"Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.":N.toLowerCase().includes("form")?"Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.":N.toLowerCase().includes("input")?"Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.":N.toLowerCase().includes("table")?"Componente de TABELA — exibe dados em linhas e colunas.":N.toLowerCase().includes("list")?"Componente de LISTA — exibe uma colecao de items de forma organizada.":N.toLowerCase().includes("item")?"Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.":N.toLowerCase().includes("page")||N.toLowerCase().includes("screen")||N.toLowerCase().includes("view")?"Componente de PAGINA/TELA — representa uma tela completa navegavel no app.":N.toLowerCase().includes("dashboard")?"Componente de PAINEL DE CONTROLE — tela principal com resumo de dados e acesso rapido as funcoes.":N.toLowerCase().includes("chart")||N.toLowerCase().includes("graph")?"Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).":N.toLowerCase().includes("login")||N.toLowerCase().includes("auth")||N.toLowerCase().includes("signin")?"Componente de LOGIN/AUTENTICACAO — tela de entrada com usuario e senha.":N.toLowerCase().includes("register")||N.toLowerCase().includes("signup")||N.toLowerCase().includes("cadastro")?"Componente de CADASTRO — formulario para criar nova conta de usuario.":N.toLowerCase().includes("profile")||N.toLowerCase().includes("perfil")?"Componente de PERFIL — exibe e edita informacoes do usuario logado.":N.toLowerCase().includes("search")||N.toLowerCase().includes("busca")?"Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.":N.toLowerCase().includes("toast")||N.toLowerCase().includes("notification")||N.toLowerCase().includes("alert")?"Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').":N.toLowerCase().includes("loading")||N.toLowerCase().includes("spinner")?"Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.":N.toLowerCase().includes("empty")||N.toLowerCase().includes("placeholder")?"Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').":N.toLowerCase().includes("error")||N.toLowerCase().includes("erro")?"Componente de ERRO — exibido quando algo da errado, com mensagem explicativa.":N.toLowerCase().includes("provider")?"Componente PROVIDER — 'fornece' dados/funcoes para todos os componentes filhos via Context API do React.":N.toLowerCase().includes("context")?"CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.":N.toLowerCase().includes("icon")?"Componente de ICONE — imagem/simbolo visual pequeno reutilizavel.":N.toLowerCase().includes("avatar")?"Componente AVATAR — foto ou iniciais do usuario em formato circular.":N.toLowerCase().includes("badge")?"Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').":N.toLowerCase().includes("tag")||N.toLowerCase().includes("chip")?"Componente TAG/CHIP — rotulo pequeno para categorizar ou classificar um item.":N.toLowerCase().includes("menu")||N.toLowerCase().includes("dropdown")?"Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.":N.toLowerCase().includes("dialog")?"Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).":N.toLowerCase().includes("tabs")||N.toLowerCase().includes("tab")?"Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.":N.toLowerCase().includes("accordion")?"Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.":N.toLowerCase().includes("stepper")||N.toLowerCase().includes("wizard")?"Componente WIZARD/STEPPER — guia o usuario por multiplos passos em sequencia.":N.toLowerCase().includes("map")?"Componente de MAPA — exibe mapa geografico (geralmente Google Maps ou Leaflet).":N.toLowerCase().includes("editor")?"Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.":N.toLowerCase().includes("preview")?"Componente PREVIEW — exibe uma visualizacao de algo antes de salvar/publicar.":N.toLowerCase().includes("upload")?"Componente UPLOAD — permite selecionar e enviar arquivos.":N.toLowerCase().includes("settings")||N.toLowerCase().includes("config")||N.toLowerCase().includes("configuracao")?"Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.":N.toLowerCase().includes("home")||N.toLowerCase().includes("inicio")?"Componente HOME — pagina/tela inicial do app.":N.toLowerCase().includes("product")||N.toLowerCase().includes("produto")?"Componente de PRODUTO — exibe informacoes de um produto (nome, preco, imagem...).":N.toLowerCase().includes("order")||N.toLowerCase().includes("pedido")?"Componente de PEDIDO — gerencia ou exibe informacoes de um pedido/compra.":N.toLowerCase().includes("cart")||N.toLowerCase().includes("carrinho")?"Componente CARRINHO — lista de produtos selecionados para compra.":N.toLowerCase().includes("payment")||N.toLowerCase().includes("checkout")||N.toLowerCase().includes("pagamento")?"Componente de PAGAMENTO/CHECKOUT — tela de finalizacao de compra.":N.toLowerCase().includes("chat")||N.toLowerCase().includes("message")||N.toLowerCase().includes("mensagem")?"Componente de CHAT/MENSAGENS — interface de conversa em tempo real.":N.toLowerCase().includes("comment")||N.toLowerCase().includes("comentario")?"Componente de COMENTARIOS — exibe e permite adicionar comentarios a um conteudo.":N.toLowerCase().includes("calendar")||N.toLowerCase().includes("agenda")?"Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.":"Componente React — parte visual reutilizavel da interface do usuario.";if((z==="ts"||z==="tsx")&&(N.startsWith("use")||N.toLowerCase().startsWith("use"))){const U=N.replace(/^use/i,"");return U.toLowerCase().includes("auth")?"HOOK de autenticacao — gerencia o estado de login/logout do usuario.":U.toLowerCase().includes("fetch")||U.toLowerCase().includes("api")||U.toLowerCase().includes("data")?"HOOK de dados — busca informacoes da API e gerencia estado de carregamento e erro.":U.toLowerCase().includes("local")||U.toLowerCase().includes("storage")?"HOOK de armazenamento local — salva e recupera dados do localStorage do browser.":U.toLowerCase().includes("theme")||U.toLowerCase().includes("dark")?"HOOK de tema — gerencia modo claro/escuro da interface.":U.toLowerCase().includes("modal")?"HOOK de modal — controla abertura e fechamento de janelas modais.":U.toLowerCase().includes("form")?"HOOK de formulario — gerencia valores, validacao e submissao de formularios.":U.toLowerCase().includes("window")||U.toLowerCase().includes("resize")||U.toLowerCase().includes("screen")?"HOOK de tela — detecta o tamanho da janela para layouts responsivos.":U.toLowerCase().includes("debounce")?"HOOK debounce — atrasa a execucao de uma funcao para evitar chamadas excessivas (ex: busca ao digitar).":U.toLowerCase().includes("click")||U.toLowerCase().includes("outside")?"HOOK de clique externo — detecta quando o usuario clica fora de um elemento.":`HOOK React personalizado para gerenciar estado/comportamento de '${U||"funcionalidade especifica"}'.`}return z==="ts"||z==="js"?N.toLowerCase().includes("util")||N.toLowerCase().includes("helper")?"Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.":N.toLowerCase().includes("api")||N.toLowerCase().includes("service")||N.toLowerCase().includes("client")?"Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.":N.toLowerCase().includes("route")||N.toLowerCase().includes("router")?"Arquivo de ROTAS — define as URLs/enderecos respondidos pelo servidor.":N.toLowerCase().includes("middleware")?"MIDDLEWARE — funcao que processa requisicoes antes de chegar na rota final (ex: verificar login).":N.toLowerCase().includes("model")||N.toLowerCase().includes("schema")?"Arquivo de MODELO — define a estrutura dos dados (tabelas, campos, tipos).":N.toLowerCase().includes("controller")?"CONTROLLER — logica de negocio que processa as requisicoes e retorna respostas.":N.toLowerCase().includes("store")||N.toLowerCase().includes("state")?"STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).":N.toLowerCase().includes("type")||N.toLowerCase().includes("interface")||N.toLowerCase().includes("dto")?"Arquivo de TIPOS — define as estruturas de dados (interfaces TypeScript) usadas no projeto.":N.toLowerCase().includes("constant")||N.toLowerCase().includes("config")?"Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.":N.toLowerCase().includes("test")||N.toLowerCase().includes("spec")?"Arquivo de TESTES — verifica automaticamente se o codigo funciona corretamente.":N.toLowerCase().includes("seed")?"Arquivo SEED — popula o banco de dados com dados iniciais/de teste.":N.toLowerCase().includes("migration")?"MIGRACAO de banco de dados — altera a estrutura do banco (adiciona tabelas, colunas...).":N==="index"?"Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.":"Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.":`Arquivo ${z.toUpperCase()} — parte do projeto.`}function me(k){const x=k.toLowerCase();return x==="src"?"Codigo-fonte principal do projeto. Nao apague esta pasta.":x==="components"?"Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).":x==="pages"||x==="screens"||x==="views"?"Telas completas do app — cada arquivo aqui e uma pagina navegavel.":x==="routes"||x==="router"?"Definicao das URLs e navegacao do app.":x==="hooks"?"Hooks React customizados — logica reutilizavel de estado e efeitos.":x==="lib"||x==="utils"||x==="helpers"?"Funcoes auxiliares reutilizaveis em varios lugares do projeto.":x==="api"||x==="services"?"Comunicacao com servidor, banco de dados ou APIs externas.":x==="store"||x==="context"||x==="state"?"Gerenciamento de estado global — dados compartilhados entre telas.":x==="types"||x==="interfaces"||x==="dto"?"Definicoes de tipos TypeScript — contratos de dados.":x==="assets"||x==="public"||x==="static"?"Arquivos estaticos: imagens, icones, fontes, arquivos publicos.":x==="styles"||x==="css"||x==="scss"?"Arquivos de estilo visual — cores, fontes, layout.":x==="config"?"Arquivos de configuracao do projeto.":x==="middleware"?"Funcoes intermediarias que processam requisicoes antes das rotas.":x==="models"||x==="entities"?"Modelos de dados — representacao das tabelas do banco de dados.":x==="controllers"?"Controladores — logica de negocios para cada rota da API.":x==="tests"||x==="__tests__"||x==="test"?"Testes automatizados — verificam se o codigo funciona corretamente.":x==="migrations"?"Historico de alteracoes do banco de dados.":x==="seeds"?"Dados iniciais para popular o banco em desenvolvimento.":x==="dist"||x==="build"||x==="out"?"Codigo compilado/gerado automaticamente — NAO edite diretamente.":x==="node_modules"?"Pacotes instalados pelo npm — NAO edite e NAO envie para o GitHub.":x==="prisma"?"Arquivos do Prisma ORM: schema do banco e migracoes.":x==="drizzle"?"Arquivos do Drizzle ORM: schema e migracoes do banco.":x==="ui"?"Componentes de UI (interface) basicos e genericos.":x==="layouts"?"Estruturas de layout — esqueletos de pagina com cabecalho, sidebar, etc.":x==="icons"?"Icones do projeto.":`Pasta '${k}' — agrupamento de arquivos relacionados.`}const F=new Map;r.forEach(k=>{const x=k.split("/"),ce=x.length>1?x.slice(0,-1).join("/"):"(raiz)";F.has(ce)||F.set(ce,[]),F.get(ce).push(k)});const E=[...F.keys()].sort((k,x)=>k==="(raiz)"?-1:x==="(raiz)"?1:k.split("/").length-x.split("/").length||k.localeCompare(x)),j=[];if(j.push(`# PLANO DO PROJETO: ${s}`),j.push(""),j.push(`> Gerado automaticamente pelo SK Code Editor em ${o}`),j.push(`> **${r.length} arquivo(s)** | **~${te.toLocaleString("pt-BR")} linhas de codigo**`),j.push(""),j.push("---"),j.push(""),j.push("## RESUMO EXECUTIVO"),j.push(""),j.push(`- **Tipo de aplicacao:** ${S}`),f.length&&j.push(`- **Frontend / Stack principal:** ${f.join(", ")}`),g.length&&j.push(`- **Backend / Dados:** ${g.join(", ")}`),l.version&&j.push(`- **Versao:** ${l.version}`),l.description&&j.push(`- **Descricao:** ${l.description}`),j.push(""),j.push("**Para rodar o projeto:**"),j.push("```bash"),xe.dev?j.push("npm install && npm run dev"):xe.start?j.push("npm install && npm start"):D?j.push("pip install -r requirements.txt && python main.py"):w?j.push("# Abra index.html no Preview (botao Play)"):j.push("npm install"),j.push("```"),j.push(""),j.push("---"),j.push(""),j.push("## ESTRUTURA DE ARQUIVOS"),j.push(""),j.push("```"),j.push(s+"/"),j.push(X),j.push("```"),j.push(""),j.push("---"),j.push(""),j.push("## STACK TECNOLOGICO DETECTADO"),j.push(""),f.length&&j.push(`- **Frontend:** ${f.join(", ")}`),g.length&&j.push(`- **Backend:** ${g.join(", ")}`),d.length){const k=d.join(", ");j.push(`- **Todos os pacotes (${d.length}):** ${k}`)}return j.push(""),j.push("---"),j.push(""),B.length>0&&(j.push("## ROTAS DA API (endpoints detectados automaticamente)"),j.push(""),j.push("```"),B.forEach(k=>j.push(k)),j.push("```"),j.push(""),j.push("---"),j.push("")),Object.keys(xe).length>0&&(j.push("## SCRIPTS DISPONIVEIS (package.json)"),j.push(""),j.push("```bash"),Object.entries(xe).forEach(([k,x])=>j.push(`npm run ${k.padEnd(12)}  # ${x}`)),j.push("```"),j.push(""),j.push("---"),j.push("")),se.size>0&&(j.push("## VARIAVEIS DE AMBIENTE NECESSARIAS"),j.push(""),j.push("Crie um arquivo `.env` na raiz com estas variaveis:"),j.push(""),j.push("```env"),[...se].forEach(k=>j.push(`${k}=seu_valor_aqui`)),j.push("```"),j.push(""),j.push("---"),j.push("")),re.length>0&&(j.push("## ARQUIVOS PRINCIPAIS"),j.push(""),re.forEach(k=>{const x=k.includes("server")||k==="app.ts"||k==="app.js"?"Ponto de entrada do backend":k.includes("App.tsx")||k.includes("App.jsx")?"Componente raiz do frontend":k==="index.html"?"Pagina HTML principal":k==="main.py"||k==="app.py"?"Aplicacao Python principal":"Arquivo principal";j.push(`- \`${k}\` — ${x}`)}),j.push(""),j.push("---"),j.push("")),j.push("## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ"),j.push(""),j.push("> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo."),j.push(""),E.forEach(k=>{const x=F.get(k);if(k==="(raiz)")j.push("### 📁 Raiz do Projeto (pasta principal)"),j.push("> Arquivos de configuracao e pontos de entrada ficam aqui.");else{const ce=k.split("/").pop()||k;j.push(`### 📁 \`${k}/\``),j.push(`> ${me(ce)}`)}j.push(""),x.forEach(ce=>{const z=ce.split("/").pop()||ce,N=pe(ce),U=n(ce).split(`
`).length;j.push(`**\`${z}\`** _(${U} linha${U!==1?"s":""})_`),j.push(`${N}`),j.push("")}),j.push("---"),j.push("")}),j.push("## CONTEXTO PARA IA (copie e cole para continuar o projeto)"),j.push(""),j.push("> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:"),j.push(""),j.push("```"),j.push(`Projeto: ${s}`),j.push(`Tipo: ${S}`),f.length&&j.push(`Stack: ${[...f,...g].join(", ")}`),j.push(`Arquivos: ${r.length} | Linhas: ~${te.toLocaleString("pt-BR")}`),B.length&&j.push(`Rotas API: ${B.length} endpoint(s) detectado(s)`),se.size&&j.push(`Variaveis de ambiente necessarias: ${[...se].join(", ")}`),j.push(""),j.push("Estrutura principal:"),r.forEach(k=>j.push(`  ${k}`)),j.push("```"),j.push(""),j.push("---"),j.push(""),j.push(`*Plano gerado pelo SK Code Editor — ${o}*`),j.join(`
`)}function ko(t,s){return`# SK Code Editor — Informações do Sistema

> Gerado em: ${new Date().toLocaleString("pt-BR")}
> Projeto: **${t}** · ${s} arquivo(s)

---

## Terminal

O terminal executa JavaScript real no browser e simula comandos de sistema:

### O que funciona:
- \`node <arquivo.js>\` — executa JavaScript **real** (async/await suportado!)
- \`fetch("https://api.exemplo.com")\` — **acesso à internet funcionando** para APIs com CORS
- \`require('node-fetch')\` ou \`require('axios')\` → usa fetch nativo do browser automaticamente
- \`require('fs')\` — lê e escreve arquivos do projeto virtual
- \`npm install <pacote>\` — atualiza package.json do projeto
- \`ls\`, \`cat\`, \`mkdir\`, \`touch\`, \`rm\`, \`cp\`, \`mv\` — operações de arquivo
- \`echo\`, \`pwd\`, \`clear\`, \`env\` — utilitários
- \`git status\`, \`git log\` — informações do projeto

### Sobre acesso à internet:
- ✅ APIs públicas com CORS habilitado: OpenAI, GitHub, JSONPlaceholder, etc.
- ✅ \`fetch("https://api.github.com/users/nome")\` funciona direto
- ⚠️  Algumas APIs bloqueiam chamadas do browser (CORS) — nesses casos use um backend real
- ❌ WebSockets e streams em tempo real não funcionam no modo browser

### Sobre Python:
- \`python <arquivo.py>\` — **simulado** (mostra prints estáticos)
- Para Python real: use Replit, Google Colab, ou instale localmente

---

## Assistente IA

### Escopos de contexto:
| Escopo | O que é enviado | Tokens estimados |
|--------|----------------|-----------------|
| Projeto | Até 60 arquivos (10k chars cada, total 80k) | ~40.000–200.000 |
| Pasta | Arquivos da pasta atual (12k chars cada) | ~3.000–30.000 |
| Arquivo | Só o arquivo ativo (40k chars) | ~500–10.000 |
| Nenhum | Apenas sua mensagem | ~100–500 |

### Limites por modelo (tokens de entrada):
| Modelo | Limite entrada | Limite saída |
|--------|--------------|-------------|
| GPT-4o | 128.000 tokens | 16.384 tokens |
| GPT-4o-mini | 128.000 tokens | 16.384 tokens |
| GPT-3.5-turbo | 16.385 tokens | 4.096 tokens |
| Claude 3.5 Sonnet | 200.000 tokens | 8.096 tokens |
| Claude 3 Haiku | 200.000 tokens | 4.096 tokens |
| Gemini 1.5 Pro | 1.000.000 tokens | 8.192 tokens |
| Gemini 1.5 Flash | 1.000.000 tokens | 8.192 tokens |

> 1 token ≈ 4 caracteres em inglês / ≈ 3 caracteres em português

### Comandos que a IA entende:
- \`filepath:caminho/arquivo.ext\` — cria/atualiza arquivo no projeto
- Blocos \`\`\`bash\`\`\` — exibe botão "Executar no Terminal"
- Você pode pedir: "crie", "corrija", "explique", "refatore", "adicione testes"

---

## Atalhos do Editor

| Ação | Atalho |
|------|--------|
| Salvar | Ctrl+S / ⌘S |
| Desfazer | Ctrl+Z |
| Refazer | Ctrl+Y / Ctrl+Shift+Z |
| Buscar | Ctrl+F |
| Substituir | Ctrl+H |
| Ir para linha | Ctrl+G |
| Formatar | Shift+Alt+F |
| Comentar linha | Ctrl+/ |
| Duplicar linha | Shift+Alt+↓ |
| Mover linha | Alt+↑/↓ |
| Selecionar tudo | Ctrl+A |

---

## Armazenamento

- **Índice de projetos:** \`localStorage['sk-editor-projects']\` (apenas metadados)
- **Arquivos de cada projeto:** \`localStorage['sk-proj-files-{id}']\` (chave separada por projeto)
- **Projeto atual:** \`localStorage['sk-editor-current']\`
- **Auto-save:** a cada 8 segundos e em cada mudança de arquivo
- **Capacidade:** projetos grandes suportados — cada projeto tem sua própria cota de armazenamento
- **Backup seguro:** use ☁️ Backup no Google Drive para projetos maiores que 5MB
- **Exportar tudo:** Painel de Arquivos → ··· na raiz → Exportar como ZIP

---

## Versão

SK Code Editor · Editor de código mobile-first em português  
Monaco Editor + WebAssembly Terminal + IA integrada  
`}function Pi({vfs:t,projectName:s,onNewProject:o,onSaveProject:r,onOpenCampoLivre:n,onOpenAssistenteJuridico:c,onBackToProjects:l}){const[u,d]=a.useState([]),[h,m]=a.useState(null),[C,T]=a.useState([]),[_,D]=a.useState(-1),[P,O]=a.useState(!1),[H,L]=a.useState(!1),[V,M]=a.useState(!1),[R,w]=a.useState(),[f,g]=a.useState(!0),[S,B]=a.useState("terminal"),[Q,se]=a.useState(!1),[J,xe]=a.useState(""),[re,te]=a.useState(null),[X,pe]=a.useState(!1),[me,F]=a.useState(!1),[E,j]=a.useState(!1),[k,x]=a.useState(!1),[ce,z]=a.useState(!1),[N,U]=a.useState(!1),[v,$]=a.useState(()=>{try{const i=localStorage.getItem("sk-checkpoints")||"[]",A=JSON.parse(i);return Array.isArray(A)?A.slice(0,5):[]}catch{return[]}}),[Z,ee]=a.useState(()=>{try{return JSON.parse(localStorage.getItem("sk-tasks")||"[]")}catch{return[]}}),[ne,be]=a.useState(""),[ye,Ge]=a.useState(!1),[$e,Ze]=a.useState(!1),[Be,I]=a.useState(!1),[ae,ie]=a.useState(!1),[ue,y]=a.useState(!1),[K,oe]=a.useState(!1),[de,Le]=a.useState(!1),[fe,He]=a.useState(!1),[ve,Ee]=a.useState(!1),[pt,Qe]=a.useState(!1),[ke,Ue]=a.useState(!1),[Ve,ot]=a.useState(!1),[it,et]=a.useState(!1),[lt,yt]=a.useState(!1),[Ke,xt]=a.useState(()=>localStorage.getItem("sk-db-url")||""),[Ye,Se]=a.useState("idle"),[Fe,We]=a.useState("SELECT NOW();"),[Pe,ut]=a.useState(null),[Je,gt]=a.useState(!1),[Dt,ht]=a.useState(null),[tt,_t]=a.useState(t.getTree()),[Ht,nt]=a.useState({}),[b,G]=a.useState(""),[ge,Oe]=a.useState("npm"),[Te,ze]=a.useState(),[dt,Ie]=a.useState(),[Re,Me]=a.useState(),[st,_e]=a.useState(""),[Mt,va]=a.useState(!1),[zt,Vt]=a.useState("UTF-8"),[$t,Bt]=a.useState(),[Et,St]=a.useState(new Set(["__root__"])),[ja,Nt]=a.useState("project"),[sa,oa]=a.useState({line:1,col:1}),[,ra]=a.useState(0),Yt=a.useRef(null),Kt=a.useRef(null),[Ut,Wt]=a.useState(null),Jt=a.useCallback(i=>{Wt({defaultValue:"",...i})},[]);a.useEffect(()=>{const i=t.onChange(()=>{_t(t.getTree()),ra(A=>A+1)});return()=>{i()}},[t]);const na=a.useCallback(i=>{const A=i.split("/");A.length>1&&St(q=>{const Y=new Set(q);let he="";for(let we=0;we<A.length-1;we++)he=he?`${he}/${A[we]}`:A[we],Y.add(he);return Y})},[]),$a=a.useCallback(i=>{St(A=>{const q=new Set(A);return q.has(i)?q.delete(i):q.add(i),q})},[]),rt=a.useCallback(i=>{const A=t.readFile(i);A!==void 0&&(u.includes(i)||d(q=>{const Y=[...q,i];return Y.length>3?Y.slice(-3):Y}),m(i),nt(q=>({...q,[i]:A})),Bt(void 0),na(i),O(!1),T(q=>{const Y=q.slice(0,_+1);return Y[Y.length-1]===i?q:[...Y,i]}),D(q=>q+1))},[u,t,na,_]),ms=a.useCallback(()=>{if(_>0){const i=C[_-1];D(q=>q-1);const A=t.readFile(i);A!==void 0&&(u.includes(i)||d(q=>[...q,i]),m(i),nt(q=>({...q,[i]:A})))}},[C,_,t,u]),xs=a.useCallback(()=>{if(_<C.length-1){const i=C[_+1];D(q=>q+1);const A=t.readFile(i);A!==void 0&&(u.includes(i)||d(q=>[...q,i]),m(i),nt(q=>({...q,[i]:A})))}},[C,_,t,u]),gs=a.useCallback(i=>{if(d(A=>A.filter(q=>q!==i)),h===i){const A=u.filter(q=>q!==i);m(A.length>0?A[A.length-1]:null)}},[h,u]),Xt=a.useCallback(i=>{h&&(t.writeFile(h,i),nt(A=>({...A,[h]:i})))},[h,t]),p=a.useCallback(i=>{Jt({title:"Novo Arquivo",placeholder:"ex: index.html, App.tsx, main.py",icon:e.jsx(ba,{size:18,className:"text-blue-400"}),onConfirm:A=>{const q=i?`${i}/${A}`:A;t.writeFile(q,""),rt(q),Wt(null)}})},[t,rt,Jt]),W=a.useCallback(i=>{Jt({title:"Nova Pasta",placeholder:"ex: src, components, pages",icon:e.jsx(Pa,{size:18,className:"text-amber-400"}),onConfirm:A=>{const q=i?`${i}/${A}`:A;t.writeFile(`${q}/.gitkeep`,""),St(Y=>new Set([...Y,q])),Wt(null)}})},[t,Jt]),le=a.useCallback(i=>{confirm(`Excluir "${i}"?`)&&(t.deleteFile(i),d(A=>A.filter(q=>!q.startsWith(i))),h?.startsWith(i)&&m(null))},[t,h]),Ne=a.useCallback(i=>{const A=i.split("/"),q=A[A.length-1],Y=!q.includes(".");Jt({title:"Renomear",placeholder:q,defaultValue:q,icon:Y?e.jsx(Pa,{size:18,className:"text-amber-400"}):e.jsx(ba,{size:18,className:"text-blue-400"}),confirmLabel:"Renomear",onConfirm:he=>{if(he===q){Wt(null);return}A[A.length-1]=he;const we=A.join("/");t.renameFile(i,we),d(Tt=>Tt.map(ia=>ia===i?we:ia)),h===i&&m(we),Wt(null)}})},[t,h,Jt]),Ce=a.useCallback(i=>{const A=t.readFile(i);if(A===void 0)return;const q=i.split("/"),Y=q[q.length-1],he=Y.includes(".")?"."+Y.split(".").pop():"",we=he?Y.slice(0,-he.length):Y;q[q.length-1]=`${we}-copia${he}`,t.writeFile(q.join("/"),A)},[t]),qe=a.useCallback(i=>t.readFile(i),[t]),Ae=a.useCallback(i=>t.listFiles().filter(A=>A===i||A.startsWith(i+"/")).map(A=>({path:A,content:t.readFile(A)||""})),[t]),Xe=a.useCallback(i=>{g(!0),B("terminal"),setTimeout(()=>ze(i),120)},[]),ct=a.useCallback((i,A)=>{let q="";if(i==="/"||A){const Y=i==="/"?"":i,we=t.listFiles().filter(Tt=>Y===""||Tt===Y||Tt.startsWith(Y+"/")).slice(0,20).map(Tt=>{const ia=t.readFile(Tt)||"";return`
--- ${Tt} ---
${ia.slice(0,8e3)}`}).join("");q=`Analise a ${i==="/"?"pasta raiz do projeto":`pasta "${i}"`} e dê um diagnóstico completo: estrutura, possíveis bugs, melhorias, e próximos passos recomendados.

ARQUIVOS:${we}`}else{const Y=t.readFile(i)||"";q=`Analise o arquivo "${i}" detalhadamente: aponte bugs, problemas de lógica, boas práticas que faltam, sugestões de melhoria, e se necessário corrija o código.

--- ${i} ---
${Y.slice(0,4e4)}`}L(!0),O(!1),setTimeout(()=>Ie(q),200)},[t]),at=a.useCallback(async i=>{try{const A=t.readFile(i)||"";return(await fetch("/api/workspace/write",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:i.replace(/^\//,""),content:A})})).ok}catch{return!1}},[t]),ya=a.useCallback(async()=>{Se("syncing");try{const A=t.listFiles().filter(Y=>Y.includes("node_modules")||Y.includes("/.git/")?!1:(t.readFile(Y)||"").length<=5e5).map(Y=>({path:Y.replace(/^\//,""),content:t.readFile(Y)||""})),q=await fetch("/api/workspace/sync",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:A})});return Se(q.ok?"ok":"error"),setTimeout(()=>Se("idle"),6e3),q.ok}catch{return Se("error"),setTimeout(()=>Se("idle"),3e3),!1}},[t]);a.useCallback(()=>{const i=b.trim();i&&(Xe(ge==="npm"?`npm install ${i}`:`pip3 install ${i}`),G(""),x(!1))},[b,ge,Xe]);const hs=a.useCallback(async()=>{if(!h)return;const i=h.split(".").pop()?.toLowerCase()??"";if(["html","htm","svg","json","md","markdown","css","scss","js","ts","mjs","cjs"].includes(i)){g(!0),B("preview");return}g(!0),B("terminal"),await at(h);const q=h.replace(/^\//,"");let Y="";if(i==="py")Y=`python3 "${q}"`;else if(i==="sh")Y=`bash "${q}"`;else if(["js","mjs","cjs"].includes(i))Y=`node "${q}"`;else if(i==="ts")Y=`node --experimental-strip-types "${q}" 2>/dev/null || npx ts-node "${q}"`;else{g(!0),B("preview");return}Xe(Y)},[h,Xe,at]),Ba=a.useCallback((i,A)=>{t.writeFile(i,A),rt(i),na(i),(i.endsWith(".html")||i==="index.html")&&(B("preview"),g(!0),Le(!0),setTimeout(()=>Le(!1),5e3))},[t,rt,na]),Na=a.useCallback(i=>{t.clear(),t.fromJSON(i),d([]),m(null),nt({}),M(!1)},[t]);a.useCallback(async(i,A)=>{const q=await Ma({token:"",username:""},i,A);if(Object.keys(q).length===0)throw new Error("Nenhum arquivo encontrado. O repositório é privado ou não existe.");t.clear(),t.fromJSON(q),d([]),m(null),nt({})},[t]);const wt=a.useCallback(()=>{const i=Ri(t,s);t.writeFile("PLANO.md",i),rt("PLANO.md"),F(!1)},[t,s,rt]),ar=a.useCallback(()=>{if(!t.readFile(".sk/perfil-jasmim.md")){const q=`# 🧠 Perfil de Aprendizado — Jasmim
> Criado em: ${new Date().toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})}
> Este arquivo é mantido e atualizado pela própria Jasmim conforme aprende sobre Saulo e o projeto.
> Você pode editar, corrigir ou adicionar informações aqui a qualquer momento.

---

## Sobre Saulo Kenji

- **Profissão:** Advogado
- **Limitação física:** Deficiência nos membros superiores — usa principalmente comandos de voz
- **Estilo de comunicação:** Prefere respostas curtas e diretas, em português simples
- **Como confirma ações:** Costuma dizer "pode", "pode continuar", "ok", "vai"
- **O que evitar:** Jargão técnico sem explicação, respostas muito longas para ler

---

## Preferências de Trabalho

- Gosta de saber o que foi feito sem precisar ler tudo
- Prefere que a conversa tenha continuidade natural
- Aprecia quando a IA sugere o próximo passo
- Usa o editor principalmente para projetos pessoais e jurídicos

---

## Sobre o Projeto Atual

> (Jasmim vai preencher esta seção conforme aprende sobre o projeto)

---

## O que Jasmim Aprendeu até Agora

> (Atualizado automaticamente pela Jasmim ao longo das conversas)
`;t.writeFile(".sk/perfil-jasmim.md",q)}rt(".sk/perfil-jasmim.md"),O(!1)},[t,rt]);a.useCallback(()=>{const i=`# 📖 Manual do Desenvolvedor — SK Code Editor
> Guia em linguagem simples para entender o que cada coisa significa.
> Sem jargão técnico. Feito para você, Saulo.

---

## 🗂️ O que significa cada pasta aqui no Replit

### 📁 \`artifacts/\`
É a pasta principal do projeto. Dentro dela ficam as duas partes do aplicativo:

- **\`api-server/\`** → O **servidor** (o "motor" que roda por trás das cenas).
  Ele é quem executa comandos no terminal, faz conexão com banco de dados, e responde as chamadas do app.
  Pense nele como a **cozinha de um restaurante** — o cliente não vê, mas é ele que faz tudo funcionar.

- **\`code-editor/\`** → A **interface visual** (o que você vê na tela).
  É o editor de código, os painéis, os botões, a Jasmim, o terminal, o preview.
  Pense nele como o **salão do restaurante** — o que o cliente vê e usa.

---

### 📁 \`src/\` (dentro de cada artifact)
Significa **"source"** = código-fonte. É onde fica o código que você escreve/edita.
Nunca apague essa pasta — é o coração do projeto.

---

### 📁 \`src/components/\`
São as **peças visuais** da tela. Cada arquivo aqui é um "pedaço" da interface:
- \`EditorLayout.tsx\` → A tela principal do editor (organiza tudo)
- \`AIChat.tsx\` → O painel da Jasmim (assistente IA)
- \`RealTerminal.tsx\` → O terminal (onde você roda comandos)
- \`Preview.tsx\` → O painel de visualização do site/app
- \`FileTree.tsx\` → A árvore de arquivos (painel esquerdo)
- \`GitHubPanel.tsx\` → O painel de integração com o GitHub

---

### 📁 \`src/routes/\` (só no api-server)
São os **endereços** que o servidor responde. Como as "portas" de entrada do servidor.
Exemplos:
- \`/api/exec\` → Roda um comando no terminal
- \`/api/db/query\` → Faz uma consulta no banco de dados
- \`/api/ai/chat\` → Conversa com a IA (Jasmim)
- \`/api/ws/terminal\` → Abre o terminal ao vivo

---

### 📁 \`src/lib/\`
São **funções utilitárias** — ferramentas pequenas usadas em vários lugares do código.
Exemplo: \`virtual-fs.ts\` é o sistema de arquivos virtual (salva seus arquivos na memória do browser).

---

### 📁 \`public/\`
Arquivos **públicos** que o browser pode acessar diretamente:
- \`manifest.json\` → Configuração do PWA (ícone, nome, cor do app)
- \`icons/\` → Os ícones do app (aparecem na tela inicial do celular)
- Imagens e arquivos estáticos

---

### 📁 \`node_modules/\`
**NÃO MEXA AQUI.** São as bibliotecas externas instaladas automaticamente.
É como a "despensa" do projeto — cheia de ingredientes prontos.
Gerada automaticamente pelo \`npm install\` / \`pnpm install\`.

---

### 📁 \`dist/\`
Versão **compilada** do código (gerada automaticamente ao fazer o build).
Você não edita nada aqui — é criado pelo sistema na hora de publicar.

---

## 📄 O que significa cada tipo de arquivo

| Arquivo | O que é |
|---------|---------|
| \`package.json\` | Lista de bibliotecas usadas e comandos disponíveis (npm start, npm run build, etc.) |
| \`pnpm-workspace.yaml\` | Diz ao gerenciador de pacotes quais pastas fazem parte do projeto |
| \`tsconfig.json\` | Configuração do TypeScript (linguagem que usamos) |
| \`vite.config.ts\` | Configuração do servidor de desenvolvimento (serve o app no browser) |
| \`.env\` | Variáveis secretas (senhas, chaves de API) — nunca compartilhe esse arquivo |
| \`*.tsx\` | Código React (interface visual com TypeScript) |
| \`*.ts\` | Código TypeScript puro (lógica, sem visual) |
| \`*.yaml\` / \`*.yml\` | Arquivos de configuração (como uma lista de instruções formatada) |
| \`*.md\` | Markdown — texto formatado (como este manual!) |
| \`index.ts\` / \`index.tsx\` | **Ponto de entrada** — onde o programa começa a rodar |

---

## 🪝 O que são "Hooks" (\`use*.ts\` / \`use*.tsx\`)
São funções especiais do React que **guardam estado** ou **executam ações**.
Sempre começam com a palavra \`use\`.
Exemplos:
- \`useState\` → Guarda um valor que muda (ex: se o painel está aberto ou fechado)
- \`useEffect\` → Executa algo quando a tela carrega ou um valor muda
- \`useCallback\` → Otimiza uma função para não recriar desnecessariamente

---

## 🎛️ Painéis do SK Code Editor

| Painel | Como abrir | O que faz |
|--------|-----------|----------|
| **Arquivos** | Botão 📁 no rodapé | Mostra todos os arquivos do projeto |
| **Terminal** | Botão ⬛ no rodapé | Executa comandos (npm install, node server.js, etc.) |
| **Preview** | Botão 🌐 no rodapé | Mostra o site/app rodando ao vivo |
| **Jasmim (IA)** | Botão 🤖 no rodapé | Assistente de código com IA |
| **GitHub** | Menu ··· | Importa/exporta projetos do GitHub |
| **Banco de Dados** | Menu ··· | Conecta ao PostgreSQL/Neon e roda SQL |
| **Taski** | Menu ··· | Lista de tarefas do projeto |
| **Checkpoints** | Menu ··· | Histórico de versões salvas manualmente |

---

## 🧩 Glossário Rápido

| Termo | Significado simples |
|-------|-------------------|
| **API** | "Porta de comunicação" entre o app e o servidor |
| **WebSocket** | Conexão ao vivo (sem precisar ficar atualizando a página) |
| **PTY / Terminal** | Janela de linha de comando (como o Prompt do Windows, mas no Linux) |
| **VFS** | Sistema de arquivos virtual — os arquivos ficam na memória do browser |
| **PWA** | "Aplicativo instalável" — site que funciona como app no celular |
| **Build** | Processo de "empacotar" o código para publicar |
| **Deploy** | Publicar o app na internet |
| **Frontend** | A parte visual (o que o usuário vê) |
| **Backend** | A parte do servidor (o "motor" escondido) |
| **npm / pnpm** | Gerenciadores de pacotes — instalam bibliotecas externas |
| **Import** | Usar uma função/componente de outro arquivo |
| **Props** | Dados passados de um componente pai para um filho |
| **Estado (State)** | Valor que pode mudar e atualiza a tela automaticamente |
| **Render** | O processo de mostrar/atualizar a tela |

---

## 🔑 O que é o Replit (a plataforma)

O **Replit** é o ambiente onde o app roda durante o desenvolvimento. Ele fornece:
- Servidor Linux online (sem precisar de computador próprio)
- Editor de código no browser
- Gerenciamento de segredos (variáveis de ambiente)
- Publicação do app com um clique (Publish/Deploy)
- Checkpoints automáticos do código

---

*Manual gerado em ${new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})} — SK Code Editor*
`;t.writeFile("MANUAL.md",i),rt("MANUAL.md"),F(!1),O(!1)},[t,rt]);const sr=h?Ht[h]??t.readFile(h)??"":"",eo=$t||(h?Js(h):"plaintext"),or=_>0,rr=_<C.length-1,bs=a.useCallback(i=>{const A=t.toJSON(),q={id:Date.now().toString(),label:i||`Checkpoint ${new Date().toLocaleTimeString("pt-BR")}`,timestamp:Date.now(),files:A,fileCount:Object.keys(A).length},Y=[q,...v].slice(0,5);$(Y);const he=we=>{try{localStorage.setItem("sk-checkpoints",JSON.stringify(we))}catch{if(we.length>1)he(we.slice(0,Math.floor(we.length/2)));else try{const Tt=we.map(ia=>({...ia,files:{}}));localStorage.setItem("sk-checkpoints",JSON.stringify(Tt))}catch{}}};return he(Y),q},[t,v]),nr=a.useCallback(i=>{confirm(`Restaurar checkpoint "${i.label}"?
Isso vai substituir todos os arquivos atuais.`)&&(t.clear(),Object.entries(i.files).forEach(([A,q])=>t.writeFile(A,q)),d([]),m(null),nt({}),_t(t.getTree()),z(!1))},[t]),ir=a.useCallback(i=>{const A=v.filter(q=>q.id!==i);$(A);try{localStorage.setItem("sk-checkpoints",JSON.stringify(A))}catch{}},[v]),to=a.useCallback(i=>{if(!i.trim())return;const A={id:Date.now().toString(),text:i.trim(),done:!1,createdAt:Date.now()},q=[...Z,A];ee(q),localStorage.setItem("sk-tasks",JSON.stringify(q)),be("")},[Z]),ao=a.useCallback(i=>{const A=Z.map(q=>q.id===i?{...q,done:!q.done}:q);ee(A),localStorage.setItem("sk-tasks",JSON.stringify(A))},[Z]),so=a.useCallback(i=>{const A=Z.filter(q=>q.id!==i);ee(A),localStorage.setItem("sk-tasks",JSON.stringify(A))},[Z]),wa=a.useCallback(async i=>{const A=i||Fe;if(!Ke.trim()){ut({rows:[],rowCount:0,command:"",error:"Configure a URL de conexão primeiro."});return}if(A.trim()){gt(!0),ut(null);try{const q=await fetch("/api/db/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({connectionString:Ke.trim(),sql:A})}),Y=await q.json();q.ok?ut(Y):ut({rows:[],rowCount:0,command:"",error:Y.error||"Erro desconhecido"})}catch(q){ut({rows:[],rowCount:0,command:"",error:q.message})}finally{gt(!1)}}},[Ke,Fe]),lr=a.useCallback(i=>{const A=_s.find(Y=>Y.id===i);if(!A)return;t.clear(),Object.entries(A.files).forEach(([Y,he])=>t.writeFile(Y,he)),d([]),m(null),nt({});const q=Object.keys(A.files)[0];q&&setTimeout(()=>rt(q),100),He(!1),ht(A.name),setTimeout(()=>ht(null),3500)},[t]),cr=P||V||me;return e.jsxs("div",{className:"h-[100dvh] flex flex-col bg-[#141c0d] text-white overflow-hidden",children:[e.jsx("input",{ref:Yt,type:"file",accept:".zip,.tar,.tar.gz,.tgz",onChange:async i=>{const A=i.target.files?.[0];if(A){try{const q=await Uo(A),Y=Object.keys(q).length;if(Y===0){alert(`Nenhum arquivo encontrado no ZIP.

Possíveis causas:
• O ZIP contém só imagens ou binários
• Arquivos maiores que 512 KB foram ignorados
• ZIP vazio ou corrompido

✅ Seus arquivos atuais foram mantidos.`),i.target.value="";return}t.clear(),t.fromJSON(q),d([]),m(null),nt({}),setTimeout(()=>alert(`✅ ${Y} arquivo(s) importado(s) com sucesso!`),300)}catch(q){alert(`Erro ao importar ZIP:
${q.message}`)}i.target.value=""}},className:"hidden"}),e.jsxs("div",{className:"h-11 flex items-center gap-1 px-2 bg-[#1c2714] border-b border-gray-700/40 shrink-0",children:[e.jsx("button",{onClick:()=>O(!0),className:"p-2 rounded-lg hover:bg-white/5 text-gray-400",children:e.jsx(Rr,{size:18})}),l&&e.jsxs("button",{onClick:l,className:"flex items-center gap-1 px-2 py-1 rounded-lg bg-green-700/30 hover:bg-green-700/50 border border-green-600/30 text-green-400 text-[11px] font-bold shrink-0",title:"Voltar à lista de projetos",children:[e.jsx(ta,{size:13}),e.jsx("span",{children:"Projetos"})]}),e.jsx("button",{onClick:ms,disabled:!or,className:"p-1.5 rounded-lg disabled:opacity-25 text-gray-500 hover:bg-white/5 hover:text-gray-300",children:e.jsx(Pr,{size:17})}),e.jsx("button",{onClick:xs,disabled:!rr,className:"p-1.5 rounded-lg disabled:opacity-25 text-gray-500 hover:bg-white/5 hover:text-gray-300",children:e.jsx(Ot,{size:17})}),e.jsxs("div",{className:"flex items-center gap-1.5 flex-1 min-w-0 px-1",children:[h&&e.jsx(co,{size:13,className:"text-blue-400 shrink-0"}),e.jsx("span",{className:"text-sm font-medium text-gray-300 truncate",children:h?h.split("/").pop():s})]}),re?.running&&e.jsxs("button",{onClick:()=>{g(!0),B("preview")},className:"flex items-center gap-1.5 px-2 py-1 bg-green-600/20 border border-green-500/40 rounded-lg shrink-0 group",title:"Servidor rodando — clique para abrir Preview",children:[e.jsxs("span",{className:"relative flex h-2 w-2",children:[e.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-green-500"})]}),e.jsxs("span",{className:"text-green-400 text-[11px] font-bold",children:[":",re.port]})]}),e.jsx("button",{onClick:()=>Ge(!ye),className:"p-2 rounded-lg hover:bg-white/5 text-gray-500",children:e.jsx(ha,{size:17})}),e.jsxs("button",{onClick:()=>ya(),title:"Enviar arquivos do editor para o servidor (sincroniza com o workspace Linux)",className:`flex items-center gap-1 px-2 py-1.5 rounded-lg text-[11px] font-medium transition-all ${Ye==="syncing"?"bg-blue-700/40 text-blue-300 border border-blue-600/40":Ye==="ok"?"bg-green-700/30 text-green-400 border border-green-600/40":Ye==="error"?"bg-red-700/30 text-red-400 border border-red-600/40":"hover:bg-white/5 text-gray-600 border border-transparent"}`,children:[e.jsx(At,{size:12,className:Ye==="syncing"?"animate-spin":""}),Ye==="syncing"?"Enviando...":Ye==="ok"?"Enviado ✓":Ye==="error"?"Erro":"Sync"]}),h&&e.jsxs("button",{onClick:()=>{hs()},className:"flex items-center gap-1 px-2.5 py-1.5 bg-green-600 hover:bg-green-500 text-white rounded-lg text-[12px] font-bold transition-all",children:[e.jsx(ea,{size:13})," Rodar"]}),e.jsx("button",{onClick:()=>{F(!me)},className:"p-2 rounded-lg hover:bg-white/5 text-gray-500",children:e.jsx(Or,{size:18})})]}),u.length>0&&e.jsxs("div",{className:"h-9 flex items-center bg-[#1c2714] border-b border-gray-700/30 shrink-0",children:[e.jsx("div",{className:"flex-1 flex items-center overflow-x-auto scrollbar-none h-full",children:u.map(i=>e.jsxs("div",{className:`flex items-center gap-2 px-3 h-full text-[11px] cursor-pointer border-r border-gray-700/20 shrink-0 transition-colors select-none ${i===h?"bg-[#141c0d] text-gray-200 border-t-2 border-t-blue-500":"text-gray-500 hover:text-gray-300 hover:bg-white/5"}`,onClick:()=>rt(i),children:[e.jsx("span",{className:"max-w-[90px] truncate font-medium",children:i.split("/").pop()}),e.jsx("button",{onClick:A=>{A.stopPropagation(),gs(i)},title:"Fechar arquivo",className:"w-5 h-5 flex items-center justify-center rounded hover:bg-red-500/20 text-gray-600 hover:text-red-400 transition-all shrink-0",children:e.jsx(je,{size:11})})]},i))}),u.length>1&&e.jsx("button",{onClick:()=>{d([]),m(null)},title:"Fechar todos os arquivos",className:"px-3 h-full text-[10px] text-gray-600 hover:text-red-400 hover:bg-red-900/10 border-l border-gray-700/30 shrink-0 transition-colors whitespace-nowrap font-medium",children:"Fechar todos"})]}),e.jsxs("div",{className:"flex-1 flex flex-row overflow-hidden min-h-0",children:[e.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-h-0",children:[e.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden min-h-0",children:[e.jsx("div",{className:f?X?"h-[20%]":"h-[50%]":"flex-1",children:h?e.jsx(er,{ref:Kt,filePath:h,content:sr,onChange:Xt,language:$t,onCursorChange:(i,A)=>oa({line:i,col:A})}):e.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center p-8",children:[e.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-4 border border-gray-700/30",children:e.jsx(co,{size:28,className:"text-blue-400"})}),e.jsx("p",{className:"text-base font-medium text-gray-500 mb-1",children:"Nenhum arquivo aberto"}),e.jsx("p",{className:"text-sm text-gray-700 mb-6",children:"Abra um arquivo ou peça para a IA criar"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsxs("button",{onClick:()=>O(!0),className:"flex items-center gap-2 px-4 py-2.5 bg-[#1c2714] border border-gray-700/40 rounded-xl text-sm text-gray-300 hover:bg-white/5",children:[e.jsx(js,{size:15})," Arquivos"]}),e.jsxs("button",{onClick:()=>L(!0),className:"flex items-center gap-2 px-4 py-2.5 bg-blue-600/20 border border-blue-500/30 rounded-xl text-sm text-blue-300 hover:bg-blue-600/30",children:[e.jsx(bt,{size:15})," IA"]})]})]})}),f&&e.jsxs("div",{className:"flex-1 flex flex-col border-t border-gray-700/40 min-h-0",children:[e.jsxs("div",{className:"h-9 flex items-center gap-1 bg-[#1c2714] border-b border-gray-700/30 shrink-0 px-2",children:[["terminal","preview"].map(i=>e.jsx("button",{onClick:()=>{B(i),i==="terminal"&&pe(!1)},className:`px-3 py-1 rounded text-[11px] font-semibold transition-all ${S===i?"bg-[#141c0d] text-gray-200":"text-gray-600 hover:text-gray-400"}`,children:i==="terminal"?"⬛ Terminal":"🌐 Preview"},i)),S==="preview"&&e.jsx("button",{onClick:()=>pe(i=>!i),className:"px-2 py-0.5 rounded text-[11px] text-gray-500 hover:text-gray-300 border border-gray-700/30 hover:border-gray-600/50 transition-all",title:X?"Reduzir preview":"Ampliar preview",children:X?"⬇ Reduzir":"⬆ Ampliar"}),e.jsx("div",{className:"flex-1"}),e.jsxs("button",{onPointerDown:()=>{const i=t.listFiles(),A=i.some(we=>we==="package.json"||we.endsWith("/package.json")),q=i.some(we=>we.endsWith(".py")),Y=i.some(we=>we.endsWith(".ts")||we.endsWith(".tsx"));let he="";if(A){const we=t.readFile("package.json")||"";we.includes('"build"')?he="npm run build":we.includes('"compile"')?he="npm run compile":Y?he="npx tsc --noEmit":he="npm run build 2>&1 || echo 'Sem script de build'"}else q?he="python -m py_compile $(find . -name '*.py' | head -5 | tr '\\n' ' ') && echo '✅ Python OK'":Y?he="npx tsc --noEmit":he="echo 'Nenhum projeto detectado para compilar'";B("terminal"),setTimeout(()=>ze(he),80)},className:"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 text-[11px] font-bold hover:bg-blue-600/30 transition-all shrink-0",title:"Compila/verifica o projeto e reporta erros",children:[e.jsx("span",{className:"text-[10px]",children:"🔨"}),"Compilar"]}),e.jsxs("button",{onPointerDown:()=>{const i=t.listFiles(),A=i.some(he=>he==="package.json"||he.endsWith("/package.json")),q=i.some(he=>he.endsWith(".py"));let Y="npm start";if(A){const he=t.readFile("package.json")||"";he.includes('"dev"')?Y="npm run dev":he.includes('"start"')?Y="npm start":he.includes('"build"')?Y="npm run build":Y="node index.js"}else if(q){const he=i.find(we=>we==="app.py"||we==="main.py"||we.endsWith("/app.py"));Y=he?`python ${he}`:"python main.py"}else Y="ls -la";B("terminal"),setTimeout(()=>ze(Y),80)},className:"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-600/20 border border-green-500/30 text-green-400 text-[11px] font-bold hover:bg-green-600/30 transition-all shrink-0",title:"Detecta automaticamente o melhor comando para rodar seu projeto",children:[e.jsx(ea,{size:11}),"Rodar"]}),e.jsxs("button",{onPointerDown:()=>B("preview"),className:"flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-400 text-[11px] font-bold hover:bg-purple-600/30 transition-all shrink-0",title:"Abre o preview do projeto",children:[e.jsx("span",{className:"text-[10px]",children:"🌐"}),"Preview"]}),S==="terminal"&&e.jsx("button",{onPointerDown:()=>ze("clear"),className:"flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-700/30 border border-gray-600/30 text-gray-500 text-[11px] hover:text-red-400 hover:border-red-500/30 hover:bg-red-900/10 transition-all shrink-0",title:"Limpar terminal (Ctrl+L)",children:"🗑 Limpar"}),S==="terminal"&&e.jsx("span",{className:"flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-bold text-emerald-400 bg-emerald-600/10 border border-emerald-500/30 shrink-0",children:"🐧 Linux"}),S==="terminal"&&st&&e.jsx("button",{onPointerDown:()=>{L(!0);const i=Mt?`❌ Erro no terminal — por favor analise e me diga o que aconteceu:

\`\`\`
${st.slice(-3e3)}
\`\`\`

Explique o erro em linguagem simples e diga o que preciso fazer para corrigir.`:`📋 Saída recente do terminal:

\`\`\`
${st.slice(-3e3)}
\`\`\`

Analise e me diga se está tudo certo ou se tem algo para melhorar.`;Ie(i)},className:`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-bold transition-all shrink-0 ${Mt?"bg-red-600/30 border border-red-500/50 text-red-300 animate-pulse":"bg-purple-600/20 border border-purple-500/30 text-purple-400 hover:bg-purple-600/30"}`,title:Mt?"Erro detectado — pedir Jasmim para analisar":"Enviar terminal para Jasmim analisar",children:Mt?"❌ Pedir Jasmim":"🤖 Analisar"}),e.jsx("button",{onClick:()=>g(!1),className:"p-0.5 rounded hover:bg-white/5 text-gray-600 ml-1",children:e.jsx(je,{size:13})})]}),e.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col min-h-0 relative",children:[e.jsx("div",{style:{display:S==="terminal"?"flex":"none"},className:"absolute inset-0 flex flex-col",children:e.jsx(In,{externalCommand:Te,onCommandExecuted:()=>ze(void 0),onCommandOutput:(i,A,q)=>Me({cmd:i,output:A,ok:q}),onServerToggle:(i,A)=>{te(i?{running:i,port:A??3e3}:null),i&&(g(!0),B("preview"),pe(!0),Le(!0),setTimeout(()=>Le(!1),6e3))},onBufferUpdate:(i,A)=>{_e(i),va(A)},onRunningChange:(i,A)=>{se(i),xe(i&&A?A:"")}})}),e.jsx("div",{style:{display:S==="preview"?"flex":"none"},className:"absolute inset-0 flex flex-col",children:e.jsx(Mn,{vfs:t,activeFile:h,openFullscreen:K,onFullscreenOpened:()=>oe(!1),serverUrl:re?.running?`/api/proxy/${re.port}/`:void 0,serverPort:re?.port})})]})]})]}),e.jsxs("div",{className:"h-8 flex items-center bg-[#1c2714] border-t border-gray-700/30 px-3 gap-2 shrink-0 overflow-x-auto scrollbar-none",children:[e.jsxs("span",{className:"text-[11px] text-gray-500 shrink-0 font-mono",children:["Ln ",sa.line,", Col ",sa.col]}),e.jsx("div",{className:"w-px h-3.5 bg-gray-700/50"}),e.jsx("span",{className:"text-[11px] text-gray-600 shrink-0",children:"Sp: 2"}),e.jsx("div",{className:"flex-1"}),e.jsxs("button",{onClick:()=>{I(!0),Ze(!1)},className:"flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-200 hover:bg-white/8 px-2.5 py-1 rounded-md transition-colors font-medium",children:[eo.toUpperCase(),e.jsx(fa,{size:10,className:"text-gray-600"})]}),e.jsx("div",{className:"w-px h-3.5 bg-gray-700/50"}),e.jsx("span",{className:"text-[11px] text-gray-600 shrink-0 px-1",children:"LF"}),e.jsx("div",{className:"w-px h-3.5 bg-gray-700/50"}),e.jsx("button",{onClick:()=>{Ze(!0),I(!1)},className:"text-[11px] text-gray-400 hover:text-gray-200 hover:bg-white/8 px-2.5 py-1 rounded-md transition-colors font-medium",children:zt})]}),Be&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9980]",onClick:()=>I(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9990] pb-safe",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1c2714] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/30",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:"Linguagem do Arquivo"}),e.jsx("button",{onClick:()=>I(!1),className:"p-1 rounded-lg hover:bg-white/10 text-gray-600",children:e.jsx(je,{size:16})})]}),e.jsx("div",{className:"grid grid-cols-3 gap-1 p-3 max-h-64 overflow-y-auto pb-6",children:Si.map(i=>e.jsx("button",{onClick:()=>{Bt(i==="auto"?void 0:i),I(!1)},className:`px-2 py-2.5 rounded-xl text-[12px] font-medium text-center transition-all ${eo===i?"bg-blue-600/30 border border-blue-500/50 text-blue-300":"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200"}`,children:i},i))})]})})]}),$e&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9980]",onClick:()=>Ze(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9990] pb-safe",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1c2714] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/30",children:[e.jsx("p",{className:"text-sm font-bold text-white",children:"Codificação (Encoding)"}),e.jsx("button",{onClick:()=>Ze(!1),className:"p-1 rounded-lg hover:bg-white/10 text-gray-600",children:e.jsx(je,{size:16})})]}),e.jsx("div",{className:"divide-y divide-gray-800/40 pb-8",children:Ei.map(i=>e.jsxs("button",{onClick:()=>{Vt(i),Ze(!1)},className:`w-full flex items-center justify-between px-5 py-4 hover:bg-white/5 text-left transition-colors ${zt===i?"text-blue-400":"text-gray-300"}`,children:[e.jsx("span",{className:"text-[15px]",children:i}),zt===i&&e.jsx("span",{className:"text-xs text-blue-500 font-semibold",children:"✓ Ativo"})]},i))})]})})]}),(()=>{const i=A=>({onPointerDown:q=>{q.preventDefault(),A()}});return e.jsxs("div",{className:"flex flex-col bg-[#1c2714] border-t border-gray-700/50 shrink-0",children:[e.jsxs("div",{className:"h-11 flex items-center px-1 gap-0.5",children:[e.jsx("button",{...i(()=>Kt.current?.insertText("  ")),className:"px-3 py-2 rounded-lg active:bg-white/10 text-gray-500 active:text-gray-200 text-[13px] font-mono shrink-0 select-none",children:"⇥"}),e.jsx("div",{className:"w-px h-6 bg-gray-700/50 mx-0.5 shrink-0"}),[["↑","up"],["↓","down"],["←","left"],["→","right"]].map(([A,q])=>e.jsx("button",{...i(()=>Kt.current?.moveCursor(q)),className:"w-10 h-9 rounded-lg active:bg-white/10 text-gray-400 active:text-white text-[17px] font-bold flex items-center justify-center shrink-0 select-none",children:A},q)),e.jsx("div",{className:"flex-1"}),e.jsxs("button",{onPointerDown:()=>{g(A=>S==="terminal"?!A:!0),B("terminal")},className:`px-3 py-2 rounded-lg shrink-0 relative ${f&&S==="terminal"?"bg-green-500/20 text-green-400":"text-gray-600 hover:bg-white/5"}`,title:Q?`Rodando: ${J||"comando"}`:"Terminal",children:[e.jsx(Qt,{size:17}),Q&&e.jsx("span",{className:"absolute top-1 right-1 w-2 h-2 rounded-full bg-green-400 animate-pulse"})]}),e.jsx("button",{onPointerDown:()=>{g(A=>S==="preview"?!A:!0),B("preview")},className:`px-3 py-2 rounded-lg shrink-0 ${f&&S==="preview"?"bg-blue-500/20 text-blue-400":"text-gray-600 hover:bg-white/5"}`,title:"Preview",children:e.jsx(Ws,{size:17})}),e.jsx("button",{onPointerDown:()=>{g(!0),B("preview"),oe(!0)},className:"px-2 py-2 rounded-lg text-blue-500/60 hover:text-blue-400 shrink-0",title:"Preview tela cheia",children:e.jsx(Oo,{size:15})}),e.jsx("button",{onPointerDown:()=>Ue(A=>!A),title:"Combinar Apps — une vários apps num único projeto","aria-label":"Combinar Apps","aria-pressed":ke,className:`px-3 py-2 rounded-lg shrink-0 text-[17px] leading-none ${ke?"bg-purple-500/20 text-purple-300":"text-gray-600 hover:bg-white/5"}`,children:"🔗"}),e.jsx("div",{className:"w-px h-6 bg-gray-700/50 mx-0.5 shrink-0"}),e.jsx("button",{onPointerDown:()=>{L(!0),y(!0)},className:"w-9 h-9 flex items-center justify-center rounded-lg bg-red-600/20 border border-red-500/30 text-red-400 shrink-0",title:"Falar com a Jasmim",children:e.jsx(_a,{size:16})}),e.jsxs("button",{onPointerDown:()=>L(A=>!A),className:`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[13px] font-bold shrink-0 transition-all ${H?"bg-purple-600 text-white shadow-lg shadow-purple-900/50":"bg-gradient-to-r from-purple-600/30 to-blue-600/20 border border-purple-500/50 text-purple-300"}`,children:[e.jsx(bt,{size:15}),e.jsx("span",{children:"Jasmim"})]})]}),e.jsxs("div",{className:"h-10 flex items-center px-2 gap-1.5 border-t border-gray-700/30",children:[e.jsx(Qt,{size:13,className:"text-gray-600 shrink-0"}),e.jsx("input",{type:"text",placeholder:"Digite um comando e pressione Enter…",className:"flex-1 bg-transparent text-[12px] font-mono text-gray-300 placeholder-gray-600 outline-none",onKeyDown:A=>{if(A.key==="Enter"){const q=A.target.value.trim();if(!q)return;g(!0),B("terminal"),setTimeout(()=>ze(q),80),A.target.value=""}}}),e.jsx("span",{className:"text-[10px] text-gray-700 shrink-0",children:"↵"})]})]})})()]})," ",e.jsxs("div",{className:`flex flex-col border-l border-gray-700/50 bg-[#141c0d] shrink-0 transition-all duration-200 ${H?"w-[52%] max-w-[360px] min-w-[260px] md:w-[42%] md:max-w-[640px] md:min-w-[440px] lg:w-[40%] lg:max-w-[760px]":"w-0 border-l-0 overflow-hidden"}`,children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-2 bg-[#1c2714] border-b border-gray-700/40 shrink-0 min-w-[200px]",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center",children:e.jsx(bt,{size:13,className:"text-white"})}),e.jsx("span",{className:"text-[12px] font-bold text-gray-300",children:"Jasmim"})]}),e.jsx("button",{onClick:()=>L(!1),className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-600",children:e.jsx(je,{size:15})})]}),e.jsx("div",{className:"flex-1 overflow-hidden min-w-[200px]",children:e.jsx(ri,{vfs:t,activeFile:h,onApplyCode:Ba,onRunInTerminal:i=>{Xe(i)},scope:ja,onScopeChange:Nt,autoVoice:ue,onAutoVoiceConsumed:()=>y(!1),externalMessage:dt,onExternalMessageConsumed:()=>Ie(void 0),lastTermOutput:Re,onTermOutputConsumed:()=>Me(void 0),terminalBuffer:st,terminalHasError:Mt,dbConnectionString:Ke||void 0})})]})]})," ",de&&e.jsxs("div",{className:"fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl border border-green-500/40 bg-[#1c2714]",style:{boxShadow:"0 0 30px rgba(74,222,128,0.25)"},children:[e.jsx(vt,{size:18,className:"text-green-400 shrink-0"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[13px] font-bold text-green-300",children:"Preview pronto!"}),e.jsx("p",{className:"text-[11px] text-gray-400",children:"Painel inferior → aba Preview"})]}),e.jsx("button",{onClick:()=>{Le(!1),B("preview"),g(!0)},className:"ml-2 px-3 py-1.5 rounded-xl bg-green-600 text-white text-[12px] font-bold active:scale-95 transition-all",children:"Ver →"}),e.jsx("button",{onClick:()=>Le(!1),className:"p-1 text-gray-600 hover:text-gray-400",children:e.jsx(je,{size:14})})]}),Q&&(!f||S!=="terminal")&&e.jsxs("div",{className:"fixed bottom-24 left-1/2 -translate-x-1/2 z-[9998] flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl border border-yellow-600/40 bg-[#1e1a0d] max-w-[90vw]",style:{boxShadow:"0 0 24px rgba(202,138,4,0.2)"},children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse shrink-0"}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-[12px] font-bold text-yellow-300",children:"Rodando em segundo plano"}),e.jsx("p",{className:"text-[11px] text-gray-400 truncate max-w-[200px]",children:J||"comando em execução"})]}),e.jsx("button",{onClick:()=>{g(!0),B("terminal")},className:"ml-1 px-3 py-1.5 rounded-xl bg-yellow-700/40 border border-yellow-600/40 text-yellow-300 text-[11px] font-bold active:scale-95 transition-all shrink-0",children:"Ver →"})]}),cr&&e.jsx("div",{className:"fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",onClick:()=>{O(!1),L(!1),M(!1),F(!1)}}),e.jsxs("div",{className:`fixed top-0 left-0 bottom-0 z-50 w-[80vw] max-w-xs bg-[#141c0d] border-r-2 border-gray-600/60 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${P?"translate-x-0":"-translate-x-full"}`,children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-700/40 bg-[#1c2714] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(js,{size:15,className:"text-gray-400"}),e.jsx("span",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest",children:"Arquivos"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>p(""),className:"p-1.5 rounded-lg hover:bg-white/5",title:"Novo arquivo",children:e.jsx(Ft,{size:15,className:"text-gray-500"})}),e.jsx("button",{onClick:()=>W(""),className:"p-1.5 rounded-lg hover:bg-white/5",title:"Nova pasta",children:e.jsx(ta,{size:15,className:"text-gray-500"})}),e.jsx("button",{onClick:()=>{x(!0)},className:"p-1.5 rounded-lg hover:bg-white/5",title:"Bibliotecas",children:e.jsx(Gt,{size:15,className:"text-gray-500"})}),e.jsx("button",{onClick:()=>O(!1),className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-600",children:e.jsx(je,{size:15})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto",children:e.jsx(Cn,{tree:tt,activeFile:h,onFileSelect:rt,onCreateFile:p,onCreateFolder:W,onDeleteNode:le,onRenameNode:Ne,onDuplicateNode:Ce,getFileContent:qe,getAllFilesUnder:Ae,expandedDirs:Et,toggleDir:$a,projectName:s,onExportZip:async()=>{await Ta(t.toJSON(),s.replace(/\s+/g,"-").toLowerCase())},onAnalyzeWithAI:ct})}),e.jsxs("div",{className:"shrink-0 border-t-2 border-green-900/50 bg-[#141c0d] flex flex-col",style:{maxHeight:"52vh"},children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-[#1a2413] border-b border-gray-700/30 shrink-0",children:[e.jsx("span",{className:"text-[11px] font-bold text-green-500 uppercase tracking-widest",children:"⚡ Menu Completo"}),e.jsx("span",{className:"text-[9px] text-gray-600",children:"role para ver mais ↕"})]}),e.jsxs("div",{className:"overflow-y-auto divide-y divide-gray-800/40 pb-2",children:[[{icon:e.jsx(Ft,{size:16,className:"text-green-300"}),label:"🆕 Criar Novo App",sub:"Wizard com modelos prontos",action:()=>{He(!0),O(!1)}},{icon:e.jsx(qt,{size:16,className:"text-yellow-400"}),label:"📥 Importar ZIP",sub:"Abrir arquivo .zip do dispositivo",action:()=>{Yt.current?.click()}},{icon:e.jsx(qt,{size:16,className:"text-orange-400"}),label:"📥 Importar TAR.GZ",sub:"Abrir arquivo .tar.gz",action:()=>{Yt.current?.click()}},{icon:e.jsx(jt,{size:16,className:"text-green-400"}),label:"📤 Exportar ZIP",sub:"Baixar projeto como .zip",action:async()=>{await Ta(t.toJSON(),s.replace(/\s+/g,"-").toLowerCase())}},{icon:e.jsx(bt,{size:16,className:"text-purple-400"}),label:"🤖 Assistente IA — Jasmim",sub:"Converse, peça código, debug...",action:()=>{L(!0),O(!1)}},{icon:e.jsx(It,{size:16,className:"text-green-400"}),label:"🔗 GitHub — Clonar / Enviar",sub:"Importar ou exportar para GitHub",action:()=>{w(void 0),M(!0),O(!1)}},{icon:e.jsx(vt,{size:16,className:"text-blue-400"}),label:"🌐 Publicar no GitHub Pages",sub:"Publica este editor online — grátis para sempre",action:()=>{w("pages-deploy"),M(!0),O(!1)}},{icon:e.jsx(It,{size:16,className:"text-purple-400"}),label:"🔗 Importar via Link Público",sub:"Clonar qualquer repositório público sem token",action:async()=>{const i=window.prompt("Cole o link do repositório GitHub (ex: https://github.com/usuario/repo):");if(!i?.trim())return;const A=i.trim().replace(/\.git$/,"").match(/github\.com\/([^/]+)\/([^/?\s]+)/);if(!A){alert("Link inválido. Use: https://github.com/usuario/repositorio");return}const[,q,Y]=A;try{const{cloneRepo:he}=await wn(async()=>{const{cloneRepo:Tt}=await Promise.resolve().then(()=>xn);return{cloneRepo:Tt}},void 0,import.meta.url),we=await he({token:"",username:""},q,Y);Na(we),O(!1),alert(`✅ Importado com sucesso! ${Object.keys(we).length} arquivos.`)}catch(he){alert("Erro ao importar: "+(he.message||String(he)))}}},{icon:e.jsx(Oa,{size:16,className:"text-[#007acc]"}),label:"💻 Abrir no VSCode Web",sub:"Envia o projeto e abre no VS Code real",action:()=>{yt(!0),O(!1)}},{icon:e.jsx(Gt,{size:16,className:"text-orange-400"}),label:"📦 Instalar Biblioteca",sub:"npm install, pip install...",action:()=>{x(!0)}},{icon:e.jsx("span",{className:"text-[14px]",children:"🗄️"}),label:"🗄️ Banco de Dados (Neon/Postgres)",sub:"Conectar e rodar SQL",action:()=>{Ee(!0),O(!1)}},{icon:e.jsx(Ua,{size:16,className:"text-pink-400"}),label:"📸 Salvar Checkpoint",sub:"Criar ponto de restauração",action:()=>{bs(),O(!1),alert("✅ Checkpoint salvo!")}},{icon:e.jsx(ys,{size:16,className:"text-purple-300"}),label:"🕐 Histórico de Checkpoints",sub:"Ver e restaurar versões salvas",action:()=>{z(!0),O(!1)}},{icon:e.jsx(Fa,{size:16,className:"text-cyan-400"}),label:"📋 Lista de Tarefas — Taski",sub:"Organizar to-dos do projeto",action:()=>{U(!0),O(!1)}},{icon:e.jsx("span",{className:"text-[14px]",children:"🧠"}),label:"🧠 Memória da Jasmim",sub:"O que ela sabe sobre você e o projeto",action:()=>{ar()}},{icon:e.jsx(Xa,{size:16,className:"text-yellow-300"}),label:"📐 Gerar Plano do Projeto",sub:"Gera PLANO.md com estrutura e stack",action:()=>{wt(),O(!1)}},{icon:e.jsx("span",{className:"text-[14px]",children:"📱"}),label:"📱 Gerar APK Android",sub:"Converte seu projeto em app instalável",action:()=>{et(!0),O(!1)}},{icon:e.jsx("span",{className:"text-[14px]",children:"📖"}),label:"📖 Manual do SK Code Editor",sub:"Guia completo em português",action:()=>{Qe(!0),O(!1)}},{icon:e.jsx("span",{className:"text-[14px]",children:"🔗"}),label:"🔗 Combinar Apps",sub:"Une vários apps num único projeto",action:()=>{Ue(!0),O(!1)}},{icon:e.jsx("span",{className:"text-[14px]",children:"🩺"}),label:"🩺 Status do Sistema (ao vivo)",sub:"Ver se tudo tá funcionando — clique pra atualizar",action:()=>{ot(!0),O(!1)}},{icon:e.jsx(Ls,{size:16,className:"text-blue-300"}),label:"📄 Gerar SISTEMA.md",sub:"Cria documentação técnica do sistema",action:()=>{const i=ko(s,t.listFiles().length);t.writeFile("SISTEMA.md",i),rt("SISTEMA.md"),O(!1)}},{icon:e.jsx(ma,{size:16,className:"text-blue-400"}),label:"💾 Salvar Projeto",sub:"Salvar estado atual",action:()=>{r?.(s),O(!1)}},{icon:e.jsx(vt,{size:16,className:"text-green-300"}),label:"🌐 Abrir Preview",sub:"Visualizar site/app rodando",action:()=>{g(!0),B("preview"),O(!1)}},{icon:e.jsx(Qt,{size:16,className:"text-green-500"}),label:"⬛ Abrir Terminal",sub:"Rodar comandos bash",action:()=>{g(!0),B("terminal"),O(!1)}},...c?[{icon:e.jsx(Za,{size:16,className:"text-amber-400"}),label:"⚖️ Assistente Jurídico",sub:"Consulta jurídica com IA",action:()=>{O(!1),c()}}]:[],...n?[{icon:e.jsx(es,{size:16,className:"text-green-400"}),label:"💬 Campo Livre",sub:"Chat sem restrições",action:()=>{O(!1),n()}}]:[]].map(({icon:i,label:A,sub:q,action:Y})=>e.jsxs("button",{onClick:Y,className:"w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 active:bg-white/10 text-left transition-colors",children:[e.jsx("div",{className:"w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0",children:i}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-semibold text-gray-200 leading-tight",children:A}),e.jsx("p",{className:"text-[10px] text-gray-600 leading-tight mt-0.5",children:q})]})]},A)),e.jsxs("button",{onClick:()=>{confirm("Limpar todos os arquivos e voltar ao início?")&&(t.clear(),d([]),m(null),o()),O(!1)},className:"w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-500/10 active:bg-red-500/20 text-left transition-colors",children:[e.jsx("div",{className:"w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0",children:e.jsx(mt,{size:16,className:"text-red-400"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[12px] font-semibold text-red-400 leading-tight",children:"🗑️ Limpar Projeto"}),e.jsx("p",{className:"text-[10px] text-gray-600 leading-tight mt-0.5",children:"Apaga todos os arquivos e volta ao início"})]})]})]})]})]}),e.jsxs("div",{className:`fixed top-0 right-0 bottom-0 z-50 w-[88vw] max-w-sm bg-[#141c0d] border-l border-gray-700/50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${V?"translate-x-0":"translate-x-full"}`,children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-2 bg-[#1c2714] border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(It,{size:14,className:"text-green-400"}),e.jsx("span",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest",children:"GitHub"})]}),e.jsx("button",{onClick:()=>{M(!1),w(void 0)},className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-600",children:e.jsx(je,{size:15})})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(ci,{files:t.toJSON(),onImport:Na,projectName:s,defaultView:R})})]}),me&&e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-50 pb-safe",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"bg-[#222e18] border-t border-gray-700/50 rounded-t-3xl shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"pb-8 divide-y divide-gray-800/40",children:[[{icon:e.jsx(Ft,{size:18,className:"text-green-300"}),label:"🆕 Criar Novo App",action:()=>{He(!0),F(!1)}},{icon:e.jsx("span",{className:"text-[16px]",children:"🗄️"}),label:"Banco de Dados (Neon / PostgreSQL)",action:()=>{Ee(!0),F(!1)}},{icon:e.jsx(js,{size:18,className:"text-blue-400"}),label:"Arquivos",action:()=>{O(!0),F(!1)}},{icon:e.jsx(bt,{size:18,className:"text-purple-400"}),label:"Assistente IA",action:()=>{L(!0),F(!1)}},{icon:e.jsx(It,{size:18,className:"text-green-400"}),label:"GitHub / Clone",action:()=>{w(void 0),M(!0),F(!1)}},{icon:e.jsx(vt,{size:18,className:"text-blue-400"}),label:"🌐 Publicar no GitHub Pages — Grátis",action:()=>{w("pages-deploy"),M(!0),F(!1)}},{icon:e.jsx(Gt,{size:18,className:"text-orange-400"}),label:"Instalar Biblioteca",action:()=>{x(!0),F(!1)}},{icon:e.jsx(qt,{size:18,className:"text-yellow-400"}),label:"Importar (.zip / .tar.gz)",action:()=>{Yt.current?.click(),F(!1)}},{icon:e.jsx(jt,{size:18,className:"text-green-400"}),label:"Exportar ZIP",action:async()=>{await Ta(t.toJSON(),s.replace(/\s+/g,"-")),F(!1)}},{icon:e.jsx(Ks,{size:18,className:"text-blue-400"}),label:"☁️ Backup no Google Drive",action:()=>{j(!0),F(!1)}},{icon:e.jsx(Ua,{size:18,className:"text-pink-400"}),label:"📸 Salvar Checkpoint",action:()=>{bs(),F(!1),alert("✅ Checkpoint salvo! Acesse o histórico para restaurar.")}},{icon:e.jsx(ys,{size:18,className:"text-purple-400"}),label:"🕐 Histórico de Checkpoints",action:()=>{z(!0),F(!1)}},{icon:e.jsx(Fa,{size:18,className:"text-cyan-400"}),label:"📋 Lista de Tarefas (Taski)",action:()=>{U(!0),F(!1)}},{icon:e.jsx(Xa,{size:18,className:"text-yellow-400"}),label:"📐 Plano do Projeto",action:wt},{icon:e.jsx("span",{className:"text-[16px]",children:"📱"}),label:"📱 Gerar APK Android",action:()=>{et(!0),F(!1)}},{icon:e.jsx("span",{className:"text-[16px]",children:"📖"}),label:"📖 Manual do SK Code Editor",action:()=>{Qe(!0),F(!1)}},{icon:e.jsx("span",{className:"text-[16px]",children:"🔗"}),label:"🔗 Combinar Apps",action:()=>{Ue(!0),F(!1)}},{icon:e.jsx(Ls,{size:18,className:"text-blue-300"}),label:"Info do Sistema",action:()=>{const i=ko(s,t.listFiles().length);t.writeFile("SISTEMA.md",i),rt("SISTEMA.md"),F(!1)}},{icon:e.jsx(ma,{size:18,className:"text-blue-400"}),label:"Salvar Projeto",action:()=>{r?.(s),F(!1)}},...c?[{icon:e.jsx(Za,{size:18,className:"text-amber-400"}),label:"Assistente Jurídico",action:()=>{F(!1),c()}}]:[],...n?[{icon:e.jsx(es,{size:18,className:"text-green-400"}),label:"Campo Livre",action:()=>{F(!1),n()}}]:[]].map(({icon:i,label:A,action:q})=>e.jsxs("button",{onClick:q,className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-white/5 text-left",children:[i,e.jsx("span",{className:"text-[15px] text-gray-200",children:A})]},A)),e.jsx("div",{className:"mx-6 h-px bg-gray-700/50 my-1"}),e.jsxs("button",{onClick:()=>{confirm("Limpar projeto e voltar ao início?")&&(t.clear(),d([]),m(null),o()),F(!1)},className:"w-full flex items-center gap-4 px-6 py-3.5 hover:bg-red-500/5 text-left",children:[e.jsx(mt,{size:18,className:"text-red-400"}),e.jsx("span",{className:"text-[15px] text-red-400",children:"Voltar ao Início"})]})]})]})}),Dt&&e.jsxs("div",{className:"fixed bottom-28 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl border border-green-500/40 bg-[#1c2714]",children:[e.jsx("span",{className:"text-green-400 text-xl",children:"✅"}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-[13px] font-bold text-green-300",children:["App criado: ",Dt]}),e.jsx("p",{className:"text-[11px] text-gray-400",children:"Peça para a Jasmim instalar e rodar!"})]})]}),fe&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70 backdrop-blur-sm",onClick:()=>He(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1a2413] border-t border-gray-700/50 rounded-t-3xl shadow-2xl flex flex-col max-h-[90vh]",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Ft,{size:18,className:"text-green-400"}),e.jsx("p",{className:"text-[16px] font-bold text-white",children:"Criar Novo App"})]}),e.jsx("button",{onClick:()=>He(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:17})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 pb-8 space-y-3",children:[e.jsx("p",{className:"text-[12px] text-gray-500 px-1 mb-2",children:"Escolha o tipo de app. Os arquivos serão criados automaticamente — depois peça para a Jasmim instalar e rodar."}),[{id:"html-css-js",icon:"🌐",title:"HTML + CSS + JS",desc:"O mais simples. Preview funciona imediatamente, sem instalar nada. Ideal para páginas, animações e prototipagem rápida.",badge:"⚡ Preview imediato",badgeColor:"text-green-400 bg-green-900/30 border-green-700/40"},{id:"landing-page",icon:"📱",title:"Landing Page",desc:"Página de apresentação profissional com design moderno. Ideal para mostrar serviços, produtos ou portfólio.",badge:"⚡ Preview imediato",badgeColor:"text-green-400 bg-green-900/30 border-green-700/40"},{id:"pwa-app",icon:"📲",title:"PWA Instalável",desc:"Aplicativo que pode ser instalado no celular e funciona offline. HTML + manifest + service worker.",badge:"⚡ Preview imediato",badgeColor:"text-green-400 bg-green-900/30 border-green-700/40"},{id:"react-app",icon:"⚛️",title:"React App",desc:"Interface moderna e interativa com componentes React. Precisa rodar: npm install e npm start no terminal.",badge:"npm install",badgeColor:"text-blue-400 bg-blue-900/30 border-blue-700/40"},{id:"node-api",icon:"🟢",title:"Node.js / Express",desc:"Backend com API REST. Ideal para criar rotas, salvar dados, integrar com banco. Precisa: npm install e npm start.",badge:"npm install",badgeColor:"text-blue-400 bg-blue-900/30 border-blue-700/40"},{id:"typescript-node",icon:"🔷",title:"TypeScript + Node.js",desc:"JavaScript com tipos — mais seguro e organizado. Ideal para projetos maiores.",badge:"npm install",badgeColor:"text-blue-400 bg-blue-900/30 border-blue-700/40"},{id:"_jasmim",icon:"🤖",title:"Deixar a Jasmim criar",desc:"Descreva o que você quer e a Jasmim cria toda a estrutura do zero para você — arquivos, dependências e instruções.",badge:"IA cria tudo",badgeColor:"text-purple-400 bg-purple-900/30 border-purple-700/40"}].map(({id:i,icon:A,title:q,desc:Y,badge:he,badgeColor:we})=>e.jsxs("button",{onClick:()=>{i==="_jasmim"?(He(!1),L(!0),Ie(`🚀 Vou criar um aplicativo do zero. Me faça essas perguntas UMA A UMA e aguarde minha resposta antes de ir para a próxima:

1) Qual é o objetivo do app?
2) É um site (HTML/React) ou um backend (Node.js)?
3) Vai ter banco de dados?
4) Tem alguma API ou serviço externo?

Com base nas respostas, crie TODA a estrutura: arquivos, pastas, package.json e instruções para rodar. Comece fazendo a PRIMEIRA pergunta agora.`)):lr(i)},className:"w-full flex items-start gap-4 p-4 rounded-2xl bg-[#141c0d] border border-gray-700/40 hover:border-gray-600/60 hover:bg-[#1c2714] text-left transition-all active:scale-[0.98]",children:[e.jsx("span",{className:"text-3xl shrink-0 mt-0.5",children:A}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("span",{className:"text-[15px] font-bold text-white",children:q}),e.jsx("span",{className:`text-[10px] font-bold px-2 py-0.5 rounded-full border ${we}`,children:he})]}),e.jsx("p",{className:"text-[12px] text-gray-400 mt-1 leading-relaxed",children:Y})]}),e.jsx(Ot,{size:16,className:"text-gray-600 shrink-0 mt-1"})]},i))]})]})})]}),ve&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70 backdrop-blur-sm",onClick:()=>Ee(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1a2413] border-t border-gray-700/50 rounded-t-3xl shadow-2xl flex flex-col max-h-[90vh]",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[18px]",children:"🗄️"}),e.jsx("p",{className:"text-[16px] font-bold text-white",children:"Banco de Dados"}),Ke&&e.jsx("span",{className:"text-[10px] text-green-400 bg-green-900/30 border border-green-700/40 px-2 py-0.5 rounded-full font-bold",children:"✓ Configurado"})]}),e.jsx("button",{onClick:()=>Ee(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:17})})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-10",children:[e.jsxs("div",{className:"bg-blue-950/20 border border-blue-700/30 rounded-2xl p-4",children:[e.jsx("p",{className:"text-[12px] font-bold text-blue-300 mb-2",children:"📖 Como criar seu banco gratuito (Neon)"}),e.jsx("ol",{className:"space-y-1.5",children:[{n:"1",t:"Acesse",link:"neon.tech",href:"https://neon.tech",rest:'e clique em "Sign Up" (grátis, sem cartão)'},{n:"2",t:"Crie um projeto",rest:'— dê um nome (ex: "juridico") e escolha a região'},{n:"3",t:"Vá em",link:"Connection Details",href:null,rest:"no painel do projeto"},{n:"4",t:"Copie a",link:"Connection string",href:null,rest:"— começa com postgresql://"},{n:"5",t:"Cole abaixo",rest:"e clique em Testar"}].map(({n:i,t:A,link:q,href:Y,rest:he})=>e.jsxs("li",{className:"flex gap-2 text-[11px] text-gray-300 items-start",children:[e.jsx("span",{className:"w-5 h-5 bg-blue-700/40 text-blue-300 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5",children:i}),e.jsxs("span",{children:[e.jsx("span",{className:"text-gray-200",children:A})," ",q&&Y&&e.jsx("a",{href:Y,target:"_blank",rel:"noreferrer",className:"text-blue-400 underline",children:q}),q&&!Y&&e.jsx("span",{className:"text-yellow-300 font-mono",children:q})," ",e.jsx("span",{className:"text-gray-400",children:he})]})]},i))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1.5 block",children:"URL de Conexão (Neon / PostgreSQL)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"password",value:Ke,onChange:i=>{xt(i.target.value),localStorage.setItem("sk-db-url",i.target.value)},placeholder:"postgresql://user:senha@host/banco?sslmode=require",className:"flex-1 px-3 py-2.5 bg-[#141c0d] border border-gray-700/50 rounded-xl text-[12px] font-mono text-gray-200 placeholder-gray-700 outline-none focus:border-green-500/60"}),e.jsx("button",{onClick:()=>wa("SELECT NOW() AS agora, version() AS versao;"),disabled:Je||!Ke,className:"px-3 py-2.5 bg-green-600/20 border border-green-500/40 rounded-xl text-[12px] text-green-300 font-bold hover:bg-green-600/30 disabled:opacity-40 shrink-0",children:Je?"...":"Testar"})]}),!Ke&&e.jsx("p",{className:"text-[10px] text-yellow-600 mt-1.5",children:"⚠️ Siga o guia acima para obter sua URL gratuita no Neon"}),Ke&&e.jsx("p",{className:"text-[10px] text-green-600 mt-1.5",children:"✅ URL configurada — clique em Testar para verificar a conexão"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1.5 block",children:"Comandos Rápidos"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{label:"📋 Ver tabelas",sql:"SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;"},{label:"🔍 Ver colunas",sql:"SELECT table_name, column_name, data_type FROM information_schema.columns WHERE table_schema = 'public' ORDER BY table_name, ordinal_position;"},{label:"📊 Contar linhas",sql:"SELECT relname AS tabela, n_live_tup AS linhas FROM pg_stat_user_tables ORDER BY n_live_tup DESC;"},{label:"✅ Testar conexão",sql:"SELECT NOW() AS agora, version() AS versao;"}].map(({label:i,sql:A})=>e.jsx("button",{onClick:()=>{We(A),setTimeout(()=>wa(A),50)},className:"px-3 py-2 bg-[#141c0d] border border-gray-700/40 rounded-xl text-[11px] text-gray-300 hover:border-blue-500/40 hover:text-blue-300 text-left transition-all",children:i},i))})]}),e.jsxs("div",{className:"bg-amber-950/20 border border-amber-700/30 rounded-2xl p-4",children:[e.jsx("p",{className:"text-[12px] font-bold text-amber-300 mb-1",children:"⚖️ Tabelas Jurídicas — Criar tudo de uma vez"}),e.jsx("p",{className:"text-[10px] text-gray-500 mb-3",children:"Cria as tabelas: clientes, processos, audiências, documentos, movimentações e usuários."}),e.jsx("div",{className:"grid grid-cols-2 gap-2 mb-3",children:[{label:"👤 Clientes + Usuários",sql:`CREATE TABLE IF NOT EXISTS clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(200) NOT NULL,
  cpf VARCHAR(14) UNIQUE,
  rg VARCHAR(20),
  email VARCHAR(150) UNIQUE,
  telefone VARCHAR(20),
  celular VARCHAR(20),
  endereco TEXT,
  cidade VARCHAR(100),
  estado CHAR(2),
  cep VARCHAR(9),
  data_nascimento DATE,
  observacoes TEXT,
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  perfil VARCHAR(20) DEFAULT 'advogado',
  oab VARCHAR(20),
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW()
);`},{label:"📁 Processos",sql:`CREATE TABLE IF NOT EXISTS processos (
  id SERIAL PRIMARY KEY,
  numero_processo VARCHAR(50) UNIQUE NOT NULL,
  cliente_id INTEGER REFERENCES clientes(id),
  usuario_id INTEGER REFERENCES usuarios(id),
  tipo VARCHAR(50),
  area_direito VARCHAR(50),
  vara VARCHAR(100),
  comarca VARCHAR(100),
  tribunal VARCHAR(100),
  fase VARCHAR(50) DEFAULT 'inicial',
  status VARCHAR(30) DEFAULT 'ativo',
  polo_ativo TEXT,
  polo_passivo TEXT,
  objeto TEXT,
  valor_causa DECIMAL(15,2),
  data_distribuicao DATE,
  data_prazo DATE,
  observacoes TEXT,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);`},{label:"📅 Audiências + Prazos",sql:`CREATE TABLE IF NOT EXISTS audiencias (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  tipo VARCHAR(80),
  data_hora TIMESTAMP NOT NULL,
  local VARCHAR(200),
  sala VARCHAR(50),
  juiz VARCHAR(150),
  pauta TEXT,
  resultado TEXT,
  status VARCHAR(20) DEFAULT 'agendada',
  lembrete_enviado BOOLEAN DEFAULT false,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS prazos (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  descricao TEXT NOT NULL,
  data_limite DATE NOT NULL,
  tipo VARCHAR(50),
  concluido BOOLEAN DEFAULT false,
  criado_em TIMESTAMP DEFAULT NOW()
);`},{label:"📄 Docs + Movimentações",sql:`CREATE TABLE IF NOT EXISTS documentos (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  nome VARCHAR(200) NOT NULL,
  tipo VARCHAR(50),
  url TEXT,
  tamanho_bytes INTEGER,
  hash_sha256 VARCHAR(64),
  enviado_por INTEGER REFERENCES usuarios(id),
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS movimentacoes (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  descricao TEXT NOT NULL,
  tipo VARCHAR(50),
  data_movimentacao TIMESTAMP DEFAULT NOW(),
  usuario_id INTEGER REFERENCES usuarios(id),
  origem VARCHAR(30) DEFAULT 'manual'
);`}].map(({label:i,sql:A})=>e.jsx("button",{onClick:()=>{We(A),setTimeout(()=>wa(A),50)},disabled:!Ke,className:"px-3 py-2.5 bg-[#141c0d] border border-amber-700/30 rounded-xl text-[11px] text-amber-200 hover:border-amber-500/60 hover:bg-amber-900/10 text-left transition-all disabled:opacity-30",children:i},i))}),e.jsx("button",{onClick:()=>{const i=`-- ═══════════════════════════════════════
-- SISTEMA JURÍDICO COMPLETO — SK Code Editor
-- Criado automaticamente — execute uma vez
-- ═══════════════════════════════════════

CREATE TABLE IF NOT EXISTS usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  senha_hash VARCHAR(255) NOT NULL,
  perfil VARCHAR(20) DEFAULT 'advogado',
  oab VARCHAR(20),
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(200) NOT NULL,
  cpf VARCHAR(14) UNIQUE,
  rg VARCHAR(20),
  email VARCHAR(150),
  telefone VARCHAR(20),
  celular VARCHAR(20),
  endereco TEXT,
  cidade VARCHAR(100),
  estado CHAR(2),
  cep VARCHAR(9),
  data_nascimento DATE,
  observacoes TEXT,
  ativo BOOLEAN DEFAULT true,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS processos (
  id SERIAL PRIMARY KEY,
  numero_processo VARCHAR(50) UNIQUE NOT NULL,
  cliente_id INTEGER REFERENCES clientes(id),
  usuario_id INTEGER REFERENCES usuarios(id),
  tipo VARCHAR(50),
  area_direito VARCHAR(50),
  vara VARCHAR(100),
  comarca VARCHAR(100),
  tribunal VARCHAR(100),
  fase VARCHAR(50) DEFAULT 'inicial',
  status VARCHAR(30) DEFAULT 'ativo',
  polo_ativo TEXT,
  polo_passivo TEXT,
  objeto TEXT,
  valor_causa DECIMAL(15,2),
  data_distribuicao DATE,
  data_prazo DATE,
  observacoes TEXT,
  criado_em TIMESTAMP DEFAULT NOW(),
  atualizado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS audiencias (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  tipo VARCHAR(80),
  data_hora TIMESTAMP NOT NULL,
  local VARCHAR(200),
  sala VARCHAR(50),
  juiz VARCHAR(150),
  pauta TEXT,
  resultado TEXT,
  status VARCHAR(20) DEFAULT 'agendada',
  lembrete_enviado BOOLEAN DEFAULT false,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS prazos (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  descricao TEXT NOT NULL,
  data_limite DATE NOT NULL,
  tipo VARCHAR(50),
  concluido BOOLEAN DEFAULT false,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS documentos (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  nome VARCHAR(200) NOT NULL,
  tipo VARCHAR(50),
  url TEXT,
  tamanho_bytes INTEGER,
  enviado_por INTEGER REFERENCES usuarios(id),
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS movimentacoes (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  descricao TEXT NOT NULL,
  tipo VARCHAR(50),
  data_movimentacao TIMESTAMP DEFAULT NOW(),
  usuario_id INTEGER REFERENCES usuarios(id),
  origem VARCHAR(30) DEFAULT 'manual'
);

CREATE TABLE IF NOT EXISTS financeiro (
  id SERIAL PRIMARY KEY,
  processo_id INTEGER REFERENCES processos(id),
  cliente_id INTEGER REFERENCES clientes(id),
  descricao TEXT NOT NULL,
  tipo VARCHAR(20) NOT NULL,
  valor DECIMAL(15,2) NOT NULL,
  data_vencimento DATE,
  data_pagamento DATE,
  status VARCHAR(20) DEFAULT 'pendente',
  criado_em TIMESTAMP DEFAULT NOW()
);

-- Dados de exemplo
INSERT INTO usuarios (nome, email, senha_hash, perfil, oab) VALUES
  ('Dr. Saulo Kenji', 'saulo@escritorio.com.br', 'trocar_senha_depois', 'admin', 'OAB/XX 12345')
ON CONFLICT (email) DO NOTHING;

SELECT 'Tabelas criadas com sucesso!' AS resultado, NOW() AS criado_em;`;We(i),setTimeout(()=>wa(i),50)},disabled:!Ke||Je,className:"w-full py-3 bg-amber-600/20 border border-amber-500/40 rounded-xl text-[13px] text-amber-200 font-bold hover:bg-amber-600/30 disabled:opacity-30 transition-all",children:Je?"Criando tabelas...":"⚖️ Criar TODAS as Tabelas Jurídicas de uma vez"}),!Ke&&e.jsx("p",{className:"text-[10px] text-red-500 mt-1.5 text-center",children:"Configure a URL de conexão primeiro ↑"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-1.5 block",children:"SQL Personalizado"}),e.jsx("textarea",{value:Fe,onChange:i=>We(i.target.value),rows:4,placeholder:"SELECT * FROM processos LIMIT 10;",className:"w-full px-3 py-2.5 bg-[#141c0d] border border-gray-700/50 rounded-xl text-[12px] font-mono text-gray-200 placeholder-gray-700 outline-none focus:border-blue-500/60 resize-none"}),e.jsxs("div",{className:"flex gap-2 mt-2",children:[e.jsx("button",{onClick:()=>wa(),disabled:Je||!Ke||!Fe.trim(),className:"flex-1 py-2.5 bg-blue-600/30 border border-blue-500/40 rounded-xl text-[13px] text-blue-300 font-bold hover:bg-blue-600/40 disabled:opacity-40",children:Je?"Executando...":"▶ Executar SQL"}),e.jsx("button",{onClick:()=>{Ee(!1),L(!0),Ie(`Me ajude com o banco de dados PostgreSQL/Neon.

A URL de conexao ja esta configurada.

Quero criar um sistema jurídico. Crie para mim:
1. Tabelas para processos judiciais (civel, trabalhista, criminal, previdenciario, tributario)
2. Relacionamentos entre clientes, processos, audiencias, documentos e prazos
3. Codigo Node.js para conectar ao banco com @neondatabase/serverless
4. Exemplos de INSERT com dados ficticios para testar

Mostre o SQL completo para eu executar no painel do banco.`)},className:"px-3 py-2.5 bg-purple-600/20 border border-purple-500/40 rounded-xl text-[12px] text-purple-300 font-bold hover:bg-purple-600/30 shrink-0",children:"🤖 Jasmim"})]})]}),Pe&&e.jsx("div",{className:`rounded-xl border p-3 ${Pe.error?"border-red-700/50 bg-red-950/20":"border-green-700/40 bg-green-950/10"}`,children:Pe.error?e.jsxs("div",{children:[e.jsx("p",{className:"text-[11px] font-bold text-red-400 mb-1",children:"❌ Erro"}),e.jsx("pre",{className:"text-[11px] text-red-300 font-mono whitespace-pre-wrap break-all",children:Pe.error})]}):e.jsxs("div",{children:[e.jsxs("p",{className:"text-[11px] font-bold text-green-400 mb-2",children:["✅ ",Pe.command," — ",Pe.rowCount," linha",Pe.rowCount!==1?"s":""]}),Pe.rows.length>0&&e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs("table",{className:"text-[10px] font-mono w-full border-collapse",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-b border-gray-700/50",children:Object.keys(Pe.rows[0]).map(i=>e.jsx("th",{className:"text-left px-2 py-1 text-gray-400 font-bold",children:i},i))})}),e.jsx("tbody",{children:Pe.rows.slice(0,20).map((i,A)=>e.jsx("tr",{className:"border-b border-gray-800/30",children:Object.values(i).map((q,Y)=>e.jsx("td",{className:"px-2 py-1 text-gray-300 max-w-[120px] truncate",children:String(q??"null")},Y))},A))})]}),Pe.rows.length>20&&e.jsxs("p",{className:"text-[10px] text-gray-600 mt-1",children:["... e mais ",Pe.rows.length-20," linhas"]})]})]})})]})]})})]}),Ut&&e.jsx(Ai,{title:Ut.title,placeholder:Ut.placeholder,defaultValue:Ut.defaultValue,icon:Ut.icon,confirmLabel:Ut.confirmLabel,onConfirm:Ut.onConfirm,onCancel:()=>Wt(null)}),k&&e.jsx(ui,{onInstall:i=>{Xe(i)},onClose:()=>x(!1)}),E&&e.jsx(mi,{onClose:()=>j(!1),files:t.toJSON(),projectName:s}),e.jsx(ji,{open:Ve,onClose:()=>ot(!1),vfs:t,projectName:s}),pt&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70",onClick:()=>Qe(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"bg-[#141c0d] border-t border-[#2d4a1e] rounded-t-3xl shadow-2xl flex flex-col",style:{height:"88vh"},children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-[#3d6e2a] rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-[#2d4a1e] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:"📖"}),e.jsx("p",{className:"text-[15px] font-bold text-[#7ec87a]",children:"Manual do SK Code Editor"})]}),e.jsx("button",{onClick:()=>Qe(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:17})})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(xi,{vfs:t,projectName:s})})]})})]}),ke&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/70",onClick:()=>Ue(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"bg-[#141c0d] border-t border-[#2d4a1e] rounded-t-3xl shadow-2xl flex flex-col",style:{height:"88vh"},children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-[#3d6e2a] rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-[#2d4a1e] shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-lg",children:"🔗"}),e.jsx("p",{className:"text-[15px] font-bold text-[#7ec87a]",children:"Combinar Apps"})]}),e.jsx("button",{onClick:()=>Ue(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:17})})]}),e.jsx("div",{className:"flex-1 overflow-hidden",children:e.jsx(fi,{onSendToJasmim:i=>{Ue(!1),Ie(i),setTimeout(()=>L(!0),100)}})})]})})]}),ce&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/60",onClick:()=>z(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1a2413] border-t border-gray-700/60 rounded-t-3xl shadow-2xl flex flex-col max-h-[85vh]",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(ys,{size:16,className:"text-purple-400"}),e.jsx("p",{className:"text-[15px] font-bold text-white",children:"Histórico de Checkpoints"}),e.jsxs("span",{className:"text-[10px] text-gray-600 bg-gray-800/50 px-2 py-0.5 rounded-full",children:[v.length,"/5"]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>{bs()},className:"flex items-center gap-1.5 px-3 py-1.5 bg-pink-600/20 border border-pink-500/40 rounded-xl text-[12px] text-pink-300 font-bold hover:bg-pink-600/30",children:[e.jsx(Ua,{size:13})," Salvar agora"]}),e.jsx("button",{onClick:()=>z(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:17})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-3 space-y-2",children:v.length===0?e.jsxs("div",{className:"py-10 text-center",children:[e.jsx(Ua,{size:28,className:"text-gray-700 mx-auto mb-2"}),e.jsx("p",{className:"text-[13px] text-gray-500",children:"Nenhum checkpoint salvo ainda"}),e.jsx("p",{className:"text-[11px] text-gray-700 mt-1",children:'Clique em "Salvar agora" para criar um ponto de restauração'})]}):v.map(i=>e.jsxs("div",{className:"flex items-center gap-3 p-3 bg-[#141c0d] border border-gray-700/40 rounded-xl",children:[e.jsx(zs,{size:14,className:"text-purple-400 shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[13px] text-gray-200 font-semibold truncate",children:i.label}),e.jsxs("p",{className:"text-[10px] text-gray-600",children:[new Date(i.timestamp).toLocaleString("pt-BR")," • ",i.fileCount," arquivo",i.fileCount!==1?"s":""]})]}),e.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[e.jsxs("button",{onClick:()=>nr(i),className:"flex items-center gap-1 px-2.5 py-1.5 bg-green-600/20 border border-green-500/30 rounded-lg text-[11px] text-green-400 font-bold hover:bg-green-600/30",children:[e.jsx(Ir,{size:11})," Restaurar"]}),e.jsx("button",{onClick:()=>ir(i.id),className:"p-1.5 rounded-lg text-gray-600 hover:text-red-400 hover:bg-red-900/20",children:e.jsx(je,{size:13})})]})]},i.id))})]})})]}),N&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9990] bg-black/60",onClick:()=>U(!1)}),e.jsx("div",{className:"fixed inset-x-0 bottom-0 z-[9999] pb-safe",onClick:i=>i.stopPropagation(),children:e.jsxs("div",{className:"bg-[#1a2413] border-t border-gray-700/60 rounded-t-3xl shadow-2xl flex flex-col max-h-[85vh]",children:[e.jsx("div",{className:"flex items-center justify-center pt-3 pb-1 shrink-0",children:e.jsx("div",{className:"w-10 h-1 bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-5 py-2.5 border-b border-gray-700/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Fa,{size:16,className:"text-cyan-400"}),e.jsx("p",{className:"text-[15px] font-bold text-white",children:"Taski — Lista de Tarefas"}),e.jsxs("span",{className:"text-[10px] text-gray-600 bg-gray-800/50 px-2 py-0.5 rounded-full",children:[Z.filter(i=>i.done).length,"/",Z.length," feitas"]})]}),e.jsx("button",{onClick:()=>U(!1),className:"p-1.5 rounded-xl hover:bg-white/10 text-gray-500",children:e.jsx(je,{size:17})})]}),e.jsx("div",{className:"px-4 py-3 border-b border-gray-700/30 shrink-0",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{value:ne,onChange:i=>be(i.target.value),onKeyDown:i=>{i.key==="Enter"&&to(ne)},placeholder:"Nova tarefa... (Enter para adicionar)",className:"flex-1 px-3 py-2 bg-[#0d1409] border border-gray-700/50 rounded-xl text-[13px] text-gray-200 placeholder-gray-700 outline-none focus:border-cyan-600/60"}),e.jsx("button",{onClick:()=>to(ne),className:"px-3 py-2 bg-cyan-600/20 border border-cyan-500/40 rounded-xl text-[12px] text-cyan-300 font-bold hover:bg-cyan-600/30",children:e.jsx(Ft,{size:15})})]})}),e.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-3 space-y-1.5",children:Z.length===0?e.jsxs("div",{className:"py-10 text-center",children:[e.jsx(Fa,{size:28,className:"text-gray-700 mx-auto mb-2"}),e.jsx("p",{className:"text-[13px] text-gray-500",children:"Nenhuma tarefa ainda"}),e.jsx("p",{className:"text-[11px] text-gray-700 mt-1",children:"Adicione tarefas para organizar o seu projeto"})]}):e.jsxs(e.Fragment,{children:[Z.filter(i=>!i.done).map(i=>e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-[#141c0d] border border-gray-700/30 rounded-xl",children:[e.jsx("button",{onClick:()=>ao(i.id),className:"w-5 h-5 rounded border-2 border-gray-600 hover:border-cyan-400 shrink-0 mt-0.5 flex items-center justify-center transition-colors"}),e.jsx("span",{className:"flex-1 text-[13px] text-gray-200 leading-relaxed",children:i.text}),e.jsx("button",{onClick:()=>so(i.id),className:"p-1 rounded text-gray-700 hover:text-red-400 shrink-0",children:e.jsx(je,{size:12})})]},i.id)),Z.filter(i=>i.done).length>0&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-[10px] text-gray-700 font-bold uppercase tracking-widest px-1 pt-2",children:"Concluídas"}),Z.filter(i=>i.done).map(i=>e.jsxs("div",{className:"flex items-start gap-3 p-3 bg-[#0d1409] border border-gray-800/30 rounded-xl opacity-60",children:[e.jsx("button",{onClick:()=>ao(i.id),className:"w-5 h-5 rounded border-2 border-cyan-500 bg-cyan-600/20 shrink-0 mt-0.5 flex items-center justify-center",children:e.jsx("span",{className:"text-cyan-400 text-[10px] font-bold",children:"✓"})}),e.jsx("span",{className:"flex-1 text-[13px] text-gray-500 leading-relaxed line-through",children:i.text}),e.jsx("button",{onClick:()=>so(i.id),className:"p-1 rounded text-gray-700 hover:text-red-400 shrink-0",children:e.jsx(je,{size:12})})]},i.id))]})]})})]})})]}),e.jsx(Ci,{open:it,onClose:()=>et(!1),vfs:t,projectName:s}),e.jsx(ki,{open:lt,onClose:()=>yt(!1),vfs:t,projectName:s})]})}const Ss=[{id:"livre",label:"Livre",color:"text-green-400 border-green-600/50 bg-green-900/20",icon:e.jsx(Lr,{size:12}),prompt:""},{id:"advogado",label:"Advogado",color:"text-blue-400 border-blue-600/50 bg-blue-900/20",icon:e.jsx(Za,{size:12}),prompt:"Você é um advogado criminalista e civilista especialista em direito brasileiro. Responda com a postura de advogado de defesa ou consultor jurídico, usando argumentos técnicos sólidos, citando leis, artigos do Código Civil, Código Penal, CLT, Constituição Federal e jurisprudência dos tribunais superiores (STF, STJ, TJ). Seja estratégico, detalhado e objetivo. Organize suas respostas em tópicos quando necessário."},{id:"promotor",label:"Promotor",color:"text-red-400 border-red-600/50 bg-red-900/20",icon:e.jsx(zr,{size:12}),prompt:"Você é um Promotor de Justiça do Ministério Público brasileiro. Responda com postura acusatória e ministerial, fundamentando juridicamente com base no Código Penal, CPP, leis extravagantes e jurisprudência (STF, STJ). Aponte infrações, tipificações penais, medidas cautelares cabíveis e requisições pertinentes. Seja técnico, preciso e assertivo."},{id:"magistrado",label:"Magistrado",color:"text-yellow-400 border-yellow-600/50 bg-yellow-900/20",icon:e.jsx(Xa,{size:12}),prompt:"Você é um Juiz de Direito do Brasil. Responda de forma absolutamente imparcial, técnica e fundamentada, como em uma sentença ou decisão interlocutória. Cite leis, artigos, princípios constitucionais e jurisprudência dos tribunais superiores. Estruture sua resposta com: Relatório, Fundamentos/Motivação e Dispositivo/Conclusão quando aplicável. Seja equilibrado entre as partes."},{id:"resumo",label:"Resumo",color:"text-purple-400 border-purple-600/50 bg-purple-900/20",icon:e.jsx(os,{size:12}),prompt:"Você é um especialista em análise, síntese e resumo de documentos jurídicos brasileiros. Ao receber qualquer texto jurídico (petição, sentença, acórdão, contrato, lei, etc.), faça um resumo claro, objetivo e bem estruturado, destacando: partes envolvidas, objeto principal, fundamentos legais, decisões/conclusões, prazos e obrigações relevantes. Use linguagem acessível sem perder a precisão técnica."}],Oi=[["gsk_","https://api.groq.com/openai/v1","llama-3.3-70b-versatile","Groq"],["sk-or-","https://openrouter.ai/api/v1","openai/gpt-4o-mini","OpenRouter"],["pplx-","https://api.perplexity.ai","sonar-pro","Perplexity"],["AIza","https://generativelanguage.googleapis.com/v1beta/openai","gemini-2.0-flash","Google Gemini"],["xai-","https://api.x.ai/v1","grok-2-latest","xAI/Grok"],["sk-ant","https://api.anthropic.com/v1","claude-haiku-4-20250514","Anthropic"],["sk-","https://api.openai.com/v1","gpt-4o-mini","OpenAI"]];function Va(t){const s=(t||"").trim();for(const[o,r,n,c]of Oi)if(s.startsWith(o))return{url:r,model:n,name:c};return null}function Ii({code:t,lang:s}){const[o,r]=a.useState(!1);return e.jsxs("div",{className:"relative my-2 rounded-lg overflow-hidden border border-gray-700/50",children:[e.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 bg-[#0e1a0a] text-gray-500 text-[10px] font-mono",children:[e.jsx("span",{children:s||"code"}),e.jsx("button",{onClick:()=>{navigator.clipboard.writeText(t),r(!0),setTimeout(()=>r(!1),2e3)},className:"flex items-center gap-1 hover:text-gray-300 transition-colors",children:o?e.jsxs(e.Fragment,{children:[e.jsx(Sa,{className:"w-3 h-3 text-green-400"})," Copiado!"]}):e.jsxs(e.Fragment,{children:[e.jsx(Mo,{className:"w-3 h-3"})," Copiar"]})})]}),e.jsx("pre",{className:"p-3 overflow-x-auto text-[11px] leading-relaxed text-gray-200 font-mono bg-[#141c0d]",children:e.jsx("code",{children:t})})]})}function Li({text:t}){const s=t.split(/(```[\s\S]*?```)/g);return e.jsx("div",{children:s.map((o,r)=>{const n=o.match(/^```(\w*)\n?([\s\S]*?)```$/);if(n)return e.jsx(Ii,{lang:n[1],code:n[2].trimEnd()},r);if(o.trim()){const c=/(https?:\/\/[^\s<>"']+)/g,l=o.split(c);return e.jsx("p",{className:"text-[12px] leading-relaxed whitespace-pre-wrap my-1 text-gray-200",children:l.map((u,d)=>c.test(u)?e.jsx("a",{href:u,target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:underline break-all",children:u},d):e.jsx("span",{children:u},d))},r)}return null})})}function zi({onBack:t}){const[s,o]=a.useState(()=>localStorage.getItem("cl_legal_mode")||"livre"),[r,n]=a.useState(()=>localStorage.getItem("cl_api_key")||""),[c,l]=a.useState(()=>localStorage.getItem("cl_api_url")||"https://api.groq.com/openai/v1"),[u,d]=a.useState(()=>localStorage.getItem("cl_api_model")||"llama-3.3-70b-versatile"),[h,m]=a.useState(!1),[C,T]=a.useState(()=>!localStorage.getItem("cl_api_key")),[_,D]=a.useState(!1),[P,O]=a.useState(""),[H,L]=a.useState(()=>{try{return JSON.parse(localStorage.getItem("cl_saved_keys")||"[]")}catch{return[]}}),[V,M]=a.useState(()=>{try{return JSON.parse(localStorage.getItem("cl_chat_history")||"[]")}catch{return[]}}),[R,w]=a.useState(""),[f,g]=a.useState(""),[S,B]=a.useState(!1),[Q,se]=a.useState(!1),[J,xe]=a.useState(()=>La().enabled),[re,te]=a.useState(!1),[X,pe]=a.useState([]),[me,F]=a.useState(()=>La()),E=a.useRef(null),j=a.useRef(null),k=a.useRef(null),x=a.useRef(!1),ce=a.useRef(null),z=a.useRef(!1),N=a.useRef(0);a.useEffect(()=>{const y=()=>{const K=window.speechSynthesis?.getVoices()??[];K.length>0&&pe(K)};return y(),window.speechSynthesis?.addEventListener("voiceschanged",y),()=>window.speechSynthesis?.removeEventListener("voiceschanged",y)},[]);const U=y=>{F(K=>{const oe={...K,...y};return Zs(oe),oe})};a.useEffect(()=>{localStorage.setItem("cl_legal_mode",s)},[s]),a.useEffect(()=>{r?localStorage.setItem("cl_api_key",r):localStorage.removeItem("cl_api_key"),c&&localStorage.setItem("cl_api_url",c),u&&localStorage.setItem("cl_api_model",u)},[r,c,u]),a.useEffect(()=>{localStorage.setItem("cl_saved_keys",JSON.stringify(H))},[H]),a.useEffect(()=>{localStorage.setItem("cl_chat_history",JSON.stringify(V))},[V]),a.useEffect(()=>{j.current?.scrollIntoView({behavior:"smooth"})},[V,f]),a.useEffect(()=>{if(!r)return;const y=r.trim(),K=Va(y);K&&(l(K.url),d(K.model))},[r]),a.useEffect(()=>()=>{x.current=!1,ce.current?.stop()},[]);const v=y=>{n(y);const K=Va(y);K&&(l(K.url),d(K.model))},$=()=>{if(!r.trim()||H.some(oe=>oe.key===r.trim()))return;const y=Va(r),K=P.trim()||y?.name||"Chave "+(H.length+1);L(oe=>[...oe,{id:Date.now().toString(),label:K,key:r.trim(),url:c,model:u,provider:y?.name||"Custom"}]),O("")},Z=y=>{n(y.key),l(y.url),d(y.model),D(!1)},ee=y=>L(K=>K.filter(oe=>oe.id!==y)),ne=a.useCallback(()=>{if(!z.current)return;const y=window.SpeechRecognition||window.webkitSpeechRecognition;y&&setTimeout(()=>{if(!z.current)return;const K=new y;K.lang="pt-BR",K.continuous=!0,K.interimResults=!0;let oe=null,de="";const Le=()=>{oe&&clearTimeout(oe),oe=setTimeout(()=>{const fe=de.trim();try{K.stop()}catch{}z.current=!1,se(!1),fe&&be.current?.(fe)},1800)};K.onresult=fe=>{let He="",ve="";for(let Ee=0;Ee<fe.results.length;Ee++)fe.results[Ee].isFinal?He+=fe.results[Ee][0].transcript:ve+=fe.results[Ee][0].transcript;de=He||ve,w(de),de&&Le()},K.onerror=()=>{se(!1),z.current=!1},K.onend=()=>{se(!1)},ce.current=K;try{K.start(),se(!0)}catch{se(!1)}},400)},[]),be=a.useRef(null),ye=a.useCallback(async y=>{const K=(y??R).trim();if(!K||S)return;if(window.speechSynthesis){const ke=new SpeechSynthesisUtterance(" ");ke.volume=0,ke.lang="pt-BR",window.speechSynthesis.speak(ke)}w(""),N.current=0;const fe=[Ss.find(ke=>ke.id===s)?.prompt||"",J?"Você está em modo de conversa por voz. Responda de forma natural e direta, SEM usar markdown, asteriscos, sustenidos, hashtags, tabelas, listas numeradas, código ou caracteres especiais. Fale como numa conversa normal. Seja objetivo e amigável.":""].filter(Boolean).join(`

`),ve=[...fe?[{role:"system",content:fe}]:[],...V,{role:"user",content:K}],Ee=[...V,{role:"user",content:K}];M(Ee),B(!0),g("");const pt=new AbortController;E.current=pt;const Qe=ke=>{const Ue=za(ke);if(!Ue.trim()){ne();return}Fs(Ue,{...me,enabled:!0},ne)};try{const ke=r.trim();if(!ke)try{const Se=await fetch("/api/ai/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:Ee}),signal:pt.signal});if(!Se.ok){const Pe=await Se.json().catch(()=>({}));throw new Error(Pe.error||`Erro ${Se.status}`)}const We=(await Se.json()).content||"";M(Pe=>[...Pe,{role:"assistant",content:We}]),J&&We&&Qe(We);return}catch(Se){if(Se.name==="AbortError")throw Se;const Fe=`⚠️ Sem chave de IA configurada e o servidor não está disponível.

Vá em ⚙️ Configurações → cole sua chave (Groq grátis em console.groq.com, Gemini em aistudio.google.com).`;M(We=>[...We,{role:"assistant",content:Fe}]);return}const Ue=(c.trim()||"https://api.openai.com/v1")+"/chat/completions",Ve=ke.startsWith("sk-ant"),ot={"Content-Type":"application/json"};Ve?(ot["x-api-key"]=ke,ot["anthropic-version"]="2023-06-01",ot["anthropic-dangerous-direct-browser-access"]="true"):ot.Authorization=`Bearer ${ke}`;const it=Ve?{model:u,messages:ve.filter(Se=>Se.role!=="system"),max_tokens:8192,stream:!0,system:ve.find(Se=>Se.role==="system")?.content||""}:{model:u,messages:ve,stream:!0,max_tokens:16384};let lt=await fetch(Ve?"https://api.anthropic.com/v1/messages":Ue,{method:"POST",headers:ot,body:JSON.stringify(it),signal:pt.signal}).catch(async Se=>fetch("/api/ai/forward",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:ke,apiUrl:c.trim(),model:u,messages:ve,stream:!0,maxTokens:16384}),signal:pt.signal}));if(!lt.ok){const Se=await lt.text().catch(()=>"");let Fe=`Erro ${lt.status}`;try{const We=JSON.parse(Se);Fe=We.error||We.message||Fe}catch{}throw new Error(Fe.substring(0,400))}const yt=lt.body?.getReader();if(!yt)throw new Error("Sem resposta");const Ke=new TextDecoder;let xt="",Ye="";for(;;){const{done:Se,value:Fe}=await yt.read();if(Se)break;Ye+=Ke.decode(Fe,{stream:!0});const We=Ye.split(`
`);Ye=We.pop()||"";for(const Pe of We){if(!Pe.startsWith("data: "))continue;const ut=Pe.slice(6).trim();if(ut!=="[DONE]")try{const Je=JSON.parse(ut);if(Je.error)throw new Error(typeof Je.error=="string"?Je.error:JSON.stringify(Je.error));const gt=Je.choices?.[0]?.delta?.content||Je.text||Je.content||"";if(gt&&(xt+=gt,g(xt),J&&z.current)){const ht=xt.slice(N.current).match(/^(.{30,}?[.!?])\s/s);if(ht){const tt=za(ht[1]);tt.trim().length>10&&(N.current+=ht[0].length,window.speechSynthesis?.speaking||Fs(tt,{...me,enabled:!0}))}}}catch(Je){if(Je instanceof SyntaxError)continue;throw Je}}}if(xt.trim()&&(M(Se=>[...Se,{role:"assistant",content:xt}]),J)){const Se=xt.slice(N.current);Qe(Se||xt)}}catch(ke){if(ke.name==="AbortError")return;const Ue=ke.message||"Erro desconhecido";M(Ve=>[...Ve,{role:"assistant",content:`❌ ${Ue}`}]),z.current=!1}finally{B(!1),g(""),E.current=null}},[R,r,c,u,V,J,me,S,ne,s]);a.useEffect(()=>{be.current=ye},[ye]);const Ge=()=>{E.current?.abort(),E.current=null,z.current=!1,ua(),ce.current?.stop()},$e=()=>{Ge(),M([]),g(""),localStorage.removeItem("cl_chat_history")},Ze=()=>{if(!V.length)return;const y=["=== CONVERSA — Campo Livre ===",`Data: ${new Date().toLocaleString("pt-BR")}`,""];V.forEach(de=>{y.push(`[${de.role==="user"?"VOCÊ":"IA"}]`),y.push(de.content),y.push("")});const K=new Blob([y.join(`
`)],{type:"text/plain;charset=utf-8"}),oe=document.createElement("a");oe.href=URL.createObjectURL(K),oe.download=`conversa-${Date.now()}.txt`,oe.click()},Be=y=>{const K=y.target.files?.[0];if(!K)return;const oe=new FileReader;oe.onload=de=>{const Le=de.target?.result;Le&&w(fe=>fe?fe+`

`+Le:Le)},oe.readAsText(K),y.target.value=""},I=a.useCallback(()=>{if(Q){ce.current?.stop(),z.current=!1,ua(),se(!1);return}const y=window.SpeechRecognition||window.webkitSpeechRecognition;if(!y){alert("Use Chrome ou Edge para ditar por voz.");return}z.current=!0;const K=new y;K.lang="pt-BR",K.continuous=!0,K.interimResults=!0;let oe=null,de="";const Le=()=>{oe&&clearTimeout(oe),oe=setTimeout(()=>{const fe=de.trim();try{K.stop()}catch{}fe&&(w(""),ye(fe))},1800)};K.onresult=fe=>{let He="",ve="";for(let Ee=0;Ee<fe.results.length;Ee++)fe.results[Ee].isFinal?He+=fe.results[Ee][0].transcript:ve+=fe.results[Ee][0].transcript;de=He||ve,w(de),de&&Le()},K.onerror=()=>{oe&&clearTimeout(oe),ce.current=null,se(!1)},K.onend=()=>{oe&&clearTimeout(oe),ce.current=null,se(!1)},ce.current=K;try{K.start(),se(!0)}catch{se(!1)}},[Q,ye]),ae=Va(r),ie=[...V,...f?[{role:"assistant",content:f,streaming:!0}]:[]],ue=Ss.find(y=>y.id===s);return e.jsxs("div",{className:"h-[100dvh] flex flex-col bg-[#141c0d] text-gray-200",children:[e.jsxs("header",{className:"h-11 flex items-center gap-2 px-3 bg-[#1c2714] border-b border-gray-700/50 shrink-0",children:[e.jsx("button",{onClick:t,className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-400",children:e.jsx(zo,{size:17})}),e.jsx(es,{size:15,className:"text-green-400 shrink-0"}),e.jsx("span",{className:"text-sm font-semibold truncate flex-1",children:"Campo Livre"}),e.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full border shrink-0 flex items-center gap-1 ${ue.color}`,children:[ue.icon,ue.label]}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded-full bg-green-900/40 text-green-400 border border-green-700/40 shrink-0",children:ae?ae.name:"Gratuita ✨"}),e.jsx("button",{onClick:Ze,disabled:!V.length,className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-500 disabled:opacity-30",title:"Exportar conversa",children:e.jsx(jt,{size:14})}),e.jsx("button",{onClick:()=>k.current?.click(),className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-500",title:"Importar arquivo de texto",children:e.jsx(qt,{size:14})}),e.jsx("input",{ref:k,type:"file",accept:".txt,.md,.csv,.json",className:"hidden",onChange:Be}),e.jsx("button",{onClick:()=>{xe(y=>{const K=!y;return K||(ua(),te(!1)),K})},className:`p-1.5 rounded-lg ${J?"text-green-400 bg-green-900/20":"text-gray-600 hover:bg-white/5"}`,title:J?"Voz da IA ativa — clique para desativar":"Ativar voz da IA",children:J?e.jsx(rs,{size:14}):e.jsx(Vs,{size:14})}),J&&e.jsx("button",{onClick:()=>te(y=>!y),className:`p-1.5 rounded-lg ${re?"text-green-300 bg-green-900/30":"text-gray-600 hover:bg-white/5 hover:text-green-400"}`,title:"Configurar voz (escolher, velocidade, tom)",children:e.jsx(qo,{size:13})}),e.jsx("button",{onClick:()=>{T(y=>!y),D(!1)},className:`p-1.5 rounded-lg ${C?"bg-white/10 text-gray-200":"hover:bg-white/5 text-gray-500"}`,title:"Configurar API",children:e.jsx(Da,{size:14})}),e.jsxs("button",{onClick:()=>{D(y=>!y),T(!1)},className:`p-1.5 rounded-lg relative ${_?"bg-white/10 text-gray-200":"hover:bg-white/5 text-gray-500"}`,title:"Chaves salvas",children:[e.jsx(Do,{size:14}),H.length>0&&e.jsx("span",{className:"absolute -top-0.5 -right-0.5 text-[9px] bg-green-600 text-white w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold",children:H.length})]}),e.jsx("button",{onClick:$e,className:"p-1.5 rounded-lg hover:bg-red-900/20 text-gray-600 hover:text-red-400",title:"Limpar conversa",children:e.jsx(mt,{size:14})})]}),e.jsx("div",{className:"flex items-center gap-1 px-2 py-1.5 bg-[#161f0f] border-b border-gray-700/30 shrink-0 overflow-x-auto scrollbar-none",children:Ss.map(y=>e.jsxs("button",{onClick:()=>o(y.id),className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all border shrink-0 ${s===y.id?y.color+" shadow-sm":"text-gray-600 border-transparent hover:text-gray-400 hover:bg-white/5"}`,children:[y.icon,y.label]},y.id))}),re&&e.jsxs("div",{className:"border-b border-green-800/30 bg-[#1a2410] p-3 space-y-3 shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Configurações de Voz"}),e.jsx("button",{onClick:()=>te(!1),className:"p-0.5 rounded text-gray-600 hover:text-gray-400",children:e.jsx(je,{size:12})})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-[10px] text-gray-500 mb-1 block",children:["Voz (",X.length," disponíveis)"]}),X.length===0?e.jsx("p",{className:"text-[11px] text-gray-600 italic",children:"Sem vozes disponíveis neste navegador."}):e.jsxs("div",{className:"max-h-36 overflow-y-auto space-y-0.5 rounded-lg border border-gray-700/40 bg-[#141c0d] p-1",children:[e.jsxs("button",{onClick:()=>U({voiceName:""}),className:`w-full text-left px-2 py-1.5 rounded text-[11px] transition-colors ${me.voiceName===""?"bg-green-900/40 text-green-300 border border-green-700/40":"text-gray-400 hover:bg-white/5"}`,children:[e.jsx("span",{className:"font-medium",children:"Automático"}),e.jsx("span",{className:"text-[10px] text-gray-600 ml-1",children:"(melhor voz pt-BR disponível)"})]}),[...X.filter(y=>y.lang.toLowerCase().startsWith("pt")),...X.filter(y=>!y.lang.toLowerCase().startsWith("pt"))].map(y=>e.jsxs("button",{onClick:()=>U({voiceName:y.name}),className:`w-full text-left px-2 py-1.5 rounded text-[11px] transition-colors ${me.voiceName===y.name?"bg-green-900/40 text-green-300 border border-green-700/40":"text-gray-400 hover:bg-white/5"}`,children:[e.jsx("span",{className:"font-medium truncate block",children:y.name}),e.jsxs("span",{className:"text-[10px] text-gray-600",children:[y.lang," ",y.localService?"· local":"· online"]})]},y.name))]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("label",{className:"text-[10px] text-gray-500",children:"Velocidade"}),e.jsxs("span",{className:"text-[10px] text-green-400 font-mono",children:[me.rate.toFixed(2),"×"]})]}),e.jsx("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:me.rate,onChange:y=>U({rate:parseFloat(y.target.value)}),className:"w-full accent-green-500 h-1.5"}),e.jsxs("div",{className:"flex justify-between text-[9px] text-gray-700 mt-0.5",children:[e.jsx("span",{children:"Lenta"}),e.jsx("span",{children:"Normal"}),e.jsx("span",{children:"Rápida"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("label",{className:"text-[10px] text-gray-500",children:"Tom de voz"}),e.jsx("span",{className:"text-[10px] text-green-400 font-mono",children:me.pitch.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.5",max:"1.8",step:"0.05",value:me.pitch,onChange:y=>U({pitch:parseFloat(y.target.value)}),className:"w-full accent-green-500 h-1.5"}),e.jsxs("div",{className:"flex justify-between text-[9px] text-gray-700 mt-0.5",children:[e.jsx("span",{children:"Grave"}),e.jsx("span",{children:"Natural"}),e.jsx("span",{children:"Agudo"})]})]}),e.jsx("button",{onClick:()=>{ua();const y=X.find(de=>de.name===me.voiceName),K={...me},oe=new SpeechSynthesisUtterance("Olá! Esta é a minha voz. Como posso te ajudar hoje?");oe.lang=K.lang,oe.rate=K.rate,oe.pitch=K.pitch,y&&(oe.voice=y),window.speechSynthesis?.speak(oe)},className:"w-full py-1.5 text-[11px] bg-green-900/30 border border-green-700/40 text-green-400 rounded-lg hover:bg-green-900/50 transition-colors",children:"▶ Testar voz agora"})]}),C&&e.jsxs("div",{className:"border-b border-gray-700/40 bg-[#1c2714] p-3 space-y-2 shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Configurar Chave de API"}),e.jsx("span",{className:"text-[10px] text-green-400",children:r?"Sua chave ativa":"Usando IA gratuita (Replit)"})]}),!r&&e.jsx("p",{className:"text-[11px] text-blue-300 bg-blue-900/20 border border-blue-700/30 rounded px-2 py-1.5",children:"Sem chave → usando IA gratuita. Cole qualquer chave abaixo para usar sua própria conta."}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("input",{type:h?"text":"password",value:r,onChange:y=>v(y.target.value.trim()),placeholder:"gsk_..., AIza..., sk-..., pplx-..., xai-..., sk-or-...",className:"flex-1 h-8 px-2 text-[11px] font-mono bg-[#141c0d] border border-gray-700/50 rounded-lg text-gray-200 outline-none focus:border-green-600/60"}),e.jsx("button",{onClick:()=>m(y=>!y),className:"w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-gray-500",children:h?e.jsx(_o,{size:13}):e.jsx(Ws,{size:13})})]}),r&&e.jsxs("div",{className:"flex gap-1 items-end",children:[e.jsx("input",{value:P,onChange:y=>O(y.target.value),placeholder:ae?.name||"Nome para salvar",className:"flex-1 h-7 px-2 text-[11px] bg-[#141c0d] border border-gray-700/40 rounded text-gray-300 outline-none"}),e.jsxs("button",{onClick:$,className:"flex items-center gap-1 px-2 h-7 text-[11px] bg-green-700/30 border border-green-600/40 text-green-400 rounded hover:bg-green-700/50",children:[e.jsx(ma,{size:11})," Salvar"]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-1",children:[e.jsx("input",{value:c,onChange:y=>l(y.target.value),placeholder:"URL da API",className:"h-7 px-2 text-[10px] font-mono bg-[#141c0d] border border-gray-700/40 rounded text-gray-400 outline-none"}),e.jsx("input",{value:u,onChange:y=>d(y.target.value),placeholder:"Modelo",className:"h-7 px-2 text-[10px] font-mono bg-[#141c0d] border border-gray-700/40 rounded text-gray-400 outline-none"})]}),r&&ae&&e.jsxs("p",{className:"text-[10px] text-green-400",children:["✓ ",ae.name," · ",u]})]}),_&&e.jsxs("div",{className:"border-b border-gray-700/40 bg-[#1c2714] p-3 space-y-2 shrink-0 max-h-48 overflow-y-auto",children:[e.jsxs("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:["Chaves Salvas (",H.length,")"]}),H.length===0?e.jsx("p",{className:"text-[11px] text-gray-600 py-2 text-center",children:"Nenhuma chave salva."}):H.map(y=>e.jsxs("div",{className:`flex items-center gap-2 p-2 rounded-lg border text-[11px] cursor-pointer ${y.key===r?"bg-green-900/20 border-green-700/40":"bg-[#141c0d] border-gray-700/30 hover:border-gray-600/50"}`,children:[e.jsxs("button",{onClick:()=>Z(y),className:"flex-1 text-left min-w-0",children:[e.jsx("div",{className:"font-medium text-gray-200 truncate",children:y.label}),e.jsxs("div",{className:"text-[10px] text-gray-500",children:[y.provider," · ",y.key.substring(0,8),"...",y.key.slice(-4)]})]}),y.key===r&&e.jsx("span",{className:"text-[9px] text-green-400 font-bold shrink-0",children:"ATIVA"}),e.jsx("button",{onClick:()=>ee(y.id),className:"p-1 rounded hover:bg-red-900/20 text-gray-600 hover:text-red-400 shrink-0",children:e.jsx(je,{size:11})})]},y.id))]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-3",children:[ie.length===0&&e.jsxs("div",{className:"h-full flex flex-col items-center justify-center gap-3 text-center py-12 px-4",children:[e.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center border ${ue.color}`,children:ue.icon&&e.jsx("span",{className:"scale-150",children:ue.icon})}),e.jsxs("div",{children:[e.jsxs("p",{className:"text-gray-300 text-sm font-semibold",children:[s==="livre"&&"Campo Livre — Sem restrições",s==="advogado"&&"Modo Advogado",s==="promotor"&&"Modo Promotor",s==="magistrado"&&"Modo Magistrado",s==="resumo"&&"Modo Resumo Jurídico"]}),e.jsxs("p",{className:"text-gray-600 text-[11px] mt-1",children:[s==="livre"&&"Converse sobre qualquer assunto.",s==="advogado"&&"IA responde como advogado de defesa.",s==="promotor"&&"IA responde como promotor de justiça.",s==="magistrado"&&"IA responde como juiz de direito.",s==="resumo"&&"Cole um texto jurídico para resumir."]})]}),e.jsxs("div",{className:"flex flex-wrap gap-2 justify-center mt-2",children:[s==="livre"&&["Olá, como você está?","Me ajude a pensar em algo","Conta uma curiosidade"].map(y=>e.jsx("button",{onClick:()=>w(y),className:"text-[11px] px-3 py-1.5 rounded-full border border-gray-700/50 text-gray-500 hover:border-green-700/50 hover:text-green-400 transition-colors",children:y},y)),s==="advogado"&&["Quais são meus direitos nessa situação?","Como elaborar uma defesa?","Me explique o habeas corpus"].map(y=>e.jsx("button",{onClick:()=>w(y),className:"text-[11px] px-3 py-1.5 rounded-full border border-blue-700/50 text-blue-500 hover:border-blue-500/70 hover:text-blue-300 transition-colors",children:y},y)),s==="promotor"&&["Analise esta conduta criminosa","Quais crimes se aplicam aqui?","Bases para a denúncia"].map(y=>e.jsx("button",{onClick:()=>w(y),className:"text-[11px] px-3 py-1.5 rounded-full border border-red-700/50 text-red-500 hover:border-red-500/70 hover:text-red-300 transition-colors",children:y},y)),s==="magistrado"&&["Analise este caso de forma imparcial","Fundamente uma decisão sobre isso","Quais princípios aplicar?"].map(y=>e.jsx("button",{onClick:()=>w(y),className:"text-[11px] px-3 py-1.5 rounded-full border border-yellow-700/50 text-yellow-600 hover:border-yellow-500/70 hover:text-yellow-300 transition-colors",children:y},y)),s==="resumo"&&["Resuma esta petição:","Extraia os pontos principais:","Simplifique este contrato:"].map(y=>e.jsx("button",{onClick:()=>w(y),className:"text-[11px] px-3 py-1.5 rounded-full border border-purple-700/50 text-purple-500 hover:border-purple-500/70 hover:text-purple-300 transition-colors",children:y},y))]})]}),ie.map((y,K)=>e.jsx("div",{className:`flex ${y.role==="user"?"justify-end":"justify-start"}`,children:e.jsx("div",{className:`max-w-[85%] rounded-xl px-3 py-2 ${y.role==="user"?"bg-green-800/40 border border-green-700/30 text-gray-100":"bg-[#1c2714] border border-gray-700/30"}`,children:y.role==="assistant"?e.jsxs("div",{children:[e.jsx(Li,{text:y.content}),y.streaming&&e.jsx("span",{className:"inline-block w-1.5 h-3.5 bg-green-400 animate-pulse ml-0.5 rounded-sm"}),!y.streaming&&y.content&&e.jsxs("button",{onClick:()=>navigator.clipboard.writeText(y.content),className:"mt-1.5 flex items-center gap-1 text-[10px] text-gray-600 hover:text-gray-400",children:[e.jsx(Mo,{size:10})," Copiar"]})]}):e.jsx("p",{className:"text-[12px] leading-relaxed whitespace-pre-wrap",children:y.content})})},K)),e.jsx("div",{ref:j})]}),e.jsx("div",{className:"border-t border-gray-700/40 bg-[#1c2714] p-2 shrink-0",children:e.jsxs("div",{className:"flex gap-2 items-end",children:[e.jsx("textarea",{value:R,onChange:y=>w(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),ye())},placeholder:"Digite sua mensagem… (Enter para enviar, Shift+Enter para nova linha)",rows:1,className:"flex-1 resize-none bg-[#141c0d] border border-gray-700/50 rounded-xl px-3 py-2.5 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-green-600/60 max-h-32 overflow-y-auto leading-relaxed",style:{minHeight:"42px"},onInput:y=>{const K=y.target;K.style.height="auto",K.style.height=Math.min(K.scrollHeight,128)+"px"}}),e.jsx("button",{onClick:I,className:`w-10 h-10 flex items-center justify-center rounded-xl shrink-0 transition-all ${Q?"bg-red-600 text-white animate-pulse":"bg-[#141c0d] border border-gray-700/50 text-gray-500 hover:text-green-400 hover:border-green-700/50"}`,title:"Ditar por voz",children:Q?e.jsx($o,{size:16}):e.jsx(_a,{size:16})}),S?e.jsx("button",{onClick:Ge,className:"w-10 h-10 flex items-center justify-center rounded-xl bg-red-900/30 border border-red-700/40 text-red-400 shrink-0",children:e.jsx(Qa,{size:16})}):e.jsx("button",{onClick:()=>ye(),disabled:!R.trim(),className:"w-10 h-10 flex items-center justify-center rounded-xl bg-green-700/30 border border-green-600/40 text-green-400 hover:bg-green-700/50 disabled:opacity-30 shrink-0 transition-all",children:S?e.jsx(De,{size:16,className:"animate-spin"}):e.jsx(is,{size:16})})]})})]})}const Ao={1:{label:"Rápido",color:"text-blue-400",desc:"Resposta direta e concisa"},2:{label:"Básico",color:"text-cyan-400",desc:"Pontos principais"},3:{label:"Detalhado",color:"text-amber-400",desc:"Análise completa"},4:{label:"Profundo",color:"text-orange-400",desc:"Fundamentação robusta"},5:{label:"Exaustivo",color:"text-purple-400",desc:"Máximo esforço possível"}},Eo=[{id:"modo-estrito",label:"Corrigir Texto",color:"bg-blue-800/30 border-blue-600/40 text-blue-300"},{id:"modo-redacao",label:"Redação Jurídica",color:"bg-purple-800/30 border-purple-600/40 text-purple-300"},{id:"modo-interativo",label:"Verificar Lacunas",color:"bg-yellow-800/30 border-yellow-600/40 text-yellow-300"}],So=[{id:"resumir",label:"Resumir"},{id:"revisar",label:"Revisar"},{id:"refinar",label:"Refinar"},{id:"simplificar",label:"Linguagem Simples"},{id:"minuta",label:"Gerar Minuta"},{id:"analisar",label:"Analisar"}],qi=[["gsk_","Groq"],["sk-or-","OpenRouter"],["pplx-","Perplexity"],["AIza","Google Gemini"],["xai-","xAI/Grok"],["sk-ant","Anthropic"],["sk-","OpenAI"]];function Ts(t){const s=(t||"").trim();for(const[o,r]of qi)if(s.startsWith(o))return r;return null}const Di=["STF","STJ","TRF1","TRF2","TRF3","TRF4","TRF5","TRF6","TRT","TJSP","TJRJ","TJMG","TJRS","Súmula","Doutrina"];function _i({text:t}){const s=t.split(/\n{2,}/);return e.jsx("div",{style:{fontFamily:"'Times New Roman', Georgia, serif",fontSize:"13px",lineHeight:"1.9",color:"#e5e7eb"},children:s.map((o,r)=>{const n=o.trim();if(!n)return null;const c=n.split(`
`),u=c.length===1&&n===n.toUpperCase()&&n.length>2&&/[A-ZÁÉÍÓÚÃÕÂÊÎÔÛÇ]/.test(n)&&!/^\d+\./.test(n),d=/^\d+[.\)]\s/.test(n)||/^[a-z]\)/.test(n)||/^[-–]\s/.test(n),h=(n.startsWith('"')||n.startsWith("“"))&&n.length>60,m=C=>C.map((T,_)=>_===0?T:e.jsxs("span",{children:[e.jsx("br",{}),T]},_));return u?e.jsx("p",{style:{textAlign:"justify",fontWeight:"bold",margin:"4px 0 0",textIndent:"0"},children:n},r):d?e.jsx("p",{style:{textAlign:"justify",margin:"0",paddingLeft:"1cm",textIndent:"0"},children:m(c)},r):h?e.jsx("p",{style:{textAlign:"justify",margin:"0",paddingLeft:"4cm",fontSize:"12px"},children:m(c)},r):e.jsx("p",{style:{textIndent:"4cm",textAlign:"justify",margin:"0"},children:m(c)},r)})})}function ca(t,s){try{return JSON.parse(localStorage.getItem(t)||"null")??s}catch{return s}}function da(t,s){try{localStorage.setItem(t,JSON.stringify(s))}catch{}}function Mi({onBack:t}){const[s,o]=a.useState("processar"),[r,n]=a.useState(()=>localStorage.getItem("aj_api_key")||""),[c,l]=a.useState(()=>localStorage.getItem("aj_api_url")||""),[u,d]=a.useState(()=>localStorage.getItem("aj_api_model")||""),[h,m]=a.useState(!1),[C,T]=a.useState(!1),[_,D]=a.useState(!1),[P,O]=a.useState(""),[H,L]=a.useState(()=>ca("aj_saved_keys",[])),[V,M]=a.useState(null),[R,w]=a.useState(!1),[f,g]=a.useState(()=>ca("aj_effort",3)),[S,B]=a.useState(()=>ca("aj_verbosity","longa")),[Q,se]=a.useState(""),[J,xe]=a.useState(""),[re,te]=a.useState(!1),[X,pe]=a.useState(""),[me,F]=a.useState(""),[E,j]=a.useState(!1),[k,x]=a.useState(null),[ce,z]=a.useState(!1),[N,U]=a.useState(()=>La().enabled),[v,$]=a.useState(()=>La()),[Z,ee]=a.useState(!1),[ne,be]=a.useState([]),[ye,Ge]=a.useState(!1),[$e,Ze]=a.useState(!1),[Be,I]=a.useState(!1),[ae,ie]=a.useState(""),[ue,y]=a.useState([]),[K,oe]=a.useState(!1),[de,Le]=a.useState(!1),[fe,He]=a.useState(()=>ca("aj_ementas",[])),[ve,Ee]=a.useState(new Set),[pt,Qe]=a.useState(!1),[ke,Ue]=a.useState(null),[Ve,ot]=a.useState(""),[it,et]=a.useState(""),[lt,yt]=a.useState(""),[Ke,xt]=a.useState(""),[Ye,Se]=a.useState(null),[Fe,We]=a.useState(()=>ca("aj_history",[])),[Pe,ut]=a.useState(()=>ca("aj_custom_actions",[])),[Je,gt]=a.useState(!1),[Dt,ht]=a.useState(null),[tt,_t]=a.useState(""),[Ht,nt]=a.useState(""),[b,G]=a.useState(""),ge=a.useRef(null),Oe=a.useRef(null),Te=a.useRef(null),ze=a.useRef(null),dt=a.useRef(null),Ie=a.useRef(null),Re=a.useRef(null);a.useEffect(()=>{r?localStorage.setItem("aj_api_key",r):localStorage.removeItem("aj_api_key"),c?localStorage.setItem("aj_api_url",c):localStorage.removeItem("aj_api_url"),u?localStorage.setItem("aj_api_model",u):localStorage.removeItem("aj_api_model")},[r,c,u]),a.useEffect(()=>{da("aj_saved_keys",H)},[H]),a.useEffect(()=>{da("aj_effort",f)},[f]),a.useEffect(()=>{da("aj_verbosity",S)},[S]),a.useEffect(()=>{da("aj_ementas",fe)},[fe]),a.useEffect(()=>{da("aj_history",Fe)},[Fe]),a.useEffect(()=>{da("aj_custom_actions",Pe)},[Pe]),a.useEffect(()=>{(X||me)&&Re.current?.scrollIntoView({behavior:"smooth",block:"nearest"})},[X,me]),a.useEffect(()=>{Ie.current?.scrollIntoView({behavior:"smooth"})},[ue,K]),a.useEffect(()=>()=>{Te.current?.stop()},[]),a.useEffect(()=>{const p=()=>{const W=window.speechSynthesis?.getVoices()??[];W.length>0&&be(W)};return p(),window.speechSynthesis?.addEventListener("voiceschanged",p),()=>window.speechSynthesis?.removeEventListener("voiceschanged",p)},[]);const Me=p=>{$(W=>{const le={...W,...p};return Zs(le),le})},st=Ts(r),_e=!!r.trim(),Mt=()=>{if(!r.trim()||H.some(le=>le.key===r.trim()))return;const p=Ts(r)||"Custom",W=P.trim()||p;L(le=>[...le,{id:Date.now().toString(),label:W,key:r.trim(),url:c,model:u,provider:p}]),O("")},va=p=>{n(p.key),l(p.url),d(p.model),D(!1),M(null)},zt=async()=>{const p=r.trim();if(!p){M({ok:!1,msg:"❌ Insira uma chave primeiro."});return}w(!0),M(null);try{const W=await fetch("/api/legal/process",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:"Teste.",action:"resumir",effortLevel:1,customKey:p,customUrl:c||void 0,customModel:u||void 0})});if(!W.ok)throw new Error(`HTTP ${W.status}`);const le=W.body?.getReader();if(!le)throw new Error("Sem resposta");const Ne=new TextDecoder;let Ce="",qe=!1;for(;!qe;){const{done:Ae,value:Xe}=await le.read();if(Ae)break;Ce+=Ne.decode(Xe,{stream:!0});for(const ct of Ce.split(`
`))if(ct.startsWith("data: "))try{const at=JSON.parse(ct.slice(6));if(at.content||at.mode||at.done){qe=!0;break}}catch{}}le.cancel(),M({ok:!0,msg:`✅ Chave válida! Provedor: ${Ts(p)||"Custom"}`})}catch(W){M({ok:!1,msg:`❌ ${W.message.slice(0,120)}`})}finally{w(!1)}},Vt=a.useCallback(async(p,W,le,Ne,Ce)=>{const qe=await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W),signal:le});if(!qe.ok){const ya=await qe.json().catch(()=>({}));throw new Error(ya.message||`Erro ${qe.status}`)}const Ae=qe.body?.getReader();if(!Ae)throw new Error("Sem resposta do servidor.");const Xe=new TextDecoder;let ct="",at="";for(;;){const{done:ya,value:hs}=await Ae.read();if(ya)break;ct+=Xe.decode(hs,{stream:!0});const Ba=ct.split(`
`);ct=Ba.pop()||"";for(const Na of Ba)if(Na.startsWith("data: "))try{const wt=JSON.parse(Na.slice(6));if(wt.mode==="demo"&&z(!0),wt.mode==="custom"&&z(!1),wt.content&&(at+=wt.content,Ne(at)),wt.error)throw new Error(wt.error)}catch(wt){if(!(wt instanceof SyntaxError))throw wt}}Ce(at)},[]),$t=a.useCallback(async(p,W)=>{const le=Q.trim();if(!le){alert("Cole ou importe o texto do documento antes de escolher uma ação.");return}if(E)return;const Ne=fe.filter(Ae=>ve.has(Ae.id)).map(Ae=>`[${Ae.titulo} — ${Ae.categoria}]
${Ae.texto}`).join(`

`),Ce=[J.trim(),Ne].filter(Boolean).join(`

`);j(!0),pe(""),F(""),x(W?"custom_"+p:p),y([]),Le(!1),z(!1);const qe=new AbortController;ge.current=qe;try{await Vt("/api/legal/process",{text:le,action:p,effortLevel:f,verbosity:S,jurisText:Ce||void 0,customKey:r.trim()||void 0,customUrl:c.trim()||void 0,customModel:u.trim()||void 0,...W?{customPrompt:W}:{}},qe.signal,Ae=>F(Ae),Ae=>{if(Ae.trim()){if(pe(Ae),N){const at=za(Ae);Fs(at,{...v,enabled:!0})}const Xe=W?Pe.find(at=>at.id===p)?.label||"Ação Custom":So.find(at=>at.id===p)?.label||Eo.find(at=>at.id===p)?.label||p,ct={id:Date.now().toString(),acao:Xe,inputSnippet:le.substring(0,120),resultado:Ae,timestamp:new Date().toLocaleString("pt-BR")};We(at=>[ct,...at].slice(0,15))}})}catch(Ae){if(Ae.name==="AbortError")return;pe(`❌ Erro: ${Ae.message}`)}finally{j(!1),F(""),ge.current=null}},[Q,J,ve,fe,E,N,f,S,r,c,u,Pe,Vt]),Bt=a.useCallback(async()=>{const p=ae.trim();if(!p||K||!X)return;const W=[...ue,{role:"user",content:p}];y(W),ie(""),oe(!0);const le=new AbortController;Oe.current=le;const Ne=[{role:"user",content:`O documento gerado foi:

${X}`},{role:"assistant",content:"Entendido. Estou pronta para refinar."},...ue.map(Ce=>({role:Ce.role,content:Ce.content})),{role:"user",content:p}];try{await Vt("/api/legal/refine",{messages:Ne,effortLevel:f,verbosity:S,customKey:r.trim()||void 0,customUrl:c.trim()||void 0,customModel:u.trim()||void 0},le.signal,Ce=>y([...W,{role:"assistant",content:Ce}]),Ce=>{Ce.length>X.length*.5&&!Ce.toLowerCase().startsWith("para")&&pe(Ce),y([...W,{role:"assistant",content:Ce}])})}catch(Ce){Ce.name!=="AbortError"&&y([...W,{role:"assistant",content:`❌ Erro: ${Ce.message}`}])}finally{oe(!1),Oe.current=null}},[ae,K,X,ue,f,S,r,c,u,Vt]),Et=()=>{ge.current?.abort(),ge.current=null,Oe.current?.abort(),Oe.current=null},St=async p=>{const W=p.target.files?.[0];if(p.target.value="",!W)return;const le=W.name.split(".").pop()?.toLowerCase()||"";if(["pdf","docx","doc","rtf"].includes(le)){I(!0);try{const Ne=new FormData;Ne.append("files",W,W.name);const Ce=await fetch("/api/upload/extract-text",{method:"POST",body:Ne});if(!Ce.ok)throw new Error((await Ce.json().catch(()=>({}))).message||`Erro ${Ce.status}`);const Ae=(await Ce.json()).text||"";if(!Ae.trim())throw new Error("Arquivo sem texto legível.");se(Xe=>Xe?Xe+`

`+Ae:Ae)}catch(Ne){alert("Erro ao importar: "+Ne.message)}finally{I(!1)}}else{const Ne=new FileReader;Ne.onload=Ce=>{const qe=Ce.target?.result;se(Ae=>Ae?Ae+`

`+qe:qe)},Ne.readAsText(W,"utf-8")}},ja=async p=>{const W=p.target.files?.[0];if(p.target.value="",!W)return;const le=r.trim();if(!le){alert("Para transcrever áudio, insira uma chave Groq ou OpenAI em ⚙️ Configurações.");return}I(!0);try{const Ne=le.startsWith("gsk_")?"https://api.groq.com/openai/v1/audio/transcriptions":"https://api.openai.com/v1/audio/transcriptions",Ce=new FormData;Ce.append("file",W,W.name),Ce.append("model",le.startsWith("gsk_")?"whisper-large-v3":"whisper-1"),Ce.append("language","pt"),Ce.append("response_format","text");const qe=await fetch(Ne,{method:"POST",headers:{Authorization:`Bearer ${le}`},body:Ce});if(!qe.ok)throw new Error((await qe.text()).substring(0,200));const Ae=await qe.text();se(Xe=>Xe?Xe+`

`+Ae.trim():Ae.trim())}catch(Ne){alert("Erro na transcrição: "+Ne.message)}finally{I(!1)}},Nt=me||X,sa=()=>{if(!Nt)return;const p=document.createElement("a");p.href=URL.createObjectURL(new Blob([Nt],{type:"text/plain;charset=utf-8"})),p.download=`juridico-${Date.now()}.txt`,p.click()},oa=()=>{if(!Nt)return;const p=`{\\rtf1\\ansi\\deff0
{\\fonttbl{\\f0 Times New Roman;}}
{\\f0\\fs26
${Nt.split(/\n\n+/).map(le=>{const Ne=le.trim();return Ne?Ne===Ne.toUpperCase()&&Ne.length>2&&/[A-Z]/.test(Ne)&&!/^\d/.test(Ne)?`\\pard\\qj\\b ${Ne.replace(/[\\{}]/g,"\\$&")}\\b0\\par\\par`:/^\d+[.\)]\s/.test(Ne)||/^[-–]\s/.test(Ne)?`\\pard\\qj\\li720 ${Ne.replace(/[\\{}]/g,"\\$&")}\\par\\par`:`\\pard\\qj\\fi2268 ${Ne.replace(/[\\{}]/g,"\\$&")}\\par\\par`:""}).join(`
`)}
}}`,W=document.createElement("a");W.href=URL.createObjectURL(new Blob([p],{type:"application/rtf"})),W.download=`juridico-${Date.now()}.rtf`,W.click()},ra=()=>{Nt&&(navigator.clipboard.writeText(Nt),Ze(!0),setTimeout(()=>Ze(!1),2e3))},Yt=a.useCallback(()=>{if(ye){Te.current?.stop(),Ge(!1);return}const p=window.SpeechRecognition||window.webkitSpeechRecognition;if(!p){alert("Use Chrome ou Edge para ditar por voz.");return}const W=new p;W.lang="pt-BR",W.continuous=!0,W.interimResults=!0;let le=null,Ne="";const Ce=()=>{le&&clearTimeout(le),le=setTimeout(()=>{try{W.stop()}catch{}Ne.trim()&&se(qe=>qe?qe.trimEnd()+`

`+Ne.trim():Ne.trim())},1800)};W.onresult=qe=>{let Ae="",Xe="";for(let ct=0;ct<qe.results.length;ct++)qe.results[ct].isFinal?Ae+=qe.results[ct][0].transcript:Xe+=qe.results[ct][0].transcript;Ne=Ae||Xe,Ne&&Ce()},W.onerror=()=>{le&&clearTimeout(le),Te.current=null,Ge(!1)},W.onend=()=>{le&&clearTimeout(le),Te.current=null,Ge(!1)},Te.current=W;try{W.start(),Ge(!0)}catch{Ge(!1)}},[ye]),Kt=()=>{Ue(null),ot(""),et(""),yt(""),Qe(!0)},Ut=p=>{Ue(p),ot(p.titulo),et(p.categoria),yt(p.texto),Qe(!0)},Wt=()=>{!Ve.trim()||!lt.trim()||(He(ke?p=>p.map(W=>W.id===ke.id?{...W,titulo:Ve,categoria:it,texto:lt}:W):p=>[{id:Date.now().toString(),titulo:Ve,categoria:it,texto:lt,criadoEm:new Date().toLocaleString("pt-BR")},...p]),Qe(!1),Ue(null))},Jt=p=>{He(W=>W.filter(le=>le.id!==p)),Ee(W=>{const le=new Set(W);return le.delete(p),le})},na=p=>Ee(W=>{const le=new Set(W);return le.has(p)?le.delete(p):le.add(p),le}),$a=fe.filter(p=>{const W=Ke.toLowerCase(),le=!W||p.titulo.toLowerCase().includes(W)||p.texto.toLowerCase().includes(W)||p.categoria.toLowerCase().includes(W),Ne=!Ye||p.categoria===Ye;return le&&Ne}),rt=[...new Set(fe.map(p=>p.categoria).filter(Boolean))],ms=()=>{ht(null),_t(""),nt(""),G(""),gt(!0)},xs=p=>{ht(p),_t(p.label),nt(p.descricao),G(p.prompt),gt(!0)},gs=()=>{!tt.trim()||!b.trim()||(ut(Dt?p=>p.map(W=>W.id===Dt.id?{...W,label:tt,descricao:Ht,prompt:b}:W):p=>[...p,{id:Date.now().toString(),label:tt,descricao:Ht,prompt:b}]),gt(!1),ht(null))},Xt=Ao[f]||Ao[3];return e.jsxs("div",{className:"h-[100dvh] flex flex-col bg-[#141c0d] text-gray-200 overflow-hidden",children:[e.jsxs("header",{className:"h-11 flex items-center gap-2 px-3 bg-[#1c2714] border-b border-gray-700/50 shrink-0",children:[e.jsx("button",{onClick:t,className:"p-1.5 rounded-lg hover:bg-white/5 text-gray-400",children:e.jsx(zo,{size:17})}),e.jsx(Za,{size:15,className:"text-amber-400 shrink-0"}),e.jsx("span",{className:"text-sm font-semibold flex-1 truncate",children:"Assistente Jurídico"}),e.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full border shrink-0 ${_e?"bg-green-900/30 text-green-400 border-green-700/30":"bg-amber-900/30 text-amber-400 border-amber-700/30"}`,children:_e?st||"Chave Própria":"Demo ✨"}),e.jsx("button",{onClick:()=>{U(p=>{const W=!p;return W||(ua(),ee(!1)),W})},className:`p-1.5 rounded-lg ${N?"text-amber-400 bg-amber-900/20":"text-gray-600 hover:bg-white/5"}`,title:N?"Desativar voz":"Ativar voz",children:N?e.jsx(rs,{size:14}):e.jsx(Vs,{size:14})}),N&&e.jsx("button",{onClick:()=>ee(p=>!p),className:`p-1.5 rounded-lg ${Z?"text-amber-300 bg-amber-900/30":"text-gray-600 hover:bg-white/5 hover:text-amber-400"}`,title:"Configurar voz (velocidade, tom, escolher)",children:e.jsx(qo,{size:13})}),e.jsx("button",{onClick:()=>{T(p=>!p),D(!1)},className:`p-1.5 rounded-lg ${C?"bg-white/10 text-gray-200":"hover:bg-white/5 text-gray-500"}`,children:e.jsx(Da,{size:14})}),e.jsxs("button",{onClick:()=>{D(p=>!p),T(!1)},className:`p-1.5 rounded-lg relative ${_?"bg-white/10 text-gray-200":"hover:bg-white/5 text-gray-500"}`,children:[e.jsx(Do,{size:14}),H.length>0&&e.jsx("span",{className:"absolute -top-0.5 -right-0.5 text-[9px] bg-amber-600 text-white w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold",children:H.length})]})]}),Z&&e.jsxs("div",{className:"border-b border-amber-800/30 bg-[#1a2410] p-3 space-y-3 shrink-0",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Configurações de Voz"}),e.jsx("button",{onClick:()=>ee(!1),className:"p-0.5 rounded text-gray-600 hover:text-gray-400",children:e.jsx(je,{size:12})})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-[10px] text-gray-500 mb-1 block",children:["Voz (",ne.length," disponíveis)"]}),ne.length===0?e.jsx("p",{className:"text-[11px] text-gray-600 italic",children:"Sem vozes disponíveis neste navegador."}):e.jsxs("div",{className:"max-h-32 overflow-y-auto space-y-0.5 rounded-lg border border-gray-700/40 bg-[#141c0d] p-1",children:[e.jsxs("button",{onClick:()=>Me({voiceName:""}),className:`w-full text-left px-2 py-1.5 rounded text-[11px] transition-colors ${v.voiceName===""?"bg-amber-900/40 text-amber-300 border border-amber-700/40":"text-gray-400 hover:bg-white/5"}`,children:[e.jsx("span",{className:"font-medium",children:"Automático"}),e.jsx("span",{className:"text-[10px] text-gray-600 ml-1",children:"(melhor voz pt-BR)"})]}),[...ne.filter(p=>p.lang.toLowerCase().startsWith("pt")),...ne.filter(p=>!p.lang.toLowerCase().startsWith("pt"))].map(p=>e.jsxs("button",{onClick:()=>Me({voiceName:p.name}),className:`w-full text-left px-2 py-1.5 rounded text-[11px] transition-colors ${v.voiceName===p.name?"bg-amber-900/40 text-amber-300 border border-amber-700/40":"text-gray-400 hover:bg-white/5"}`,children:[e.jsx("span",{className:"font-medium truncate block",children:p.name}),e.jsxs("span",{className:"text-[10px] text-gray-600",children:[p.lang," ",p.localService?"· local":"· online"]})]},p.name))]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("label",{className:"text-[10px] text-gray-500",children:"Velocidade"}),e.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[v.rate.toFixed(2),"×"]})]}),e.jsx("input",{type:"range",min:"0.5",max:"2.0",step:"0.05",value:v.rate,onChange:p=>Me({rate:parseFloat(p.target.value)}),className:"w-full accent-amber-500 h-1.5"}),e.jsxs("div",{className:"flex justify-between text-[9px] text-gray-700 mt-0.5",children:[e.jsx("span",{children:"Lenta"}),e.jsx("span",{children:"Normal"}),e.jsx("span",{children:"Rápida"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("label",{className:"text-[10px] text-gray-500",children:"Tom de voz"}),e.jsx("span",{className:"text-[10px] text-amber-400 font-mono",children:v.pitch.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.5",max:"1.8",step:"0.05",value:v.pitch,onChange:p=>Me({pitch:parseFloat(p.target.value)}),className:"w-full accent-amber-500 h-1.5"}),e.jsxs("div",{className:"flex justify-between text-[9px] text-gray-700 mt-0.5",children:[e.jsx("span",{children:"Grave"}),e.jsx("span",{children:"Natural"}),e.jsx("span",{children:"Agudo"})]})]}),e.jsx("button",{onClick:()=>{ua();const p=new SpeechSynthesisUtterance("Olá! Sou a Jasmim, sua assistente jurídica. Como posso ajudar?");p.lang=v.lang,p.rate=v.rate,p.pitch=v.pitch;const W=ne.find(le=>le.name===v.voiceName);W&&(p.voice=W),window.speechSynthesis?.speak(p)},className:"w-full py-1.5 text-[11px] bg-amber-900/30 border border-amber-700/40 text-amber-400 rounded-lg hover:bg-amber-900/50 transition-colors",children:"▶ Testar voz agora"})]}),C&&e.jsxs("div",{className:"border-b border-gray-700/40 bg-[#1c2714] p-3 space-y-3 shrink-0",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Nível de Esforço"}),e.jsxs("span",{className:`text-[11px] font-semibold ${Xt.color}`,children:[f," — ",Xt.label]})]}),e.jsx("input",{type:"range",min:1,max:5,value:f,onChange:p=>g(Number(p.target.value)),className:"w-full accent-amber-500 h-1.5"}),e.jsxs("div",{className:"flex justify-between text-[9px] text-gray-600 mt-0.5 px-0.5",children:[e.jsx("span",{children:"Rápido"}),e.jsx("span",{children:"Básico"}),e.jsx("span",{children:"Detalhado"}),e.jsx("span",{children:"Profundo"}),e.jsx("span",{children:"Exaustivo"})]}),e.jsx("p",{className:"text-[10px] text-gray-600 mt-1",children:Xt.desc})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1.5",children:"Extensão da Resposta"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>B("curta"),className:`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border text-[11px] font-medium transition-all ${S==="curta"?"bg-blue-700/30 border-blue-600/50 text-blue-300":"border-gray-700/30 text-gray-600 hover:text-gray-400"}`,children:[e.jsx(po,{size:12})," Concisa"]}),e.jsxs("button",{onClick:()=>B("longa"),className:`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg border text-[11px] font-medium transition-all ${S==="longa"?"bg-amber-700/30 border-amber-600/50 text-amber-300":"border-gray-700/30 text-gray-600 hover:text-gray-400"}`,children:[e.jsx(uo,{size:12})," Completa"]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:"Chave de API"}),e.jsx("span",{className:"text-[10px] text-amber-400",children:_e?`${st||"Custom"} (chave própria)`:"Demo gratuito"})]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("input",{type:h?"text":"password",value:r,onChange:p=>{n(p.target.value.trim()),M(null)},placeholder:"gsk_..., sk-..., AIza..., pplx-..., xai-...",className:"flex-1 h-8 px-2 text-[11px] font-mono bg-[#141c0d] border border-gray-700/50 rounded-lg text-gray-200 outline-none focus:border-amber-600/60"}),e.jsx("button",{onClick:()=>m(p=>!p),className:"w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/5 text-gray-500",children:h?e.jsx(_o,{size:13}):e.jsx(Ws,{size:13})})]}),r&&e.jsxs("div",{className:"flex gap-1 mt-1",children:[e.jsx("input",{value:c,onChange:p=>l(p.target.value.trim()),placeholder:"URL customizada (opcional)",className:"flex-1 h-7 px-2 text-[10px] font-mono bg-[#141c0d] border border-gray-700/40 rounded text-gray-400 outline-none"}),e.jsx("input",{value:u,onChange:p=>d(p.target.value.trim()),placeholder:"Modelo (opcional)",className:"w-36 h-7 px-2 text-[10px] font-mono bg-[#141c0d] border border-gray-700/40 rounded text-gray-400 outline-none"})]}),r&&e.jsxs("div",{className:"flex gap-1 mt-1 items-center",children:[e.jsx("input",{value:P,onChange:p=>O(p.target.value),placeholder:st||"Nome para salvar",className:"flex-1 h-7 px-2 text-[11px] bg-[#141c0d] border border-gray-700/40 rounded text-gray-300 outline-none"}),e.jsxs("button",{onClick:zt,disabled:R,className:"flex items-center gap-1 px-2 h-7 text-[11px] bg-blue-700/30 border border-blue-600/40 text-blue-300 rounded hover:bg-blue-700/50 disabled:opacity-50 shrink-0",children:[R?e.jsx(De,{size:11,className:"animate-spin"}):e.jsx(Sa,{size:11})," Testar"]}),e.jsxs("button",{onClick:Mt,className:"flex items-center gap-1 px-2 h-7 text-[11px] bg-amber-700/30 border border-amber-600/40 text-amber-400 rounded hover:bg-amber-700/50 shrink-0",children:[e.jsx(ma,{size:11})," Salvar"]}),e.jsxs("button",{onClick:()=>{n(""),l(""),d("")},className:"flex items-center gap-1 px-2 h-7 text-[11px] text-red-400 border border-red-700/30 rounded hover:bg-red-900/20 shrink-0",children:[e.jsx(je,{size:11})," Remover"]})]}),V&&e.jsx("p",{className:`text-[10px] px-2 py-1 rounded mt-1 ${V.ok?"text-green-400 bg-green-900/20":"text-red-400 bg-red-900/20"}`,children:V.msg}),!r&&e.jsx("p",{className:"text-[10px] text-gray-600 mt-1",children:"💡 Sem chave: usa IA do servidor (Demo). Com Groq (gsk_...) ou OpenAI (sk-...): ativa transcrição de áudio."})]})]}),_&&e.jsxs("div",{className:"border-b border-gray-700/40 bg-[#1c2714] p-3 space-y-1.5 shrink-0 max-h-44 overflow-y-auto",children:[e.jsxs("span",{className:"text-[10px] font-bold text-gray-500 uppercase tracking-widest",children:["Chaves Salvas (",H.length,")"]}),H.length===0?e.jsx("p",{className:"text-[11px] text-gray-600 py-2 text-center",children:"Nenhuma chave salva."}):H.map(p=>e.jsxs("div",{className:`flex items-center gap-2 p-2 rounded-lg border text-[11px] ${p.key===r?"bg-amber-900/20 border-amber-700/40":"bg-[#141c0d] border-gray-700/30"}`,children:[e.jsxs("button",{onClick:()=>va(p),className:"flex-1 text-left min-w-0",children:[e.jsx("div",{className:"font-medium text-gray-200 truncate",children:p.label}),e.jsxs("div",{className:"text-[10px] text-gray-500",children:[p.provider," · ",p.key.substring(0,8),"...",p.key.slice(-4)]})]}),p.key===r&&e.jsx("span",{className:"text-[9px] text-amber-400 font-bold shrink-0",children:"ATIVA"}),e.jsx("button",{onClick:()=>L(W=>W.filter(le=>le.id!==p.id)),className:"p-1 rounded hover:bg-red-900/20 text-gray-600 hover:text-red-400 shrink-0",children:e.jsx(je,{size:11})})]},p.id))]}),e.jsx("input",{ref:ze,type:"file",accept:".txt,.md,.pdf,.docx,.doc,.rtf",className:"hidden",onChange:St}),e.jsx("input",{ref:dt,type:"file",accept:"audio/*,.mp3,.mp4,.wav,.m4a,.ogg,.webm,.flac",className:"hidden",onChange:ja}),e.jsx("div",{className:"flex border-b border-gray-700/40 bg-[#1c2714] shrink-0",children:[{id:"processar",label:"Processar",icon:ea},{id:"ementas",label:`Ementas${fe.length?` (${fe.length})`:""}`,icon:mo},{id:"historico",label:`Histórico${Fe.length?` (${Fe.length})`:""}`,icon:zs},{id:"acoes",label:`Ações${Pe.length?` (${Pe.length})`:""}`,icon:Lt}].map(({id:p,label:W,icon:le})=>e.jsxs("button",{onClick:()=>o(p),className:`flex items-center gap-1 px-3 py-2 text-[11px] font-medium border-b-2 transition-colors ${s===p?"border-amber-500 text-amber-400":"border-transparent text-gray-600 hover:text-gray-400"}`,children:[e.jsx(le,{size:11}),e.jsx("span",{className:"truncate max-w-[80px]",children:W})]},p))}),e.jsxs("div",{className:"flex-1 overflow-y-auto",children:[s==="processar"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-2 px-3 py-1.5 border-b border-gray-700/20 bg-[#1a2411]",children:[e.jsxs("span",{className:`text-[10px] font-semibold ${Xt.color}`,children:[e.jsx(ns,{size:10,className:"inline mr-0.5"}),Xt.label]}),e.jsx("div",{className:"flex-1",children:e.jsx("input",{type:"range",min:1,max:5,value:f,onChange:p=>g(Number(p.target.value)),className:"w-full accent-amber-500 h-1"})}),e.jsxs("button",{onClick:()=>B(p=>p==="curta"?"longa":"curta"),className:`text-[10px] px-2 py-0.5 rounded-full border transition-colors shrink-0 ${S==="curta"?"bg-blue-900/20 border-blue-700/40 text-blue-400":"bg-amber-900/20 border-amber-700/40 text-amber-400"}`,title:S==="curta"?"Resposta concisa — clique para completa":"Resposta completa — clique para concisa",children:[S==="curta"?e.jsx(po,{size:10,className:"inline mr-0.5"}):e.jsx(uo,{size:10,className:"inline mr-0.5"}),S==="curta"?"Concisa":"Completa"]}),ve.size>0&&e.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 bg-green-900/30 text-green-400 border border-green-700/30 rounded-full shrink-0",children:[ve.size," ementa",ve.size>1?"s":""]})]}),e.jsxs("div",{className:"p-3 border-b border-gray-700/30",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("span",{className:"text-[11px] text-gray-500 font-medium",children:"Texto do processo:"}),e.jsxs("div",{className:"flex gap-1 flex-wrap justify-end",children:[e.jsxs("button",{onClick:()=>ze.current?.click(),disabled:Be,className:"flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] border border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40 disabled:opacity-40",children:[Be?e.jsx(De,{size:11,className:"animate-spin"}):e.jsx(os,{size:11}),Be?"Extraindo...":"PDF/DOCX"]}),e.jsxs("button",{onClick:()=>dt.current?.click(),disabled:Be,className:"flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] border border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40 disabled:opacity-40",children:[Be?e.jsx(De,{size:11,className:"animate-spin"}):e.jsx(qr,{size:11}),"Áudio"]}),e.jsx("button",{onClick:Yt,className:`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] transition-all ${ye?"bg-red-600 text-white animate-pulse":"border border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40"}`,children:ye?e.jsxs(e.Fragment,{children:[e.jsx($o,{size:11})," Parar"]}):e.jsxs(e.Fragment,{children:[e.jsx(_a,{size:11})," Ditar"]})}),e.jsx("button",{onClick:()=>se(""),disabled:!Q,className:"px-2 py-1 rounded-lg text-[11px] border border-gray-700/40 text-gray-600 hover:text-red-400 disabled:opacity-30",children:e.jsx(mt,{size:11})})]})]}),e.jsx("textarea",{value:Q,onChange:p=>se(p.target.value),placeholder:"Cole o texto, importe PDF/DOCX/TXT, ou use áudio/voz...",className:"w-full h-28 resize-none bg-[#1c2714] border border-gray-700/40 rounded-xl px-3 py-2.5 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-amber-600/40 leading-relaxed"})]}),e.jsxs("div",{className:"border-b border-gray-700/30",children:[e.jsxs("button",{onClick:()=>te(p=>!p),className:"w-full flex items-center justify-between px-3 py-2 text-[11px] text-gray-500 hover:text-amber-400 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Xa,{size:12,className:"text-amber-600"}),e.jsx("span",{className:"font-medium",children:"Jurisprudência manual (opcional)"}),J&&e.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 bg-amber-900/30 text-amber-500 rounded-full border border-amber-700/30",children:[J.split(`
`).filter(p=>p.trim()).length,"L"]}),ve.size>0&&e.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 bg-green-900/30 text-green-500 rounded-full border border-green-700/30",children:[ve.size," ementa",ve.size>1?"s":""," selecionada",ve.size>1?"s":""]})]}),re?e.jsx(Io,{size:13}):e.jsx(fa,{size:13})]}),re&&e.jsxs("div",{className:"px-3 pb-3 space-y-1.5",children:[e.jsx("p",{className:"text-[10px] text-gray-600",children:"Cole ementas ou precedentes. A Jamile vai citá-los literalmente no documento."}),e.jsx("textarea",{value:J,onChange:p=>xe(p.target.value),placeholder:"Cole as ementas ou precedentes aqui...",className:"w-full h-24 resize-none bg-[#1c2714] border border-amber-800/30 rounded-xl px-3 py-2 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-amber-600/40 leading-relaxed"}),J&&e.jsxs("button",{onClick:()=>xe(""),className:"text-[10px] text-gray-600 hover:text-red-400 flex items-center gap-1",children:[e.jsx(mt,{size:10})," Limpar"]})]})]}),e.jsxs("div",{className:"px-3 pt-3 pb-2",children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-widest mb-2",children:"Modos:"}),e.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:Eo.map(p=>e.jsxs("button",{onClick:()=>$t(p.id),disabled:E,className:`flex items-center justify-center py-2.5 px-2 rounded-xl border text-[11px] font-medium transition-all active:scale-95 disabled:opacity-40 ${p.color}`,children:[E&&k===p.id?e.jsx(De,{size:12,className:"animate-spin mr-1"}):null,p.label]},p.id))})]}),e.jsxs("div",{className:"px-3 pb-2",children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-widest mb-2",children:"Ações:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:So.map(p=>e.jsxs("button",{onClick:()=>$t(p.id),disabled:E,className:`py-2 px-3 rounded-xl border text-[11px] font-medium transition-all active:scale-95 disabled:opacity-40 ${k===p.id&&(E||X)?"bg-amber-800/30 border-amber-600/50 text-amber-300":"bg-[#1c2714] border-gray-700/40 text-gray-400 hover:border-amber-700/40 hover:text-amber-400"}`,children:[E&&k===p.id?e.jsx(De,{size:11,className:"animate-spin inline mr-1"}):null,p.label]},p.id))})]}),Pe.length>0&&e.jsxs("div",{className:"px-3 pb-3",children:[e.jsx("p",{className:"text-[10px] text-gray-600 uppercase tracking-widest mb-2",children:"Ações Personalizadas:"}),e.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:Pe.map(p=>e.jsxs("button",{onClick:()=>$t("custom",p.prompt),disabled:E,className:`py-2 px-3 rounded-xl border text-[11px] font-medium transition-all active:scale-95 disabled:opacity-40 ${k==="custom_custom"&&(E||X)?"bg-purple-800/30 border-purple-600/50 text-purple-300":"bg-[#252f1a] border-purple-700/30 text-purple-400 hover:border-purple-600/50 hover:text-purple-300"}`,title:p.descricao,children:[e.jsx(Lt,{size:11,className:"inline mr-1"}),p.label]},p.id))})]}),(E||K)&&e.jsx("div",{className:"px-3 pb-2",children:e.jsxs("button",{onClick:Et,className:"w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-red-900/20 border border-red-700/30 text-red-400 text-[11px] hover:bg-red-900/30 transition-colors",children:[e.jsx(Qa,{size:13})," Parar"]})}),Nt&&e.jsxs("div",{className:"px-3 pb-4",ref:Re,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[10px] text-gray-500 uppercase tracking-widest",children:"Resultado"}),ce&&e.jsx("span",{className:"text-[9px] px-1.5 py-0.5 bg-amber-900/20 border border-amber-700/30 text-amber-500 rounded-full",children:"Demo"}),E&&e.jsx(De,{size:11,className:"animate-spin text-amber-500"})]}),e.jsxs("div",{className:"flex gap-1",children:[e.jsxs("button",{onClick:ra,className:`flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] border ${$e?"border-green-600/40 text-green-400 bg-green-900/20":"border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40"}`,children:[$e?e.jsx(Sa,{size:11}):e.jsx(aa,{size:11})," ",$e?"Copiado!":"Copiar"]}),e.jsxs("button",{onClick:sa,className:"flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] border border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40",children:[e.jsx(jt,{size:11})," TXT"]}),e.jsxs("button",{onClick:oa,className:"flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] border border-gray-700/40 text-gray-500 hover:text-amber-400 hover:border-amber-700/40",children:[e.jsx(jt,{size:11})," RTF"]})]})]}),e.jsx("div",{className:"bg-[#1c2714] border border-gray-700/30 rounded-xl p-4 overflow-x-auto",children:e.jsx(_i,{text:Nt})}),e.jsxs("div",{className:"mt-3",children:[e.jsxs("button",{onClick:()=>Le(p=>!p),disabled:!X,className:"flex items-center gap-2 text-[11px] text-gray-500 hover:text-amber-400 transition-colors disabled:opacity-30",children:[e.jsx(es,{size:13}),de?"Fechar":"Refinar com Jamile",ue.length>0&&e.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 bg-amber-900/30 text-amber-500 rounded-full",children:[Math.floor(ue.length/2)," ajuste",ue.length!==2?"s":""]})]}),de&&e.jsxs("div",{className:"mt-2 space-y-2",children:[ue.length>0&&e.jsxs("div",{className:"space-y-2 max-h-56 overflow-y-auto",children:[ue.map((p,W)=>e.jsxs("div",{className:`rounded-xl px-3 py-2 text-[12px] leading-relaxed ${p.role==="user"?"bg-amber-900/20 border border-amber-800/30 text-amber-200 ml-4":"bg-[#1c2714] border border-gray-700/30 text-gray-300 mr-4"}`,children:[e.jsx("div",{className:"text-[10px] font-bold mb-1 opacity-60",children:p.role==="user"?"Você":"Jamile"}),p.content.length>300?e.jsxs("details",{children:[e.jsx("summary",{className:"cursor-pointer text-amber-400 text-[11px]",children:"Ver resposta..."}),e.jsx("div",{className:"mt-2 whitespace-pre-wrap",children:p.content})]}):e.jsx("div",{className:"whitespace-pre-wrap",children:p.content})]},W)),K&&e.jsxs("div",{className:"bg-[#1c2714] border border-gray-700/30 rounded-xl px-3 py-2 flex items-center gap-2 mr-4",children:[e.jsx(De,{size:12,className:"animate-spin text-amber-500"}),e.jsx("span",{className:"text-[11px] text-gray-500",children:"Jamile está respondendo..."})]}),e.jsx("div",{ref:Ie})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("textarea",{value:ae,onChange:p=>ie(p.target.value),onKeyDown:p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),Bt())},placeholder:"Ex: Adicione mais fundamentação... / Inclua tutela de urgência... / Reformule o início...",rows:2,className:"flex-1 resize-none bg-[#1c2714] border border-amber-800/30 rounded-xl px-3 py-2 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-amber-600/50 leading-relaxed"}),e.jsx("button",{onClick:Bt,disabled:!ae.trim()||K,className:"self-end px-3 py-2 bg-amber-700/40 border border-amber-600/40 text-amber-300 rounded-xl hover:bg-amber-700/60 disabled:opacity-30 transition-colors",children:K?e.jsx(De,{size:16,className:"animate-spin"}):e.jsx(is,{size:16})})]})]})]})]}),e.jsx("div",{className:"h-6"})]}),s==="ementas"&&e.jsxs("div",{className:"p-3 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-sm font-semibold text-amber-400 flex items-center gap-2",children:[e.jsx(mo,{size:15})," Biblioteca de Ementas"]}),e.jsx("p",{className:"text-[10px] text-gray-600 mt-0.5",children:"Salve jurisprudência para incluir automaticamente nos documentos."})]}),e.jsxs("button",{onClick:Kt,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-700/30 border border-amber-600/40 text-amber-400 text-[12px] hover:bg-amber-700/50 transition-colors",children:[e.jsx(Ft,{size:13})," Nova Ementa"]})]}),pt&&e.jsxs("div",{className:"bg-[#1c2714] border border-amber-700/30 rounded-xl p-3 space-y-2",children:[e.jsx("h3",{className:"text-[12px] font-semibold text-amber-400",children:ke?"Editar Ementa":"Nova Ementa"}),e.jsx("input",{value:Ve,onChange:p=>ot(p.target.value),placeholder:"Título (ex: STJ — Responsabilidade civil médica)",className:"w-full h-8 px-2 text-[12px] bg-[#141c0d] border border-gray-700/40 rounded-lg text-gray-200 outline-none focus:border-amber-600/50"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{value:it,onChange:p=>et(p.target.value),placeholder:"Categoria (ex: STJ, STF, TRF1...)",list:"cats-datalist",className:"flex-1 h-8 px-2 text-[12px] bg-[#141c0d] border border-gray-700/40 rounded-lg text-gray-200 outline-none focus:border-amber-600/50"}),e.jsx("datalist",{id:"cats-datalist",children:Di.map(p=>e.jsx("option",{value:p},p))})]}),e.jsx("textarea",{value:lt,onChange:p=>yt(p.target.value),placeholder:"Cole a ementa completa aqui...",rows:5,className:"w-full resize-none bg-[#141c0d] border border-gray-700/40 rounded-lg px-3 py-2 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-amber-600/50 leading-relaxed"}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>{Qe(!1),Ue(null)},className:"px-3 py-1.5 text-[12px] border border-gray-700/40 text-gray-500 rounded-lg hover:text-gray-300",children:"Cancelar"}),e.jsxs("button",{onClick:Wt,disabled:!Ve.trim()||!lt.trim(),className:"px-3 py-1.5 text-[12px] bg-amber-700/40 border border-amber-600/50 text-amber-300 rounded-lg hover:bg-amber-700/60 disabled:opacity-40",children:[e.jsx(ma,{size:12,className:"inline mr-1"})," Salvar"]})]})]}),fe.length>0&&e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx(ha,{size:12,className:"absolute left-2.5 top-2 text-gray-600"}),e.jsx("input",{value:Ke,onChange:p=>xt(p.target.value),placeholder:"Buscar ementas...",className:"w-full h-7 pl-7 pr-2 text-[11px] bg-[#1c2714] border border-gray-700/40 rounded-lg text-gray-300 outline-none focus:border-amber-600/40"})]}),rt.length>0&&e.jsxs("select",{value:Ye||"",onChange:p=>Se(p.target.value||null),className:"h-7 px-2 text-[11px] bg-[#1c2714] border border-gray-700/40 rounded-lg text-gray-400 outline-none",children:[e.jsx("option",{value:"",children:"Todos"}),rt.map(p=>e.jsx("option",{value:p,children:p},p))]})]}),$a.length===0?e.jsx("div",{className:"text-center py-8 text-gray-600 text-[12px]",children:fe.length===0?'Nenhuma ementa salva. Clique em "Nova Ementa" para começar.':"Nenhum resultado para a busca."}):$a.map(p=>e.jsx("div",{className:`rounded-xl border p-3 space-y-2 transition-all ${ve.has(p.id)?"border-green-600/50 bg-green-900/10":"border-gray-700/40 bg-[#1c2714]"}`,children:e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("button",{onClick:()=>na(p.id),className:`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${ve.has(p.id)?"bg-green-600 border-green-500":"border-gray-600 hover:border-green-500"}`,children:ve.has(p.id)&&e.jsx(Sa,{size:10,className:"text-white"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[e.jsx("span",{className:"text-[12px] font-semibold text-gray-200 truncate",children:p.titulo}),p.categoria&&e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 bg-blue-900/30 text-blue-400 border border-blue-700/30 rounded-full shrink-0",children:p.categoria})]}),e.jsx("p",{className:"text-[11px] text-gray-500 mt-0.5 line-clamp-2",children:p.texto})]}),e.jsxs("div",{className:"flex gap-1 shrink-0",children:[e.jsx("button",{onClick:()=>Ut(p),className:"p-1 rounded hover:bg-white/5 text-gray-600 hover:text-amber-400",children:e.jsx(xo,{size:12})}),e.jsx("button",{onClick:()=>Jt(p.id),className:"p-1 rounded hover:bg-red-900/20 text-gray-600 hover:text-red-400",children:e.jsx(mt,{size:12})})]})]})},p.id)),ve.size>0&&e.jsx("div",{className:"sticky bottom-0 bg-[#141c0d] border-t border-green-700/30 p-3",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-[11px] text-green-400",children:[ve.size," ementa",ve.size>1?"s":""," selecionada",ve.size>1?"s":""," — serão incluídas no próximo processamento"]}),e.jsxs("button",{onClick:()=>Ee(new Set),className:"text-[11px] text-gray-500 hover:text-red-400 flex items-center gap-1",children:[e.jsx(je,{size:11})," Limpar"]})]})})]}),s==="historico"&&e.jsxs("div",{className:"p-3 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-sm font-semibold text-amber-400 flex items-center gap-2",children:[e.jsx(zs,{size:15})," Histórico"]}),Fe.length>0&&e.jsxs("button",{onClick:()=>We([]),className:"text-[11px] text-gray-600 hover:text-red-400 flex items-center gap-1",children:[e.jsx(mt,{size:12})," Limpar"]})]}),Fe.length===0?e.jsx("div",{className:"text-center py-8 text-gray-600 text-[12px]",children:"Nenhum documento gerado ainda."}):Fe.map(p=>e.jsxs("div",{className:"bg-[#1c2714] border border-gray-700/40 rounded-xl p-3 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[11px] font-semibold text-amber-400",children:p.acao}),e.jsx("span",{className:"text-[10px] text-gray-600",children:p.timestamp})]}),e.jsxs("p",{className:"text-[11px] text-gray-500 truncate",children:[p.inputSnippet,"..."]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>{pe(p.resultado),o("processar")},className:"flex items-center gap-1 px-2 py-1 text-[11px] bg-amber-700/20 border border-amber-700/30 text-amber-400 rounded-lg hover:bg-amber-700/30",children:[e.jsx(ea,{size:11})," Restaurar"]}),e.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(p.resultado)},className:"flex items-center gap-1 px-2 py-1 text-[11px] border border-gray-700/40 text-gray-500 rounded-lg hover:text-amber-400 hover:border-amber-700/40",children:[e.jsx(aa,{size:11})," Copiar"]}),e.jsx("button",{onClick:()=>We(W=>W.filter(le=>le.id!==p.id)),className:"p-1 text-gray-600 hover:text-red-400 rounded",children:e.jsx(mt,{size:12})})]}),e.jsxs("details",{children:[e.jsx("summary",{className:"text-[10px] text-gray-600 cursor-pointer hover:text-amber-400",children:"Ver resultado..."}),e.jsxs("div",{className:"mt-2 text-[11px] text-gray-400 whitespace-pre-wrap max-h-40 overflow-y-auto leading-relaxed border-t border-gray-700/30 pt-2",children:[p.resultado.substring(0,800),p.resultado.length>800?"...":""]})]})]},p.id))]}),s==="acoes"&&e.jsxs("div",{className:"p-3 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-sm font-semibold text-amber-400 flex items-center gap-2",children:[e.jsx(Lt,{size:15})," Ações Personalizadas"]}),e.jsx("p",{className:"text-[10px] text-gray-600 mt-0.5",children:"Crie instruções personalizadas para a IA. Aparecem na aba Processar."})]}),e.jsxs("button",{onClick:ms,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-700/30 border border-purple-600/40 text-purple-400 text-[12px] hover:bg-purple-700/50 transition-colors",children:[e.jsx(Ft,{size:13})," Nova Ação"]})]}),Je&&e.jsxs("div",{className:"bg-[#1c2714] border border-purple-700/30 rounded-xl p-3 space-y-2",children:[e.jsx("h3",{className:"text-[12px] font-semibold text-purple-400",children:Dt?"Editar Ação":"Nova Ação"}),e.jsx("input",{value:tt,onChange:p=>_t(p.target.value),placeholder:"Nome da ação (ex: Petição Inicial Trabalhista)",className:"w-full h-8 px-2 text-[12px] bg-[#141c0d] border border-gray-700/40 rounded-lg text-gray-200 outline-none focus:border-purple-600/50"}),e.jsx("input",{value:Ht,onChange:p=>nt(p.target.value),placeholder:"Descrição curta (opcional)",className:"w-full h-8 px-2 text-[12px] bg-[#141c0d] border border-gray-700/40 rounded-lg text-gray-200 outline-none focus:border-purple-600/50"}),e.jsx("textarea",{value:b,onChange:p=>G(p.target.value),placeholder:"Instrução para a IA. O texto do documento será adicionado automaticamente após. Ex: Elabore uma petição inicial trabalhista com base no seguinte caso, incluindo todos os pedidos cabíveis, fundamentação legal e jurisprudência pertinente...",rows:5,className:"w-full resize-none bg-[#141c0d] border border-gray-700/40 rounded-lg px-3 py-2 text-[12px] text-gray-200 placeholder-gray-600 outline-none focus:border-purple-600/50 leading-relaxed"}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx("button",{onClick:()=>{gt(!1),ht(null)},className:"px-3 py-1.5 text-[12px] border border-gray-700/40 text-gray-500 rounded-lg hover:text-gray-300",children:"Cancelar"}),e.jsxs("button",{onClick:gs,disabled:!tt.trim()||!b.trim(),className:"px-3 py-1.5 text-[12px] bg-purple-700/40 border border-purple-600/50 text-purple-300 rounded-lg hover:bg-purple-700/60 disabled:opacity-40",children:[e.jsx(ma,{size:12,className:"inline mr-1"})," Salvar"]})]})]}),Pe.length===0&&!Je?e.jsxs("div",{className:"text-center py-8 text-gray-600 text-[12px] space-y-2",children:[e.jsx(Lt,{size:24,className:"mx-auto text-gray-700"}),e.jsx("p",{children:"Nenhuma ação personalizada."}),e.jsx("p",{className:"text-[11px]",children:"Crie ações com suas próprias instruções — petição inicial específica, contrato, parecer jurídico, etc."})]}):Pe.map(p=>e.jsxs("div",{className:"bg-[#1c2714] border border-purple-700/20 rounded-xl p-3 space-y-1.5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-[12px] font-semibold text-purple-300",children:p.label}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx("button",{onClick:()=>xs(p),className:"p-1 rounded hover:bg-white/5 text-gray-600 hover:text-amber-400",children:e.jsx(xo,{size:12})}),e.jsx("button",{onClick:()=>ut(W=>W.filter(le=>le.id!==p.id)),className:"p-1 rounded hover:bg-red-900/20 text-gray-600 hover:text-red-400",children:e.jsx(mt,{size:12})})]})]}),p.descricao&&e.jsx("p",{className:"text-[11px] text-gray-500",children:p.descricao}),e.jsxs("details",{children:[e.jsx("summary",{className:"text-[10px] text-gray-600 cursor-pointer hover:text-purple-400",children:"Ver prompt..."}),e.jsx("p",{className:"text-[11px] text-gray-400 mt-1 whitespace-pre-wrap leading-relaxed border-t border-gray-700/30 pt-2",children:p.prompt})]}),e.jsxs("button",{onClick:()=>{o("processar"),setTimeout(()=>$t("custom",p.prompt),100)},disabled:!Q.trim(),className:"flex items-center gap-1 px-2 py-1 text-[11px] bg-purple-700/20 border border-purple-700/30 text-purple-400 rounded-lg hover:bg-purple-700/30 disabled:opacity-30 disabled:cursor-not-allowed",title:Q.trim()?"":"Cole o texto na aba Processar primeiro",children:[e.jsx(ea,{size:11})," Executar agora"]})]},p.id))]})]})]})}const Ct=new Gr;function $i(){const[t,s]=a.useState(go),[o,r]=a.useState(null),[n,c]=a.useState(!1),[l,u]=a.useState(!1),[d,h]=a.useState(()=>localStorage.getItem("sk-light-mode")==="1");a.useEffect(()=>{localStorage.setItem("sk-light-mode",d?"1":"0")},[d]);const m=a.useRef(null);a.useEffect(()=>{const w=go();s(w);const f=en();if(f){const g=w.find(S=>S.id===f);g&&Object.keys(g.files).length>0&&(Ct.clear(),Ct.fromJSON(g.files),r(g))}},[]);const C=a.useCallback((w,f)=>{const g={...w,name:f||w.name,files:Ct.toJSON(),updatedAt:Date.now()};return r(g),s(S=>{const B=Ns(S,g);return la(B),B}),g},[]);a.useEffect(()=>{if(!o)return;const w=()=>C(o),f=Ct.onChange(w),g=setInterval(w,8e3);return()=>{f(),clearInterval(g)}},[o,C]);const T=a.useCallback((w,f)=>{const g=tn(f,w);Ct.clear(),Ct.fromJSON(w),r(g),Ga(g.id),s(S=>{const B=[g,...S];return la(B),B})},[]),_=a.useCallback(w=>{r(f=>{if(f){const g={...f,files:Ct.toJSON(),updatedAt:Date.now()};s(S=>{const B=Ns(S,g);return la(B),B})}return f}),Ct.clear(),Ct.fromJSON(w.files),r(w),Ga(w.id)},[]),D=a.useCallback(()=>{r(null),Ga(null),Ct.clear()},[]),P=a.useCallback(()=>m.current?.click(),[]),O=a.useCallback(async w=>{const f=w.target.files?.[0];if(f){try{const g=await Uo(f),S=Object.keys(g).length;if(S===0){alert(`Nenhum arquivo de código encontrado no ZIP.

Possíveis motivos:
• O ZIP contém apenas imagens ou arquivos binários
• Os arquivos estão em formato que não pode ser lido
• O ZIP está vazio ou corrompido`);return}T(g,f.name.replace(/\.(zip|tar\.gz|tgz|tar)$/i,"")),setTimeout(()=>{alert(`✓ ${S} arquivo(s) importado(s) com sucesso!

Node_modules, arquivos binários e pastas de build foram ignorados automaticamente para manter o projeto organizado.

Abra a Jasmim (✨) para pedir ajuda para entender ou modificar o projeto.`)},800)}catch(g){alert(`Erro ao importar: ${g.message}`)}w.target.value=""}},[T]),H=a.useCallback(w=>{s(f=>{const g=f.filter(S=>S.id!==w);return la(g),g})},[]),L=a.useCallback(w=>{const f=an(w);s(g=>{const S=[f,...g];return la(S),S})},[]),V=a.useCallback(w=>{o&&C(o,w)},[o,C]),M=e.jsx("button",{onClick:()=>h(w=>!w),style:{position:"fixed",top:8,right:8,zIndex:99999,width:26,height:26,borderRadius:"50%",background:d?"#1c2714":"#e8f5e0",border:d?"1px solid #4a7c3f":"1px solid #6ab04c",fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 1px 6px rgba(0,0,0,0.25)",opacity:.85},title:d?"Modo escuro":"Modo claro",children:d?"🌙":"☀️"}),R=d?{filter:"invert(1) hue-rotate(180deg)",minHeight:"100dvh"}:{minHeight:"100dvh"};return n?e.jsxs("div",{style:R,children:[M,e.jsx(zi,{onBack:()=>c(!1)})]}):l?e.jsxs("div",{style:R,children:[M,e.jsx(Mi,{onBack:()=>u(!1)})]}):o?e.jsxs("div",{style:R,children:[M,e.jsx(Pi,{vfs:Ct,projectName:o.name,onNewProject:D,onSaveProject:V,onOpenCampoLivre:()=>c(!0),onOpenAssistenteJuridico:()=>u(!0),onBackToProjects:()=>{if(o){const w={...o,files:Ct.toJSON(),updatedAt:Date.now()};s(f=>{const g=Ns(f,w);return la(g),g})}r(null),Ga(null)}})]}):e.jsxs("div",{style:R,children:[M,e.jsx("input",{ref:m,type:"file",accept:".zip,.tar,.tar.gz,.tgz",onChange:O,className:"hidden"}),e.jsx(jn,{projects:t,onSelect:w=>T(w.files,w.name),onOpenProject:_,onImportZip:P,onCreateFromAI:(w,f)=>T(w,f),onDeleteProject:H,onDuplicateProject:L,onOpenCampoLivre:()=>c(!0),onOpenAssistenteJuridico:()=>u(!0)})]})}dr.createRoot(document.getElementById("root")).render(e.jsx($i,{}));
