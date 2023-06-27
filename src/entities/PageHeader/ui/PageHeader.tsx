type PageHeaderProps = {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {
  return (
    <h1 className="mb-4">{title}</h1>
  )
}

export default PageHeader;