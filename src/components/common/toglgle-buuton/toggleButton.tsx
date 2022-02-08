const ToggleButton = ({
  isLimitAmount = false,
  toggleHandler,
  width = 29,
  height = 16,
  border = 2,
  radius = 10,
  contentPaddingX = 1,
  borderColorOn = '68C3A8',
  borderColorOff = '9E9E9E',
  bgColorOn = '68C3A8',
  bgColorOff = '9E9E9E',
  widthChild = height - border * 2 - contentPaddingX * 2,
  duration = 0.5,
}: {
  isLimitAmount?: boolean
  toggleHandler?: any
  width?: number
  height?: number
  border?: number
  radius?: number
  contentPaddingX?: number
  borderColorOn?: string
  borderColorOff?: string
  bgColorOn?: string
  bgColorOff?: string
  widthChild?: number
  duration?: number
}) => {
  return (
    <div
      id="toggle-button-parent"
      onClick={toggleHandler}
      className={`border-solid flex items-center cursor-pointer`}
    >
      <div id="toggle-button-child" className=" rounded-[999px] z-10"></div>
      <style jsx>{`
        #toggle-button-parent {
          border-color: ;
          border-radius: ${radius}px;
          width: ${width}px;
          height: ${height}px;
          padding: ${contentPaddingX}px;
          border: ${border}px solid #${isLimitAmount ? borderColorOn : borderColorOff};
        }
        #toggle-button-child {
          transition-duration: ${duration}s;
          background-color: #${isLimitAmount ? bgColorOn : bgColorOff};
          margin-left: ${isLimitAmount
            ? width - border * 2 - widthChild - contentPaddingX * 2
            : 0}px;
          width: ${widthChild}px;
          height: ${height - border * 2 - contentPaddingX * 2}px;
        }
      `}</style>
    </div>
  )
}
export default ToggleButton
