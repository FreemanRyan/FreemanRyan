const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
⏰ Updated on ${new Date().toUTCString()}
![Progress Bar CI](https://github.com/FreemanRyan/FreemanRyan/workflows/Progress%20Bar%20CI/badge.svg)
---

### Hi there 👋
![](https://img.shields.io/badge/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7-Typora-brightgreen)
![](https://img.shields.io/badge/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80-Python-orange)
![](https://img.shields.io/badge/%E7%BC%96%E7%A8%8B%E5%B7%A5%E5%85%B7-Sublime-blue)
[![Badge](https://img.shields.io/badge/link-996.icu-%23FF4D5B.svg?style=flat-square)](https://996.icu/#/en_US)
<!--
**FreemanRyan/FreemanRyan** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->



[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=freemanRyan&show_icons=true&&show_icons=true&theme=transparent&bg_color=00000000)](https://github.com/anuraghazra/github-readme-stats)


[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=freemanRyan&repo=freemanRyan.github.io)](https://github.com/freemanRyan/freemanryan.github.io)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=freemanRyan)](https://github.com/anuraghazra/github-readme-stats)


-  This Readme refer to  https://github.com/anuraghazra/github-readme-stats

🔭 I’m currently striving for a better life in Fujian.  
🌱 My Personal Page 👉 https://freemanryan.github.io  
💬 Ask me some questions about Effeciency Tools 👉 [https://wx.zsxq.com/dweb2/index/group/88512424255582](https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/22bf88bc987c2334fcb82c66a393652a1abdbb5f0a501512a08103c4f1755ce590a95a6cbd36ab2dff1f6e7b8dcf2dfc?pictype=scale&from=30113&version=3.3.3.3&fname=wechat.jpg&size=750/)  
📫 My E-mail: freemanryan@protonmail.com  
🔧 My Power Tools: Typora </br>
            
\
`

console.log(readme)

              

