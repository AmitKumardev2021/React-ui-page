import React from 'react'


const AboutCard = (props) => {
  return (
    <div className="flex flex-col border text-left rounded-2xl py-12 px-8">
              <div>
                <div className="bg-primary-blue inline-flex p-2 rounded-full my-2 items-start">
                  {
                    props.icon
                  }
                </div>
                <h3 className="font-extra-bold  py-4">
                  {props.heading}
                </h3>
                <p>
                  {props.text}
                </p>
              </div>
            </div>
  )
}

export default AboutCard