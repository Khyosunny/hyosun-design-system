# Hyosun Design System

### Storybook Design System

- Figma
- Emotion
- Rollup.js

storybook 으로 디자인 시스템 구축해보고 싶었고 겸사겸사 개인 프로젝트에서도 사용하면 좋을 것 같아서 만들게 된 프로젝트입니다.
<br />

# Installation

npm url - https://www.npmjs.com/package/hyosun-design-system

storybook url - https://master--61b5cb6e444e4b003ac37f39.chromatic.com

### npm

```tsx
npm i hyosun-design-system
```

### yarn

```tsx
yarn add hyosun-design-system
```

<br />

## Component

- Global Style : css 초기화를 해주는 컴포넌트입니다.
- Button
- Icon
- Input
- CheckBox
- Radio
- Tag
- Text

<br />

# Example Code

## 01. Global component

index.tsx

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from 'hyosun-design-system';

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

글로벌 컴포넌트를 최상위에 import 해주세요.

font-family 는 `Noto Sans KR` 로 지정되어있습니다.

## 02. Button component

```tsx
import React from 'react';
import { Button } from 'hyosun-design-system';

function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        columnGap: 20,
        justifyContent: 'center',
      }}
    >
      <Button label="버튼" size="xl" />
      <Button label="버튼" size="lg" />
      <Button label="버튼" size="md" />
      <Button label="버튼" size="sm" />
      <Button label="버튼" size="xs" />
    </div>
  );
}

export default App;
```

button component 의 예시입니다.
import 하면 아래처럼 버튼을 사용할 수 있습니다.

![image](https://user-images.githubusercontent.com/71235165/148691500-de31499a-2b19-416b-9495-99b77f0c717c.png)
