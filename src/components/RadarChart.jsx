import React, { useEffect, useRef, useState } from 'react';
import { radarAxes, radarValues } from '../data/radarData.js';

export default function RadarChart() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 280, height: 280 });
  const [D3, setD3] = useState(null);

  useEffect(() => {
    let cancelled = false;
    import('d3').then((d3) => {
      if (!cancelled) setD3(d3);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !D3) return;

    const d3 = D3;
    const el = containerRef.current;
    const resizeObserver = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      const size = Math.min(width, 320);
      setDimensions({ width: size, height: size });
    });
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [D3]);

  useEffect(() => {
    if (!containerRef.current || !D3 || dimensions.width === 0) return;

    const d3 = D3;
    const { width, height } = dimensions;
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const radius = Math.min(innerWidth, innerHeight) / 2;

    d3.select(containerRef.current).selectAll('*').remove();

    const svg = d3
      .select(containerRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('aria-hidden', 'true')
      .attr('role', 'img')
      .attr('aria-label', 'Engineering capability radar chart');

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const scale = d3.scaleLinear().domain([0, 100]).range([0, radius]);
    const angleSlice = (Math.PI * 2) / radarAxes.length;

    radarAxes.forEach((_, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      g.append('line')
        .attr('class', 'radar-axis')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', x)
        .attr('y2', y);
    });

    [25, 50, 75, 100].forEach((level) => {
      const r = scale(level);
      const points = radarAxes.map((_, i) => {
        const angle = angleSlice * i - Math.PI / 2;
        return [r * Math.cos(angle), r * Math.sin(angle)];
      });
      points.push(points[0]);
      g.append('path')
        .attr('class', 'radar-grid')
        .attr('d', d3.line()(points))
        .attr('fill', 'none');
    });

    const dataPoints = radarAxes.map((_, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const r = scale(radarValues[i]);
      return [r * Math.cos(angle), r * Math.sin(angle)];
    });
    dataPoints.push(dataPoints[0]);
    g.append('path')
      .attr('d', d3.line()(dataPoints))
      .attr('fill', 'var(--accent)')
      .attr('fill-opacity', 0.2)
      .attr('stroke', 'var(--accent)')
      .attr('stroke-width', 2);

    radarAxes.forEach((label, i) => {
      const angle = angleSlice * i - Math.PI / 2;
      const r = radius + 14;
      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);
      g.append('text')
        .attr('class', 'radar-label')
        .attr('x', x)
        .attr('y', y)
        .attr('text-anchor', x >= 0 ? 'start' : 'end')
        .attr('font-size', '11px')
        .text(label);
    });

    return () => {
      d3.select(containerRef.current).selectAll('*').remove();
    };
  }, [D3, dimensions]);

  return (
    <div
      className="radar-chart"
      ref={containerRef}
      style={{ width: '100%', maxWidth: 320, margin: '0 auto', minHeight: dimensions.height }}
      aria-hidden="true"
    />
  );
}
