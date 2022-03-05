import Button from "./Button"
import styles from "./Example1UseStateEffect.module.css"
import { useState, useEffect } from "react"

function CreateDestroyedTest() {
  function destroyFn() {
    console.log("destroyed :(")
  }
  function effectFn() {
    console.log("created :)")
    return destroyFn
  }

  useEffect(effectFn, [])
  return <h1>Hello!</h1>
}

function Example1UseStateEffect() {
  const [counter, setCounter] = useState(0)
  const [keyword, setKeyword] = useState("")
  const [showing, setShowing] = useState(false)

  // const onClick = () => setCounter((prev) => prev + 1)
  const onClick = () => setShowing((prev) => !prev)
  const onChange = (e) => {
    setKeyword(e.target.value)
  }

  console.log("Run all the time")

  useEffect(() => {
    console.log("I run only once")
  }, [])
  useEffect(() => {
    console.log(`keyword changed.`)
  }, [keyword])
  useEffect(() => {
    console.log(`counter changed.`)
  }, [counter])
  useEffect(() => {
    console.log(`keyword or counter changed.`)
  }, [counter, keyword])

  return (
    <div>
      <h1 className={styles.title}>Welcome Back!</h1>
      <input type="text" onChange={onChange} placeholder="Search here..." />
      <Button text={showing? 'Hide': 'Show'} onClick={onClick} />
      <hr/>
      {counter}, {keyword}
      {showing? <CreateDestroyedTest /> : null}
    </div>
  );
}

export default Example1UseStateEffect;
