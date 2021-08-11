import Image from "next/image";

function SmallCard({img, location, distance}) {
  return(
  	<div>
  	  {/* Left */}
  	  	<div className="relative h-16 w-16">
  	  	  <Image src={img} layout="fill" className="rounded-lg"/>
  	  	</div>
  	  {/* Right */}

  	</div>
  )
}

export default SmallCard;