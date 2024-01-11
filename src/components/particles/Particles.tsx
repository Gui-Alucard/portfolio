'use client'

import {
  type Container,
  type Engine,
  type ISourceOptions,
} from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { loadFull } from 'tsparticles'
import ParticlesConfig from './particlesConfig'

const ParticlesComponent = ({ children }: { children: ReactNode }) => {
  const [init, setInit] = useState<boolean>(false)

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(
    async (container?: Container | undefined): Promise<void> => {
      console.log(container)
    },
    [],
  )

  const options: ISourceOptions = useMemo(() => {
    return ParticlesConfig
  }, [])

  return (
    <>
      {init ? (
        <div className="max-h-screen overflow-y-scroll">
          <Particles particlesLoaded={particlesLoaded} options={options} />
          {children}
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  )
}

export default ParticlesComponent
