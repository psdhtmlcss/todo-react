type ContainerProp = {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProp> = ({children}) => {
  return (
    <div className="container pt-4">{children}</div>
  )
}

export default Container;