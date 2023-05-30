const Face = ({img,rotateY,i,Width})=>{
	return(
		<div 
			className="face"
			style={{
			transform:`rotateY(${rotateY * i}rad)
			translateZ(${Width / 2 / Math.tan(rotateY / 2)}px)`}}>
			<img src={img} alt=""/>
		</div>
		)


}
export default Face;